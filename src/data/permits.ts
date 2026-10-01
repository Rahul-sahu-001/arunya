export interface PermitInfo {
  title: string;
  type: 'ILP' | 'PAP';
  forWhom: string;
  validity: string;
  cost: string;
  officialPortal: string;
  documentsRequired: string[];
  processingTime: string;
  importantRules: string[];
}

export const PERMIT_DETAILS: PermitInfo[] = [
  {
    title: 'Inner Line Permit (ILP)',
    type: 'ILP',
    forWhom: 'All Indian Citizens residing outside Arunachal Pradesh (Mandatory under Eastern Bengal Frontier Regulation 1873).',
    validity: '15 Days for Tourists (extendable up to 30 days via local DC office).',
    cost: '₹100 (Standard) / ₹400 (Instant e-ILP).',
    officialPortal: 'https://arunachalilp.com',
    documentsRequired: ['Valid Aadhaar Card / Voter ID / Passport', 'Passport-size digital photograph', 'Local sponsor / homestay booking voucher (recommended)'],
    processingTime: 'Standard: 24 to 48 business hours. Instant e-ILP: within a few hours online.',
    importantRules: [
      'Carry 3 physical printed copies of your approved e-ILP with you at all times.',
      'Present ILP along with original photo ID at state check-posts (e.g. Bhalukpong, Kimin, Pasighat, Roing).',
      'Never attempt to enter the state without an approved permit; fines and turning back are strictly enforced.',
      'ILP is valid only for specified districts selected during application.'
    ]
  },
  {
    title: 'Protected Area Permit (PAP)',
    type: 'PAP',
    forWhom: 'All Foreign Nationals (including NRIs/OCIs traveling on foreign passports).',
    validity: '30 Days.',
    cost: 'USD 50 (approx. ₹4,200) per person.',
    officialPortal: 'Ministry of Home Affairs / Resident Commissioner Office, New Delhi & Kolkata',
    documentsRequired: ['Valid Foreign Passport with Indian Visa', 'Confirmed itinerary through a registered local tour operator / registered guide', 'Travel in groups of 2 or more (solo PAP permits require special state clearance)'],
    processingTime: '3 to 5 weeks prior to intended travel.',
    importantRules: [
      'Foreign travelers must travel along approved tourist circuits only.',
      'Certain high-altitude international border zones (e.g. Bum La Pass, Kibithu forward post) are restricted to foreign nationals by defense regulations.',
      'Register at local police stations upon arrival in remote district headquarters.'
    ]
  }
];

export const EMERGENCY_CONTACTS = [
  { district: 'Statewide Emergency', contact: '112 (Police, Fire, Ambulance)' },
  { district: 'Tourism Directorate, Itanagar', contact: '+91-360-2214745 / info@arunachaltourism.com' },
  { district: 'Tawang Tourism Helpline', contact: '+91-3794-222236' },
  { district: 'Lower Subansiri (Ziro) Helpline', contact: '+91-3788-224255' },
  { district: 'Dibang Valley (Anini) DC Office', contact: '+91-3801-222224' },
  { district: 'East Siang (Pasighat) Hospital', contact: '+91-368-2222212' }
];

export const TRANSPORT_GATEWAYS = [
  {
    name: 'Guwahati (GAU)',
    bestFor: 'Western Arunachal (West Kameng, Tawang, Pakke)',
    modes: ['Direct flight to Guwahati, then shared Sumo or AC bus to Bomdila (8 hrs)', 'Donyi Polo Express train to Naharlagun']
  },
  {
    name: 'Dibrugarh (DIB)',
    bestFor: 'Eastern & Siang Valleys (Mechuka, Anini, Dong/Walong, Pasighat, Namsai)',
    modes: ['Cross Dhola-Sadiya or Bogibeel bridge; direct shared Sumo to Roing, Tezu, or Pasighat (2.5-4 hrs)']
  },
  {
    name: 'Tezpur (TEZ)',
    bestFor: 'West Kameng & Lower Subansiri',
    modes: ['Sumo to Bhalukpong check-post (1.5 hrs), Bomdila (5 hrs), or Ziro (6 hrs)']
  },
  {
    name: 'Hollongi / Donyi Polo Airport (HGI)',
    bestFor: 'Direct state capital access',
    modes: ['Arunachal’s modern greenfield airport; 3.5 hrs drive to Ziro Valley or 1 hr to Naharlagun railway station']
  }
];