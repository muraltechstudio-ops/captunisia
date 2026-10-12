import VideoHero from '@/components/VideoHero'
import HomeContent from '@/components/HomeContent'
import { biens } from '@/data/biens'
import { getHeroVideos } from '@/lib/pexels'

export const metadata = {
  title: 'CapTunisia — Immobilier en Tunisie pour Européens',
  description: 'Accompagnement franco-tunisien pour l\'achat immobilier en Tunisie. Gratuit pour l\'acheteur. Équipe bilingue FR/AR. Sécurisation juridique incluse.',
}

export default async function Home() {
  const videos = await getHeroVideos()
  const featuredBiens = biens.slice(0, 3)

  return (
    <>
      <VideoHero videos={videos} />
      <HomeContent featuredBiens={featuredBiens} />
    </>
  )
}
