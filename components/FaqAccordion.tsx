'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FaqItem {
  question: string
  answer: string
}

const faqs: FaqItem[] = [
  {
    question: "Puis-je acheter en Tunisie en tant qu'étranger ?",
    answer: "Oui, avec l'autorisation du gouverneur (délai 4-6 mois). Nous gérons cette démarche intégralement."
  },
  {
    question: "Quels sont mes frais ?",
    answer: "Notre service est gratuit pour l'acheteur. Seuls les frais de notaire (~3%) et l'autorisation (~200 TND) sont à votre charge."
  },
  {
    question: "Puis-je acheter un terrain agricole ?",
    answer: "Non, la loi de 1964 l'interdit aux étrangers. Nous vérifions systématiquement ce point."
  },
  {
    question: "Combien de temps dure une transaction ?",
    answer: "Entre 4 et 8 mois, autorisation du gouverneur incluse."
  },
  {
    question: "Puis-je acheter à distance ?",
    answer: "Oui, nous organisons visites vidéo et procuration notariée depuis la France."
  },
  {
    question: "Que se passe-t-il si l'autorisation est refusée ?",
    answer: "Le compromis est nul et non avenu. Nous incluons cette clause protectrice systématiquement."
  }
]

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg overflow-hidden bg-white"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
          >
            <span className="font-sans text-lg font-semibold text-nuit pr-4">
              {faq.question}
            </span>
            <motion.svg
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-5 h-5 text-azur flex-shrink-0"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 9l-7 7-7-7" />
            </motion.svg>
          </button>
          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: 'auto' }}
                exit={{ height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 pt-2">
                  <p className="font-sans text-base text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
