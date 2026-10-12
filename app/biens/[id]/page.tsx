import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ContactForm from '@/components/ContactForm'
import PropertyCard from '@/components/PropertyCard'
import { biens } from '@/data/biens'

export async function generateStaticParams() {
  return biens.map((bien) => ({
    id: bien.id.toString(),
  }))
}

export default function BienDetailPage({ params }: { params: { id: string } }) {
  const bien = biens.find(b => b.id === parseInt(params.id))

  if (!bien) {
    notFound()
  }

  const relatedBiens = biens
    .filter(b => b.id !== bien.id && (b.zone === bien.zone || b.type === bien.type))
    .slice(0, 3)

  const galleryImages = [bien.img, bien.img, bien.img]

  return (
    <div className="min-h-screen bg-sable">
      {/* Hero Image */}
      <div className="relative h-[50vh] w-full">
        <Image
          src={bien.img}
          alt={bien.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-block px-3 py-1 bg-gold text-white text-sm font-sans font-semibold rounded-full mb-3">
              {bien.badge}
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white">
              {bien.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Gallery Strip */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-3 gap-4">
            {galleryImages.map((img, index) => (
              <div key={index} className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src={img}
                  alt={`${bien.title} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Details */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="flex items-center space-x-4 text-gray-600 font-sans mb-4">
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {bien.zone}
                </span>
                <span>•</span>
                <span>{bien.type}</span>
              </div>

              {bien.price ? (
                <p className="font-display text-4xl font-bold text-azur mb-8">
                  {bien.price.toLocaleString('fr-FR')}€
                </p>
              ) : (
                <p className="font-display text-2xl font-semibold text-gray-600 mb-8 italic">
                  Prix sur demande
                </p>
              )}
            </div>

            {/* Specs Table */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="font-display text-2xl font-semibold mb-4">Caractéristiques</h2>
              <div className="grid grid-cols-2 gap-4 font-sans">
                <div className="border-b border-gray-200 pb-3">
                  <p className="text-sm text-gray-600">Surface</p>
                  <p className="text-lg font-semibold">{bien.surface}m²</p>
                </div>
                {bien.rooms && (
                  <div className="border-b border-gray-200 pb-3">
                    <p className="text-sm text-gray-600">Chambres</p>
                    <p className="text-lg font-semibold">{bien.rooms}</p>
                  </div>
                )}
                {bien.baths && (
                  <div className="border-b border-gray-200 pb-3">
                    <p className="text-sm text-gray-600">Salles de bain</p>
                    <p className="text-lg font-semibold">{bien.baths}</p>
                  </div>
                )}
                <div className="border-b border-gray-200 pb-3">
                  <p className="text-sm text-gray-600">Type</p>
                  <p className="text-lg font-semibold">{bien.type}</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="font-display text-2xl font-semibold mb-4">Description</h2>
              <p className="font-sans text-gray-700 leading-relaxed">
                {bien.description}
              </p>
            </div>

            {/* Legal Note */}
            <div className="bg-azur/5 border border-azur/20 rounded-lg p-6">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-azur mr-3 flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-sans font-semibold text-nuit mb-2">Note juridique</h3>
                  <p className="font-sans text-sm text-gray-700">
                    Pour les acheteurs étrangers, l'autorisation du gouverneur est requise (délai 4-6 mois).
                    Cette démarche administrative est entièrement prise en charge par CapTunisia.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-28">
              <h2 className="font-display text-2xl font-semibold mb-6">Demander une visite</h2>
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Related Properties */}
        {relatedBiens.length > 0 && (
          <div className="mt-20">
            <h2 className="font-display text-3xl font-bold text-nuit mb-8">Biens similaires</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedBiens.map((b, index) => (
                <PropertyCard key={b.id} bien={b} index={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
