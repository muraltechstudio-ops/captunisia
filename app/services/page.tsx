import ServiceBlock from '@/components/ServiceBlock'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata = {
  title: 'Nos services — CapTunisia',
  description: 'Accompagnement immobilier complet pour acheter en Tunisie depuis la France.',
}

export default function ServicesPage() {
  const services = [
    {
      title: 'Recherche sur mesure',
      description: 'Nous interrogeons nos agences partenaires tunisiennes et sélectionnons les biens correspondant exactement à votre projet. Vous recevez uniquement les propriétés qui correspondent à vos critères de zone, budget, et type de bien. Chaque proposition est accompagnée d\'une fiche détaillée et d\'un premier avis juridique.',
      imageSrc: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800',
      imagePosition: 'left' as const
    },
    {
      title: 'Sécurisation juridique',
      description: 'Audit complet du titre foncier par notre juriste. Vérification de la conformité avec la loi de 1964 sur les terres agricoles. Gestion intégrale de l\'autorisation du gouverneur (délai 4-6 mois, obligatoire pour les étrangers). Rédaction de clauses protectrices dans le compromis de vente.',
      imageSrc: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800',
      imagePosition: 'right' as const
    },
    {
      title: 'Visites organisées',
      description: 'Organisation de visites en présentiel avec l\'agence locale, ou en visioconférence si vous n\'êtes pas sur place. Compte-rendu détaillé en français après chaque visite. Photos et vidéos complémentaires sur demande. Nous vous accompagnons à chaque étape pour poser les bonnes questions.',
      imageSrc: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800',
      imagePosition: 'left' as const
    },
    {
      title: 'Suivi jusqu\'à la signature',
      description: 'Coordination avec le notaire tunisien. Liaison avec votre banque si financement. Suivi du dossier d\'autorisation du gouverneur. Organisation de la procuration notariée si vous signez depuis la France. Présence à la remise des clés. Nous restons votre interlocuteur unique du début à la fin.',
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
            Notre accompagnement
          </h1>
          <p className="font-sans text-xl text-white/90 max-w-2xl mx-auto">
            Un service complet de A à Z pour sécuriser votre achat immobilier en Tunisie
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
            Pack Accompagnement
          </h2>
          <div className="bg-azur/5 border-2 border-azur rounded-lg p-8 mb-6">
            <p className="font-display text-5xl font-bold text-azur mb-4">0€</p>
            <p className="font-sans text-xl text-gray-700">pour l'acheteur</p>
          </div>
          <p className="font-sans text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Notre rémunération est versée par l'agence partenaire. Vous ne payez que les frais légaux :
            frais de notaire (~3% du prix) et autorisation du gouverneur (~200 TND).
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="font-display text-4xl font-bold text-nuit mb-12 text-center">
          Questions fréquentes
        </h2>
        <FaqAccordion />
      </div>
    </div>
  )
}
