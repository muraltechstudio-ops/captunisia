'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface ServiceBlockProps {
  title: string
  description: string
  imageSrc: string
  imagePosition: 'left' | 'right'
  index: number
}

export default function ServiceBlock({
  title,
  description,
  imageSrc,
  imagePosition,
  index
}: ServiceBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay: index * 0.1 }}
      className={`flex flex-col ${
        imagePosition === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'
      } gap-8 md:gap-12 items-center mb-20`}
    >
      <div className="flex-1">
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex-1">
        <h3 className="font-display text-3xl md:text-4xl font-semibold text-nuit mb-4">
          {title}
        </h3>
        <p className="font-sans text-lg text-gray-700 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  )
}
