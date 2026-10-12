'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import PropertyCard from '@/components/PropertyCard'
import TeamCard from '@/components/TeamCard'
import type { Bien } from '@/data/biens'

interface HomeContentProps {
  featuredBiens: Bien[]
}

export default function HomeContent({ featuredBiens }: HomeContentProps) {
  return (
    <>
      {/* Trust Stats Bar */}
      <div className="bg-[#1A1714] text-white py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center md:divide-x divide-white/20 gap-4 md:gap-8">
            <div className="font-sans text-[0.8125rem] tracking-[0.08em] uppercase text-white/70 px-8 text-center">
              0€ pour l'acheteur
            </div>
            <div className="font-sans text-[0.8125rem] tracking-[0.08em] uppercase text-white/70 px-8 text-center">
              100% dossiers vérifiés
            </div>
            <div className="font-sans text-[0.8125rem] tracking-[0.08em] uppercase text-white/70 px-8 text-center">
              FR / EN / AR
            </div>
            <div className="font-sans text-[0.8125rem] tracking-[0.08em] uppercase text-white/70 px-8 text-center">
              Contrat signé dès le départ
            </div>
          </div>
        </div>
      </div>

      {/* Services Strip */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: (
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                ),
                title: 'Recherche sur mesure',
                description:
                  'Nous interrogeons nos agences partenaires et sélectionnons les biens correspondant à votre projet',
              },
              {
                icon: (
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                ),
                title: 'Sécurisation juridique',
                description:
                  'Audit titre foncier, autorisation du gouverneur, vérification conformité réglementaire',
              },
              {
                icon: (
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                ),
                title: 'Suivi complet',
                description:
                  'De la première visite jusqu\'à la signature chez le notaire et la remise des clés',
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-azur/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-azur"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {service.icon}
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="font-sans text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-sable">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-nuit mb-4">
              Nos biens sélectionnés
            </h2>
            <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
              Une sélection de propriétés vérifiées par notre équipe
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredBiens.map((bien, index) => (
              <PropertyCard key={bien.id} bien={bien} index={index} />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/biens"
              className="inline-block px-8 py-4 bg-azur text-white font-sans font-semibold rounded-lg hover:bg-azur/90 transition-colors"
            >
              Voir tous nos biens
            </Link>
          </div>
        </div>
      </section>

      {/* Team Teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-nuit mb-4">
              Une équipe franco-tunisienne
            </h2>
            <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
              L'expertise immobilière française et la maîtrise du droit tunisien
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TeamCard
              name="Cyril Rancurel"
              role="Conseiller & Fondateur"
              bio="Ancien conseiller immobilier Propriétés-Privées.com (réseau mandataires n°1 en France), entrepreneur digital depuis 15 ans, passionné par la Tunisie et convaincu du potentiel de son marché immobilier."
              tags={['Immobilier', 'Négociation', 'Relation clients']}
              languages={['Français', 'Anglais']}
              phone="+33 6 36 22 69 87"
              index={0}
            />
            <TeamCard
              name="Emna Rancurel"
              role="Juriste en droit des affaires internationales"
              bio="Spécialisée en droit des affaires internationales, Emna coordonne le volet juridique de chaque dossier : titre foncier, autorisation du gouverneur, conformité réglementaire."
              tags={['Droit tunisien', 'Droit international', 'Due diligence']}
              languages={['Français', 'Arabe', 'Anglais']}
              phone="+33 7 43 35 41 84"
              index={1}
            />
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-20 bg-azur text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Votre projet en Tunisie commence ici
            </h2>
            <p className="font-sans text-lg mb-8 opacity-90">
              Parlez-nous de votre projet. Premier échange gratuit et sans engagement.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-azur font-sans font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Prendre contact
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
