import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Contact — CapTunisia',
  description: 'Contactez CapTunisia pour votre projet immobilier en Tunisie.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-sable">
      {/* Header */}
      <div className="bg-nuit text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
            Parlons de votre projet
          </h1>
          <p className="font-sans text-lg opacity-90 max-w-2xl mx-auto">
            Premier échange gratuit et sans engagement
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="font-display text-3xl font-semibold mb-6">
                Formulaire de contact
              </h2>
              <ContactForm />
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="font-display text-3xl font-semibold mb-6">
                Nos coordonnées
              </h2>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-azur/10 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <svg className="w-6 h-6 text-azur" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-nuit mb-1">Email</p>
                    <a href="mailto:contact@captunisia.com" className="font-sans text-azur hover:underline">
                      contact@captunisia.com
                    </a>
                  </div>
                </div>

                {/* Phone FR/EN */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-azur/10 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <svg className="w-6 h-6 text-azur" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-nuit mb-1">Tél FR/EN</p>
                    <a href="tel:+33636226987" className="font-sans text-azur hover:underline">
                      +33 6 36 22 69 87
                    </a>
                    <p className="font-sans text-sm text-gray-600 mt-1">Cyril Rancurel</p>
                  </div>
                </div>

                {/* Phone Tunisian/AR */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <svg className="w-6 h-6 text-gold" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-nuit mb-1">Tél Tunisien/AR</p>
                    <a href="tel:+33743354184" className="font-sans text-gold hover:underline">
                      +33 7 43 35 41 84
                    </a>
                    <p className="font-sans text-sm text-gray-600 mt-1">Emna Rancurel</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-azur/10 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <svg className="w-6 h-6 text-azur" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-nuit mb-1">Adresse</p>
                    <p className="font-sans text-gray-700">4 rue du Labech</p>
                    <p className="font-sans text-gray-700">34250 Palavas-les-Flots</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-azur/10 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <svg className="w-6 h-6 text-azur" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-nuit mb-1">Horaires</p>
                    <p className="font-sans text-gray-700">Lun–Sam · 9h–19h</p>
                    <p className="font-sans text-sm text-gray-600 mt-1">(heure française)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-azur/5 border border-azur/20 rounded-lg p-6">
              <h3 className="font-sans font-semibold text-nuit mb-3">Délai de réponse</h3>
              <p className="font-sans text-sm text-gray-700">
                Nous nous engageons à vous répondre dans les 24 heures ouvrées.
                Pour toute urgence, privilégiez l'appel téléphonique.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
