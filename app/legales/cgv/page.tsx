export const metadata = {
  title: 'Conditions generales de service — CapTunisia',
  description: 'Conditions generales de service CapTunisia',
}

export default function CGVPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-sm text-gray-500 mb-4">Derniere mise a jour : octobre 2026</p>
        <h1 className="font-display text-5xl text-nuit mb-12">Conditions generales de service</h1>

        <div className="border-t border-gray-100 mt-8 pt-8">
          <h2 className="font-sans font-semibold text-lg text-azur mb-3">Objet</h2>
          <p className="font-sans text-gray-600 leading-relaxed">
            Les presentes conditions regissent le service d apport d affaires propose par CapTunisia (Open Crest LLC) consistant a mettre en relation des acquereurs europeens avec des agences immobilieres tunisiennes partenaires.
          </p>
        </div>

        <div className="border-t border-gray-100 mt-8 pt-8">
          <h2 className="font-sans font-semibold text-lg text-azur mb-3">Nature du service</h2>
          <p className="font-sans text-gray-600 leading-relaxed">
            CapTunisia intervient exclusivement en qualite d apporteur d affaires. CapTunisia n est pas partie a la transaction immobiliere, ne detient pas de fonds et ne garantit pas la conclusion de la vente.
          </p>
        </div>

        <div className="border-t border-gray-100 mt-8 pt-8">
          <h2 className="font-sans font-semibold text-lg text-azur mb-3">Tarifs</h2>
          <p className="font-sans text-gray-600 leading-relaxed">
            Les honoraires de CapTunisia sont les suivants : Pack Essentiel 690€ TTC, Pack Securite 990€ TTC, Pack Premium 1 690€ TTC (incluant une journee de deplacement physique en Tunisie). Une option d accompagnement physique supplementaire est disponible a 290€ par journee, frais de deplacement refactures au reel. Le reglement s effectue en deux fois : 50% a la signature du contrat, 50% a la premiere presentation de biens. Moyens de paiement acceptes : virement bancaire, PayPal.
          </p>
        </div>

        <div className="border-t border-gray-100 mt-8 pt-8">
          <h2 className="font-sans font-semibold text-lg text-azur mb-3">Obligations de CapTunisia</h2>
          <ul className="font-sans text-gray-600 leading-relaxed space-y-2 list-disc list-inside">
            <li>Mettre en relation l acquereur avec les agences partenaires correspondant a son projet</li>
            <li>Fournir les informations disponibles sur les biens selectionnes</li>
            <li>Accompagner l acquereur dans la comprehension du cadre juridique tunisien applicable aux acheteurs etrangers</li>
            <li>Coordonner les visites (presentiel ou visio)</li>
          </ul>
        </div>

        <div className="border-t border-gray-100 mt-8 pt-8">
          <h2 className="font-sans font-semibold text-lg text-azur mb-3">Obligations de l acquereur</h2>
          <ul className="font-sans text-gray-600 leading-relaxed space-y-2 list-disc list-inside">
            <li>Fournir des informations exactes sur son projet et sa capacite financiere</li>
            <li>Prendre ses decisions d achat en toute independance</li>
            <li>Conclure directement avec l agence partenaire et/ou le notaire tunisien</li>
          </ul>
        </div>

        <div className="border-t border-gray-100 mt-8 pt-8">
          <h2 className="font-sans font-semibold text-lg text-azur mb-3">Limitation de responsabilite</h2>
          <p className="font-sans text-gray-600 leading-relaxed">
            CapTunisia ne saurait etre tenu responsable des decisions d investissement de l acquereur, des delais administratifs (autorisation du gouverneur), des variations de prix du marche tunisien, ou de tout litige survenant entre l acquereur et l agence partenaire ou le vendeur.
          </p>
        </div>

        <div className="border-t border-gray-100 mt-8 pt-8">
          <h2 className="font-sans font-semibold text-lg text-azur mb-3">Droit applicable</h2>
          <p className="font-sans text-gray-600 leading-relaxed">
            Les presentes conditions sont soumises au droit francais. En cas de litige, les parties rechercheront une solution amiable avant toute action judiciaire. A defaut, les tribunaux competents sont ceux du ressort de Montpellier.
          </p>
        </div>

        <div className="border-t border-gray-100 mt-8 pt-8">
          <h2 className="font-sans font-semibold text-lg text-azur mb-3">Mediation</h2>
          <p className="font-sans text-gray-600 leading-relaxed">
            Conformement a l article L.616-1 du Code de la consommation, en cas de litige non resolu, l utilisateur peut recourir gratuitement a un mediateur de la consommation. CapTunisia adhere au service de mediation : CM2C - 14 rue Saint-Jean, 75017 Paris - <a href="https://www.cm2c.net" target="_blank" rel="noopener noreferrer" className="text-azur hover:underline">https://www.cm2c.net</a>
          </p>
        </div>
      </div>
    </div>
  )
}
