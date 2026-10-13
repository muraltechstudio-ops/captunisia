#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Scraper d'agences immobilières tunisiennes
Source : goafricaonline.com
Extrait : nom, ville, téléphone, email, site web
Export : CSV
"""

import sys
import io

# Forcer l'encodage UTF-8 pour Windows sans buffering
if sys.platform == 'win32':
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', line_buffering=True)
    sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8', line_buffering=True)

import requests
from bs4 import BeautifulSoup
from fake_useragent import UserAgent
import csv
import re
import time
from urllib.parse import urljoin, urlparse
import sys

# Configuration
BASE_URL = "https://www.goafricaonline.com/tn/annuaire/agences-immobilieres"
TOTAL_PAGES = 18
OUTPUT_FILE = "scripts/agences_immobilieres_tunisie.csv"
DELAY_BETWEEN_PAGES = 2  # secondes
DELAY_BETWEEN_SITES = 1  # secondes
TIMEOUT = 10  # secondes

# User agent aléatoire
ua = UserAgent()

# Regex pour email
EMAIL_REGEX = re.compile(r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}')

# Liste des agences
agences = []

def get_page(url, timeout=TIMEOUT):
    """Récupère le contenu d'une page avec gestion d'erreurs"""
    try:
        headers = {'User-Agent': ua.random}
        response = requests.get(url, headers=headers, timeout=timeout)
        response.raise_for_status()
        return response.text
    except Exception as e:
        print(f"  ⚠️  Erreur lors de la récupération de {url}: {str(e)}")
        return None

def extract_email_from_html(html):
    """Extrait le premier email trouvé dans le HTML"""
    if not html:
        return None

    # Chercher dans les liens mailto
    soup = BeautifulSoup(html, 'lxml')
    mailto_links = soup.find_all('a', href=re.compile(r'^mailto:', re.I))
    for link in mailto_links:
        email = link.get('href', '').replace('mailto:', '').split('?')[0].strip()
        if EMAIL_REGEX.match(email):
            return email.lower()

    # Chercher dans tout le texte
    emails = EMAIL_REGEX.findall(html)
    if emails:
        # Filtrer les faux emails (images, etc.)
        for email in emails:
            email_lower = email.lower()
            if not any(ext in email_lower for ext in ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.css', '.js']):
                return email_lower

    return None

def get_website_from_fiche(fiche_url):
    """Récupère le site web depuis la fiche de l'agence"""
    if not fiche_url or fiche_url == "non disponible":
        return None

    html = get_page(fiche_url)
    if not html:
        return None

    soup = BeautifulSoup(html, 'lxml')

    # Chercher le lien du site web : <a href="..." class="btn btn-outline-primary ...">Site web</a>
    site_link = soup.find('a', class_='btn-outline-primary', string=re.compile('Site', re.I))
    if site_link:
        site_url = site_link.get('href', '')
        if site_url and site_url != '#' and 'http' in site_url:
            return site_url

    # Alternative : chercher un lien simple vers un site externe
    for link in soup.find_all('a', href=True):
        href = link.get('href', '')
        if href and 'http' in href and 'goafricaonline.com' not in href:
            # Vérifier que c'est un vrai site web (pas un tel:, mailto:, etc.)
            if not any(x in href for x in ['tel:', 'mailto:', 'facebook.com', 'twitter.com', 'instagram.com']):
                return href

    return None

def find_email_on_website(site_url):
    """Visite un site web et essaie de trouver un email"""
    if not site_url or site_url == "non disponible":
        return None

    # Normaliser l'URL
    if not site_url.startswith('http'):
        site_url = 'http://' + site_url

    print(f"  🔍 Recherche email sur {site_url}...")

    # Essayer la page d'accueil
    html = get_page(site_url)
    email = extract_email_from_html(html)
    if email:
        print(f"  ✅ Email trouvé : {email}")
        return email

    # Essayer les pages contact
    contact_pages = ['/contact', '/nous-contacter', '/contactez-nous', '/a-propos', '/about']
    for page in contact_pages:
        url = urljoin(site_url, page)
        html = get_page(url)
        email = extract_email_from_html(html)
        if email:
            print(f"  ✅ Email trouvé sur {page} : {email}")
            return email
        time.sleep(0.5)  # Petit délai entre les pages du même site

    print(f"  ❌ Aucun email trouvé sur {site_url}")
    return None

def scrape_listing_page(page_num):
    """Scrape une page de listing d'agences"""
    url = f"{BASE_URL}?page={page_num}"
    print(f"\n📄 Scraping page {page_num}/{TOTAL_PAGES}...")

    html = get_page(url)
    if not html:
        return []

    soup = BeautifulSoup(html, 'lxml')
    page_agences = []

    # Le site charge avec JS, mais les <h2> avec les noms sont présents dans le HTML brut
    h2_tags = soup.find_all('h2')

    print(f"  → {len(h2_tags)} agences trouvées")

    for h2 in h2_tags:
        try:
            # Nom de l'agence et lien fiche
            nom = "Non trouvé"
            url_fiche = "non disponible"

            nom_link = h2.find('a', href=True)
            if nom_link:
                nom = nom_link.get_text(strip=True)
                url_fiche = nom_link.get('href', 'non disponible')
            else:
                nom = h2.get_text(strip=True)

            # Trouver le conteneur parent pour extraire les autres infos
            parent = h2.find_parent()
            if not parent:
                parent = h2

            # Chercher dans les siblings et descendants pour ville et téléphone
            ville = "Non trouvée"
            telephone = "Non trouvé"

            # Chercher tous les textes autour pour trouver ville et téléphone
            all_text = parent.get_text() if parent else ""

            # Ville : chercher "Gouvernorat de XXX" ou villes connues
            ville_match = re.search(r'Gouvernorat de ([^\n]+)', all_text)
            if ville_match:
                ville = ville_match.group(1).strip()
            else:
                for city in ['Tunis', 'Sousse', 'Sfax', 'Hammamet', 'Nabeul', 'Bizerte', 'Djerba', 'Kelibia', 'La Marsa', 'Ariana', 'Monastir', 'Mahdia', 'Kairouan', 'Gafsa', 'Gabès']:
                    if city in all_text:
                        ville = city
                        break

            # Téléphone : chercher un lien tel: ou un numéro
            tel_link = parent.find('a', href=re.compile(r'^tel:', re.I)) if parent else None
            if tel_link:
                telephone = tel_link.get_text(strip=True)
            else:
                # Chercher un numéro dans le texte
                tel_match = re.search(r'(?:Tel:|Gsm:)\s*([+\d\s()]+)', all_text)
                if tel_match:
                    telephone = tel_match.group(1).strip()

            # Site web : sera récupéré sur la fiche
            site_web = "non disponible"

            if nom and nom != "Non trouvé":
                page_agences.append({
                    'nom': nom,
                    'ville': ville,
                    'telephone': telephone,
                    'site_web': site_web,
                    'url_fiche': url_fiche,
                    'email': None  # Sera rempli plus tard
                })

        except Exception as e:
            print(f"  ⚠️  Erreur extraction agence : {str(e)}")
            continue

    print(f"  ✅ {len(page_agences)} agences extraites")
    return page_agences

def main():
    print("=" * 70)
    print("🇹🇳 SCRAPER D'AGENCES IMMOBILIÈRES TUNISIENNES")
    print("=" * 70)

    # ÉTAPE 1 : Scraper les listings
    print("\n📋 ÉTAPE 1 : Extraction des agences depuis les listings\n")

    for page in range(1, TOTAL_PAGES + 1):
        page_agences = scrape_listing_page(page)
        agences.extend(page_agences)

        if page < TOTAL_PAGES:
            print(f"  ⏳ Attente {DELAY_BETWEEN_PAGES}s avant page suivante...")
            time.sleep(DELAY_BETWEEN_PAGES)

    print(f"\n✅ Total agences extraites : {len(agences)}")

    # ÉTAPE 2 : Récupérer les sites web depuis les fiches
    print("\n🌐 ÉTAPE 2 : Récupération des sites web depuis les fiches\n")

    sites_trouves = 0
    for i, agence in enumerate(agences, 1):
        if agence['url_fiche'] != "non disponible":
            print(f"[{i}/{len(agences)}] {agence['nom']}")
            site_web = get_website_from_fiche(agence['url_fiche'])
            if site_web:
                agence['site_web'] = site_web
                sites_trouves += 1
                print(f"  ✅ Site web : {site_web}")
            else:
                print(f"  ❌ Pas de site web")
            time.sleep(DELAY_BETWEEN_SITES)

    print(f"\n✅ Sites web trouvés : {sites_trouves}/{len(agences)}")

    # ÉTAPE 3 : Chercher les emails sur les sites
    print("\n📧 ÉTAPE 3 : Recherche des emails sur les sites web\n")

    agences_avec_site = [a for a in agences if a['site_web'] != "non disponible"]
    print(f"→ {len(agences_avec_site)} agences avec site web")

    emails_trouves = 0

    for i, agence in enumerate(agences_avec_site, 1):
        print(f"\n[{i}/{len(agences_avec_site)}] {agence['nom']}")
        email = find_email_on_website(agence['site_web'])

        if email:
            # Mettre à jour directement l'email (agence est une référence à l'objet dans agences)
            agence['email'] = email
            emails_trouves += 1

        if i < len(agences_avec_site):
            time.sleep(DELAY_BETWEEN_SITES)

    # ÉTAPE 4 : Export CSV
    print("\n💾 ÉTAPE 4 : Export en CSV\n")

    try:
        with open(OUTPUT_FILE, 'w', newline='', encoding='utf-8') as csvfile:
            fieldnames = ['nom', 'ville', 'telephone', 'email', 'site_web', 'url_fiche']
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

            writer.writeheader()
            for agence in agences:
                writer.writerow({
                    'nom': agence['nom'],
                    'ville': agence['ville'],
                    'telephone': agence['telephone'],
                    'email': agence.get('email') or 'non trouvé',
                    'site_web': agence['site_web'],
                    'url_fiche': agence['url_fiche']
                })

        print(f"✅ Fichier exporté : {OUTPUT_FILE}")

    except Exception as e:
        print(f"❌ Erreur lors de l'export CSV : {str(e)}")
        return

    # RÉSUMÉ FINAL
    print("\n" + "=" * 70)
    print("📊 RÉSUMÉ FINAL")
    print("=" * 70)
    print(f"✅ Nombre total d'agences trouvées : {len(agences)}")
    print(f"🌐 Nombre d'agences avec site web : {len(agences_avec_site)}")
    print(f"📧 Nombre d'emails récupérés : {emails_trouves}")
    print(f"📁 Fichier CSV : {OUTPUT_FILE}")
    print(f"📈 Taux de récupération : {(emails_trouves/len(agences_avec_site)*100 if agences_avec_site else 0):.1f}%")
    print("=" * 70)

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\n⚠️  Arrêt du script par l'utilisateur")
        print(f"💾 Agences collectées jusqu'ici : {len(agences)}")
        sys.exit(0)
    except Exception as e:
        print(f"\n❌ Erreur fatale : {str(e)}")
        sys.exit(1)
