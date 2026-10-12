import TeamCard from '@/components/TeamCard'

export const metadata = {
  title: "L'équipe — CapTunisia",
  description: 'Rencontrez l\'équipe franco-tunisienne de CapTunisia.',
}

export default function EquipePage() {
  return (
    <div className="min-h-screen bg-sable">
      {/* Header */}
      <div className="bg-nuit text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
            Deux expertises, un seul interlocuteur
          </h1>
          <p className="font-sans text-lg opacity-90 max-w-2xl mx-auto">
            L'alliance de l'expertise immobilière française et de la maîtrise du droit tunisien
          </p>
        </div>
      </div>

      {/* Team Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <TeamCard
            name="Cyril Rancurel"
            role="Conseiller & Fondateur"
            bio="Ancien conseiller immobilier chez Propriétés-Privées.com (réseau mandataires n°1 en France), entrepreneur digital depuis 15 ans, passionné par la Tunisie et convaincu du potentiel de son marché immobilier pour les investisseurs européens."
            tags={['Immobilier', 'Négociation', 'Relation clients', 'France / Tunisie']}
            languages={['Français', 'Anglais']}
            phone="+33 6 36 22 69 87"
            index={0}
            photo="/cyril-photo.jpg"
          />
          <TeamCard
            name="Emna Rancurel"
            role="Juriste en droit des affaires internationales"
            bio="Juriste spécialisée en droit des affaires internationales, Emna coordonne le volet juridique de chaque dossier. Elle maîtrise le cadre légal tunisien applicable aux achats immobiliers par des étrangers — titre foncier, autorisation du gouverneur, conformité réglementaire."
            tags={['Droit tunisien', 'Droit international', 'Due diligence', 'Contrats']}
            languages={['Français', 'Arabe', 'Anglais']}
            phone="+33 7 43 35 41 84"
            index={1}
          />
        </div>

        {/* Partners Section */}
        <div className="bg-white rounded-lg shadow-lg p-10">
          <h2 className="font-display text-3xl font-bold text-nuit mb-6">
            Nos partenaires
          </h2>
          <p className="font-sans text-lg text-gray-700 leading-relaxed mb-6">
            Nous travaillons avec un réseau d'agences immobilières sélectionnées en Tunisie
            (Hammamet, La Marsa, Sousse, Djerba). Chaque partenaire a signé notre charte qualité.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-sans text-sm text-gray-600">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-azur mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M5 13l4 4L19 7" />
              </svg>
              Hammamet
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-azur mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M5 13l4 4L19 7" />
              </svg>
              La Marsa
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-azur mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M5 13l4 4L19 7" />
              </svg>
              Sousse
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-azur mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M5 13l4 4L19 7" />
              </svg>
              Djerba
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
