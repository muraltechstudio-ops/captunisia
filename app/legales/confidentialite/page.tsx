export const metadata = {
  title: 'Politique de confidentialité — CapTunisia',
  description: 'Politique de confidentialité et protection des données personnelles',
}

export default function ConfidentialitePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        <p className="text-sm text-gray-500 mb-4">Derniere mise a jour : octobre 2026</p>
        <h1 className="font-display text-5xl text-nuit mb-12">Politique de confidentialité</h1>

        <div className="border-t border-gray-100 mt-8 pt-8">
          <h2 className="font-sans font-semibold text-lg text-azur mb-3">Responsable du traitement</h2>
          <p className="font-sans text-gray-600 leading-relaxed">
            Open Crest LLC (French Branch) - contact@captunisia.com
          </p>
        </div>

        <div className="border-t border-gray-100 mt-8 pt-8">
          <h2 className="font-sans font-semibold text-lg text-azur mb-3">Données collectées</h2>
          <p className="font-sans text-gray-600 leading-relaxed">
            Via le formulaire de contact : prénom, nom, email, téléphone, budget, zone souhaitée, type de bien, message. Ces données sont collectées dans le seul but de répondre à la demande de l'utilisateur.
          </p>
        </div>

        <div className="border-t border-gray-100 mt-8 pt-8">
          <h2 className="font-sans font-semibold text-lg text-azur mb-3">Base légale</h2>
          <p className="font-sans text-gray-600 leading-relaxed">
            Article 6.1.b du RGPD - execution de mesures précontractuelles à la demande de la personne concernée.
          </p>
        </div>

        <div className="border-t border-gray-100 mt-8 pt-8">
          <h2 className="font-sans font-semibold text-lg text-azur mb-3">Duree de conservation</h2>
          <p className="font-sans text-gray-600 leading-relaxed">
            3 ans a compter du dernier contact.
          </p>
        </div>

        <div className="border-t border-gray-100 mt-8 pt-8">
          <h2 className="font-sans font-semibold text-lg text-azur mb-3">Destinataires</h2>
          <p className="font-sans text-gray-600 leading-relaxed">
            Les données sont transmises par email à l'équipe CapTunisia via Resend (sous-traitant, politique de confidentialité : <a href="https://resend.com/privacy" target="_blank" rel="noopener noreferrer" className="text-azur hover:underline">https://resend.com/privacy</a>). Elles ne sont pas vendues ni cédées à des tiers.
          </p>
        </div>

        <div className="border-t border-gray-100 mt-8 pt-8">
          <h2 className="font-sans font-semibold text-lg text-azur mb-3">Droits des utilisateurs</h2>
          <p className="font-sans text-gray-600 leading-relaxed">
            Conformément au RGPD (Règlement UE 2016/679) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation et d'opposition. Pour exercer ces droits : contact@captunisia.com.
          </p>
        </div>

        <div className="border-t border-gray-100 mt-8 pt-8">
          <h2 className="font-sans font-semibold text-lg text-azur mb-3">Cookies</h2>
          <p className="font-sans text-gray-600 leading-relaxed">
            Ce site n'utilise pas de cookies de tracking. Aucune donnée de navigation n'est transmise à des tiers à des fins publicitaires.
          </p>
        </div>

        <div className="border-t border-gray-100 mt-8 pt-8">
          <h2 className="font-sans font-semibold text-lg text-azur mb-3">Réclamation</h2>
          <p className="font-sans text-gray-600 leading-relaxed">
            Vous pouvez adresser une réclamation à la CNIL : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-azur hover:underline">https://www.cnil.fr</a>
          </p>
        </div>
      </div>
    </div>
  )
}
