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
        className={`px-3 py-1.5 text-2xl transition-all ${
          locale === 'fr'
            ? 'opacity-100 scale-110'
            : 'opacity-50 hover:opacity-100'
        }`}
        title="Français"
      >
        🇫🇷
      </button>
      <button
        onClick={() => switchLocale('en')}
        className={`px-3 py-1.5 text-2xl transition-all ${
          locale === 'en'
            ? 'opacity-100 scale-110'
            : 'opacity-50 hover:opacity-100'
        }`}
        title="English"
      >
        🇬🇧
      </button>
    </div>
  )
}
