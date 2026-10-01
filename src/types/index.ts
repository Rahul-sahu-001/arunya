// ARUNYA Platform Type Definitions

export type DestinationCategory = 'village' | 'festival' | 'homestay' | 'trek' | 'food' | 'culture';

export interface Destination {
  id: string;
  name: string;
  nativeName?: string;
  district: string;
  altitude: string;
  coordinates: {
    lat: number;
    lng: number;
    mapX: number; // Percent X for custom artistic map (0-100)
    mapY: number; // Percent Y for custom artistic map (0-100)
  };
  community: string;
  description: string;
  whySpecial: string;
  bestTime: string;
  howToReach: {
    gateway: string;
    roadTransit: string;
    nearestAir: string;
    nearestRail: string;
  };
  nearbyExperiences: string[];
  festivals: string[];
  localFood: string[];
  homestaysCount: number;
  approximateBudget: string;
  difficulty: 'Easy' | 'Moderate' | 'Demanding' | 'Expedition';
  tags: string[];
  images: string[];
  responsibleGuidelines: string[];
  category: DestinationCategory;
}

export interface DistrictInfo {
  id: string;
  name: string;
  headquarters: string;
  zone: 'Western' | 'Central' | 'Siang Belt' | 'Eastern' | 'Southern';
  tagline: string;
  elevationRange: string;
  nature: {
    mountains: string[];
    rivers: string[];
    waterfalls: string[];
    forests: string[];
    wildlife: string[];
  };
  culture: {
    tribes: string[];
    architecture: string;
    clothing: string;
    crafts: string[];
    musicDances: string[];
  };
  experiences: {
    title: string;
    category: string;
    description: string;
  }[];
  food: {
    dish: string;
    description: string;
    ingredients: string[];
  }[];
  festivals: {
    name: string;
    month: string;
    community: string;
    description: string;
  }[];
  heroImage: string;
}

export interface Story {
  id: string;
  title: string;
  subtitle: string;
  storyteller: string;
  role: string;
  village: string;
  district: string;
  community: string;
  readTime: string;
  audioDuration: string;
  coverImage: string;
  ambientSound: 'pines' | 'hearth' | 'river' | 'monastery';
  excerpt: string;
  content: string[];
  quote: string;
  gallery: string[];
}

export interface LocalPerson {
  id: string;
  name: string;
  role: string;
  village: string;
  district: string;
  community: string;
  bio: string;
  specialties: string[];
  image: string;
  quote: string;
  experienceTitle: string;
  experiencePrice: string;
  verifiedCommunityBadge: boolean;
}

export type FestivalStatus = 'Confirmed' | 'Expected' | 'To be announced';

export interface Festival {
  id: string;
  name: string;
  location: string;
  district: string;
  community: string;
  month: number; // 1-12
  monthName: string;
  approximateDate: string;
  status: FestivalStatus;
  type: 'Agricultural' | 'Religious' | 'Traditional' | 'Cultural';
  culturalMeaning: string;
  duration: string;
  travelerExperience: string;
  etiquette: string[];
  photographyRule: string;
  image: string;
}

export interface RouteStep {
  stepNumber: number;
  title: string;
  type: 'start' | 'village' | 'homestay' | 'forest' | 'kitchen' | 'river' | 'festival' | 'end';
  location: string;
  description: string;
  altitude?: string;
  transitHours?: string;
}

export interface TravelRoute {
  id: string;
  title: string;
  subtitle: string;
  durationDays: number;
  style: string;
  difficulty: string;
  coverImage: string;
  highlights: string[];
  steps: RouteStep[];
  culturalFocus: string;
}

export interface Homestay {
  id: string;
  name: string;
  host: string;
  village: string;
  district: string;
  community: string;
  roomType: string;
  pricePerNight: number;
  rating: number;
  reviewsCount: number;
  images: string[];
  badges: string[];
  meals: string[];
  experiences: string[];
  sustainability: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface LocalDish {
  id: string;
  name: string;
  nativeName: string;
  community: string;
  region: string;
  description: string;
  ingredients: string[];
  story: string;
  preparation: string;
  whereToTry: string;
  localHost: string;
  image: string;
  isCookingWorkshopAvailable: boolean;
}

export interface Artisan {
  id: string;
  name: string;
  craftType: string;
  community: string;
  village: string;
  district: string;
  story: string;
  materials: string[];
  products: string[];
  workshopAvailable: boolean;
  fairTradeGuarantee: string;
  image: string;
}

export interface Trail {
  id: string;
  name: string;
  district: string;
  distanceKm: number;
  durationDays: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging' | 'Alpine Expedition';
  maxElevationMeters: number;
  elevationProfile: { distanceKm: number; elevationMeters: number; label?: string }[];
  startPoint: string;
  guideRequirement: 'Mandatory' | 'Recommended' | 'Self-guided allowed';
  bestSeason: string;
  waterPoints: string;
  permits: string;
  safetyNotes: string[];
  image: string;
}

export interface SeasonalMonth {
  monthIndex: number;
  monthName: string;
  seasonTag: string;
  landscapeDescription: string;
  weatherCondition: string;
  temperatureRange: string;
  floraFauna: string;
  seasonalFoods: string[];
  recommendedRegions: string[];
  travelTip: string;
}

export interface LanguagePhrase {
  id: string;
  category: 'Greeting' | 'Gratitude' | 'Directions' | 'Hospitality' | 'Market';
  english: string;
  hindi: string;
  tribalLanguage: string;
  dialect: string;
  pronunciation: string;
  audioSimulatedText: string;
  culturalNote: string;
}

export interface SavedJournalEntry {
  id: string;
  title: string;
  date: string;
  location: string;
  notes: string;
  mood: string;
  photoUrl?: string;
  savedItemIds: string[];
}

export interface ImpactCalculation {
  days: number;
  travelers: number;
  homestayNights: number;
  guideDays: number;
  mealsCount: number;
  totalLocalRetentionINR: number;
  plasticBottlesAvoidedKg: number;
  localMultiplierRatio: number;
  directLivelihoodsCount: number;
}