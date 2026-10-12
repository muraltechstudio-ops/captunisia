import type { Metadata } from 'next'
import { articles } from '@/lib/articles'
import Link from 'next/link'
import { motion } from 'framer-motion'

export const metadata: Metadata = {
  title: 'Blog Immobilier Tunisie | Guides, Conseils & Actualités 2026 - CapTunisia',
  description: 'Blog immobilier Tunisie : guides complets, conseils d\'experts, prix du marché, fiscalité, financement. Tout pour réussir votre achat immobilier en Tunisie.',
  alternates: {
    canonical: 'https://captunisia.com/blog'
  },
  openGraph: {
    title: 'Blog Immobilier Tunisie | Guides & Conseils Experts 2026',
    description: 'Guides complets, analyses de marché et conseils d\'experts pour acheter un bien immobilier en Tunisie en toute sécurité.',
    type: 'website',
    url: 'https://captunisia.com/blog'
  }
}

export default function BlogPage() {
  const categories = Array.from(new Set(articles.map(a => a.categorie)))

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#1B6CA8] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl md:text-6xl text-white mb-6">
              Blog Immobilier Tunisie
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Guides complets, analyses de marché et conseils d'experts pour réussir votre projet immobilier en Tunisie. 10 articles détaillés pour acheter en toute sécurité.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-[#F8F6F1] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex text-sm" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-2">
              <li>
                <Link href="/" className="text-gray-500 hover:text-[#1B6CA8]">Accueil</Link>
              </li>
              <li className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-[#1B6CA8] font-medium">Blog</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Filtres par catégorie */}
      <section className="bg-white py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 bg-[#1B6CA8] text-white rounded-full text-sm font-medium">
              Tous les articles ({articles.length})
            </button>
            {categories.map(cat => (
              <button key={cat} className="px-4 py-2 bg-[#F8F6F1] text-gray-700 hover:bg-[#1B6CA8] hover:text-white rounded-full text-sm font-medium transition-colors">
                {cat} ({articles.filter(a => a.categorie === cat).length})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <article key={article.slug} className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col">
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-[#1B6CA8]/10 text-[#1B6CA8] text-xs font-semibold rounded-full">
                      {article.categorie}
                    </span>
                    <span className="text-sm text-gray-500">
                      {article.tempsLecture} min
                    </span>
                  </div>

                  <h2 className="font-display text-2xl text-nuit mb-3 line-clamp-2 flex-shrink-0">
                    {article.titre}
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
                    {article.extrait}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                    <time className="text-sm text-gray-500" dateTime={article.datePublication}>
                      {new Date(article.datePublication).toLocaleDateString('fr-FR', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </time>
                    <Link
                      href={`/blog/${article.slug}`}
                      className="text-[#1B6CA8] font-medium hover:underline text-sm"
                    >
                      Lire l'article →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#F8F6F1] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-nuit mb-4">
            Vous avez un projet immobilier en Tunisie ?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Notre équipe vous accompagne de A à Z pour sécuriser votre achat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-[#1B6CA8] text-white font-medium hover:opacity-90 transition-opacity"
            >
              Parler à un expert
            </Link>
            <Link
              href="/biens"
              className="inline-block px-8 py-3 border-2 border-[#1B6CA8] text-[#1B6CA8] font-medium hover:bg-[#1B6CA8] hover:text-white transition-colors"
            >
              Voir nos biens
            </Link>
          </div>
        </div>
      </section>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Blog CapTunisia - Immobilier Tunisie",
            "description": "Guides complets et conseils d'experts pour acheter un bien immobilier en Tunisie",
            "url": "https://captunisia.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "CapTunisia",
              "url": "https://captunisia.com"
            },
            "blogPost": articles.map(article => ({
              "@type": "BlogPosting",
              "headline": article.titre,
              "description": article.metaDescription,
              "url": `https://captunisia.com/blog/${article.slug}`,
              "datePublished": article.datePublication,
              "author": {
                "@type": "Organization",
                "name": "CapTunisia"
              },
              "keywords": article.motsCles.join(', ')
            }))
          })
        }}
      />
    </div>
  )
}
