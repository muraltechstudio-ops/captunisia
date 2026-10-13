#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Extrait les emails du log et met à jour le CSV
"""

import csv
import re

LOG_FILE = "C:/Users/Cyril/AppData/Local/Temp/claude/c--Users-Cyril-OneDrive-Dokumenty-Cap-Tunisia/15ff80c5-a993-40dc-b75a-4bd81d500635/tasks/b5anaopkj.output"
CSV_FILE = "scripts/agences_immobilieres_tunisie.csv"

# Lire le log et extraire les emails trouvés
print("📂 Lecture du log...")
emails_par_agence = {}

with open(LOG_FILE, 'r', encoding='utf-8', errors='ignore') as f:
    lines = f.readlines()

current_agence = None
for i, line in enumerate(lines):
    # Détecter le nom de l'agence : [123/540] Nom Agence
    match_agence = re.match(r'\[(\d+)/540\] (.+)$', line.strip())
    if match_agence:
        current_agence = match_agence.group(2)

    # Détecter l'email trouvé
    if current_agence and "✅ Email trouvé" in line:
        match_email = re.search(r'✅ Email trouvé : (.+)$', line.strip())
        if match_email:
            email = match_email.group(1).strip()
            emails_par_agence[current_agence] = email
            print(f"  {current_agence} -> {email}")

print(f"\n✅ {len(emails_par_agence)} emails extraits du log")

# Charger le CSV
print("\n📂 Chargement du CSV...")
agences = []
with open(CSV_FILE, 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    agences = list(reader)

# Mettre à jour les emails
print("🔄 Mise à jour des emails...")
updates = 0
for agence in agences:
    if agence['nom'] in emails_par_agence:
        agence['email'] = emails_par_agence[agence['nom']]
        updates += 1

print(f"✅ {updates} agences mises à jour")

# Sauvegarder
print("\n💾 Sauvegarde du CSV...")
with open(CSV_FILE, 'w', newline='', encoding='utf-8') as f:
    fieldnames = ['nom', 'ville', 'telephone', 'email', 'site_web', 'url_fiche']
    writer = csv.DictWriter(f, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(agences)

print(f"✅ Fichier sauvegardé : {CSV_FILE}")

# Statistiques finales
emails_total = len([a for a in agences if a['email'] != 'non trouvé'])
print(f"\n📊 RÉSULTAT FINAL")
print(f"📧 Emails dans le CSV : {emails_total}/{len(agences)}")
print(f"📈 Taux : {emails_total/len(agences)*100:.1f}%")
