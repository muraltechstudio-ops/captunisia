'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { locales } from '@/i18n/request'

export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const switchLocale = (newLocale: string) => {
    // Remplacer la locale dans le pathname
    const segments = pathname.split('/')
    segments[1] = newLocale
    const newPath = segments.join('/')
    router.push(newPath)
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => switchLocale('fr')}
        className={`px-2 py-1 transition-all rounded ${
          locale === 'fr'
            ? 'ring-2 ring-[#1B6CA8]'
            : 'opacity-60 hover:opacity-100'
        }`}
        title="Français"
      >
        <svg width="24" height="18" viewBox="0 0 3 2">
          <rect width="1" height="2" fill="#002395"/>
          <rect x="1" width="1" height="2" fill="#fff"/>
          <rect x="2" width="1" height="2" fill="#ED2939"/>
        </svg>
      </button>
      <button
        onClick={() => switchLocale('en')}
        className={`px-2 py-1 transition-all rounded ${
          locale === 'en'
            ? 'ring-2 ring-[#1B6CA8]'
            : 'opacity-60 hover:opacity-100'
        }`}
        title="English"
      >
        <svg width="24" height="18" viewBox="0 0 60 30">
          <rect width="60" height="30" fill="#012169"/>
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4"/>
          <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10"/>
          <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6"/>
        </svg>
      </button>
    </div>
  )
}
