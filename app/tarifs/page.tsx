import Link from 'next/link'

export const metadata = {
  title: "Nos tarifs — CapTunisia",
  description: "3 formules d'accompagnement immobilier franco-tunisien de 690€ a 1 690€ TTC. Paiement en deux fois. Option deplacement physique en Tunisie disponible.",
}

export default function TarifsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div style={{ backgroundColor: '#F8F6F1' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-5xl md:text-6xl italic text-nuit">
            Nos formules d accompagnement
          </h1>
          <p className="font-sans text-gray-500 mt-4 max-w-xl mx-auto">
            Des honoraires transparents, sans surprise. Payes directement a CapTunisia, independants des honoraires de l agence tunisienne.
          </p>
        </div>
      </div>

      {/* Cartes tarifs */}
      <div className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Essentiel */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 relative">
              <h3 className="font-sans font-semibold text-xl text-nuit">Essentiel</h3>
              <div className="mt-4">
                <span className="font-display text-5xl text-nuit">690 €</span>
                <span className="text-sm text-gray-400 ml-2">TTC</span>
              </div>
              <div className="border-t border-gray-100 my-6"></div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-0.5" style={{ color: '#1B6CA8' }} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Selection de biens sur mesure</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-0.5" style={{ color: '#1B6CA8' }} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Mise en relation avec l agence partenaire</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-0.5" style={{ color: '#1B6CA8' }} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Suivi WhatsApp tout au long du projet</span>
                </li>
              </ul>
              <Link href="/contact" className="block w-full text-center mt-8 py-3 border transition-colors" style={{ borderColor: '#1B6CA8', color: '#1B6CA8' }}>
                Demarrer mon projet
              </Link>
            </div>

            {/* Securite (recommande) */}
            <div className="relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                <span className="inline-block px-4 py-1 text-xs text-white tracking-widest uppercase" style={{ backgroundColor: '#B8923A' }}>Recommande</span>
              </div>
              <div className="rounded-lg p-8 text-white" style={{ backgroundColor: '#1B6CA8' }}>
                <h3 className="font-sans font-semibold text-xl">Securite</h3>
                <div className="mt-4">
                  <span className="font-display text-5xl">990 €</span>
                  <span className="text-sm opacity-70 ml-2">TTC</span>
                </div>
                <div className="border-t my-6" style={{ borderColor: 'rgba(255,255,255,0.2)' }}></div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-3 mt-0.5 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Tout le pack Essentiel</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-3 mt-0.5 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Audit juridique complet du bien</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-3 mt-0.5 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Revue du compromis de vente</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-3 mt-0.5 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Note de risques personnalisee</span>
                  </li>
                </ul>
                <Link href="/contact" className="block w-full text-center mt-8 py-3 bg-white font-medium transition-colors hover:bg-white/90" style={{ color: '#1B6CA8' }}>
                  Choisir ce pack
                </Link>
              </div>
            </div>

            {/* Premium */}
            <div className="relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                <span className="inline-block px-4 py-1 text-xs text-white tracking-widest uppercase" style={{ backgroundColor: '#111009' }}>Accompagnement complet</span>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="font-sans font-semibold text-xl text-nuit">Premium</h3>
                <div className="mt-4">
                  <span className="font-display text-5xl text-nuit">1 690 €</span>
                  <span className="text-sm text-gray-400 ml-2">TTC</span>
                </div>
                <div className="border-t border-gray-100 my-6"></div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-3 mt-0.5" style={{ color: '#1B6CA8' }} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">Tout le pack Securite</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-3 mt-0.5" style={{ color: '#1B6CA8' }} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">Procuration notariee</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-3 mt-0.5" style={{ color: '#1B6CA8' }} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">Accompagnement signature acte definitif</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-3 mt-0.5" style={{ color: '#1B6CA8' }} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">1 journee de deplacement physique en Tunisie incluse</span>
                  </li>
                </ul>
                <Link href="/contact" className="block w-full text-center mt-8 py-3 border transition-colors" style={{ borderColor: '#1B6CA8', color: '#1B6CA8' }}>
                  Choisir ce pack
                </Link>
              </div>
            </div>
          </div>

          {/* Add-on */}
          <div className="mt-14 max-w-2xl mx-auto text-center p-8 rounded-lg border" style={{ backgroundColor: '#F8F6F1', borderColor: 'rgba(184, 146, 58, 0.3)' }}>
            <div className="text-2xl mb-3" style={{ color: '#B8923A' }}>✈</div>
            <h3 className="font-sans font-semibold text-lg text-nuit">Option complementaire</h3>
            <p className="text-gray-700 mt-2">Journee d accompagnement physique supplementaire en Tunisie — 290 €/jour</p>
            <p className="text-sm text-gray-500 mt-2">Frais de deplacement (vol + hebergement) refactures au reel sur justificatifs. Disponible en complement de toutes les formules.</p>
          </div>

          {/* Modalites */}
          <div className="mt-6 max-w-2xl mx-auto bg-gray-50 border border-gray-200 p-6 rounded-lg">
            <h3 className="font-sans font-semibold mb-3 text-nuit">Modalites de paiement</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Les honoraires sont regles en deux fois : 50% a la signature du contrat d accompagnement, 50% a la premiere presentation de biens. Paiement par virement bancaire ou PayPal. Aucun remboursement n est du si le client renonce a son projet apres engagement de CapTunisia. Les honoraires CapTunisia sont independants et distincts des honoraires de l agence tunisienne, qui restent a la charge du vendeur selon les usages locaux.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="py-16 text-center" style={{ backgroundColor: '#1B6CA8' }}>
        <h2 className="font-display text-4xl text-white italic">Une question sur nos formules ?</h2>
        <p className="text-white/70 font-sans mt-3">Cyril vous repond sous 24h.</p>
        <Link href="/contact" className="inline-block mt-8 px-10 py-3.5 bg-white font-medium transition-colors hover:bg-white/90" style={{ color: '#1B6CA8' }}>
          Nous contacter
        </Link>
      </div>
    </div>
  )
}
