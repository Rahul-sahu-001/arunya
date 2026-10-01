import { DistrictInfo } from '../types';

export const DISTRICTS: DistrictInfo[] = [
  {
    id: 'shi-yomi',
    name: 'Shi-Yomi',
    headquarters: 'Tato',
    zone: 'Siang Belt',
    tagline: 'High alpine bowls, sacred caves & the wild Yargap Chu canyon.',
    elevationRange: '1,200 m to 4,800 m',
    nature: {
      mountains: ['Menchukha Holy Peak', 'Dorjeeling Range', 'Gompa Ridge'],
      rivers: ['Yargap Chu', 'Siyom River'],
      waterfalls: ['Dorjeeling Fall', 'Lura Cascade'],
      forests: ['Sub-alpine conifers', 'Rhododendron scrub', 'Temperate pine valleys'],
      wildlife: ['Himalayan Black Bear', 'Red Panda', 'Wild Mountain Horses', 'Musk Deer']
    },
    culture: {
      tribes: ['Memba', 'Ramo', 'Pai-Libo'],
      architecture: 'Timber post-and-beam homes with hand-split wooden shingle roofs weighted down by river stones.',
      clothing: 'Chhuba (thick wool coats with silk sashes), felt boots, turquoise and coral head-ornaments.',
      crafts: ['Tibetan carpet weaving', 'Wood carving', 'Bamboo butter churners (Dongmo)'],
      musicDances: ['Ache Lhamo opera traditions', 'Losar celebratory circle dances', 'Ramo ancestral folk hymns']
    },
    experiences: [
      { title: 'Monastery Meditation', category: 'Spiritual', description: 'Early morning butter lamp lighting at 400-year-old Samden Yongcha Monastery.' },
      { title: 'Yargap Chu Rafting', category: 'Adventure', description: 'Grade III-IV whitewater exploration through high mountain granite gorges.' },
      { title: 'Pastoral Village Walk', category: 'Culture', description: 'Spend twilight grazing wild ponies with Memba shepherd elders.' }
    ],
    food: [
      { dish: 'Memba Momos with Yak Chhurpi', description: 'Fresh steamed parcels filled with fermented yak cheese and wild mountain chives.', ingredients: ['Yak cheese', 'Wheat flour', 'Mountain chives', 'Sichuan pepper'] },
      { dish: 'Suja & Tsampa', description: 'Churned salted butter tea paired with slow-roasted highland barley flour.', ingredients: ['Butter', 'Tea leaves', 'Himalayan rock salt', 'Barley'] }
    ],
    festivals: [
      { name: 'Losar', month: 'February / March', community: 'Memba', description: 'Tibetan-Buddhist New Year celebrated with masked cham dances, prayer flag hoisting, and family feasts.' }
    ],
    heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'lower-subansiri',
    name: 'Lower Subansiri (Ziro Valley)',
    headquarters: 'Ziro',
    zone: 'Central',
    tagline: 'UNESCO-nominated wetland agro-ecology, living bamboo architecture & Apatani wisdom.',
    elevationRange: '1,500 m to 2,400 m',
    nature: {
      mountains: ['Talley Range', 'Kardo Shivalinga Ridge', 'Ziro Plateau Rim'],
      rivers: ['Kele River', 'Subansiri Tributaries'],
      waterfalls: ['Pange Cascades', 'Talley Gorge Falls'],
      forests: ['Pleioblastus simonii bamboo groves', 'Blue Pine (Pinus wallichiana) woods', 'Temperate cloud forests'],
      wildlife: ['Clouded Leopard', 'Malayan Giant Squirrel', 'Bugun Liocichla', 'Himalayan Salamander']
    },
    culture: {
      tribes: ['Apatani'],
      architecture: 'Elevated timber and woven bamboo houses built with rat-proof columns and communal front verandas (Lapang).',
      clothing: 'Jigiro handwoven shawls with black, red and white geometric patterns; traditional cane nose plugs (Yaping Hullo).',
      crafts: ['Apatani loin-loom weaving', 'Intricate bamboo basketry (Sopo)', 'Cane smoking pipes'],
      musicDances: ['Daminda celebratory song dances', 'Pakhu-Itu festival dances', 'Donyi-Polo invocations']
    },
    experiences: [
      { title: 'Agro-Ecology Masterclass', category: 'Farming', description: 'Walk the bunds of Hong village to study traditional integrated fish-paddy hydrology.' },
      { title: 'Talley Valley Trek', category: 'Wilderness', description: 'Expedition into the virgin bamboo and fir sanctum of the clouded leopard.' },
      { title: 'Loin Loom Weaving', category: 'Craft', description: 'Sit on bamboo floorboards with master weavers crafting ceremonial shawls.' }
    ],
    food: [
      { dish: 'Pika Pila', description: 'Traditional Apatani pickle of fermented bamboo shoot, dried mountain pork fat, and king chili.', ingredients: ['Bamboo shoot', 'Pork fat', 'Bhut jolokia', 'Native salt'] },
      { dish: 'Dung Po', description: 'Steamed red rice encased inside aromatic wild Phrynium leaves.', ingredients: ['Red hill rice', 'Wild aromatic leaf', 'Spring water'] }
    ],
    festivals: [
      { name: 'Myoko', month: 'March (20-30)', community: 'Apatani', description: 'Month-long spring festival of communal bonding, fertility rites, and inter-village alliance forging.' },
      { name: 'Dree', month: 'July (5)', community: 'Apatani', description: 'Major agricultural festival praying for bountiful crop harvest and insect protection.' }
    ],
    heroImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'dibang-valley',
    name: 'Dibang Valley',
    headquarters: 'Anini',
    zone: 'Eastern',
    tagline: 'The kingdom of shifting mists, sacred animist taboos & glacial high tarns.',
    elevationRange: '1,000 m to 5,200 m',
    nature: {
      mountains: ['Mishmi Hills High Crest', 'Kalon Glacial Peak', 'Mayodia Ridge'],
      rivers: ['Dri River', 'Mathun River', 'Talon River'],
      waterfalls: ['Mipi Cascades', 'Kahii Falls'],
      forests: ['Pristine subtropical rainforest', 'High rhododendron alpine meadows'],
      wildlife: ['Mishmi Takin', 'Snow Leopard', 'Hoolock Gibbon', 'Goral', 'Tiger (Sacred sibling)']
    },
    culture: {
      tribes: ['Idu Mishmi'],
      architecture: 'Long single-corridor stilted wood houses with bamboo mesh walls, thatched cane roofs, and open smoking hearths.',
      clothing: 'Elaborate diamond-loomed coats, tiger-pattern woven bags, cane helmets with bear-hair fringes.',
      crafts: ['Intricate diamond-warp handloom', 'Cane knapsacks (Ta-ro)', 'Sacred shamanic drums'],
      musicDances: ['Igu Shaman spirit dances', 'Yu-traditional harvest chanting', 'War-drum invocations']
    },
    experiences: [
      { title: 'Seven Lakes Trek', category: 'Expedition', description: 'Trek past high glacial lakes perched above 13,000 ft in the misty Mishmi hills.' },
      { title: 'Night with the Igu Shaman', category: 'Spiritual', description: 'Listen to ancestral origin ballads under the light of pinewood hearth fires.' },
      { title: 'Dri Valley Wildlife Safari', category: 'Nature', description: 'Spot rare Mishmi takins foraging on steep river bluffs.' }
    ],
    food: [
      { dish: 'Idu Smoked Pork with Nettle', description: 'Hearth-cured pork braised with wild stinging nettle and bird chili.', ingredients: ['Smoked pork', 'Wild stinging nettle', 'Bird chili', 'Ginger'] },
      { dish: 'Yu (Millet Wine)', description: 'Traditional cloudy fermented brew offered to spirits and honored guests.', ingredients: ['Fermented finger millet', 'Natural yeast cake'] }
    ],
    festivals: [
      { name: 'Reh', month: 'February (1-3)', community: 'Idu Mishmi', description: 'Grand multi-day celebration of prosperity, community feast, and shamanic healing rituals.' }
    ],
    heroImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'west-kameng',
    name: 'West Kameng',
    headquarters: 'Bomdila',
    zone: 'Western',
    tagline: 'Ancient fortified dzongs, apple highlands, red panda sanctuaries & Monpa stone architecture.',
    elevationRange: '800 m to 4,500 m',
    nature: {
      mountains: ['Sela Range foothills', 'Eagle Nest Ridge', 'Bomdila Massif'],
      rivers: ['Kameng River', 'Dirang River', 'Tenga River'],
      waterfalls: ['Bap Teng Kang Fall', 'Chug Cascade'],
      forests: ['Temperate oak-conifer forests', 'Subtropical evergreen foothill jungles'],
      wildlife: ['Red Panda', 'Bugun Liocichla', 'Clouded Leopard', 'Himalayan Monal']
    },
    culture: {
      tribes: ['Monpa', 'Sherdukpen', 'Miji (Sajolang)', 'Hrusso (Aka)'],
      architecture: 'Fortified stone masonry houses with double-thick granite blocks, carved timber windows, and Buddhist altars.',
      clothing: 'Thick maroon wool coats, hand-spun yak hair hats, embroidered knee-high Monpa boots.',
      crafts: ['Traditional wood-mask carving', 'Daphne bush handmade paper', 'Carved wooden tea bowls'],
      musicDances: ['Torgya cham masked dances', 'Yak dance', 'Sherdukpen harvest dances']
    },
    experiences: [
      { title: 'Thembang Heritage Walk', category: 'History', description: 'Trace the defensive walls and gates of the 12th century Monpa fortified citadel.' },
      { title: 'Eaglenest Birding Sanctuary', category: 'Birding', description: 'Seek out the elusive Bugun Liocichla in high bamboo moss canopies.' },
      { title: 'Orchard Homestay Harvest', category: 'Agro', description: 'Pluck organic crisp apples and kiwi in family orchards of Dirang and Shergaon.' }
    ],
    food: [
      { dish: 'Zan with Gundruk', description: 'Finger millet porridge served with tangy fermented mountain green broth.', ingredients: ['Finger millet', 'Gundruk greens', 'Dried chili', 'Butter'] },
      { dish: 'Khura Pancakes', description: 'Crisp savory buckwheat pancakes fried on stone hearth griddles.', ingredients: ['Buckwheat flour', 'Egg', 'Mountain spring water'] }
    ],
    festivals: [
      { name: 'Losar', month: 'February', community: 'Monpa', description: 'Grand celebration of the New Year with butter sculptures and family gatherings.' }
    ],
    heroImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'anjaw',
    name: 'Anjaw (Eastern Dawn Frontier)',
    headquarters: 'Hawai',
    zone: 'Eastern',
    tagline: 'First sunrise of India, dramatic Lohit gorges & ancient Meyor trans-Himalayan pathways.',
    elevationRange: '600 m to 4,500 m',
    nature: {
      mountains: ['Dong Crest', 'Kaho Ridge', 'Ghat Peak'],
      rivers: ['Lohit River', 'Dichu River'],
      waterfalls: ['Hawai Gorge Cascades', 'Tilam Waters'],
      forests: ['Pinus roxburghii pine terraces', 'Alpine scrub'],
      wildlife: ['Musk Deer', 'Snow Leopard', 'Himalayan Serow', 'Golden Mahseer']
    },
    culture: {
      tribes: ['Meyor', 'Digaru Mishmi', 'Miju Mishmi'],
      architecture: 'Timber-frame homes with stone foundations, raised pinewood verandas, and slate hearths.',
      clothing: 'Fine woven tribal shawls, silver ear-plugs, brass beaded bands.',
      crafts: ['Lohit river pebble carving', 'Pine resin torches', 'Handspun wool blankets'],
      musicDances: ['Tamladu circle dances', 'Meyor flute melodies']
    },
    experiences: [
      { title: 'First Light Trek at Dong', category: 'Trek', description: 'Night ascent to stand under the first rays of morning light illuminating the country.' },
      { title: 'Walong Memorial & Hot Springs', category: 'History', description: 'Pay homage at Walong War Memorial and soak in mountain thermal sulfur springs.' },
      { title: 'Kaho Border Village Visit', category: 'Culture', description: 'Discover life at India’s very first village on the eastern international boundary.' }
    ],
    food: [
      { dish: 'Smoked Lohit River Fish', description: 'River catch slow-smoked over dry pine cones and served with garlic chili dip.', ingredients: ['Fresh river fish', 'Pine smoke', 'Wild mountain garlic', 'Chili'] }
    ],
    festivals: [
      { name: 'Tamladu', month: 'February (15)', community: 'Digaru Mishmi', description: 'Supplication to the Earth God to safeguard human health, cattle, and crops.' }
    ],
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'upper-siang',
    name: 'Upper Siang',
    headquarters: 'Yingkiong',
    zone: 'Siang Belt',
    tagline: 'The Great Tsangpo gorge entry, cane hanging bridges & sacred Pema Kod hidden realms.',
    elevationRange: '800 m to 4,200 m',
    nature: {
      mountains: ['Dewakota Range', 'Pemako Sacred Ridges'],
      rivers: ['Siang River (Yarlung Tsangpo)', 'Yamne River'],
      waterfalls: ['Danba Falls', 'Gelling Cascades'],
      forests: ['Dense tropical evergreen to temperate fir canopies'],
      wildlife: ['Tiger', 'Golden Cat', 'Great Hornbill', 'White-winged Wood Duck']
    },
    culture: {
      tribes: ['Adi (Minyong, Padam, Shimong)', 'Memba', 'Khamba'],
      architecture: 'Stilt houses with bamboo split flooring and legendary 200m cane-and-bamboo suspension bridges.',
      clothing: 'Gale wrap skirts with intricate black-and-red chevron patterns; heavy brass bead necklaces.',
      crafts: ['Cane suspension bridge engineering', 'Adi brass bell casting', 'Bamboo quivers'],
      musicDances: ['Solung Ponung narrative dances', 'Delong ritual dances', 'Tapun wind music']
    },
    experiences: [
      { title: 'Cross the Siang Cane Bridge', category: 'Adventure', description: 'Walk across a swaying 150m traditional cane suspension bridge above turquoise whitewater.' },
      { title: 'Adi Village Fireside Lore', category: 'Storytelling', description: 'Listen to village elders recount the epic oral genealogies of Abotani.' }
    ],
    food: [
      { dish: 'Lukter with Bird Chili', description: 'Shredded smoked beef and pork tossed with blazing bird’s eye chili and bamboo shoot.', ingredients: ['Smoked beef', 'Bird chili', 'Bamboo shoot', 'Ginger'] }
    ],
    festivals: [
      { name: 'Solung', month: 'September (1-3)', community: 'Adi', description: 'Principal agricultural socio-religious festival celebrating prosperity and divine protection.' }
    ],
    heroImage: 'https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?auto=format&fit=crop&w=1200&q=80'
  }
];