import VideoHero from '@/components/VideoHero'
import HomeContent from '@/components/HomeContent'
import { biens } from '@/data/biens'

export const metadata = {
  title: 'CapTunisia — Immobilier en Tunisie pour Européens',
  description: 'Accompagnement franco-tunisien pour l\'achat immobilier en Tunisie. Gratuit pour l\'acheteur. Équipe bilingue FR/AR. Sécurisation juridique incluse.',
}

export default function Home() {
  const featuredBiens = biens.filter(b => b.price).slice(0, 3)

  return (
    <>
      <VideoHero />
      <HomeContent featuredBiens={featuredBiens} />
    </>
  )
}
