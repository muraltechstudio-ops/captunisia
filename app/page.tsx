'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import VideoHero from '@/components/VideoHero'
import { biens } from '@/data/biens'

export default function Home() {
  const featuredBiens = [biens[0], biens[1], biens[2]]

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7 }
  }

  return (
    <>
      <VideoHero />

      {/* SECTION A - Barre de reassurance */}
      <div className="bg-[#111009] py-5">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-white/70 font-sans text-[0.78rem] tracking-[0.12em] uppercase">
          <span>0€ pour l'acheteur</span>
          <span className="hidden md:inline opacity-20">|</span>
          <span>100% dossiers vérifiés</span>
          <span className="hidden md:inline opacity-20">|</span>
          <span>Accompagnement FR / AR / EN</span>
          <span className="hidden md:inline opacity-20">|</span>
          <span>Contrat sécurisé dès le départ</span>
        </div>
      </div>

      {/* SECTION B - Pourquoi la Tunisie */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="font-display text-5xl italic text-nuit">
              La Tunisie, un marché immobilier d'exception
            </h2>
            <p className="text-gray-500 font-sans mt-4 max-w-2xl mx-auto leading-relaxed">
              Des prix 3 à 5 fois inférieurs à la France, un cadre de vie méditerranéen, et une équipe franco-tunisienne pour sécuriser chaque étape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                Icon: (props: any) => (
                  <svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                ),
                title: 'Prix attractifs',
                text: 'De 60 000€ pour un appartement standing à Hammamet. Des biens introuvables à ce prix en Europe méditerranéenne.'
              },
              {
                Icon: (props: any) => (
                  <svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
                title: 'Cadre légal maîtrisé',
                text: 'Autorisation du gouverneur, titre foncier, loi 1964 sur les terres agricoles — nous gérons chaque étape juridique à votre place.'
              },
              {
                Icon: (props: any) => (
                  <svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                ),
                title: '0€ pour l'acheteur',
                text: 'Notre rémunération est versée par l'agence partenaire tunisienne. Vous bénéficiez d\'un accompagnement complet sans aucun frais.'
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="text-center"
              >
                <item.Icon className="w-12 h-12 mx-auto mb-4" style={{ color: '#1B6CA8' }} />
                <h3 className="font-display text-2xl mb-3 text-nuit">{item.title}</h3>
                <p className="font-sans text-gray-600 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION C - Selection de biens */}
      <section className="bg-sable py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="font-display text-5xl text-nuit">Sélection du moment</h2>
            <p className="text-gray-500 font-sans mt-4">
              Des biens vérifiés, des prix transparents, une équipe disponible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBiens.map((bien, i) => (
              <motion.div
                key={bien.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="bg-white overflow-hidden group"
              >
                <div className="relative h-56">
                  <Image
                    src={bien.img}
                    alt={bien.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className="inline-block px-3 py-1 text-white text-xs font-sans font-semibold"
                      style={{
                        backgroundColor:
                          bien.badge === 'Exclusivité'
                            ? '#1B6CA8'
                            : bien.badge === 'Coup de cœur'
                            ? '#B8923A'
                            : '#374151'
                      }}
                    >
                      {bien.badge}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-wide text-gray-400 mb-1">
                    {bien.zone}
                  </p>
                  <h3 className="font-display text-xl text-nuit mb-3">
                    {bien.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    {bien.surface}m² · {bien.rooms} ch. · {bien.baths} sdb
                  </p>
                  {bien.price && (
                    <p className="text-2xl font-semibold mb-4" style={{ color: '#1B6CA8' }}>
                      {bien.price.toLocaleString('fr-FR')}€
                    </p>
                  )}
                  <Link
                    href={`/biens/${bien.id}`}
                    className="block w-full text-center py-3 border font-sans font-medium transition-colors"
                    style={{
                      borderColor: '#1B6CA8',
                      color: '#1B6CA8'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#1B6CA8'
                      e.currentTarget.style.color = 'white'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent'
                      e.currentTarget.style.color = '#1B6CA8'
                    }}
                  >
                    Découvrir ce bien →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="text-center mt-10">
            <Link
              href="/biens"
              className="inline-block px-10 py-3.5 text-white font-sans font-medium hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#1B6CA8' }}
            >
              Voir tous nos biens →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION D - Notre processus */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 {...fadeInUp} className="font-display text-5xl text-center text-nuit mb-16">
            Comment ça marche ?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              {
                num: '1',
                title: 'Votre projet',
                text: 'Vous nous décrivez votre budget, la zone et le type de bien souhaité.'
              },
              {
                num: '2',
                title: 'Sélection',
                text: 'Nous interrogeons nos agences partenaires tunisiennes et sélectionnons les biens correspondants.'
              },
              {
                num: '3',
                title: 'Visites',
                text: 'Organisation de visites en présentiel ou en visio depuis la France, avec compte-rendu en français.'
              },
              {
                num: '4',
                title: 'Audit juridique',
                text: 'Vérification du titre foncier, obtention de l\'autorisation du gouverneur, conformité réglementaire.'
              },
              {
                num: '5',
                title: 'Signature',
                text: 'Coordination notaire, banque tunisienne, remise des clés.'
              }
            ].map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="text-center"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4"
                  style={{ backgroundColor: '#1B6CA8' }}
                >
                  {step.num}
                </div>
                <h3 className="font-sans font-semibold text-nuit mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION E - L equipe */}
      <section className="bg-sable py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 {...fadeInUp} className="font-display text-5xl italic text-center text-nuit mb-16">
            Deux expertises, un seul interlocuteur
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white shadow-sm p-8"
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4"
                style={{ backgroundColor: '#1B6CA8' }}
              >
                CR
              </div>
              <h3 className="font-display text-2xl text-nuit">Cyril Rancurel</h3>
              <p className="text-sm tracking-wide uppercase mt-1 mb-4" style={{ color: '#B8923A' }}>
                Conseiller & Fondateur
              </p>
              <p className="font-sans text-gray-700 leading-relaxed mb-4">
                Ancien conseiller immobilier chez Propriétés-Privées.com, réseau mandataires n°1 en France. Entrepreneur digital depuis 15 ans, passionné par le marché immobilier tunisien et son potentiel pour les investisseurs européens.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Immobilier', 'Négociation', 'France/Tunisie'].map((tag) => (
                  <span key={tag} className="bg-gray-100 text-xs px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                🇫🇷 Français · 🇬🇧 Anglais
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white shadow-sm p-8"
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4"
                style={{ backgroundColor: '#B8923A' }}
              >
                ER
              </div>
              <h3 className="font-display text-2xl text-nuit">Emna Rancurel</h3>
              <p className="text-sm tracking-wide uppercase mt-1 mb-4" style={{ color: '#B8923A' }}>
                Juriste — Droit des affaires internationales
              </p>
              <p className="font-sans text-gray-700 leading-relaxed mb-4">
                Spécialisée dans les transactions immobilières franco-tunisiennes. Elle maîtrise le cadre légal applicable aux acheteurs étrangers : titre foncier, autorisation du gouverneur, conformité à la réglementation tunisienne.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Droit tunisien', 'Due diligence', 'Contrats'].map((tag) => (
                  <span key={tag} className="bg-gray-100 text-xs px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                🇫🇷 Français · 🇹🇳 Arabe · 🇬🇧 Anglais
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION F - Temoignages */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 {...fadeInUp} className="font-display text-4xl text-center text-nuit mb-16">
            Ils nous ont fait confiance
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: 'Nous avons acheté notre villa à Hammamet en 8 mois. Cyril et Emna ont géré tout le volet juridique — nous n\'avons eu qu\'à signer chez le notaire.',
                author: 'Marie & Pierre L., Lyon'
              },
              {
                text: 'Grâce à CapTunisia, j\'ai investi dans un appartement à La Marsa avec un rendement locatif de 7% brut. Un service d\'une transparence totale.',
                author: 'Karim B., Paris'
              },
              {
                text: 'La rigueur d\'Emna sur le dossier juridique et la disponibilité de Cyril m\'ont convaincu. L\'autorisation du gouverneur a été obtenue en 5 mois.',
                author: 'Sophie D., Bordeaux'
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="bg-white border border-gray-100 shadow-sm p-8"
              >
                <div className="text-yellow-500 text-lg mb-4">⭐⭐⭐⭐⭐</div>
                <p className="font-sans text-gray-700 leading-relaxed mb-4 italic">
                  {testimonial.text}
                </p>
                <p className="font-sans text-sm font-semibold text-gray-900">
                  {testimonial.author}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION G - CTA final */}
      <section
        className="py-20"
        style={{ background: 'linear-gradient(135deg, #0d3d6b 0%, #1B6CA8 100%)' }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            {...fadeInUp}
            className="font-display text-5xl md:text-6xl italic text-white"
          >
            Votre projet en Tunisie commence ici
          </motion.h2>
          <motion.p
            {...fadeInUp}
            className="text-white/70 font-sans mt-4 text-lg"
          >
            Consultation gratuite · Réponse sous 24h · Aucun engagement
          </motion.p>
          <motion.div {...fadeInUp} className="mt-8">
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-white font-sans font-medium hover:bg-white/90 transition-colors"
              style={{ color: '#1B6CA8' }}
            >
              Démarrer mon projet →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
