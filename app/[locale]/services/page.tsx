'use client'

import { useTranslations } from 'next-intl'
import ServiceBlock from '@/components/ServiceBlock'
import FaqAccordion from '@/components/FaqAccordion'

export default function ServicesPage() {
  const t = useTranslations('servicesPage')

  const services = [
    {
      title: t('service1Title'),
      description: t('service1Desc'),
      imageSrc: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800',
      imagePosition: 'left' as const
    },
    {
      title: t('service2Title'),
      description: t('service2Desc'),
      imageSrc: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800',
      imagePosition: 'right' as const
    },
    {
      title: t('service3Title'),
      description: t('service3Desc'),
      imageSrc: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800',
      imagePosition: 'left' as const
    },
    {
      title: t('service4Title'),
      description: t('service4Desc'),
      imageSrc: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
      imagePosition: 'right' as const
    }
  ]

  return (
    <div className="min-h-screen bg-sable">
      {/* Hero */}
      <div
        className="relative pt-32 pb-20 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1920&q=80)' }}
      >
        <div className="absolute inset-0 bg-[#1B6CA8]/70" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
            {t('title')}
          </h1>
          <p className="font-sans text-xl text-white/90 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
      </div>

      {/* Service Blocks */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {services.map((service, index) => (
          <ServiceBlock
            key={index}
            title={service.title}
            description={service.description}
            imageSrc={service.imageSrc}
            imagePosition={service.imagePosition}
            index={index}
          />
        ))}
      </div>

      {/* Pricing Section */}
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold text-nuit mb-6">
            {t('pricingTitle')}
          </h2>
          <div className="bg-azur/5 border-2 border-azur rounded-lg p-8 mb-6">
            <p className="font-display text-5xl font-bold text-azur mb-4">{t('pricingPrice')}</p>
            <p className="font-sans text-xl text-gray-700">{t('pricingFor')}</p>
          </div>
          <p className="font-sans text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            {t('pricingText')}
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="font-display text-4xl font-bold text-nuit mb-12 text-center">
          {t('faqTitle')}
        </h2>
        <FaqAccordion />
      </div>
    </div>
  )
}
