'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'

export default function VideoHero() {
  const t = useTranslations('videoHero')
  const locale = useLocale()
  const [isMobile, setIsMobile] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const { scrollY } = useScroll()
  const parallaxY = useTransform(scrollY, [0, 800], [0, 300])

  // Détection mobile pour désactiver parallax
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load()
      videoRef.current.play().catch(() => {})
    }
  }, [])

  return (
    <div className="relative w-full overflow-hidden" style={{ height: '100dvh' }}>
      <motion.div className="absolute inset-0" style={{ y: isMobile ? 0 : parallaxY, height: '130%', top: '-15%' }}>
        {videoError ? (
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0d3d6b 0%, #1B6CA8 50%, #B8923A 100%)' }} />
        ) : (
          <video
            ref={videoRef}
            src="/videos/video1.mp4"
            muted
            playsInline
            loop
            preload="auto"
            onError={() => setVideoError(true)}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.28) 100%)' }} />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.p className="text-xs tracking-[0.25em] uppercase text-white/60 mb-6 font-sans" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
          {t('tagline')}
        </motion.p>
        <motion.h1 className="font-display leading-tight" style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1 }}>
          <span className="text-white italic font-light">{t('title1')}</span><br />
          <span style={{ color: '#B8923A' }} className="font-light">{t('title2')}</span>
        </motion.h1>
        <motion.p className="mt-6 text-white/75 font-sans leading-relaxed max-w-lg" style={{ fontSize: '1.1rem' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }}>
          {t('subtitle')}
        </motion.p>
        <motion.div className="mt-10 flex flex-col sm:flex-row gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8 }}>
          <a href={`/${locale}/biens`} className="px-8 py-3.5 text-white font-sans font-medium tracking-wide hover:opacity-90 transition-opacity" style={{ backgroundColor: '#1B6CA8' }}>{t('ctaProperties')}</a>
          <a href={`/${locale}/contact`} className="px-8 py-3.5 font-sans font-medium tracking-wide border border-white/70 text-white hover:bg-white/10 transition-colors">{t('ctaContact')}</a>
        </motion.div>
      </div>

      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10" animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
      </motion.div>

      <div id="hero-sentinel" className="absolute bottom-0 left-0 right-0 h-1" />
    </div>
  )
}
