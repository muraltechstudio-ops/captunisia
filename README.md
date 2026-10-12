# CapTunisia

Site web Next.js 14 pour CapTunisia — Accompagnement immobilier franco-tunisien.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations avec parallax)
- **Resend** (emails)

## Installation

```bash
npm install
```

## Configuration

### 1. Variables d'environnement

Créez un fichier `.env.local` :

```env
RESEND_API_KEY=your_resend_key_here
NEXT_PUBLIC_SITE_URL=https://captunisia.com
```

### 2. Vidéos hero

Le hero utilise 4 vidéos locales en boucle avec effet parallax et crossfade hypnotique.

**Étapes :**

1. Placez 4 fichiers MP4 dans `/public/videos/` :
   - `video1.mp4`
   - `video2.mp4`
   - `video3.mp4`
   - `video4.mp4`

2. **Où trouver des vidéos ?**
   - [Coverr.co](https://coverr.co) (gratuit, pas d'attribution requise)
   - Recherchez : "mediterranean", "villa", "pool", "beach", "tunisia"
   - Format : paysage (16:9)
   - Durée idéale : 8-15 secondes chacune
   - Qualité : HD (1920x1080 minimum)

3. Si aucune vidéo n'est présente, un gradient de fallback s'affiche automatiquement.

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

Le site est prêt pour Vercel. 

1. Configurez les variables d'environnement dans votre projet Vercel
2. Les vidéos dans `/public/videos/` seront automatiquement déployées

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
/lib                 # Utilitaires (Resend)
/public/videos       # Vidéos hero (à remplir par l'utilisateur)
```

## Features

- **Hero vidéo cinématique** : 4 vidéos locales avec parallax scroll et crossfade hypnotique (1.5s)
- **Navigation adaptative** : transparente sur le hero, solid white au scroll
- Filtres de recherche biens immobiliers
- Formulaire de contact avec Resend
- Animations Framer Motion (parallax, fadeIn, hover)
- Design responsive
- SEO optimisé
- Images optimisées Next.js

## Brand

- **Couleurs** : Azur #1B6CA8, Or #B8923A, Sable #F8F6F1, Nuit #111009
- **Fonts** : Cormorant Garamond (display) + DM Sans (body)
- **Ton** : Premium, trustworthy, Mediterranean

## License

© 2026 CapTunisia - Open Crest LLC
