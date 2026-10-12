'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'

const VIDEO_SOURCES = [
  '/videos/video1.mp4',
  '/videos/video2.mp4',
  '/videos/video3.mp4',
  '/videos/video4.mp4'
]

export default function VideoHero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hasVideos, setHasVideos] = useState(true)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollY } = useScroll()
  const parallaxY = useTransform(scrollY, [0, 800], [0, 320])

  useEffect(() => {
    // Check if first video exists
    const testVideo = document.createElement('video')
    testVideo.src = VIDEO_SOURCES[0]
    testVideo.onerror = () => setHasVideos(false)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % VIDEO_SOURCES.length)
    }, 6000)

    return () => clearTimeout(timer)
  }, [currentIndex])

  return (
    <div ref={containerRef} className="relative h-[100dvh] overflow-hidden">
      {/* Parallax Video Wrapper */}
      <motion.div
        style={{ y: parallaxY }}
        className="absolute inset-0 w-full h-full"
      >
        {hasVideos ? (
          VIDEO_SOURCES.map((src, index) => (
            <motion.video
              key={src}
              ref={(el) => { videoRefs.current[index] = el }}
              src={src}
              autoPlay
              muted
              playsInline
              loop={false}
              suppressHydrationWarning
              animate={{ opacity: currentIndex === index ? 1 : 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="absolute inset-0 w-full h-full object-cover"
              onEnded={() => {
                setCurrentIndex((prev) => (prev + 1) % VIDEO_SOURCES.length)
              }}
            />
          ))
        ) : (
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              background: 'linear-gradient(135deg, #0d3d6b 0%, #1B6CA8 50%, #B8923A 100%)'
            }}
          />
        )}
      </motion.div>

      {/* Dark Gradient Overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.3))'
        }}
      />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center px-4">
        <div className="text-center max-w-xl mx-auto">
          <h1 className="font-display mb-6">
            <span className="block text-white italic font-light text-[2.8rem] md:text-[5rem] leading-tight">
              Investir en Tunisie,
            </span>
            <span className="block text-gold text-[2.8rem] md:text-[5rem] leading-tight">
              en toute confiance.
            </span>
          </h1>
          <p className="font-sans text-lg text-white/75 mb-8 max-w-md mx-auto">
            Accompagnement immobilier franco-tunisien — de la recherche à la signature.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/biens"
              className="px-6 py-3 bg-azur text-white font-sans font-medium rounded-sm hover:bg-azur/90 transition-colors"
            >
              Voir nos biens
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-white text-white font-sans font-medium rounded-sm bg-transparent hover:bg-white/10 transition-colors"
            >
              Parler à un conseiller
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <svg
          className="w-6 h-6 text-white/60"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>

      {/* Sentinel for nav transition */}
      <div id="hero-sentinel" className="absolute bottom-0 left-0 right-0 h-1" />
    </div>
  )
}
