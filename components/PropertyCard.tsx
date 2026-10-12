'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Bien } from '@/data/biens'

interface PropertyCardProps {
  bien: Bien
  index?: number
}

export default function PropertyCard({ bien, index = 0 }: PropertyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <Link href={`/biens/${bien.id}`}>
        <div className="relative h-64 overflow-hidden">
          <Image
            src={bien.img}
            alt={bien.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <span className="inline-block px-3 py-1 bg-gold text-white text-xs font-sans font-semibold rounded-full">
              {bien.badge}
            </span>
          </div>
          <div className="absolute top-4 right-4">
            <span className="inline-block px-3 py-1 bg-azur text-white text-xs font-sans font-semibold rounded-full">
              {bien.zone}
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-display text-2xl font-semibold text-nuit mb-3 group-hover:text-azur transition-colors">
            {bien.title}
          </h3>
          <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600 font-sans">
            <span>{bien.surface}m²</span>
            {bien.rooms && <span>{bien.rooms} ch.</span>}
            {bien.baths && <span>{bien.baths} sdb</span>}
          </div>
          <div className="flex items-center justify-between">
            <div>
              {bien.price ? (
                <p className="font-display text-2xl font-bold text-azur">
                  {bien.price.toLocaleString('fr-FR')}€
                </p>
              ) : (
                <p className="font-sans text-sm text-gray-500 italic">Prix sur demande</p>
              )}
            </div>
            <span className="font-sans text-sm text-azur font-medium group-hover:underline">
              En savoir plus →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
