'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'

const VIDEOS = ['/videos/video1.mp4', '/videos/video2.mp4', '/videos/video3.mp4', '/videos/video4.mp4', '/videos/video5.mp4', '/videos/video6.mp4']
const DISPLAY_MS = 6000
const FADE_S = 1.5

export default function VideoHero() {
  const t = useTranslations('videoHero')
  const locale = useLocale()
  const [current, setCurrent] = useState(0)
  const [next, setNext] = useState(1)
  const [fading, setFading] = useState(false)
  const [errors, setErrors] = useState<boolean[]>([false, false, false, false, false, false])
  const refs = useRef<(HTMLVideoElement | null)[]>([null, null, null, null, null, null])
  const timer = useRef<NodeJS.Timeout | null>(null)
  const { scrollY } = useScroll()
  const parallaxY = useTransform(scrollY, [0, 800], [0, 300])

  useEffect(() => {
    const firstVideo = refs.current[0]
    if (firstVideo) {
      firstVideo.load()
      firstVideo.currentTime = 0
      firstVideo.play().catch(() => {})
    }
    const secondVideo = refs.current[1]
    if (secondVideo) {
      secondVideo.load()
      secondVideo.currentTime = 0
    }
  }, [])

  useEffect(() => {
    timer.current = setTimeout(() => {
      const nextIndex = (current + 1) % VIDEOS.length
      const nextVideo = refs.current[nextIndex]

      if (nextVideo) {
        nextVideo.load()
        nextVideo.currentTime = 0
        nextVideo.play().catch(() => {})
      }

      setNext(nextIndex)
      setFading(true)

      setTimeout(() => {
        setCurrent(nextIndex)
        setFading(false)

        const afterNext = (nextIndex + 1) % VIDEOS.length
        const afterNextVideo = refs.current[afterNext]
        if (afterNextVideo) {
          afterNextVideo.load()
          afterNextVideo.currentTime = 0
        }
      }, FADE_S * 1000)
    }, DISPLAY_MS)

    return () => {
      if (timer.current) clearTimeout(timer.current)
    }
  }, [current])

  const allFailed = errors.every(Boolean)

  return (
    <div className="relative w-full overflow-hidden" style={{ height: '100dvh' }}>
      <motion.div className="absolute inset-0" style={{ y: parallaxY, height: '130%', top: '-15%' }}>
        {allFailed ? (
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0d3d6b 0%, #1B6CA8 50%, #B8923A 100%)' }} />
        ) : (
          VIDEOS.map((src, i) => {
            const isCurrent = i === current
            const isNext = i === next
            let opacity = 0
            if (isCurrent && !fading) opacity = 1
            if (isCurrent && fading) opacity = 0
            if (isNext && fading) opacity = 1
            return (
              <motion.video
                key={src}
                ref={el => { refs.current[i] = el }}
                src={src}
                muted
                playsInline
                loop={false}
                preload="none"
                suppressHydrationWarning
                onError={() => setErrors(e => { const n = [...e]; n[i] = true; return n })}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ willChange: opacity > 0 ? 'opacity' : 'auto' }}
                animate={{ opacity }}
                transition={{ duration: fading ? FADE_S : 0, ease: 'easeInOut' }}
              />
            )
          })
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
