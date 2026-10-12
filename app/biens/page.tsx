'use client'

import { useState } from 'react'
import PropertyCard from '@/components/PropertyCard'
import { biens } from '@/data/biens'

export default function BiensPage() {
  const [filters, setFilters] = useState({
    zone: '',
    type: '',
    budget: ''
  })

  const filteredBiens = biens.filter(bien => {
    if (filters.zone && bien.zone !== filters.zone) return false
    if (filters.type && bien.type !== filters.type) return false

    if (filters.budget) {
      if (!bien.price) return false

      if (filters.budget === '< 80k€' && bien.price >= 80000) return false
      if (filters.budget === '80-150k€' && (bien.price < 80000 || bien.price > 150000)) return false
      if (filters.budget === '150-300k€' && (bien.price < 150000 || bien.price > 300000)) return false
      if (filters.budget === '> 300k€' && bien.price <= 300000) return false
    }

    return true
  })

  return (
    <div className="min-h-screen bg-sable">
      {/* Header */}
      <div className="bg-nuit text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
            Nos biens en Tunisie
          </h1>
          <p className="font-sans text-lg opacity-90 max-w-2xl mx-auto">
            Villas, appartements et terrains sélectionnés par CapTunisia
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <select
              value={filters.zone}
              onChange={(e) => setFilters(prev => ({ ...prev, zone: e.target.value }))}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azur focus:border-transparent font-sans"
            >
              <option value="">Toutes les zones</option>
              <option value="Hammamet">Hammamet</option>
              <option value="La Marsa">La Marsa</option>
              <option value="Sousse">Sousse</option>
              <option value="Tunis">Tunis</option>
              <option value="Djerba">Djerba</option>
              <option value="Nabeul">Nabeul</option>
            </select>

            <select
              value={filters.type}
              onChange={(e) => setFilters(prev => ({ ...prev, type: e.target.value }))}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azur focus:border-transparent font-sans"
            >
              <option value="">Tous les types</option>
              <option value="Villa">Villa</option>
              <option value="Appartement">Appartement</option>
              <option value="Terrain">Terrain</option>
              <option value="Houch">Houch</option>
            </select>

            <select
              value={filters.budget}
              onChange={(e) => setFilters(prev => ({ ...prev, budget: e.target.value }))}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azur focus:border-transparent font-sans"
            >
              <option value="">Tous les budgets</option>
              <option value="< 80k€">{'< 80k€'}</option>
              <option value="80-150k€">80-150k€</option>
              <option value="150-300k€">150-300k€</option>
              <option value="> 300k€">{`> 300k€`}</option>
            </select>

            <button
              onClick={() => setFilters({ zone: '', type: '', budget: '' })}
              className="px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-sans font-medium"
            >
              Réinitialiser
            </button>
          </div>
          <p className="font-sans text-sm text-gray-600 mt-4">
            {filteredBiens.length} bien{filteredBiens.length > 1 ? 's' : ''} trouvé{filteredBiens.length > 1 ? 's' : ''}
          </p>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBiens.map((bien, index) => (
            <PropertyCard key={bien.id} bien={bien} index={index} />
          ))}
        </div>

        {filteredBiens.length === 0 && (
          <div className="text-center py-20">
            <p className="font-sans text-lg text-gray-600">
              Aucun bien ne correspond à vos critères. Essayez de modifier vos filtres.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
