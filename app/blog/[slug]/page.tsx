import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { articles } from '@/lib/articles'
import Link from 'next/link'

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = articles.find((a) => a.slug === params.slug)

  if (!article) {
    return {
      title: 'Article non trouvé - CapTunisia'
    }
  }

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.motsCles.join(', '),
    alternates: {
      canonical: `https://captunisia.com/blog/${article.slug}`
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      type: 'article',
      url: `https://captunisia.com/blog/${article.slug}`,
      publishedTime: article.datePublication,
      authors: ['CapTunisia'],
      tags: article.motsCles
    },
    twitter: {
      card: 'summary_large_image',
      title: article.metaTitle,
      description: article.metaDescription
    }
  }
}

function extractHeadings(html: string): { text: string; id: string }[] {
  const regex = /<h2[^>]*>(.*?)<\/h2>/gi
  const headings: { text: string; id: string }[] = []
  let match

  while ((match = regex.exec(html)) !== null) {
    const text = match[1].replace(/<[^>]*>/g, '')
    const id = text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
    headings.push({ text, id })
  }

  return headings
}

function addIdsToHeadings(html: string): string {
  return html.replace(/<h2([^>]*)>(.*?)<\/h2>/gi, (match, attrs, content) => {
    const text = content.replace(/<[^>]*>/g, '')
    const id = text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
    return `<h2${attrs} id="${id}">${content}</h2>`
  })
}

export default function ArticlePage({ params }: Props) {
  const article = articles.find((a) => a.slug === params.slug)

  if (!article) {
    notFound()
  }

  const headings = extractHeadings(article.contenu)
  const contentWithIds = addIdsToHeadings(article.contenu)

  // Articles reliés (même catégorie ou mots-clés similaires)
  const relatedArticles = articles
    .filter(a => a.slug !== article.slug)
    .filter(a =>
      a.categorie === article.categorie ||
      a.motsCles.some(kw => article.motsCles.includes(kw))
    )
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-[#F8F6F1] border-b border-gray-200 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex text-sm flex-wrap" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-2">
              <li>
                <Link href="/" className="text-gray-500 hover:text-[#1B6CA8]">Accueil</Link>
              </li>
              <li className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <Link href="/blog" className="text-gray-500 hover:text-[#1B6CA8]">Blog</Link>
              </li>
              <li className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-[#1B6CA8] font-medium line-clamp-1">{article.titre}</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <article className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Table des matières sticky (desktop) */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-24">
                <div className="bg-[#F8F6F1] p-6 rounded">
                  <h3 className="font-display text-lg font-semibold text-nuit mb-4">
                    Sommaire
                  </h3>
                  <nav>
                    <ul className="space-y-2">
                      {headings.map((heading, index) => (
                        <li key={index}>
                          <a
                            href={`#${heading.id}`}
                            className="text-sm text-gray-600 hover:text-[#1B6CA8] transition-colors block py-1"
                          >
                            {heading.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>

                {/* Partage social */}
                <div className="mt-6 bg-white border border-gray-200 p-6 rounded">
                  <h3 className="font-display text-sm font-semibold text-nuit mb-3">
                    Partager
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=https://captunisia.com/blog/${article.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 bg-[#1877F2] text-white rounded hover:opacity-90"
                      aria-label="Partager sur Facebook"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=https://captunisia.com/blog/${article.slug}&text=${encodeURIComponent(article.titre)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 bg-[#1DA1F2] text-white rounded hover:opacity-90"
                      aria-label="Partager sur Twitter"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                    </a>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=https://captunisia.com/blog/${article.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 bg-[#0A66C2] text-white rounded hover:opacity-90"
                      aria-label="Partager sur LinkedIn"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </aside>

            {/* Contenu principal */}
            <div className="lg:col-span-9">
              {/* Header article */}
              <header className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-[#1B6CA8]/10 text-[#1B6CA8] text-sm font-semibold rounded-full">
                    {article.categorie}
                  </span>
                  <span className="text-sm text-gray-500">
                    {article.tempsLecture} min de lecture
                  </span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl text-nuit mb-6 leading-tight">
                  {article.titre}
                </h1>

                <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
                  <time dateTime={article.datePublication}>
                    Publié le {new Date(article.datePublication).toLocaleDateString('fr-FR', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </time>
                  <span>Par CapTunisia</span>
                </div>

                <p className="text-xl text-gray-700 leading-relaxed border-l-4 border-[#B8923A] pl-6 italic">
                  {article.extrait}
                </p>
              </header>

              {/* Contenu article */}
              <div
                className="prose prose-lg max-w-none
                  prose-p:mb-6 prose-p:leading-relaxed prose-p:text-gray-700
                  prose-h2:text-2xl prose-h2:font-bold prose-h2:text-[#1B6CA8] prose-h2:mt-12 prose-h2:mb-4
                  prose-h3:text-xl prose-h3:font-semibold prose-h3:text-[#111009] prose-h3:mt-8 prose-h3:mb-3
                  prose-strong:text-[#111009]
                  prose-a:text-[#1B6CA8] prose-a:underline
                  prose-ul:my-6 prose-li:mb-2"
                dangerouslySetInnerHTML={{ __html: contentWithIds }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-500 mb-3">Mots-clés</h3>
                <div className="flex flex-wrap gap-2">
                  {article.motsCles.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#F8F6F1] text-gray-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 bg-gradient-to-r from-[#1B6CA8] to-[#0d3d6b] text-white p-8 rounded">
                <h3 className="font-display text-2xl mb-3">
                  Besoin d'aide pour votre projet immobilier en Tunisie ?
                </h3>
                <p className="text-white/90 mb-6">
                  Notre équipe vous accompagne de A à Z pour sécuriser votre achat.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-block px-6 py-3 bg-[#B8923A] text-white font-medium text-center hover:opacity-90 transition-opacity"
                  >
                    Parler à un expert
                  </Link>
                  <Link
                    href="/tarifs"
                    className="inline-block px-6 py-3 border-2 border-white text-white font-medium text-center hover:bg-white hover:text-[#1B6CA8] transition-colors"
                  >
                    Voir nos tarifs
                  </Link>
                </div>
              </div>

              {/* Articles reliés */}
              {relatedArticles.length > 0 && (
                <div className="mt-16">
                  <h3 className="font-display text-3xl text-nuit mb-8">
                    Articles reliés
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedArticles.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/blog/${related.slug}`}
                        className="border border-gray-200 p-6 hover:shadow-lg transition-shadow"
                      >
                        <span className="text-xs text-[#1B6CA8] font-semibold mb-2 block">
                          {related.categorie}
                        </span>
                        <h4 className="font-display text-lg text-nuit mb-2 line-clamp-2">
                          {related.titre}
                        </h4>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {related.extrait}
                        </p>
                        <span className="text-sm text-[#1B6CA8] mt-3 inline-block hover:underline">
                          Lire l'article →
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </article>

      {/* Schema.org Article structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": article.titre,
            "description": article.metaDescription,
            "image": "https://captunisia.com/og-image.jpg",
            "author": {
              "@type": "Organization",
              "name": "CapTunisia",
              "url": "https://captunisia.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "CapTunisia",
              "logo": {
                "@type": "ImageObject",
                "url": "https://captunisia.com/logo.png"
              }
            },
            "datePublished": article.datePublication,
            "dateModified": article.datePublication,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://captunisia.com/blog/${article.slug}`
            },
            "keywords": article.motsCles.join(', '),
            "articleSection": article.categorie,
            "wordCount": article.contenu.split(' ').length,
            "timeRequired": `PT${article.tempsLecture}M`
          })
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Accueil",
                "item": "https://captunisia.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://captunisia.com/blog"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": article.titre,
                "item": `https://captunisia.com/blog/${article.slug}`
              }
            ]
          })
        }}
      />
    </div>
  )
}
