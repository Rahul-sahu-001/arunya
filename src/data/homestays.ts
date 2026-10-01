import { Homestay } from '../types';

export const HOMESTAYS: Homestay[] = [
  {
    id: 'thembang-bapu-homestay',
    name: 'Bapu Community Heritage Homestay',
    host: 'Dorjee & Tsering Khandu',
    village: 'Thembang Fortified Village',
    district: 'West Kameng',
    community: 'Monpa',
    roomType: 'Traditional Stone Room with Wooden Floor & Mountain Views',
    pricePerNight: 2200,
    rating: 4.9,
    reviewsCount: 38,
    images: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80'
    ],
    badges: ['Community Owned', 'Local Food Included', 'Family Hosted', 'Cultural Experience', 'Local Guide Available'],
    meals: ['Zan millet porridge with wild spinach', 'Steamed Monpa momos', 'Organic apple stew', 'Fresh butter tea (Suja)'],
    experiences: ['Dzong history walk', 'Red panda tracking in community conserved forest', 'Weaving workshop'],
    sustainability: ['100% solar powered lighting', 'Zero single-use plastic policy', 'Revenue shares into village school fund'],
    coordinates: { lat: 27.3512, lng: 92.3831 }
  },
  {
    id: 'tage-bamboo-homestay',
    name: 'Tage Bamboo Retreat',
    host: 'Tage & Kemo Kanno',
    village: 'Hong Village, Ziro',
    district: 'Lower Subansiri',
    community: 'Apatani',
    roomType: 'Elevated Bamboo Suite overlooking Terraced Paddy',
    pricePerNight: 2400,
    rating: 5.0,
    reviewsCount: 52,
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1498429089284-41f8cf3ffd39?auto=format&fit=crop&w=800&q=80'
    ],
    badges: ['Community Owned', 'Local Food Included', 'Family Hosted', 'Cultural Experience'],
    meals: ['Dung Po red rice in wild leaf', 'Pika Pila with smoked pork', 'Fresh garden greens', 'Warm Marua brew'],
    experiences: ['Paddy bund walking tour', 'Apatani fish harvesting', 'Evening hearth folklore'],
    sustainability: ['Spring water filtration on tap', 'Organic farm-to-table compost cycle', 'Built with 100% sustainable village bamboo'],
    coordinates: { lat: 27.5348, lng: 93.8344 }
  },
  {
    id: 'yargap-chu-homestay',
    name: 'Yargap Chu Riverside Eco Lodge',
    host: 'Norbu & Pema Memba',
    village: 'Old Mechuka Village',
    district: 'Shi-Yomi',
    community: 'Memba',
    roomType: 'Pine Timber Cabin with River Confluence Vistas',
    pricePerNight: 2800,
    rating: 4.8,
    reviewsCount: 44,
    images: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80'
    ],
    badges: ['Family Hosted', 'Local Food Included', 'Local Guide Available', 'Cultural Experience'],
    meals: ['Yak cheese thukpa', 'Handmade Memba momos with wild chives', 'Suja tea with barley tsampa'],
    experiences: ['Samden Yongcha sunrise trek', 'River fishing with local elders', 'Pony trek on high meadows'],
    sustainability: ['Firewood collected only from fallen deadwood', 'Chemical-free septic system', 'Locally crafted pine furniture'],
    coordinates: { lat: 28.5996, lng: 94.1332 }
  },
  {
    id: 'mishmi-cloud-homestay',
    name: 'Inin Cloud Mist Stilt House',
    host: 'Mepi Mihu',
    village: 'Mipi Village, Anini',
    district: 'Dibang Valley',
    community: 'Idu Mishmi',
    roomType: 'Traditional Stilted Longhouse Timber Room',
    pricePerNight: 2100,
    rating: 4.9,
    reviewsCount: 29,
    images: [
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=800&q=80'
    ],
    badges: ['Community Owned', 'Family Hosted', 'Local Guide Available'],
    meals: ['Hearth-smoked pork with wild nettle broth', 'Millet wine (Yu)', 'Sticky rice dumplings'],
    experiences: ['Seven Lakes expedition staging', 'Shamanic herb foraging walk', 'Mishmi diamond handloom weaving'],
    sustainability: ['Rainwater harvesting reservoir', 'Zero single-use plastics', 'Employs village youth as high guides'],
    coordinates: { lat: 28.7909, lng: 95.9048 }
  }
];