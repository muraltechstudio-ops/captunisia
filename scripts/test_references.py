#!/usr/bin/env python3
# Test pour comprendre le problème de références

# Simuler la structure
agences = [
    {'nom': 'Agence A', 'site_web': 'http://a.com', 'email': None},
    {'nom': 'Agence B', 'site_web': 'non disponible', 'email': None},
    {'nom': 'Agence C', 'site_web': 'http://c.com', 'email': None},
]

print("=== AVANT ===")
for a in agences:
    print(f"{a['nom']}: email={a['email']}")

# Créer la liste filtrée (comme dans le script)
agences_avec_site = [a for a in agences if a['site_web'] != "non disponible"]

print(f"\nagences_avec_site a {len(agences_avec_site)} éléments")

# Mettre à jour les emails
for agence in agences_avec_site:
    agence['email'] = f"contact@{agence['nom'].replace(' ', '').lower()}.com"

print("\n=== APRÈS (agences_avec_site) ===")
for a in agences_avec_site:
    print(f"{a['nom']}: email={a['email']}")

print("\n=== APRÈS (agences originale) ===")
for a in agences:
    print(f"{a['nom']}: email={a['email']}")

# Vérifier si ce sont les mêmes objets
print(f"\n=== TEST IDENTITÉ ===")
print(f"agences[0] is agences_avec_site[0]: {agences[0] is agences_avec_site[0]}")
