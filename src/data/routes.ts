import { TravelRoute } from '../types';

export const ROUTES: TravelRoute[] = [
  {
    id: 'mist-and-mountain',
    title: 'The Mist & Mountain Route',
    subtitle: 'High pine bowls, wild river canyons & ancient Monpa/Memba stone settlements.',
    durationDays: 7,
    style: 'Slow Alpine Discovery',
    difficulty: 'Moderate',
    coverImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    highlights: ['400-year-old Samden Yongcha', 'Yargap Chu riverbanks', 'Living with Memba hosts', 'High altitude pass crossings'],
    culturalFocus: 'Buddhist-animist syncretism & Himalayan pastoral life',
    steps: [
      { stepNumber: 1, title: 'Gateway Ascent', type: 'start', location: 'Dibrugarh / Pasighat', description: 'Cross the Brahmaputra and ascend into the lush subtropical foothills.', transitHours: '3-4 hrs' },
      { stepNumber: 2, title: 'Canyon Waypoint', type: 'village', location: 'Aalo (Along)', description: 'Explore riverside Galo markets, taste sweet mountain oranges, and rest before high gorge ascent.', altitude: '2,000 ft', transitHours: '5 hrs' },
      { stepNumber: 3, title: 'The Forbidden Valley', type: 'homestay', location: 'Mechuka Valley', description: 'Arrive in the wide mystical bowl; settle into a traditional Memba wood-and-stone homestay.', altitude: '6,000 ft', transitHours: '6 hrs' },
      { stepNumber: 4, title: 'Monastery & Ridges', type: 'village', location: 'Samden Yongcha', description: 'Hike through pine slopes to the ancient monastery; view wild horses along the Yargap Chu.', altitude: '6,800 ft' },
      { stepNumber: 5, title: 'Hearth & Folklore', type: 'kitchen', location: 'Dorjeeling Village', description: 'Evening fireside session churning Suja tea and listening to elder migration folklore.', altitude: '6,100 ft' },
      { stepNumber: 6, title: 'Return via Siang Confluence', type: 'river', location: 'Pangin / Pasighat', description: 'Descend along the roaring Siyom river to the wide turquoise currents of the Siang.', transitHours: '7 hrs' },
      { stepNumber: 7, title: 'Journey Close', type: 'end', location: 'Pasighat / Dibrugarh', description: 'Farewell meal of river fish and bamboo shoot before onward flight.', transitHours: '2 hrs' }
    ]
  },
  {
    id: 'the-river-route',
    title: 'The Great River Route (Siang & Dibang)',
    subtitle: 'From thunderous glacial gorges to cane suspension bridges and the misty realms of the Idu Mishmi.',
    durationDays: 8,
    style: 'Wilderness & Cultural Expedition',
    difficulty: 'Challenging',
    coverImage: 'https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?auto=format&fit=crop&w=1200&q=80',
    highlights: ['200m cane hanging bridges', 'Siang confluence angling', 'Anini cloud valley', 'Tiger mythology encounters'],
    culturalFocus: 'Adi and Idu Mishmi deep river & forest animism',
    steps: [
      { stepNumber: 1, title: 'River Entry', type: 'start', location: 'Dibrugarh / Mohanbari', description: 'Cross the monumental 9.15 km Dhola-Sadiya Bridge over the Brahmaputra.', transitHours: '2 hrs' },
      { stepNumber: 2, title: 'Foothills of Roing', type: 'homestay', location: 'Roing & Mayodia Pass', description: 'Climb through mossy cloud forests of Mayodia Pass (8,700 ft) into pristine Dibang country.', altitude: '8,700 ft', transitHours: '5 hrs' },
      { stepNumber: 3, title: 'Valley of the Clouds', type: 'village', location: 'Anini', description: 'Reach remote Anini where vertical emerald ridges pierce misty skies.', altitude: '6,450 ft', transitHours: '5 hrs' },
      { stepNumber: 4, title: 'Shamanic Night', type: 'forest', location: 'Dri River Valley', description: 'Walk through pristine takin habitat and attend an evening Igu shaman chanting ritual.', altitude: '6,800 ft' },
      { stepNumber: 5, title: 'Adi River Homeland', type: 'river', location: 'Pangin & Upper Siang', description: 'Transfer to the Siang valley; test your balance on a swaying cane suspension bridge.', altitude: '2,200 ft', transitHours: '6 hrs' },
      { stepNumber: 6, title: 'Traditional Hearth Meal', type: 'kitchen', location: 'Karko Village', description: 'Cook Lukter with fresh bird chili and taste Apong brewed in bamboo cylinders.', altitude: '2,400 ft' },
      { stepNumber: 7, title: 'Riverbank Camp', type: 'river', location: 'Bodak / Pasighat', description: 'Camp along pristine white sand beaches of the Siang River under starry Himalayan skies.', altitude: '500 ft' },
      { stepNumber: 8, title: 'Departure', type: 'end', location: 'Pasighat Airport', description: 'Depart with memories of roaring rivers and living indigenous wisdom.', transitHours: '1 hr' }
    ]
  },
  {
    id: 'culture-and-craft-trail',
    title: 'The Living Culture & Loom Trail',
    subtitle: 'From UNESCO-nominated bamboo villages in Ziro to fortified stone Dzongs in West Kameng.',
    durationDays: 6,
    style: 'Heritage & Community Immersion',
    difficulty: 'Easy',
    coverImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Apatani bamboo architecture', 'Loin-loom masterclasses', 'Fortified 12th-century Thembang', 'Organic kiwi harvests'],
    culturalFocus: 'Apatani, Monpa & Sherdukpen sustainable architecture & crafts',
    steps: [
      { stepNumber: 1, title: 'Valley Gateway', type: 'start', location: 'Guwahati / Naharlagun', description: 'Scenic drive through the sub-Himalayan rainforest belt into the plateau of Ziro.', transitHours: '4 hrs' },
      { stepNumber: 2, title: 'Bamboo Corridors of Hong', type: 'village', location: 'Hong Village, Ziro', description: 'Explore ancient stilt architecture and the ingenious fish-cum-paddy wetland hydrology.', altitude: '5,540 ft' },
      { stepNumber: 3, title: 'Loom & Shaman Fires', type: 'kitchen', location: 'Hari Village', description: 'Sit beside master weaver Bamin Yamang; learn geometric backstrap weaving patterns.', altitude: '5,500 ft' },
      { stepNumber: 4, title: 'Westward Mountain Transition', type: 'village', location: 'Dirang Valley', description: 'Scenic transit across apple highlands and kiwi orchards toward West Kameng.', altitude: '4,900 ft', transitHours: '7 hrs' },
      { stepNumber: 5, title: 'Fortified Monpa Citadel', type: 'homestay', location: 'Thembang Dzong', description: 'Stay inside the ancient stone gate of Thembang; participate in community-run conservation.', altitude: '7,545 ft' },
      { stepNumber: 6, title: 'Return Descent', type: 'end', location: 'Tezpur / Guwahati', description: 'Descend via Bhalukpong with handwoven shawls and wild mountain tea.', transitHours: '5 hrs' }
    ]
  }
];