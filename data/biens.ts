export interface Bien {
  id: number
  title: string
  zone: string
  type: string
  surface: number
  rooms: number | null
  baths: number | null
  price: number | null
  badge: string
  img: string
  description: string
}

export const biens: Bien[] = [
  {
    id: 1,
    title: "Villa avec vue mer",
    zone: "La Marsa",
    type: "Villa",
    surface: 180,
    rooms: 4,
    baths: 2,
    price: 285000,
    badge: "Exclusivité",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
    description: "Magnifique villa de 180m² avec vue imprenable sur la mer. Terrasse panoramique, jardin arborisé, parking. Idéale comme résidence principale ou investissement locatif haut de gamme."
  },
  {
    id: 2,
    title: "Appartement standing résidence gardée",
    zone: "Hammamet",
    type: "Appartement",
    surface: 95,
    rooms: 3,
    baths: 1,
    price: 98000,
    badge: "Nouveau",
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
    description: "Bel appartement dans résidence sécurisée avec piscine commune. Finitions soignées, balcon, cave. À 5 minutes de la plage."
  },
  {
    id: 3,
    title: "Houch traditionnel rénové",
    zone: "Djerba",
    type: "Houch",
    surface: 220,
    rooms: 5,
    baths: 2,
    price: 145000,
    badge: "Coup de cœur",
    img: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800",
    description: "Authentique maison traditionnelle tunisienne entièrement rénovée. Patio central, terrasse, jardin de 300m². Architecture préservée, confort moderne."
  },
  {
    id: 4,
    title: "Appartement T3 résidence neuve",
    zone: "Sousse",
    type: "Appartement",
    surface: 88,
    rooms: 3,
    baths: 1,
    price: null,
    badge: "Bientôt",
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
    description: "Appartement neuf en cours de livraison dans résidence moderne. Prestations haut de gamme, gardiennage 24h. Prix sur demande."
  },
  {
    id: 5,
    title: "Terrain constructible bord de mer",
    zone: "Nabeul",
    type: "Terrain",
    surface: 650,
    rooms: null,
    baths: null,
    price: null,
    badge: "Bientôt",
    img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800",
    description: "Terrain plat de 650m² en zone résidentielle, COS 60%, à 400m de la plage. Viabilisé. Idéal pour construction villa individuelle."
  },
  {
    id: 6,
    title: "Studio meublé haut de gamme",
    zone: "Tunis",
    type: "Appartement",
    surface: 48,
    rooms: 1,
    baths: 1,
    price: 62000,
    badge: "Nouveau",
    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
    description: "Studio entièrement meublé et équipé dans le centre de Tunis. Rendement locatif estimé 6-7% brut. Idéal investissement."
  },
  {
    id: 7,
    title: "Villa piscine privée",
    zone: "Hammamet",
    type: "Villa",
    surface: 310,
    rooms: 6,
    baths: 3,
    price: 320000,
    badge: "Exclusivité",
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
    description: "Villa d'exception 310m² avec piscine privée, pool house et jardin paysagé. Standing absolu, domaine sécurisé. Coup de cœur garanti."
  },
  {
    id: 8,
    title: "Penthouse vue panoramique",
    zone: "La Marsa",
    type: "Appartement",
    surface: 130,
    rooms: 3,
    baths: 2,
    price: 195000,
    badge: "Nouveau",
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
    description: "Penthouse dernier étage avec terrasse 60m² et vue 360° sur la mer et Carthage. Deux places de parking, cave, gardien."
  }
]
