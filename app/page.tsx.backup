import VideoHero from '@/components/VideoHero'
import HomeContent from '@/components/HomeContent'
import { biens } from '@/data/biens'

export const metadata = {
  title: 'CapTunisia — Immobilier en Tunisie pour Européens',
  description: 'Accompagnement franco-tunisien pour l\'achat immobilier en Tunisie. Gratuit pour l\'acheteur. Équipe bilingue FR/AR. Sécurisation juridique incluse.',
}

export default function Home() {
  const featuredBiens = [biens[0], biens[1], biens[2]]

  return (
    <>
      <VideoHero />
      <HomeContent featuredBiens={featuredBiens} />
    </>
  )
}
