# Guide de déploiement CapTunisia

## Prérequis

1. **Compte Vercel** : [vercel.com](https://vercel.com)
2. **Clé API Resend** : [resend.com](https://resend.com) - Pour l'envoi d'emails
3. **Clé API Pexels** : [pexels.com/api](https://www.pexels.com/api/) - Pour les vidéos du hero

## Configuration locale

### 1. Installation

```bash
npm install
```

### 2. Variables d'environnement

Créez `.env.local` avec :

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx
PEXELS_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. Test local

```bash
npm run dev
```

Visitez [http://localhost:3000](http://localhost:3000)

## Déploiement Vercel

### Option 1 : Via l'interface Vercel

1. Push votre code sur GitHub
2. Connectez-vous à [vercel.com](https://vercel.com)
3. Cliquez "New Project"
4. Importez votre repo GitHub
5. Configurez les variables d'environnement :
   - `RESEND_API_KEY`
   - `PEXELS_API_KEY`
   - `NEXT_PUBLIC_SITE_URL` (votre domaine final)
6. Cliquez "Deploy"

### Option 2 : Via CLI Vercel

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Configurer les variables d'environnement
vercel env add RESEND_API_KEY
vercel env add PEXELS_API_KEY
vercel env add NEXT_PUBLIC_SITE_URL

# Déployer en production
vercel --prod
```

## Configuration DNS

1. Dans Vercel, allez dans "Settings" > "Domains"
2. Ajoutez `captunisia.com`
3. Suivez les instructions pour configurer vos DNS

Configuration DNS type :
```
A Record: @ → 76.76.21.21
CNAME: www → cname.vercel-dns.com
```

## Configuration Resend

### 1. Vérifier le domaine

Dans Resend :
1. Ajoutez votre domaine `captunisia.com`
2. Configurez les enregistrements DNS (SPF, DKIM, DMARC)
3. Vérifiez la configuration

### 2. Email d'envoi

L'email `contact@captunisia.com` doit être vérifié dans Resend pour pouvoir envoyer.

## Checklist avant le lancement

- [ ] Variables d'environnement configurées sur Vercel
- [ ] Domaine DNS configuré et actif
- [ ] Resend configuré et domaine vérifié
- [ ] Test du formulaire de contact
- [ ] Test sur mobile
- [ ] Test des vidéos hero (ou fallback image)
- [ ] Vérification SEO (meta tags, sitemap)
- [ ] Analytics configuré (Google Analytics, etc.)

## Performance

Le site est optimisé pour :
- ✅ Images optimisées (Next.js Image)
- ✅ Fonts optimisées (Google Fonts avec display:swap)
- ✅ Vidéos avec cache 24h
- ✅ Static Generation pour les pages
- ✅ CSS Tailwind optimisé

## Monitoring

Ajoutez ces services (optionnel) :
- **Vercel Analytics** : Inclus gratuitement
- **Google Analytics** : Pour le trafic
- **Sentry** : Pour les erreurs
- **Uptime Robot** : Pour la disponibilité

## Support

Pour toute question :
- Email : contact@captunisia.com
- Tél : +33 6 36 22 69 87
