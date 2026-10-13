#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import sys
import io
if sys.platform == 'win32':
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

import requests
from bs4 import BeautifulSoup
from fake_useragent import UserAgent

ua = UserAgent()
url = "https://www.goafricaonline.com/tn/annuaire/agences-immobilieres?page=1"

headers = {'User-Agent': ua.random}
response = requests.get(url, headers=headers, timeout=10)

soup = BeautifulSoup(response.text, 'lxml')

# Chercher toutes les divs avec "card" dans la classe
cards = soup.find_all('div', class_=lambda x: x and 'card' in x.lower())
print(f"Divs avec 'card' trouvées : {len(cards)}")

if cards:
    print("\nPremière card:")
    print(cards[0].prettify()[:1000])
    print("\nClasses de la première card:")
    print(cards[0].get('class'))

# Chercher les h2
h2_tags = soup.find_all('h2')
print(f"\n\nNombre de <h2> trouvés : {len(h2_tags)}")

if h2_tags:
    print("\nPremiers 3 <h2>:")
    for i, h2 in enumerate(h2_tags[:3]):
        print(f"{i+1}. {h2.get_text(strip=True)}")
        if h2.find('a'):
            print(f"   Lien: {h2.find('a').get('href')}")
