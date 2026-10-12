export const metadata = {
  title: 'Mentions légales — CapTunisia',
  description: 'Mentions légales du site CapTunisia',
}

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        <p className="text-sm text-gray-500 mb-4">Derniere mise a jour : octobre 2026</p>
        <h1 className="font-display text-5xl text-nuit mb-12">Mentions legales</h1>

        <div className="border-t border-gray-100 mt-8 pt-8">
          <h2 className="font-sans font-semibold text-lg text-azur mb-3">Editeur du site</h2>
          <div className="font-sans text-gray-600 leading-relaxed space-y-2">
            <p><strong>Raison sociale :</strong> Open Crest LLC (French Branch)</p>
            <p><strong>Forme juridique :</strong> Societe a responsabilite limitee de droit americain (LLC - New Mexico), succursale francaise</p>
            <p><strong>SIREN :</strong> 108390410</p>
            <p><strong>TVA intracommunautaire :</strong> FR82108390410</p>
            <p><strong>RCS :</strong> Montpellier</p>
            <p><strong>Siege social :</strong> 4 rue du Labech, 34250 Palavas-les-Flots, France</p>
            <p><strong>Directeur de la publication :</strong> Cyril Rancurel</p>
            <p><strong>Contact :</strong> contact@captunisia.com - +33 6 36 22 69 87</p>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-8 pt-8">
          <h2 className="font-sans font-semibold text-lg text-azur mb-3">Hebergement</h2>
          <div className="font-sans text-gray-600 leading-relaxed space-y-2">
            <p><strong>Hebergeur :</strong> Vercel Inc.</p>
            <p><strong>Adresse :</strong> 340 Pine Street, Suite 701, San Francisco, CA 94104, Etats-Unis</p>
            <p><strong>Site :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-azur hover:underline">https://vercel.com</a></p>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-8 pt-8">
          <h2 className="font-sans font-semibold text-lg text-azur mb-3">Activite</h2>
          <p className="font-sans text-gray-600 leading-relaxed">
            CapTunisia est un service d apport d affaires. Il n est pas agent immobilier et n est pas soumis a la loi n 70-9 du 2 janvier 1970 (loi Hoguet) reglementant les activites des agents immobiliers en France. CapTunisia ne realise aucune transaction immobiliere, ne detient aucun fonds pour le compte de tiers et ne signe aucun acte au nom des parties. Son role se limite a la mise en relation entre acquereurs et agences immobilieres tunisiennes partenaires.
          </p>
        </div>

        <div className="border-t border-gray-100 mt-8 pt-8">
          <h2 className="font-sans font-semibold text-lg text-azur mb-3">Propriete intellectuelle</h2>
          <p className="font-sans text-gray-600 leading-relaxed">
            L ensemble du contenu du site (textes, visuels, structure) est la propriete exclusive d Open Crest LLC. Toute reproduction sans autorisation est interdite.
          </p>
        </div>

        <div className="border-t border-gray-100 mt-8 pt-8">
          <h2 className="font-sans font-semibold text-lg text-azur mb-3">Donnees personnelles</h2>
          <p className="font-sans text-gray-600 leading-relaxed">
            Pour plus d informations sur le traitement de vos donnees personnelles, consultez notre <a href="/legales/confidentialite" className="text-azur hover:underline">politique de confidentialite</a>.
          </p>
        </div>
      </div>
    </div>
  )
}
