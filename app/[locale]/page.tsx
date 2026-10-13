'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import VideoHero from '@/components/VideoHero'
import HomeContent from '@/components/HomeContent'
import { biens } from '@/data/biens'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useLocale } from 'next-intl'

export default function Home() {
  const t = useTranslations('home')
  const locale = useLocale()
  const featuredBiens = [biens[0], biens[1], biens[2]]
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  return (
    <>
      <VideoHero />

      {/* SECTION 1 - Pain Point France Inabordable */}
      <section className="bg-[#111009] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
              {t('section1.title')}
            </h2>
            <p className="text-white/70 font-sans text-lg max-w-3xl mx-auto leading-relaxed">
              {t('section1.intro')}
              <span className="text-[#B8923A] font-semibold block mt-4">{t('section1.highlight')}</span>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.raw('section1.stats').map((item: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center"
              >
                <div className="text-5xl font-display font-bold text-[#B8923A] mb-3">{item.value}</div>
                <div className="text-white/60 font-sans text-sm">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 - Comparatif France vs Tunisie */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl text-[#111009] mb-6">
              {t('section2.title')}
            </h2>
            <p className="text-gray-600 font-sans text-lg max-w-2xl mx-auto">
              {t('section2.subtitle')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-x-auto"
          >
            <table className="w-full border-collapse bg-white shadow-lg rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-[#1B6CA8] text-white">
                  <th className="px-6 py-4 text-left font-sans font-semibold"></th>
                  <th className="px-6 py-4 text-center font-sans font-semibold text-lg">{t('section2.table.headerFrance')}</th>
                  <th className="px-6 py-4 text-center font-sans font-semibold text-lg">{t('section2.table.headerTunisia')}</th>
                </tr>
              </thead>
              <tbody>
                {t.raw('section2.table.rows').map((row: any, i: number) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#F8F6F1]" : "bg-white"}>
                    <td className="px-6 py-4 font-sans font-medium text-[#111009]">{row.item}</td>
                    <td className="px-6 py-4 text-center font-sans text-gray-700">{row.france}</td>
                    <td className="px-6 py-4 text-center font-sans font-semibold text-[#1B6CA8]">{row.tunisia}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mt-12"
          >
            <Link href={`/${locale}/contact`} className="inline-block px-10 py-4 bg-[#1B6CA8] text-white font-sans font-semibold rounded-lg hover:bg-[#1B6CA8]/90 transition-colors">
              {t('section2.cta')}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 - Pourquoi la Tunisie plutot qu ailleurs */}
      <section className="bg-[#F8F6F1] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl text-[#111009] mb-6">
              {t('section3.title')}
            </h2>
            <p className="text-gray-600 font-sans text-lg max-w-3xl mx-auto">
              {t('section3.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {t.raw('section3.comparisons').map((item: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[#1B6CA8]/10 hover:border-[#1B6CA8] transition-all"
              >
                <div className="text-[#B8923A] font-sans font-bold text-sm uppercase tracking-wide mb-3">{item.vs}</div>
                <p className="text-gray-700 font-sans text-sm leading-relaxed">{item.advantage}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-2xl p-10 shadow-xl"
          >
            <h3 className="font-display text-3xl text-[#111009] mb-8 text-center">{t('section3.advantages.title')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.raw('section3.advantages.list').map((avantage: string, i: number) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1B6CA8] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">{i + 1}</span>
                  </div>
                  <p className="text-gray-700 font-sans text-base">{avantage}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 - Galerie Photos Tunisie */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl text-[#111009] mb-6">
              {t('section4.title')}
            </h2>
            <p className="text-gray-600 font-sans text-lg max-w-2xl mx-auto">
              {t('section4.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: "/sidi-bou-said.jpg" },
              { img: "https://images.unsplash.com/photo-1600011689032-8b628b8a8747?w=800" },
              { img: "/cathedrale-tunis.webp" },
              { img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800" },
              { img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800" },
              { img: "/colisee-el-jem.webp" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="group relative h-80 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              >
                <Image
                  src={item.img}
                  alt={t.raw('section4.gallery')[i].label}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-sans font-semibold text-lg">{t.raw('section4.gallery')[i].label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 - Pour qui est fait CapTunisia */}
      <section className="bg-[#F8F6F1] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl text-[#111009] mb-6">
              {t('section5.title')}
            </h2>
            <p className="text-gray-600 font-sans text-lg max-w-2xl mx-auto">
              {t('section5.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.raw('section5.profiles').map((profil: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow"
              >
                <div className="text-6xl mb-4">{profil.icon}</div>
                <h3 className="font-display text-2xl text-[#111009] mb-4">{profil.title}</h3>
                <p className="text-gray-700 font-sans leading-relaxed">{profil.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mt-12"
          >
            <Link href={`/${locale}/services`} className="inline-block px-10 py-4 bg-[#1B6CA8] text-white font-sans font-semibold rounded-lg hover:bg-[#1B6CA8]/90 transition-colors">
              {t('section5.cta')}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6 - FAQ SEO */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl text-[#111009] mb-6">
              {t('section6.title')}
            </h2>
            <p className="text-gray-600 font-sans text-lg">
              {t('section6.subtitle')}
            </p>
          </motion.div>

          <div className="space-y-4">
            {t.raw('section6.faqs').map((faq: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-sans text-lg font-semibold text-[#111009] pr-4">
                    {faq.q}
                  </span>
                  <svg
                    className={`w-5 h-5 text-[#1B6CA8] flex-shrink-0 transition-transform ${
                      openFaqIndex === i ? "rotate-180" : ""
                    }`}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaqIndex === i && (
                  <div className="px-6 pb-5 pt-2 border-t border-gray-100">
                    <p className="font-sans text-base text-gray-700 leading-relaxed">
                      {faq.r}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <HomeContent featuredBiens={featuredBiens} />
    </>
  )
}
