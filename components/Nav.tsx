'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Nav() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isTransparent, setIsTransparent] = useState(pathname === '/')

  useEffect(() => {
    if (pathname !== '/') {
      setIsTransparent(false)
      return
    }

    const sentinel = document.getElementById('hero-sentinel')
    if (!sentinel) {
      setIsTransparent(false)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsTransparent(entry.isIntersecting)
      },
      { threshold: 0 }
    )

    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [pathname])

  const links = [
    { href: '/biens', label: 'Nos biens' },
    { href: '/services', label: 'Nos services' },
    { href: '/equipe', label: "L'équipe" },
    { href: '/contact', label: 'Contact' },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: isTransparent ? 'transparent' : 'white',
        borderBottom: isTransparent ? 'none' : '1px solid rgba(0,0,0,0.08)',
        boxShadow: isTransparent ? 'none' : '0 1px 12px rgba(0,0,0,0.06)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src={isTransparent ? "/captunisia-logo-white.svg" : "/captunisia-logo-white.svg"}
              alt="CapTunisia"
              className="h-10 w-auto transition-all duration-300"
              style={{
                filter: isTransparent ? 'none' : 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(189deg) brightness(94%) contrast(87%)'
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative font-sans text-base font-medium transition-colors duration-300"
                style={{
                  color: isTransparent
                    ? 'rgba(255,255,255,0.8)'
                    : isActive(link.href)
                    ? '#1B6CA8'
                    : '#374151'
                }}
              >
                {link.label}
                {isActive(link.href) && !isTransparent && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-6 left-0 right-0 h-0.5 bg-azur"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md focus:outline-none transition-colors duration-300"
            style={{ color: isTransparent ? 'white' : '#374151' }}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-40 md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-display text-3xl transition-colors ${
                    isActive(link.href) ? 'text-azur' : 'text-nuit hover:text-azur'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-8 space-y-2 text-center">
                <p className="font-sans text-sm text-gray-600">+33 6 36 22 69 87</p>
                <p className="font-sans text-sm text-gray-600">+33 7 43 35 41 84</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
