'use client'

import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'

export default function TarifsPage() {
  const locale = useLocale()
  const t = useTranslations('pricingPage')

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div style={{ backgroundColor: '#F8F6F1' }} className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-5xl md:text-6xl italic text-nuit">
            {t('title')}
          </h1>
          <p className="font-sans text-gray-500 mt-4 max-w-xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
      </div>

      {/* Cartes tarifs */}
      <div className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Essentiel */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 relative">
              <h3 className="font-sans font-semibold text-xl text-nuit">{t('pack1Name')}</h3>
              <div className="mt-4">
                <span className="font-display text-5xl text-nuit">{t('pack1Price')}</span>
                <span className="text-sm text-gray-400 ml-2">TTC</span>
              </div>
              <div className="border-t border-gray-100 my-6"></div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-0.5" style={{ color: '#1B6CA8' }} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">{t('pack1Feature1')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-0.5" style={{ color: '#1B6CA8' }} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">{t('pack1Feature2')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-0.5" style={{ color: '#1B6CA8' }} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">{t('pack1Feature3')}</span>
                </li>
              </ul>
              <Link href={`/${locale}/contact`} className="block w-full text-center mt-8 py-3 border transition-colors" style={{ borderColor: '#1B6CA8', color: '#1B6CA8' }}>
                {t('cta')}
              </Link>
            </div>

            {/* Sécurité (recommandé) */}
            <div className="relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                <span className="inline-block px-4 py-1 text-xs text-white tracking-widest uppercase" style={{ backgroundColor: '#B8923A' }}>{t('pack2Badge')}</span>
              </div>
              <div className="rounded-lg p-8 text-white" style={{ backgroundColor: '#1B6CA8' }}>
                <h3 className="font-sans font-semibold text-xl">{t('pack2Name')}</h3>
                <div className="mt-4">
                  <span className="font-display text-5xl">{t('pack2Price')}</span>
                  <span className="text-sm opacity-70 ml-2">TTC</span>
                </div>
                <div className="border-t my-6" style={{ borderColor: 'rgba(255,255,255,0.2)' }}></div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-3 mt-0.5 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">{t('pack2Feature1')}</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-3 mt-0.5 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">{t('pack2Feature2')}</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-3 mt-0.5 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">{t('pack2Feature3')}</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-3 mt-0.5 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">{t('pack2Feature4')}</span>
                  </li>
                </ul>
                <Link href={`/${locale}/contact`} className="block w-full text-center mt-8 py-3 bg-white font-medium transition-colors hover:bg-white/90" style={{ color: '#1B6CA8' }}>
                  {t('ctaPack')}
                </Link>
              </div>
            </div>

            {/* Premium */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 relative">
              <h3 className="font-sans font-semibold text-xl text-nuit">{t('pack3Name')}</h3>
              <div className="mt-4">
                <span className="font-display text-5xl text-nuit">{t('pack3Price')}</span>
                <span className="text-sm text-gray-400 ml-2">TTC</span>
              </div>
              <div className="border-t border-gray-100 my-6"></div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-0.5" style={{ color: '#1B6CA8' }} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">{t('pack3Feature1')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-0.5" style={{ color: '#1B6CA8' }} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">{t('pack3Feature2')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-0.5" style={{ color: '#1B6CA8' }} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">{t('pack3Feature3')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-0.5" style={{ color: '#1B6CA8' }} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">{t('pack3Feature4')}</span>
                </li>
              </ul>
              <Link href={`/${locale}/contact`} className="block w-full text-center mt-8 py-3 border transition-colors" style={{ borderColor: '#1B6CA8', color: '#1B6CA8' }}>
                {t('cta')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
