import { Destination } from '../types';

export const DESTINATIONS: Destination[] = [
  {
    id: 'mechuka',
    name: 'Mechuka (Menchukha)',
    nativeName: 'Medicinal Water Valley (Memba)',
    district: 'Shi-Yomi',
    altitude: '6,000 ft (1,829 m)',
    coordinates: { lat: 28.5996, lng: 94.1332, mapX: 47, mapY: 28 },
    community: 'Memba, Ramo, Pai-Libo',
    description: 'A mystical high-altitude bowl ringed by snow-dusted ridges, wild horses grazing along the meandering Yargap Chu river, and the 400-year-old Samden Yongcha Monastery standing watch on a solitary hilltop.',
    whySpecial: 'Often described as the untouched Shangri-La of the Eastern Himalayas. Preserves an ancient Buddhist Tibetan-influenced pastoral life interwoven with deep animist forest reverence.',
    bestTime: 'October to April (Crisp mountain air & clear skies; light snow in Dec-Jan)',
    howToReach: {
      gateway: 'Dibrugarh / Pasighat',
      roadTransit: 'Pasighat or Aalo to Mechuka via shared Tata Sumo (approx. 9-11 hours through dramatic river canyons)',
      nearestAir: 'Pasighat Airport (210 km) or Hollongi/Dibrugarh (380 km)',
      nearestRail: 'Silapathar / Murkeongselek (Assam border)'
    },
    nearbyExperiences: [
      'Hike to Samden Yongcha Monastery',
      'Walk across traditional suspension bridges over Yargap Chu',
      'Trek to Menchukha Holy Cave (Guru Padmasambhava meditation sanctuary)',
      'Evening tea and butter lamps with Memba families'
    ],
    festivals: ['Losar (Tibetan New Year)', 'Badha (Harvest Celebration)'],
    localFood: ['Momo with wild yak chhurpi', 'Thukpa', 'Zan millet porridge', 'Salt butter tea (Suja)'],
    homestaysCount: 14,
    approximateBudget: '₹2,200 - ₹3,800 / day (including family meals)',
    difficulty: 'Moderate',
    tags: ['High Valley', 'Monastery', 'Riverside', 'Memba Heritage', 'Pristine Nature'],
    images: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80'
    ],
    responsibleGuidelines: [
      'Always walk clockwise around chortens and prayer walls (Mani stones).',
      'Ask heartfelt permission before taking portraits of village elders.',
      'Refill water from boiled spring filters rather than buying plastic bottles.',
      'Dress modestly when entering monastic sanctuaries.'
    ],
    category: 'village'
  },
  {
    id: 'anini',
    name: 'Anini (Dibang Valley)',
    nativeName: 'Inin (Valley of the Clouds)',
    district: 'Dibang Valley',
    altitude: '6,450 ft (1,968 m)',
    coordinates: { lat: 28.7909, lng: 95.9048, mapX: 74, mapY: 26 },
    community: 'Idu Mishmi',
    description: 'Arunachal’s least populated, wildest highland frontier where emerald ridges rise like castle walls into shifting clouds. The homeland of the Idu Mishmi, whose intricate animist cosmos considers tigers their blood brothers.',
    whySpecial: 'Gateway to the Seven Lakes Alpine Trek and pristine rainforest wilderness where hunting taboos protect gibbons, clouded leopards, and sacred Mishmi takins without state intervention.',
    bestTime: 'October to May (Monsoon June-Sept brings heavy landslides)',
    howToReach: {
      gateway: 'Dibrugarh / Tinsukia',
      roadTransit: 'Dibrugarh to Roing via Dhola-Sadiya Bridge, then ascend through Mayodia Pass to Anini (approx. 8-10 hours)',
      nearestAir: 'Dibrugarh Mohanbari Airport (280 km)',
      nearestRail: 'Tinsukia Railway Junction (260 km)'
    },
    nearbyExperiences: [
      'Expedition into the glacial Seven Lakes highland basin',
      'Sit with Igu shamans during evening chanting rituals',
      'Explore traditional stilted timber and cane Mishmi longhouses',
      'Birding in the temperate cloud canopy'
    ],
    festivals: ['Reh Festival (February 1-3)', 'Ke-Meh-Ha (Autumn harvest celebration)'],
    localFood: ['Smoked pork with wild bamboo shoot', 'Apong millet brew', 'Wild nettle soup', 'Sticky rice in banana leaves'],
    homestaysCount: 8,
    approximateBudget: '₹2,500 - ₹4,200 / day',
    difficulty: 'Demanding',
    tags: ['Wilderness', 'Idu Mishmi', 'Alpine Lakes', 'Sacred Animism', 'Cloud Forest'],
    images: [
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?auto=format&fit=crop&w=1200&q=80'
    ],
    responsibleGuidelines: [
      'Never kill or disturb tigers or hoolock gibbons; they hold sacred sibling status in Idu mythology.',
      'Pay local guides directly at community-agreed fair wages.',
      'Pack out all non-biodegradable waste; no municipal waste recycling exists in high valleys.'
    ],
    category: 'village'
  },
  {
    id: 'dong-walong',
    name: 'Dong & Walong (Edge of Dawn)',
    nativeName: 'First Light of India',
    district: 'Anjaw',
    altitude: '4,070 ft (1,240 m) / Dong peak 8,700 ft',
    coordinates: { lat: 28.1887, lng: 97.0422, mapX: 92, mapY: 42 },
    community: 'Meyor, Digaru Mishmi',
    description: 'Tucked into India’s easternmost tri-junction along the rushing emerald Lohit river, Dong Valley greets the nation’s very first sunrise rays around 4:15 AM. Surrounded by dry pine-clad cliffs and peaceful border villages.',
    whySpecial: 'The spiritual experience of hiking before dawn through dewy alpine meadows to watch the first golden dawn light break across the eastern hemisphere. Walong also holds poignant 1962 memorial history and natural hot springs.',
    bestTime: 'October to April (Clear crisp dawns with zero cloud clutter)',
    howToReach: {
      gateway: 'Dibrugarh / Tinsukia',
      roadTransit: 'Tinsukia to Tezu, then follow the Lohit River gorge via Hayuliang to Walong (approx. 9-11 hours)',
      nearestAir: 'Dibrugarh (310 km) or Tezu Airport',
      nearestRail: 'Tinsukia (285 km)'
    },
    nearbyExperiences: [
      'Pre-dawn 3 AM trek to Dong Peak for the First Light ceremony',
      'Soak in the natural mineral sulfur hot springs of Walong',
      'Visit Tilam & Kaho—India’s easternmost frontier villages',
      'Hear Meyor village folk songs around open pinewood hearths'
    ],
    festivals: ['Tamladu (February 15)', 'Meyor Tsok (Harvest New Year)'],
    localFood: ['Chhang fermented millet drink', 'Smoked mountain river fish', 'Wild honey with corn pancakes'],
    homestaysCount: 6,
    approximateBudget: '₹2,000 - ₹3,200 / day',
    difficulty: 'Moderate',
    tags: ['First Sunrise', 'Meyor Culture', 'Pine Forests', 'Hot Springs', 'Frontier Border'],
    images: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80'
    ],
    responsibleGuidelines: [
      'Strictly avoid photographing sensitive military or international border installations.',
      'Maintain total silence during early morning village trails so as not to disrupt resting households.',
      'Support local Meyor weaving cooperatives by acquiring authentic handloom shawls directly.'
    ],
    category: 'village'
  },
  {
    id: 'hong-village-ziro',
    name: 'Hong Village & Ziro Valley',
    nativeName: 'Hong Mudang Tage',
    district: 'Lower Subansiri',
    altitude: '5,540 ft (1,688 m)',
    coordinates: { lat: 27.5348, lng: 93.8344, mapX: 42, mapY: 52 },
    community: 'Apatani',
    description: 'One of the largest traditional villages in Asia, celebrated for its UNESCO-nominated landscape: intricate fish-cum-paddy wetland cultivation, towering bamboo groves (Bije), pine groves, and wood-and-bamboo stilt architecture.',
    whySpecial: 'The living culture of the Apatani: revered elder women with traditional facial tattoos (Tikyii) and cane nose plugs (Yaping Hullo), practicing sacred animist Donyi-Polo faith and peerless zero-waste communal forestry.',
    bestTime: 'March to November (March for Myoko festival; July for lush green paddy & Dree; Oct for golden harvest)',
    howToReach: {
      gateway: 'Guwahati / Tezpur / Lilabari',
      roadTransit: 'Guwahati or Tezpur via Kimin/Potin to Ziro (approx. 8 hours) or train to Naharlagun then 3.5 hrs drive',
      nearestAir: 'Lilabari (120 km) or Hollongi/Itanagar (115 km)',
      nearestRail: 'Naharlagun (100 km)'
    },
    nearbyExperiences: [
      'Guided walk through Hong & Hari village bamboo corridors',
      'Learn the ancient Apatani wet-rice & fingerling fish farming technique',
      'Trek into the biodiversity-rich Talley Valley Wildlife Sanctuary',
      'Participate in traditional bamboo basket weaving workshops'
    ],
    festivals: ['Myoko (March 20-30 - Month-long friendship & spring renewal)', 'Dree (July 5 - Agricultural blessing)'],
    localFood: ['Pika Pila (fermented bamboo shoot pickle with pork fat)', 'Pike Pila with smoked beef', 'Khar salty ash extract', 'Traditional Marua rice beer'],
    homestaysCount: 22,
    approximateBudget: '₹1,800 - ₹3,000 / day',
    difficulty: 'Easy',
    tags: ['Apatani Culture', 'Bamboo Architecture', 'UNESCO Valley', 'Donyi-Polo', 'Agro-Ecology'],
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1498429089284-41f8cf3ffd39?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80'
    ],
    responsibleGuidelines: [
      'Never point cameras at tattooed Apatani elders without gentle consent and respectful conversation.',
      'Stay strictly on raised bunds (Aghers) between paddy fields; never step into wet seedling plots.',
      'Do not touch sacred sacrificial altar bamboo poles (Babo & Lapang).' 
    ],
    category: 'culture'
  },
  {
    id: 'thembang-heritage',
    name: 'Thembang Fortified Village',
    nativeName: 'Thembang Dzong',
    district: 'West Kameng',
    altitude: '7,545 ft (2,300 m)',
    coordinates: { lat: 27.3512, lng: 92.3831, mapX: 18, mapY: 56 },
    community: 'Monpa',
    description: 'A fortified 12th-century stone village perched like an eagle nest above the Dirang river valley. Entered through ancient double stone gates with defensive watchtower ruins and traditional Monpa stone masonry homes.',
    whySpecial: 'A living community-managed heritage site where the village council (Bapu) runs its own community-based eco-tourism enterprise. Proceeds directly fund snow leopard conservation, red panda tracking, and school stipends.',
    bestTime: 'October to May (Apple blossom in March-April; clear mountain views in winter)',
    howToReach: {
      gateway: 'Guwahati / Tezpur',
      roadTransit: 'Guwahati to Tezpur, then ascend via Bhalukpong & Bomdila to Dirang, then 14 km spur road to Thembang (approx. 7 hours)',
      nearestAir: 'Tezpur (175 km) or Guwahati (310 km)',
      nearestRail: 'Bhalukpong (110 km) or Rangapara'
    },
    nearbyExperiences: [
      'Walk along ancient defensive Dzong walls and fortified archways',
      'Red panda and Monal pheasant tracking in community conserved forests',
      'Apple and kiwi orchard harvest with host families',
      'Traditional Monpa wood mask carving session'
    ],
    festivals: ['Losar (Monpa New Year in Feb/March)', 'Chhoskar (Harvest sacred scripture procession)'],
    localFood: ['Zan porridge with wild mountain spinach', 'Thukpa with dry yak meat', 'Khura buckwheat pancakes', 'Salt butter tea with roasted barley tsampa'],
    homestaysCount: 7,
    approximateBudget: '₹1,900 - ₹3,100 / day',
    difficulty: 'Easy',
    tags: ['Fortified Dzong', 'Monpa Heritage', 'Community Conserved Area', 'Red Panda', 'Stone Village'],
    images: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1465919292275-c60b4c6295eb?auto=format&fit=crop&w=1200&q=80'
    ],
    responsibleGuidelines: [
      'Pay all guide and homestay fees through the official Thembang Community Heritage Council office.',
      'Carry your own reusable cloth bag; Thembang operates a strict zero-plastic village code.',
      'Remove footwear when entering sacred Buddhist prayer rooms inside ancient homes.'
    ],
    category: 'village'
  },
  {
    id: 'tuting-gelling',
    name: 'Tuting & Gelling (Great Siang Bend)',
    nativeName: 'Pemako / Tsangpo Gorge Gateway',
    district: 'Upper Siang',
    altitude: '2,600 ft (Tuting) to 6,800 ft (Gelling)',
    coordinates: { lat: 28.9877, lng: 94.9082, mapX: 62, mapY: 18 },
    community: 'Adi (Simong, Karko, Minyong), Memba, Khamba',
    description: 'Where the mighty Yarlung Tsangpo carves through the deepest canyon on Earth to enter India as the Siang river. Gelling sits just miles from the northern frontier, surrounded by hidden Buddhist pilgrimage caves of Pema Kod.',
    whySpecial: 'The ultimate cradle of Adi animist mythology and Tantric Buddhist lore. Here, cane suspension bridges 200 meters long sway across roaring white torrents with no nails—only cane, rattan, and collective tribal craftsmanship.',
    bestTime: 'November to April (Crisp sunny days and calm turquoise river waters)',
    howToReach: {
      gateway: 'Dibrugarh / Pasighat',
      roadTransit: 'Pasighat to Yingkiong, then 4x4 drive along the Upper Siang canyon to Tuting (approx. 10-12 hours adventurous road)',
      nearestAir: 'Pasighat Airport (230 km)',
      nearestRail: 'Murkeongselek (Assam)'
    },
    nearbyExperiences: [
      'Cross the legendary cane and bamboo suspension bridge over the Siang',
      'Pilgrimage hike to Dewakota and hidden caves of Pemako',
      'Angling for Golden Mahseer in crystal-clear tributary confluences',
      'Evening fireside Adi epic storytelling ballads (Abang)'
    ],
    festivals: ['Solung (September 1-3)', 'Aran (Spring hunting and harvest festival)'],
    localFood: ['Lukter (pounded dried meat with bird’s eye chili)', 'Pepa (fermented bamboo fish)', 'Wild banana blossom fry', 'Smoked pork boiled with ginger & tapioca'],
    homestaysCount: 5,
    approximateBudget: '₹2,600 - ₹4,500 / day',
    difficulty: 'Expedition',
    tags: ['Siang Canyon', 'Cane Bridges', 'Pema Kod', 'Sacred Rivers', 'Adi Epic Lore'],
    images: [
      'https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80'
    ],
    responsibleGuidelines: [
      'Always heed the guidance of local Adi village boatmen and cane bridge repairers.',
      'Practice catch-and-release angling strictly; traditional tribal fishing boundaries are sacred.',
      'Carry personal first-aid; medical evacuation from the canyon takes significant logistical effort.'
    ],
    category: 'trek'
  },
  {
    id: 'wakro-namsai',
    name: 'Wakro & Namsai (Golden Pagodas & Citrus)',
    nativeName: 'Kamlang & Khamti Realm',
    district: 'Lohit & Namsai',
    altitude: '1,800 ft (550 m)',
    coordinates: { lat: 27.7944, lng: 96.3475, mapX: 82, mapY: 60 },
    community: 'Tai Khamti, Singpho, Digaru Mishmi',
    description: 'A verdant lowland-to-foothill transition where golden Southeast-Asian style Theravada Buddhist monasteries gleam amidst extensive orange orchards, organic tea plantations, and the pristine Kamlang Wildlife Sanctuary.',
    whySpecial: 'Homeland of the Tai Khamti with their ancient palm-leaf script (Lik-Tai) and the Singpho—the true indigenous originators of wild Indian tea (Phalap). Home to Glow Lake and tranquil river beaches.',
    bestTime: 'October to March (Fragrant orange harvesting in Dec-Jan; Sangken Water Festival in April)',
    howToReach: {
      gateway: 'Dibrugarh / Tinsukia',
      roadTransit: 'Dibrugarh to Namsai via Dhola-Sadiya or Parasuram Kund bridge (approx. 3.5 hours on smooth highways)',
      nearestAir: 'Dibrugarh (120 km) or Tezu (45 km)',
      nearestRail: 'Tinsukia (85 km)'
    },
    nearbyExperiences: [
      'Visit the majestic Golden Pagoda (Kongmu Kham) at Tengapani',
      'Experience the ancient Singpho wood-smoked tea (Phalap) pressing method',
      'Orchard walk: pluck fresh sweet Wakro oranges with village farmers',
      'Trek to the high mystical Glow Lake in Kamlang Sanctuary'
    ],
    festivals: ['Sangken (April 13-15 - Water Festival)', 'Shapawng Yawng Manau Poi (February)'],
    localFood: ['Khao Lam (fragrant sticky rice roasted in bamboo tubes)', 'Pa Sa (raw pounded river fish soup with wild jungle herbs)', 'Smoked Singpho tea'],
    homestaysCount: 16,
    approximateBudget: '₹2,000 - ₹3,400 / day',
    difficulty: 'Easy',
    tags: ['Golden Pagoda', 'Tai Khamti', 'Wild Tea', 'Orange Orchards', 'Kamlang Sanctuary'],
    images: [
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=1200&q=80'
    ],
    responsibleGuidelines: [
      'Wear respectful attire covering knees and shoulders within the monastery grounds.',
      'Purchase organic smoked Phalap tea directly from village women self-help cooperatives.',
      'Do not pluck citrus or tea leaves without explicit permission from host families.'
    ],
    category: 'food'
  },
  {
    id: 'shergaon-rupa',
    name: 'Shergaon (Sacred Forests of Sherdukpen)',
    nativeName: 'Senchhe',
    district: 'West Kameng',
    altitude: '6,400 ft (1,950 m)',
    coordinates: { lat: 27.1234, lng: 92.2612, mapX: 14, mapY: 66 },
    community: 'Sherdukpen',
    description: 'A serene mountain village set in an amphitheater of pine hills, apple orchards, and crystal-clear mountain trout streams. Renowned for its community-led conservation group (Garung Thuk) preserving sacred groves.',
    whySpecial: 'Witness the rare blend of Tibetan Mahayana Buddhism and pre-Buddhist Shamanism (Nyizi). Home to ancient wooden Gompas, sustainable trout farms, and traditional mud-plastered stone dwellings.',
    bestTime: 'September to May (Crisp winters with blooming wild rhododendrons and cherry blossoms)',
    howToReach: {
      gateway: 'Guwahati / Tezpur',
      roadTransit: 'Guwahati via Orang & Kalaktang to Shergaon on a scenic mountain highway (approx. 5.5 hours)',
      nearestAir: 'Guwahati (220 km) or Tezpur (140 km)',
      nearestRail: 'Rangapara (115 km)'
    },
    nearbyExperiences: [
      'Hike through centuries-old Chhoskorong sacred forest groves',
      'Participate in traditional kiwi and plum jam making sessions',
      'Visit the 250-year-old Zengbu Gompa wooden monastery',
      'Learn Sherdukpen silk thread spinning and wood bowl turning'
    ],
    festivals: ['Kro-Chekor (May harvest invocation)', 'Lossar (February New Year)'],
    localFood: ['Khazi (Sherdukpen spiced rice pancake)', 'Trout wrapped in wild turmeric leaf', 'Boiled pumpkin blossom fritters', 'Locally brewed Marua'],
    homestaysCount: 9,
    approximateBudget: '₹1,700 - ₹2,900 / day',
    difficulty: 'Easy',
    tags: ['Sherdukpen Tribe', 'Apple Orchards', 'Sacred Groves', 'Kiwi Farms', 'Peaceful Village'],
    images: [
      'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80'
    ],
    responsibleGuidelines: [
      'Do not pluck wild orchids or disturb stones in the sacred grove zones.',
      'Respect water sources: never wash laundry or soap utensils directly in village mountain streams.',
      'Support local village youth groups maintaining the botanical heritage trails.'
    ],
    category: 'village'
  }
];