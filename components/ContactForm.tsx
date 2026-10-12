'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    budget: '',
    formule: '',
    zone: '',
    type: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus('success')
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          budget: '',
          formule: '',
          zone: '',
          type: '',
          message: ''
        })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block font-sans text-sm font-medium text-gray-700 mb-2">
            Prénom
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azur focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block font-sans text-sm font-medium text-gray-700 mb-2">
            Nom
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azur focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block font-sans text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azur focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block font-sans text-sm font-medium text-gray-700 mb-2">
          Téléphone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azur focus:border-transparent"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label htmlFor="budget" className="block font-sans text-sm font-medium text-gray-700 mb-2">
            Budget
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azur focus:border-transparent"
          >
            <option value="">Sélectionner</option>
            <option value="< 80k€">{'< 80k€'}</option>
            <option value="80-150k€">80-150k€</option>
            <option value="150-300k€">150-300k€</option>
            <option value="> 300k€">{`> 300k€`}</option>
          </select>
        </div>
        <div>
          <label htmlFor="zone" className="block font-sans text-sm font-medium text-gray-700 mb-2">
            Zone souhaitée
          </label>
          <select
            id="zone"
            name="zone"
            value={formData.zone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azur focus:border-transparent"
          >
            <option value="">Sélectionner</option>
            <option value="Hammamet">Hammamet</option>
            <option value="La Marsa">La Marsa</option>
            <option value="Sousse">Sousse</option>
            <option value="Tunis">Tunis</option>
            <option value="Djerba">Djerba</option>
            <option value="Nabeul">Nabeul</option>
          </select>
        </div>
        <div>
          <label htmlFor="type" className="block font-sans text-sm font-medium text-gray-700 mb-2">
            Type de bien
          </label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azur focus:border-transparent"
          >
            <option value="">Sélectionner</option>
            <option value="Villa">Villa</option>
            <option value="Appartement">Appartement</option>
            <option value="Terrain">Terrain</option>
            <option value="Houch">Houch</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="formule" className="block font-sans text-sm font-medium text-gray-700 mb-2">
          Formule souhaitee
        </label>
        <select
          id="formule"
          name="formule"
          value={formData.formule}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azur focus:border-transparent"
        >
          <option value="">Je ne sais pas encore</option>
          <option value="Essentiel - 690€">Essentiel - 690€</option>
          <option value="Securite - 990€ (recommande)">Securite - 990€ (recommande)</option>
          <option value="Premium - 1 690€">Premium - 1 690€</option>
          <option value="Option deplacement physique - +290€/jour">Option deplacement physique - +290€/jour</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block font-sans text-sm font-medium text-gray-700 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azur focus:border-transparent"
        />
      </div>

      {status === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="font-sans text-sm text-green-800">Merci ! Votre message a été envoyé avec succès.</p>
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="font-sans text-sm text-red-800">Une erreur est survenue. Veuillez réessayer.</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full px-8 py-4 bg-azur text-white font-sans font-semibold rounded-lg hover:bg-azur/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {status === 'loading' ? 'Envoi en cours...' : 'Envoyer'}
      </button>
    </form>
  )
}
