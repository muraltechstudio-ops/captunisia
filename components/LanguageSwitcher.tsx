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

  const flags = {
    fr: '🇫🇷',
    en: '🇬🇧'
  }

  return (
    <div className="flex items-center gap-2">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          className={`px-3 py-1.5 text-2xl transition-all ${
            locale === loc
              ? 'opacity-100 scale-110'
              : 'opacity-50 hover:opacity-100'
          }`}
        >
          {flags[loc as keyof typeof flags]}
        </button>
      ))}
    </div>
  )
}
