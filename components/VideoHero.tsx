'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

interface VideoHeroProps {
  videos: string[]
}

export default function VideoHero({ videos }: VideoHeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (videos.length === 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [videos.length])

  const fallbackImage = 'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=1920&q=80'

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Video/Image Background */}
      {videos.length > 0 ? (
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <video
              src={videos[currentIndex]}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${fallbackImage})` }}
        />
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-display text-5xl md:text-7xl font-bold mb-4"
          >
            <span className="text-white italic">Investir en Tunisie,</span>
            <br />
            <span className="text-gold italic">en toute confiance.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-sans text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto"
          >
            Accompagnement immobilier franco-tunisien — de la recherche à la signature.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/biens"
              className="inline-block px-8 py-4 bg-azur text-white font-sans font-semibold rounded-lg hover:bg-azur/90 transition-colors"
            >
              Voir nos biens
            </Link>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 border-2 border-white text-white font-sans font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Parler à un conseiller
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </div>
  )
}
