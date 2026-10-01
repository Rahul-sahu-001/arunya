import { Trail } from '../types';

export const TRAILS: Trail[] = [
  {
    id: 'seven-lakes-anini',
    name: 'Seven Lakes Alpine Expedition',
    district: 'Dibang Valley',
    distanceKm: 58,
    durationDays: '7 Days',
    difficulty: 'Challenging',
    maxElevationMeters: 4020,
    elevationProfile: [
      { distanceKm: 0, elevationMeters: 1968, label: 'Anini Base (6,450 ft)' },
      { distanceKm: 12, elevationMeters: 2600, label: 'Emudu Camp (8,530 ft)' },
      { distanceKm: 24, elevationMeters: 3300, label: 'Kalon Pass Ridge (10,820 ft)' },
      { distanceKm: 36, elevationMeters: 3850, label: 'Lake 1 & Lake 2 Basin (12,630 ft)' },
      { distanceKm: 44, elevationMeters: 4020, label: 'Lake 7 High Crest (13,180 ft)' },
      { distanceKm: 58, elevationMeters: 1968, label: 'Return Descent to Anini' }
    ],
    startPoint: 'Mipi Village, Anini',
    guideRequirement: 'Mandatory',
    bestSeason: 'September to November & April to May',
    waterPoints: 'Abundant glacial streams every 3-4 km; carry water purification tablets.',
    permits: 'ILP (Indian) / PAP (Foreign) + Local Gaon Burah Village Council clearance.',
    safetyNotes: [
      'High alpine weather can change in minutes; full waterproof thermal gear required.',
      'Strict wilderness protocol: carry out all non-biodegradable waste.',
      'Trek only with certified Idu Mishmi local porters and guides.'
    ],
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'bailey-trail-thembang',
    name: 'The Historic Bailey Trail',
    district: 'West Kameng & Tawang',
    distanceKm: 42,
    durationDays: '5 Days',
    difficulty: 'Moderate',
    maxElevationMeters: 3800,
    elevationProfile: [
      { distanceKm: 0, elevationMeters: 2300, label: 'Thembang Dzong (7,545 ft)' },
      { distanceKm: 10, elevationMeters: 2850, label: 'Semnak Ridge (9,350 ft)' },
      { distanceKm: 22, elevationMeters: 3450, label: 'Tse La Pass (11,310 ft)' },
      { distanceKm: 32, elevationMeters: 3800, label: 'Mago Alpine Meadow (12,460 ft)' },
      { distanceKm: 42, elevationMeters: 2900, label: 'Jang / Tawang Confluence' }
    ],
    startPoint: 'Thembang Fortified Village',
    guideRequirement: 'Mandatory',
    bestSeason: 'October to May (Spring blooms in April; clear winter vistas)',
    waterPoints: 'Pure mountain springs along the trail.',
    permits: 'West Kameng Community Conservation Area Permit + ILP.',
    safetyNotes: [
      'Acclimatize for 24 hours at Thembang before ascending high ridges.',
      'Red panda and takin conservation zone: maintain absolute camp quiet.'
    ],
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'dong-sunrise-trek',
    name: 'Dong Peak First Dawn Ascent',
    district: 'Anjaw',
    distanceKm: 14,
    durationDays: '1 Day (Night Ascent)',
    difficulty: 'Moderate',
    maxElevationMeters: 2650,
    elevationProfile: [
      { distanceKm: 0, elevationMeters: 1240, label: 'Walong Camp (4,070 ft)' },
      { distanceKm: 4, elevationMeters: 1800, label: 'Pine Ridge Switchbacks' },
      { distanceKm: 7, elevationMeters: 2650, label: 'Dong Summit (8,700 ft) - 4:15 AM' },
      { distanceKm: 14, elevationMeters: 1240, label: 'Return to Walong' }
    ],
    startPoint: 'Dong Hanging Bridge, Walong',
    guideRequirement: 'Recommended',
    bestSeason: 'October to April',
    waterPoints: 'Carry 2 liters from base camp; limited surface water on steep pine ridge.',
    permits: 'ILP / PAP + Special Frontier Clearance.',
    safetyNotes: [
      'Hike begins at 2:45 AM; high-powered headlamps and thermal windbreakers mandatory.',
      'Watch step on dewy pine needle trails near summit edges.'
    ],
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
  }
];