export const metadata = {
  title: 'Gestion des cookies — CapTunisia',
  description: 'Politique de gestion des cookies',
}

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        <p className="text-sm text-gray-500 mb-4">Derniere mise a jour : octobre 2026</p>
        <h1 className="font-display text-5xl text-nuit mb-12">Gestion des cookies</h1>

        <div className="border-t border-gray-100 mt-8 pt-8">
          <p className="font-sans text-gray-600 leading-relaxed">
            Ce site n'utilise pas de cookies publicitaires ou de tracking. Les seuls cookies techniques éventuellement déposés sont nécessaires au bon fonctionnement du site (session, sécurité). Aucun consentement n'est requis pour ces cookies (article 82 de la loi Informatique et Libertés - exemption CNIL). Aucune donnee n'est transmise a des régies publicitaires.
          </p>
        </div>
      </div>
    </div>
  )
}
