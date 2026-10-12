'use client'

import { motion } from 'framer-motion'

interface TeamCardProps {
  name: string
  role: string
  bio: string
  tags: string[]
  languages: string[]
  phone: string
  index: number
  photo?: string
}

export default function TeamCard({
  name,
  role,
  bio,
  tags,
  languages,
  phone,
  index,
  photo
}: TeamCardProps) {
  const initials = name.split(' ').map(n => n[0]).join('')
  const bgColor = index === 0 ? '#1B6CA8' : '#B8923A'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="bg-white rounded-lg shadow-lg p-8 md:p-10"
    >
      {photo ? (
        <div style={{ width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden', position: 'relative', flexShrink: 0, marginBottom: '1rem' }}>
          <img
            src={photo}
            alt={name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: photo.includes('emna') ? 'center 20%' : 'center top',
              borderRadius: '50%',
            }}
          />
        </div>
      ) : (
        <div className="w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4" style={{ backgroundColor: bgColor }}>
          {initials}
        </div>
      )}
      <h3 className="font-display text-3xl font-bold text-nuit mb-2">
        {name}
      </h3>
      <p className="font-sans text-lg text-azur font-semibold mb-6">
        {role}
      </p>
      <p className="font-sans text-base text-gray-700 leading-relaxed mb-6">
        {bio}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-block px-3 py-1 bg-sable text-nuit text-sm font-sans rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="border-t border-gray-200 pt-6 space-y-2">
        <p className="font-sans text-sm text-gray-600">
          <span className="font-semibold">Langues :</span> {languages.join(' · ')}
        </p>
        <p className="font-sans text-sm text-gray-600">
          <span className="font-semibold">Tél :</span>{' '}
          <a href={`tel:${phone}`} className="text-azur hover:underline">
            {phone}
          </a>
        </p>
      </div>
    </motion.div>
  )
}
