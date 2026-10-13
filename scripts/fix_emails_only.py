#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script rapide : charge le CSV existant et récupère les emails manquants
"""

import sys
import io
if sys.platform == 'win32':
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', line_buffering=True)
    sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8', line_buffering=True)

import requests
from bs4 import BeautifulSoup
from fake_useragent import UserAgent
import csv
import re
import time
from urllib.parse import urljoin

# Configuration
INPUT_FILE = "scripts/agences_immobilieres_tunisie.csv"
OUTPUT_FILE = "scripts/agences_immobilieres_tunisie.csv"
DELAY = 1  # secondes
TIMEOUT = 10

ua = UserAgent()
EMAIL_REGEX = re.compile(r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}')

def get_page(url, timeout=TIMEOUT):
    try:
        headers = {'User-Agent': ua.random}
        response = requests.get(url, headers=headers, timeout=timeout)
        response.raise_for_status()
        return response.text
    except Exception as e:
        return None

def extract_email_from_html(html):
    if not html:
        return None

    soup = BeautifulSoup(html, 'lxml')
    mailto_links = soup.find_all('a', href=re.compile(r'^mailto:', re.I))
    for link in mailto_links:
        email = link.get('href', '').replace('mailto:', '').split('?')[0].strip()
        if EMAIL_REGEX.match(email):
            return email.lower()

    emails = EMAIL_REGEX.findall(html)
    if emails:
        for email in emails:
            email_lower = email.lower()
            if not any(ext in email_lower for ext in ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.css', '.js']):
                return email_lower

    return None

def find_email_on_website(site_url):
    if not site_url or site_url == "non disponible":
        return None

    if not site_url.startswith('http'):
        site_url = 'http://' + site_url

    # Page d'accueil
    html = get_page(site_url)
    email = extract_email_from_html(html)
    if email:
        return email

    # Pages contact
    for page in ['/contact', '/nous-contacter', '/contactez-nous', '/a-propos', '/about']:
        url = urljoin(site_url, page)
        html = get_page(url)
        email = extract_email_from_html(html)
        if email:
            return email
        time.sleep(0.5)

    return None

# Charger le CSV
print("📂 Chargement du CSV existant...")
agences = []
with open(INPUT_FILE, 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    agences = list(reader)

print(f"✅ {len(agences)} agences chargées")

# Compter celles sans email
sans_email = [a for a in agences if a['email'] == 'non trouvé']
print(f"📧 {len(sans_email)} agences sans email à traiter\n")

# Rechercher les emails
emails_trouves = 0
for i, agence in enumerate(sans_email, 1):
    print(f"[{i}/{len(sans_email)}] {agence['nom']}")

    email = find_email_on_website(agence['site_web'])

    if email:
        agence['email'] = email
        emails_trouves += 1
        print(f"  ✅ {email}")
    else:
        print(f"  ❌ Aucun email trouvé")

    if i < len(sans_email):
        time.sleep(DELAY)

# Sauvegarder
print(f"\n💾 Sauvegarde du CSV...")
with open(OUTPUT_FILE, 'w', newline='', encoding='utf-8') as f:
    fieldnames = ['nom', 'ville', 'telephone', 'email', 'site_web', 'url_fiche']
    writer = csv.DictWriter(f, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(agences)

print(f"✅ Fichier sauvegardé : {OUTPUT_FILE}")
print(f"\n📊 {emails_trouves} nouveaux emails trouvés")
print(f"📧 Total emails : {len([a for a in agences if a['email'] != 'non trouvé'])}/{len(agences)}")
