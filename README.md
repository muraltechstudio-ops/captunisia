# CapTunisia

Site web Next.js 14 pour CapTunisia — Accompagnement immobilier franco-tunisien.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Resend** (emails)
- **Pexels API** (vidéos hero)

## Installation

```bash
npm install
```

## Configuration

Créez un fichier `.env.local` avec vos clés API :

```env
RESEND_API_KEY=your_resend_key_here
PEXELS_API_KEY=your_pexels_key_here
NEXT_PUBLIC_SITE_URL=https://captunisia.com
```

## Développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Build

```bash
npm run build
npm start
```

## Déploiement Vercel

Le site est prêt pour Vercel. Configurez simplement les variables d'environnement dans votre projet Vercel.

## Structure

```
/app                  # Pages Next.js App Router
  /biens             # Liste des biens
  /biens/[id]        # Détail d'un bien
  /services          # Page services
  /equipe            # Page équipe
  /contact           # Page contact
  /api/contact       # API route pour formulaire
/components          # Composants React
/data                # Données statiques (biens)
/lib                 # Utilitaires (Resend, Pexels)
```

## Features

- Hero vidéo avec carousel automatique (Pexels API)
- Filtres de recherche biens immobiliers
- Formulaire de contact avec Resend
- Animations Framer Motion
- Design responsive
- SEO optimisé
- Images optimisées Next.js

## Brand

- **Couleurs** : Azur #1B6CA8, Or #B8923A, Sable #F8F6F1, Nuit #111009
- **Fonts** : Cormorant Garamond (display) + DM Sans (body)
- **Ton** : Premium, trustworthy, Mediterranean

## License

© 2026 CapTunisia - Open Crest LLC
