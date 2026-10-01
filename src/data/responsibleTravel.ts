export interface ResponsibleRule {
  id: string;
  title: string;
  summary: string;
  icon: string;
  detail: string;
}

export const RESPONSIBLE_GUIDELINES: ResponsibleRule[] = [
  {
    id: 'r1',
    title: 'Ask Before Photographing People',
    summary: 'Never treat village elders or children as photographic trophies.',
    icon: '📷',
    detail: 'Elder women with traditional facial tattoos (Tikyii) or cane nose plugs (Yaping Hullo) are respected cultural keepers, not tourist sights. Always initiate a genuine conversation first, ask for polite permission, and show them the photograph afterward.'
  },
  {
    id: 'r2',
    title: 'Respect Sacred Groves & Animist Sanctuaries',
    summary: 'Enter forest groves and sacrificial altars with reverence.',
    icon: '🌲',
    detail: 'In Donyi-Polo and animist tribal cosmology, specific stone monoliths, ancient ficus trees, and bamboo altars (Babo and Lapang) embody living guardian spirits. Never sit upon, deface, climb, or touch sacred ceremonial poles.'
  },
  {
    id: 'r3',
    title: 'Zero Single-Use Plastic Mandate',
    summary: 'Carry your own reusable bottle; remote valleys lack recycling infrastructure.',
    icon: '💧',
    detail: 'Remote mountain valleys have zero municipal waste incineration or recycling centers. Discarded plastic bottles end up choking wild riverbeds or being burned locally. Always refill from your homestay’s boiled spring water filter.'
  },
  {
    id: 'r4',
    title: 'Direct Community Economic Retention',
    summary: 'Pay homestay hosts and local guides directly without middle-man gouging.',
    icon: '🤝',
    detail: 'Conventional tour conglomerates often retain up to 85% of your expenditure in metropolitan cities. By paying community homestay hosts, local village guides, and weaving cooperatives directly, your rupee directly builds local schools and health funds.'
  },
  {
    id: 'r5',
    title: 'Respect Tribal Village Councils (Gaon Burahs)',
    summary: 'Honor indigenous self-governance and traditional customary laws.',
    icon: '🏛️',
    detail: 'Arunachal’s villages are self-governed by the Kebang (Adi), Bapu (Monpa), or Gaon Burah councils. If a village trail or forest zone is closed for a seasonal ritual (e.g. during crop germination taboos), respect the closure without argument.'
  },
  {
    id: 'r6',
    title: 'Protect Wildlife & Heed Hunting Taboos',
    summary: 'Support community-led anti-poaching and hornbill nest adoption.',
    icon: '🦤',
    detail: 'Never buy animal skins, claws, bear bile, or hornbill beaks. Instead, support community wildlife initiatives like the Hornbill Nest Adoption program in Pakke, where former hunters earn livelihood stipends as wildlife protectors.'
  },
  {
    id: 'r7',
    title: 'Leave Sacred Rocks & Wild Orchids Intact',
    summary: 'Take only memories; leave stones, fossils, and flowers where they grew.',
    icon: '🌸',
    detail: 'Arunachal is home to over 600 rare orchid species, many of which are micro-endemic to specific valleys. Plucking wild flora or taking river stones disrupts fragile high-altitude micro-ecosystems.'
  },
  {
    id: 'r8',
    title: 'Hearth Etiquette & Gentle Speech',
    summary: 'The kitchen hearth is sacred; never step over the burning embers.',
    icon: '🔥',
    detail: 'In Monpa, Adi, and Nyishi homes, the central open hearth (Thab-Kha) is considered a sacred threshold where family spirits dwell. Never dry damp socks directly over cooking grates or kick the hearth stones.'
  }
];