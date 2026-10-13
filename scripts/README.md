# Script de Scraping - Agences Immobilières Tunisiennes

## Description

Script Python pour extraire automatiquement les coordonnées de toutes les agences immobilières tunisiennes depuis goafricaonline.com et récupérer leurs emails en visitant leurs sites web.

## Installation

```bash
cd scripts
pip install -r requirements.txt
```

## Utilisation

```bash
python scrape_agences_tunisie.py
```

## Fonctionnalités

- ✅ Scrape 18 pages de listing (toutes les agences)
- ✅ Extrait : nom, ville, téléphone, site web, URL fiche
- ✅ Visite chaque site pour récupérer l'email
- ✅ Gestion des timeouts et erreurs
- ✅ Délais respectés (1-2s entre requêtes)
- ✅ Export CSV automatique
- ✅ Résumé détaillé en fin d'exécution

## Sortie

Le script génère un fichier CSV : `agences_immobilieres_tunisie.csv`

Colonnes : `nom`, `ville`, `telephone`, `email`, `site_web`, `url_fiche`

## Temps d'exécution estimé

- Scraping listings (18 pages) : ~40 secondes
- Visite des sites (selon nombre) : variable (1-2h si ~500 agences)

## Notes

- User-Agent aléatoire pour éviter le blocage
- Timeout de 10s par requête
- Gestion propre des erreurs (ne plante pas à mi-parcours)
- Possibilité d'arrêter avec Ctrl+C (sauvegarde ce qui a été collecté)

## Support

En cas de changement de structure HTML du site source, adapter les sélecteurs CSS dans la fonction `scrape_listing_page()`.
