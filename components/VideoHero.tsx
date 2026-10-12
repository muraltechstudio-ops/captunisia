'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const VIDEOS = ['/videos/video1.mp4', '/videos/video2.mp4', '/videos/video3.mp4', '/videos/video4.mp4', '/videos/video5.mp4', '/videos/video6.mp4']
const DISPLAY_MS = 6000
const FADE_S = 1.5

export default function VideoHero() {
  const [current, setCurrent] = useState(0)
  const [fading, setFading] = useState(false)
  const [errors, setErrors] = useState<boolean[]>([false, false, false, false, false, false])
  const refs = useRef<(HTMLVideoElement | null)[]>([null, null, null, null, null, null])
  const timer = useRef<NodeJS.Timeout | null>(null)
  const { scrollY } = useScroll()
  const parallaxY = useTransform(scrollY, [0, 800], [0, 300])

  useEffect(() => {
    refs.current[0]?.play().catch(() => {})
  }, [])

  useEffect(() => {
    timer.current = setTimeout(() => {
      setFading(true)
      setTimeout(() => {
        const next = (current + 1) % VIDEOS.length
        setCurrent(next)
        setFading(false)
        refs.current[next]?.play().catch(() => {})
        const afterNext = refs.current[(next + 1) % VIDEOS.length]
        if (afterNext) afterNext.currentTime = 0
      }, FADE_S * 1000)
    }, DISPLAY_MS)
    return () => { if (timer.current) clearTimeout(timer.current) }
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
            const isNext = i === (current + 1) % VIDEOS.length
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
                suppressHydrationWarning
                onError={() => setErrors(e => { const n = [...e]; n[i] = true; return n })}
                className="absolute inset-0 w-full h-full object-cover"
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
          Accompagnement immobilier franco-tunisien
        </motion.p>
        <motion.h1 className="font-display leading-tight" style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1 }}>
          <span className="text-white italic font-light">Investir en Tunisie,</span><br />
          <span style={{ color: '#B8923A' }} className="font-light">en toute confiance.</span>
        </motion.h1>
        <motion.p className="mt-6 text-white/75 font-sans leading-relaxed max-w-lg" style={{ fontSize: '1.1rem' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }}>
          De la recherche du bien à la signature du contrat —<br />une équipe franco-tunisienne à vos côtés.
        </motion.p>
        <motion.div className="mt-10 flex flex-col sm:flex-row gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8 }}>
          <a href="/biens" className="px-8 py-3.5 text-white font-sans font-medium tracking-wide hover:opacity-90 transition-opacity" style={{ backgroundColor: '#1B6CA8' }}>Voir nos biens</a>
          <a href="/contact" className="px-8 py-3.5 font-sans font-medium tracking-wide border border-white/70 text-white hover:bg-white/10 transition-colors">Parler à un conseiller</a>
        </motion.div>
      </div>

      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10" animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
      </motion.div>

      <div id="hero-sentinel" className="absolute bottom-0 left-0 right-0 h-1" />
    </div>
  )
}
