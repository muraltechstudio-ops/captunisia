'use client'

import { useState } from 'react'
import VideoHero from '@/components/VideoHero'
import HomeContent from '@/components/HomeContent'
import { biens } from '@/data/biens'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
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
              Et si la vie en France vous coûtait trop cher ?
            </h2>
            <p className="text-white/70 font-sans text-lg max-w-3xl mx-auto leading-relaxed">
              Inflation galopante, immobilier parisien à 10 000 €/m², loyers explosés, pouvoir d&apos;achat en chute libre...
              Les retraités ne s&apos;en sortent plus, les familles s&apos;endettent sur 30 ans pour un 60m².
              <span className="text-[#B8923A] font-semibold block mt-4">Il existe une alternative à 2h de vol.</span>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { stat: "10 200 €/m²", label: "Prix moyen Paris 2026" },
              { stat: "+47%", label: "Hausse loyers en 10 ans" },
              { stat: "1 500 €/mois", label: "Suffit pour vivre confortablement en Tunisie" },
              { stat: "2h de vol", label: "Depuis Paris ou Lyon" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center"
              >
                <div className="text-5xl font-display font-bold text-[#B8923A] mb-3">{item.stat}</div>
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
              Tunisie vs France - La réalité des chiffres
            </h2>
            <p className="text-gray-600 font-sans text-lg max-w-2xl mx-auto">
              Un comparatif sans concession qui montre pourquoi des milliers de Français font le choix de la Tunisie en 2026.
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
                  <th className="px-6 py-4 text-center font-sans font-semibold text-lg">🇫🇷 France</th>
                  <th className="px-6 py-4 text-center font-sans font-semibold text-lg">🇹🇳 Tunisie</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { item: "Appartement 80m² (achat)", france: "350 000 € à Paris", tunisie: "80 000 € à Tunis" },
                  { item: "Loyer mensuel 2 pièces", france: "1 200 € à Lyon", tunisie: "300 € à La Marsa" },
                  { item: "Repas au restaurant", france: "20-35 €", tunisie: "5-10 €" },
                  { item: "Femme de ménage (mois)", france: "400-600 €", tunisie: "80-120 €" },
                  { item: "Facture électricité", france: "120 €/mois", tunisie: "15-25 €/mois" },
                  { item: "Soleil annuel", france: "1 800h (Paris)", tunisie: "3 000h" },
                  { item: "Retraite confortable", france: "3 000 €/mois", tunisie: "1 200 €/mois" }
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#F8F6F1]" : "bg-white"}>
                    <td className="px-6 py-4 font-sans font-medium text-[#111009]">{row.item}</td>
                    <td className="px-6 py-4 text-center font-sans text-gray-700">{row.france}</td>
                    <td className="px-6 py-4 text-center font-sans font-semibold text-[#1B6CA8]">{row.tunisie}</td>
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
            <Link href="/contact" className="inline-block px-10 py-4 bg-[#1B6CA8] text-white font-sans font-semibold rounded-lg hover:bg-[#1B6CA8]/90 transition-colors">
              Je veux connaître mon budget exact
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
              Pourquoi la Tunisie plutôt que le Maroc, l&apos;Espagne ou le Portugal ?
            </h2>
            <p className="text-gray-600 font-sans text-lg max-w-3xl mx-auto">
              Chaque destination d&apos;expatriation a ses avantages. Voici pourquoi la Tunisie surpasse toutes les autres en 2026.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { vs: "vs Maroc", avantage: "Droit de propriété 100% sécurisé pour les étrangers, pas de restriction sur les virements de fonds" },
              { vs: "vs Espagne/Portugal", avantage: "Prix 3 à 5x moins élevés, fiscalité avantageuse, pas de golden visa nécessaire" },
              { vs: "vs Thaïlande/Bali", avantage: "Même fuseau horaire que la France, vol direct 2h, culture méditerranéenne proche" },
              { vs: "vs Grèce", avantage: "Pas de crise bancaire, stabilité politique croissante, immobilier non saturé" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[#1B6CA8]/10 hover:border-[#1B6CA8] transition-all"
              >
                <div className="text-[#B8923A] font-sans font-bold text-sm uppercase tracking-wide mb-3">{item.vs}</div>
                <p className="text-gray-700 font-sans text-sm leading-relaxed">{item.avantage}</p>
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
            <h3 className="font-display text-3xl text-[#111009] mb-8 text-center">Les 10 avantages concrets de la Tunisie</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "À seulement 2h de vol de Paris, Lyon, Marseille, Nice",
                "Même fuseau horaire (GMT+1) - zéro décalage avec la France",
                "Langue : le français est parlé partout, dans les affaires et l&apos;administration",
                "Immobilier 3 à 8x moins cher qu&apos;en France",
                "Coût de la vie 60 à 70% moins élevé",
                "Fiscalité très avantageuse pour les non-résidents",
                "Sécurité : l&apos;une des meilleures en Afrique du Nord",
                "Gastronomie méditerranéenne exceptionnelle",
                "3 000 heures de soleil par an, mer à portée de main",
                "Système de santé privé de qualité à des prix accessibles"
              ].map((avantage, i) => (
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
              La Tunisie que vous ne connaissez pas encore
            </h2>
            <p className="text-gray-600 font-sans text-lg max-w-2xl mx-auto">
              Au-delà des clichés, découvrez un pays aux multiples facettes où il fait bon vivre.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: "/sidi-bou-said.jpg", label: "Sidi Bou Saïd - Village emblématique aux portes bleues" },
              { img: "https://images.unsplash.com/photo-1600011689032-8b628b8a8747?w=800", label: "Hammamet - Plages de sable fin et eaux turquoise" },
              { img: "/cathedrale-tunis.webp", label: "Cathédrale Saint-Vincent de Paul - Architecture néo-byzantine majestueuse" },
              { img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800", label: "Gastronomie tunisienne - Saveurs méditerranéennes authentiques" },
              { img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800", label: "Villa de luxe - Piscine privée et jardin paysagé" },
              { img: "/colisee-el-jem.webp", label: "Colisée d'El Jem - Monument romain majestueux" }
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
                  alt={item.label}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-sans font-semibold text-lg">{item.label}</p>
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
              CapTunisia s&apos;adresse à vous si...
            </h2>
            <p className="text-gray-600 font-sans text-lg max-w-2xl mx-auto">
              Quatre profils, un même objectif : vivre mieux pour moins cher.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: "🏖️",
                title: "Retraité français",
                desc: "Votre retraite de 1 500 €/mois vous permet de vivre royalement. Villa avec piscine, femme de ménage, restaurants... La vie dont vous rêviez, enfin accessible."
              },
              {
                icon: "💻",
                title: "Nomade numérique",
                desc: "Télétravaillez depuis Hammamet ou La Marsa. Fibre optique, co-workings modernes, visa digital nomad, et 300 jours de soleil."
              },
              {
                icon: "💰",
                title: "Investisseur",
                desc: "Rendements locatifs de 6 à 10% sur la location saisonnière. L&apos;immobilier tunisien est sous-évalué : c&apos;est maintenant qu&apos;il faut investir."
              },
              {
                icon: "👨‍👩‍👧",
                title: "Famille expatriée",
                desc: "Lycées français, écoles internationales, sécurité, plages... Un cadre de vie exceptionnel pour élever vos enfants."
              }
            ].map((profil, i) => (
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
            <Link href="/services" className="inline-block px-10 py-4 bg-[#1B6CA8] text-white font-sans font-semibold rounded-lg hover:bg-[#1B6CA8]/90 transition-colors">
              Découvrir nos services
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
              Questions fréquentes
            </h2>
            <p className="text-gray-600 font-sans text-lg">
              Tout ce que vous devez savoir avant d&apos;acheter en Tunisie.
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: "Un Français peut-il acheter un bien immobilier en Tunisie ?",
                r: "Oui, absolument. Les ressortissants français et européens peuvent acheter librement un bien immobilier en Tunisie, sans restriction de nationalité. Le rapatriement des fonds est garanti par la Banque Centrale de Tunisie (BCT). Seules les terres agricoles sont soumises à autorisation préalable du gouverneur."
              },
              {
                q: "Faut-il payer des impôts en France sur un bien en Tunisie ?",
                r: "La convention fiscale franco-tunisienne de 1973 évite la double imposition. Si vous êtes résident fiscal français et que vous percevez des revenus locatifs en Tunisie, vous déclarez ces revenus en France et bénéficiez d&apos;un crédit d&apos;impôt pour les impôts déjà payés en Tunisie. Nous vous accompagnons dans toutes ces démarches."
              },
              {
                q: "Quel budget minimum pour acheter en Tunisie ?",
                r: "À partir de 40 000 € pour un appartement en résidence sécurisée à Hammamet ou Sousse. Pour une villa avec piscine, comptez entre 120 000 € et 250 000 € selon la localisation et la superficie. Ces prix sont 3 à 8 fois moins élevés qu&apos;en France pour un standing équivalent."
              },
              {
                q: "Est-ce sécurisé d&apos;acheter en Tunisie en 2026 ?",
                r: "Oui. Le droit de propriété est garanti par la constitution tunisienne et le système de titre foncier (similaire au cadastre français) sécurise juridiquement votre acquisition. CapTunisia vérifie systématiquement la légalité du bien, l&apos;absence de contentieux, et vous accompagne jusqu&apos;à la signature chez le notaire."
              },
              {
                q: "Combien coûte l&apos;accompagnement CapTunisia ?",
                r: "Nos honoraires sont transparents : 690 € TTC pour le pack Essentiel, 990 € TTC pour le pack Sécurité (recommandé), et 1 690 € TTC pour le pack Premium avec déplacement physique en Tunisie inclus. Consultez notre page /tarifs pour tous les détails."
              }
            ].map((faq, i) => (
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mt-12"
          >
            <Link href="/contact" className="inline-block px-10 py-4 bg-[#B8923A] text-white font-sans font-semibold rounded-lg hover:bg-[#B8923A]/90 transition-colors">
              Une autre question ? Contactez-nous
            </Link>
          </motion.div>
        </div>
      </section>

      <HomeContent featuredBiens={featuredBiens} />
    </>
  )
}
