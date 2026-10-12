'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import type { Bien } from '@/data/biens'

interface HomeContentProps {
  featuredBiens: Bien[]
}

export default function HomeContent({ featuredBiens }: HomeContentProps) {
  return (
    <div>
      <div className="bg-[#111009] py-5">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-white/70 font-sans text-[0.78rem] tracking-[0.12em] uppercase">
          <span>0 euro pour l acheteur</span>
          <span className="hidden md:inline opacity-20">|</span>
          <span>100% dossiers vérifiés</span>
          <span className="hidden md:inline opacity-20">|</span>
          <span>Accompagnement FR / AR / EN</span>
          <span className="hidden md:inline opacity-20">|</span>
          <span>Contrat sécurisé dès le départ</span>
        </div>
      </div>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
            <h2 className="font-display text-5xl italic text-nuit">La Tunisie, un marché immobilier d exception</h2>
            <p className="text-gray-500 font-sans mt-4 max-w-2xl mx-auto leading-relaxed">Des prix 3 à 5 fois inférieurs à la France, un cadre de vie méditerranéen, et une équipe franco-tunisienne pour sécuriser chaque étape.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Prix attractifs', text: 'De 60 000 euros pour un appartement standing à Hammamet. Des biens introuvables à ce prix en Europe méditerranéenne.' },
              { title: 'Cadre légal maîtrisé', text: 'Autorisation du gouverneur, titre foncier, loi 1964 sur les terres agricoles - nous gérons chaque étape juridique à votre place.' },
              { title: '0 euro pour l acheteur', text: 'Notre rémunération est versée par l agence partenaire tunisienne. Vous bénéficiez d un accompagnement complet sans aucun frais.' }
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.15 }} className="text-center">
                <h3 className="font-display text-2xl mb-3 text-nuit">{item.title}</h3>
                <p className="font-sans text-gray-600 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sable py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12">
            <h2 className="font-display text-5xl text-nuit">Sélection du moment</h2>
            <p className="text-gray-500 font-sans mt-4">Des biens vérifiés, des prix transparents, une équipe disponible.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBiens.map((bien, i) => (
              <motion.div key={bien.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.15 }} className="bg-white overflow-hidden group">
                <div className="relative h-56">
                  <Image src={bien.img} alt={bien.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 text-white text-xs font-sans font-semibold" style={{ backgroundColor: bien.badge === 'Exclusivité' ? '#1B6CA8' : bien.badge === 'Coup de coeur' ? '#B8923A' : '#374151' }}>{bien.badge}</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-wide text-gray-400 mb-1">{bien.zone}</p>
                  <h3 className="font-display text-xl text-nuit mb-3">{bien.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{bien.surface}m2 · {bien.rooms} ch. · {bien.baths} sdb</p>
                  {bien.price && <p className="text-2xl font-semibold mb-4" style={{ color: '#1B6CA8' }}>{bien.price.toLocaleString('fr-FR')} euros</p>}
                  <Link href={`/biens/${bien.id}`} className="block w-full text-center py-3 border font-sans font-medium transition-colors hover:bg-[#1B6CA8] hover:text-white" style={{ borderColor: '#1B6CA8', color: '#1B6CA8' }}>Découvrir ce bien</Link>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mt-10">
            <Link href="/biens" className="inline-block px-10 py-3.5 text-white font-sans font-medium hover:opacity-90 transition-opacity" style={{ backgroundColor: '#1B6CA8' }}>Voir tous nos biens</Link>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="font-display text-5xl text-center text-nuit mb-16">Comment ca marche ?</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { num: '1', title: 'Votre projet', text: 'Vous nous décrivez votre budget, la zone et le type de bien souhaité.' },
              { num: '2', title: 'Sélection', text: 'Nous interrogeons nos agences partenaires tunisiennes et sélectionnons les biens correspondants.' },
              { num: '3', title: 'Visites', text: 'Organisation de visites en présentiel ou en visio depuis la France, avec compte-rendu en français.' },
              { num: '4', title: 'Audit juridique', text: 'Vérification du titre foncier, obtention de l autorisation du gouverneur.' },
              { num: '5', title: 'Signature', text: 'Coordination notaire, banque tunisienne, remise des clés.' }
            ].map((step, i) => (
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
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="font-display text-5xl italic text-center text-nuit mb-16">Deux expertises, un seul interlocuteur</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="bg-white shadow-sm p-8">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                <Image src="/cyril-photo.jpg" alt="Cyril Rancurel" width={80} height={80} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-display text-2xl text-nuit">Cyril Rancurel</h3>
              <p className="text-sm tracking-wide uppercase mt-1 mb-4" style={{ color: '#B8923A' }}>Conseiller et Fondateur</p>
              <p className="font-sans text-gray-700 leading-relaxed mb-4">Ancien conseiller immobilier chez Propriétés-Privées.com, réseau mandataires numero 1 en France. Entrepreneur digital depuis 15 ans.</p>
              <p className="text-sm text-gray-600">Français · Anglais</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="bg-white shadow-sm p-8">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                <Image src="/emna-photo.webp" alt="Emna Rancurel" width={80} height={80} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-display text-2xl text-nuit">Emna Rancurel</h3>
              <p className="text-sm tracking-wide uppercase mt-1 mb-4" style={{ color: '#B8923A' }}>Juriste - Droit des affaires internationales</p>
              <p className="font-sans text-gray-700 leading-relaxed mb-4">Spécialisée dans les transactions immobilières franco-tunisiennes. Maîtrise du cadre légal tunisien.</p>
              <p className="text-sm text-gray-600">Français · Arabe · Anglais</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="font-display text-4xl text-center text-nuit mb-16">Ils nous ont fait confiance</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: 'Nous avons acheté notre villa à Hammamet en 8 mois. Cyril et Emna ont géré tout le volet juridique.', author: 'Marie et Pierre L., Lyon' },
              { text: 'Grace à CapTunisia, j ai investi dans un appartement à La Marsa avec un rendement de 7% brut.', author: 'Karim B., Paris' },
              { text: 'La rigueur d Emna et la disponibilité de Cyril. Autorisation obtenue en 5 mois.', author: 'Sophie D., Bordeaux' }
            ].map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.15 }} className="bg-white border border-gray-100 shadow-sm p-8">
                <div className="text-yellow-500 text-lg mb-4">⭐⭐⭐⭐⭐</div>
                <p className="font-sans text-gray-700 leading-relaxed mb-4 italic">{t.text}</p>
                <p className="font-sans text-sm font-semibold text-gray-900">{t.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: 'linear-gradient(135deg, #0d3d6b 0%, #1B6CA8 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="font-display text-5xl md:text-6xl italic text-white">Votre projet en Tunisie commence ici</motion.h2>
          <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-white/70 font-sans mt-4 text-lg">Consultation gratuite · Réponse sous 24h · Aucun engagement</motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mt-8">
            <Link href="/contact" className="inline-block px-10 py-4 bg-white font-sans font-medium hover:bg-white/90 transition-colors" style={{ color: '#1B6CA8' }}>Démarrer mon projet</Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
