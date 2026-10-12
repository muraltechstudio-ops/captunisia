export const metadata = {
  title: 'Politique de confidentialite — CapTunisia',
  description: 'Politique de confidentialite et protection des donnees personnelles',
}

export default function ConfidentialitePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        <p className="text-sm text-gray-500 mb-4">Derniere mise a jour : octobre 2026</p>
        <h1 className="font-display text-5xl text-nuit mb-12">Politique de confidentialite</h1>

        <div className="border-t border-gray-100 mt-8 pt-8">
          <h2 className="font-sans font-semibold text-lg text-azur mb-3">Responsable du traitement</h2>
          <p className="font-sans text-gray-600 leading-relaxed">
            Open Crest LLC (French Branch) - contact@captunisia.com
          </p>
        </div>

        <div className="border-t border-gray-100 mt-8 pt-8">
          <h2 className="font-sans font-semibold text-lg text-azur mb-3">Donnees collectees</h2>
          <p className="font-sans text-gray-600 leading-relaxed">
            Via le formulaire de contact : prenom, nom, email, telephone, budget, zone souhaitee, type de bien, message. Ces donnees sont collectees dans le seul but de repondre a la demande de l utilisateur.
          </p>
        </div>

        <div className="border-t border-gray-100 mt-8 pt-8">
          <h2 className="font-sans font-semibold text-lg text-azur mb-3">Base legale</h2>
          <p className="font-sans text-gray-600 leading-relaxed">
            Article 6.1.b du RGPD - execution de mesures precontractuelles a la demande de la personne concernee.
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
            Les donnees sont transmises par email a l equipe CapTunisia via Resend (sous-traitant, politique de confidentialite : <a href="https://resend.com/privacy" target="_blank" rel="noopener noreferrer" className="text-azur hover:underline">https://resend.com/privacy</a>). Elles ne sont pas vendues ni cedees a des tiers.
          </p>
        </div>

        <div className="border-t border-gray-100 mt-8 pt-8">
          <h2 className="font-sans font-semibold text-lg text-azur mb-3">Droits des utilisateurs</h2>
          <p className="font-sans text-gray-600 leading-relaxed">
            Conformement au RGPD (Reglement UE 2016/679) et a la loi Informatique et Libertes, vous disposez d un droit d acces, de rectification, d effacement, de limitation et d opposition. Pour exercer ces droits : contact@captunisia.com.
          </p>
        </div>

        <div className="border-t border-gray-100 mt-8 pt-8">
          <h2 className="font-sans font-semibold text-lg text-azur mb-3">Cookies</h2>
          <p className="font-sans text-gray-600 leading-relaxed">
            Ce site n utilise pas de cookies de tracking. Aucune donnee de navigation n est transmise a des tiers a des fins publicitaires.
          </p>
        </div>

        <div className="border-t border-gray-100 mt-8 pt-8">
          <h2 className="font-sans font-semibold text-lg text-azur mb-3">Reclamation</h2>
          <p className="font-sans text-gray-600 leading-relaxed">
            Vous pouvez adresser une reclamation a la CNIL : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-azur hover:underline">https://www.cnil.fr</a>
          </p>
        </div>
      </div>
    </div>
  )
}
