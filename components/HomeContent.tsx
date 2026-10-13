'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import type { Bien } from '@/data/biens'

interface HomeContentProps {
  featuredBiens: Bien[]
}

export default function HomeContent({ featuredBiens }: HomeContentProps) {
  const t = useTranslations('homeContent')
  const locale = useLocale()

  return (
    <div>
      <div className="bg-[#111009] py-5">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-white/70 font-sans text-[0.78rem] tracking-[0.12em] uppercase">
          <span>{t('trustBar')}</span>
          <span className="hidden md:inline opacity-20">|</span>
          <span>{t('verified')}</span>
          <span className="hidden md:inline opacity-20">|</span>
          <span>{t('support')}</span>
          <span className="hidden md:inline opacity-20">|</span>
          <span>{t('contract')}</span>
        </div>
      </div>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
            <h2 className="font-display text-5xl italic text-nuit">{t('tunisiaTitle')}</h2>
            <p className="text-gray-500 font-sans mt-4 max-w-2xl mx-auto leading-relaxed">{t('tunisiaSubtitle')}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: t('priceTitle'), text: t('priceText') },
              { title: t('legalTitle'), text: t('legalText') },
              { title: t('feesTitle'), text: t('feesText'), link: `/${locale}/tarifs` }
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.15 }} className="text-center">
                <h3 className="font-display text-2xl mb-3 text-nuit">{item.title}</h3>
                <p className="font-sans text-gray-600 leading-relaxed">{item.text}</p>
                {item.link && (
                  <Link href={item.link} className="inline-block text-sm mt-2" style={{ color: '#1B6CA8' }}>
                    {t('seePricing')}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sable py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12">
            <h2 className="font-display text-5xl text-nuit">{t('selectionTitle')}</h2>
            <p className="text-gray-500 font-sans mt-4">{t('selectionSubtitle')}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBiens.map((bien, i) => (
              <motion.div key={bien.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.15 }} className="bg-white overflow-hidden group">
                <div className="relative h-56">
                  <Image src={bien.img} alt={bien.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 text-white text-xs font-sans font-semibold" style={{ backgroundColor: bien.badge === 'Exclusivité' ? '#1B6CA8' : bien.badge === 'Coup de cœur' ? '#B8923A' : '#374151' }}>{bien.badge}</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-wide text-gray-400 mb-1">{bien.zone}</p>
                  <h3 className="font-display text-xl text-nuit mb-3">{bien.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{bien.surface}m2 · {bien.rooms} ch. · {bien.baths} sdb</p>
                  {bien.price && <p className="text-2xl font-semibold mb-4" style={{ color: '#1B6CA8' }}>{bien.price.toLocaleString(locale === 'fr' ? 'fr-FR' : 'en-US')} euros</p>}
                  <Link href={`/${locale}/biens/${bien.id}`} className="block w-full text-center py-3 border font-sans font-medium transition-colors hover:bg-[#1B6CA8] hover:text-white" style={{ borderColor: '#1B6CA8', color: '#1B6CA8' }}>{t('discover')}</Link>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mt-10">
            <Link href={`/${locale}/biens`} className="inline-block px-10 py-3.5 text-white font-sans font-medium hover:opacity-90 transition-opacity" style={{ backgroundColor: '#1B6CA8' }}>{t('viewAll')}</Link>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="font-display text-5xl text-center text-nuit mb-16">{t('howTitle')}</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {(t.raw('steps') as Array<{num: string, title: string, text: string}>).map((step, i) => (
              <motion.div key={step.num} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1 }} className="text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4" style={{ backgroundColor: '#1B6CA8' }}>{step.num}</div>
                <h3 className="font-sans font-semibold text-nuit mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sable py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="font-display text-5xl italic text-center text-nuit mb-16">{t('teamTitle')}</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="bg-white shadow-sm p-8">
              <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 mb-4">
                <img
                  src="/cyril-photo.jpg"
                  alt={t('team.cyril.name')}
                  className="w-full h-full"
                  style={{ objectFit: 'cover', objectPosition: 'center center', transform: 'none', scale: 'none' }}
                />
              </div>
              <h3 className="font-display text-2xl text-nuit">{t('team.cyril.name')}</h3>
              <p className="text-sm tracking-wide uppercase mt-1 mb-4" style={{ color: '#B8923A' }}>{t('team.cyril.role')}</p>
              <p className="font-sans text-gray-700 leading-relaxed mb-4">{t('team.cyril.bio')}</p>
              <p className="text-sm text-gray-600">{t('team.cyril.languages')}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="bg-white shadow-sm p-8">
              <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 mb-4">
                <img
                  src="/Emna.jpeg"
                  alt={t('team.emna.name')}
                  className="w-full h-full"
                  style={{ objectFit: 'cover', objectPosition: 'center 45%', transform: 'none', scale: 'none' }}
                />
              </div>
              <h3 className="font-display text-2xl text-nuit">{t('team.emna.name')}</h3>
              <p className="text-sm tracking-wide uppercase mt-1 mb-4" style={{ color: '#B8923A' }}>{t('team.emna.role')}</p>
              <p className="font-sans text-gray-700 leading-relaxed mb-4">{t('team.emna.bio')}</p>
              <p className="text-sm text-gray-600">{t('team.emna.languages')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="font-display text-4xl text-center text-nuit mb-16">{t('testimonialsTitle')}</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(t.raw('testimonials') as Array<{text: string, author: string}>).map((testimonial, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.15 }} className="bg-white border border-gray-100 shadow-sm p-8">
                <div className="text-yellow-500 text-lg mb-4">⭐⭐⭐⭐⭐</div>
                <p className="font-sans text-gray-700 leading-relaxed mb-4 italic">{testimonial.text}</p>
                <p className="font-sans text-sm font-semibold text-gray-900">{testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: 'linear-gradient(135deg, #0d3d6b 0%, #1B6CA8 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="font-display text-5xl md:text-6xl italic text-white">{t('ctaTitle')}</motion.h2>
          <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-white/70 font-sans mt-4 text-lg">{t('ctaSubtitle')}</motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mt-8">
            <Link href={`/${locale}/contact`} className="inline-block px-10 py-4 bg-white font-sans font-medium hover:bg-white/90 transition-colors" style={{ color: '#1B6CA8' }}>{t('ctaButton')}</Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
