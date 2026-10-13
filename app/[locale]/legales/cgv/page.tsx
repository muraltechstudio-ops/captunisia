'use client'

export const metadata = {
  title: 'Conditions générales de service — CapTunisia',
  description: 'Conditions générales de service CapTunisia',
}

export default function CGVPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        <p className="text-sm text-gray-500 mb-4">Dernière mise à jour : octobre 2026</p>
        <h1 className="font-display text-5xl text-nuit mb-12">Conditions générales de service</h1>

        <div className="border-t border-gray-100 mt-8 pt-8">
          <h2 className="font-sans font-semibold text-lg text-azur mb-3">Objet</h2>
          <p className="font-sans text-gray-600 leading-relaxed">
            Les présentes conditions régissent le service d'apport d'affaires proposé par CapTunisia (Open Crest LLC) consistant à mettre en relation des acquéreurs européens avec des agences immobilières tunisiennes partenaires.
          </p>
        </div>

        <div className="border-t border-gray-100 mt-8 pt-8">
          <h2 className="font-sans font-semibold text-lg text-azur mb-3">Nature du service</h2>
          <p className="font-sans text-gray-600 leading-relaxed">
            CapTunisia intervient exclusivement en qualité d'apporteur d'affaires. CapTunisia n'est pas partie à la transaction immobilière, ne détient pas de fonds et ne garantit pas la conclusion de la vente.
          </p>
        </div>

        <div className="border-t border-gray-100 mt-8 pt-8">
          <h2 className="font-sans font-semibold text-lg text-azur mb-3">Tarifs</h2>
          <p className="font-sans text-gray-600 leading-relaxed">
            Les honoraires de CapTunisia sont les suivants : Pack Essentiel 690€ TTC, Pack Sécurité 990€ TTC, Pack Premium 1 690€ TTC (incluant une journée de déplacement physique en Tunisie). Une option d'accompagnement physique supplémentaire est disponible à 290€ par journée, frais de déplacement refacturés au réel. Le règlement s'effectue en une seule fois à la signature du contrat d'accompagnement. En contrepartie, CapTunisia s'engage à poursuivre ses recherches sans limite de durée jusqu'à validation d'un bien par le client. Aucun remboursement n'est dû si le client renonce à son projet après signature du contrat. Moyens de paiement acceptés : virement bancaire, PayPal.
          </p>
        </div>

        <div className="border-t border-gray-100 mt-8 pt-8">
          <h2 className="font-sans font-semibold text-lg text-azur mb-3">Obligations de CapTunisia</h2>
          <ul className="font-sans text-gray-600 leading-relaxed space-y-2 list-disc list-inside">
            <li>Mettre en relation l'acquéreur avec les agences partenaires correspondant à son projet</li>
            <li>Fournir les informations disponibles sur les biens sélectionnés</li>
            <li>Accompagner l'acquéreur dans la compréhension du cadre juridique tunisien applicable aux acheteurs étrangers</li>
            <li>Coordonner les visites (présentiel ou visio)</li>
          </ul>
        </div>

        <div className="border-t border-gray-100 mt-8 pt-8">
          <h2 className="font-sans font-semibold text-lg text-azur mb-3">Obligations de l'acquéreur</h2>
          <ul className="font-sans text-gray-600 leading-relaxed space-y-2 list-disc list-inside">
            <li>Fournir des informations exactes sur son projet et sa capacité financière</li>
            <li>Prendre ses décisions d'achat en toute indépendance</li>
            <li>Conclure directement avec l'agence partenaire et/ou le notaire tunisien</li>
          </ul>
        </div>

        <div className="border-t border-gray-100 mt-8 pt-8">
          <h2 className="font-sans font-semibold text-lg text-azur mb-3">Limitation de responsabilité</h2>
          <p className="font-sans text-gray-600 leading-relaxed">
            CapTunisia ne saurait être tenu responsable des décisions d'investissement de l'acquéreur, des délais administratifs (autorisation du gouverneur), des variations de prix du marché tunisien, ou de tout litige survenant entre l'acquéreur et l'agence partenaire ou le vendeur.
          </p>
        </div>

        <div className="border-t border-gray-100 mt-8 pt-8">
          <h2 className="font-sans font-semibold text-lg text-azur mb-3">Droit applicable</h2>
          <p className="font-sans text-gray-600 leading-relaxed">
            Les présentes conditions sont soumises au droit français. En cas de litige, les parties rechercheront une solution amiable avant toute action judiciaire. À défaut, les tribunaux compétents sont ceux du ressort de Montpellier.
          </p>
        </div>

        <div className="border-t border-gray-100 mt-8 pt-8">
          <h2 className="font-sans font-semibold text-lg text-azur mb-3">Médiation</h2>
          <p className="font-sans text-gray-600 leading-relaxed">
            Conformément à l'article L.616-1 du Code de la consommation, en cas de litige non résolu, l'utilisateur peut recourir gratuitement à un médiateur de la consommation. CapTunisia adhère au service de médiation : CM2C - 14 rue Saint-Jean, 75017 Paris - <a href="https://www.cm2c.net" target="_blank" rel="noopener noreferrer" className="text-azur hover:underline">https://www.cm2c.net</a>
          </p>
        </div>
      </div>
    </div>
  )
}
