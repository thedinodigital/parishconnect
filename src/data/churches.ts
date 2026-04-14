export type DayOfWeek = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';

export interface MassTime {
  day: DayOfWeek;
  time: string; // "17:00" — 24hr
  notes?: string;
}

export interface HeritageHighlight {
  title: string;
  description: string;
  image?: string;
}

export interface Church {
  slug: string;
  name: string;
  fullName: string;
  village: string;
  dedication: string;
  builtYear: string;
  architecturalStyle: string;
  architect?: string;
  patron: string;
  address: string;
  eircode?: string;
  phone: string;
  coordinates: { lat: number; lng: number };
  shortDescription: string;
  history: string[];
  heritageHighlights: HeritageHighlight[];
  massTimes: MassTime[];
  hasWebcam: boolean;
  hasCemetery: boolean;
  heroImage: string;
  galleryImages: string[];
}

export const churches: Church[] = [
  {
    slug: "abbeyleix",
    name: "Holy Rosary",
    fullName: "Church of the Most Holy Rosary",
    village: "Abbeyleix",
    dedication: "Our Lady of the Most Holy Rosary",
    builtYear: "1893–1895",
    architecturalStyle: "Hiberno-Romanesque, cruciform plan",
    architect: "William Hague (1836–1899)",
    patron: "Our Lady of the Most Holy Rosary",
    address: "Main Street, Abbeyleix, Co. Laois",
    phone: "057 873 0844",
    coordinates: { lat: 52.914763, lng: -7.346055 },
    shortDescription: "Hiberno-Romanesque masterpiece by William Hague, dominating Abbeyleix's main street.",
    history: [
      "The parish of Abbeyleix was formed in 1824 by Bishop James Doyle, known as 'J.K.L.' Before that, the area was part of the ancient parish of Ballinakill — a historical link that still binds the two communities today.",
      "The present Church of the Most Holy Rosary was built between 1893 and 1895 on the site of an earlier chapel, thanks to the benevolence of Viscount De Vesci. The foundation stone reads 'Ecclesia Sacratissimi Rosarii. Abbeyleix 1893'.",
      "Designed by William Hague, one of Ireland's most gifted 19th-century ecclesiastical architects and a protégé of Augustus Welby Pugin, the church is striking for its Hiberno-Romanesque style. Hague set aside Pugin's beloved Gothic in favour of round arches, creating one of the finest Romanesque Revival churches in the Irish midlands. The great bell, weighing 29 hundredweight, was erected in 1906. The sanctuary was re-ordered and thoroughly renovated in 1993.",
      "The church is linked by a connecting structure to the former Brigidine Convent, which opened in Abbeyleix in 1842 and served the town for 180 years. In January 2026, the convent's ornate cast-iron cross — nearly lost when the convent was demolished in 1992 — was restored and unveiled on its original grounds, with Fr Paddy Byrne leading the prayer service.",
    ],
    heritageHighlights: [
      { title: "Marble altars", description: "Three marble altars with coloured shafts: a high altar and two side altars now serving as shrines." },
      { title: "Hiberno-Romanesque tower", description: "A distinctive limestone spire with circular pinnacles, rising above the main street of Abbeyleix." },
      { title: "1906 Bell", description: "The great bell, weighing 29 hundredweight, has called parishioners to prayer for over a century." },
      { title: "The Brigidine link", description: "Linked by structure and history to the Brigidine Convent, which served Abbeyleix from 1842 to 2025." },
    ],
    massTimes: [
      { day: "Sat", time: "17:00", notes: "Vigil Mass" },
      { day: "Sun", time: "11:00" },
      { day: "Tue", time: "10:00" },
      { day: "Thu", time: "10:00" },
      { day: "Fri", time: "10:00" },
    ],
    hasWebcam: true,
    hasCemetery: true,
    heroImage: "",
    galleryImages: [],
  },
  {
    slug: "ballyroan",
    name: "St Patrick's",
    fullName: "St. Patrick's Church",
    village: "Ballyroan",
    dedication: "St Patrick",
    builtYear: "1840",
    architecturalStyle: "Gothic Revival, octagonal tower",
    patron: "St Patrick",
    address: "Ballyroan, Co. Laois",
    phone: "057 873 0844",
    coordinates: { lat: 52.946589, lng: -7.302857 },
    shortDescription: "A Gothic Revival gem of 1840 with an unusual octagonal tower and stunning Munich stained glass.",
    history: [
      "St. Patrick's Church, Ballyroan, was built in 1840 — a simple and elegant four-bay Gothic Revival Catholic church that has served the people of Ballyroan for nearly two centuries.",
      "The church is distinctive for its octagonal tower, an unusual feature among rural Irish parish churches of its era. Built of limestone with a slate roof and cast-iron rainwater goods, the exterior is understated, but the interior reveals its true character.",
      "The finest feature of St. Patrick's is its stained glass, designed by the renowned Mayer & Co. of Munich — the same celebrated German workshop that supplied windows to many of Ireland's most important Catholic churches. The windows include scenes dedicated to St. Patrick, St. Brigid, and 'The Agony in the Garden', each a work of remarkable craftsmanship.",
      "The interior features timber-framed windows, a lancet-arch entrance with timber doors, and an organ gallery supported by clustered columns — a dignified setting for prayer that has changed little since the church first opened its doors.",
    ],
    heritageHighlights: [
      { title: "Mayer & Co. stained glass", description: "Exceptional stained glass windows from the famed Munich workshop of Mayer & Co., depicting St. Patrick, St. Brigid and The Agony in the Garden." },
      { title: "Octagonal tower", description: "An unusual and distinctive octagonal tower, rare among Irish rural parish churches of the 1840s." },
      { title: "Organ gallery", description: "A timber organ gallery supported by clustered columns, unchanged since the church was built." },
    ],
    massTimes: [
      { day: "Sun", time: "09:30" },
      { day: "Wed", time: "10:00" },
    ],
    hasWebcam: false,
    hasCemetery: true,
    heroImage: "",
    galleryImages: [],
  },
  {
    slug: "ballinakill",
    name: "St Brigid's",
    fullName: "St. Brigid's Church",
    village: "Ballinakill",
    dedication: "St Brigid of Kildare",
    builtYear: "c. 1835",
    architecturalStyle: "Gothic Revival, cruciform plan",
    architect: "J.J. McCarthy (tower & spire, 1854)",
    patron: "St Brigid of Kildare",
    address: "Ballinakill, Co. Laois",
    phone: "057 873 0844",
    coordinates: { lat: 52.881, lng: -7.307 },
    shortDescription: "A cruciform Gothic Revival church with a dramatic tower and spire added by J.J. McCarthy, 'the Irish Pugin'.",
    history: [
      "St. Brigid's Church, Ballinakill, was built around 1835 as a simple cruciform Gothic Revival church, typical of the Catholic churches built across Ireland in the decades after Catholic Emancipation in 1829.",
      "In 1854, the church was dramatically transformed when James Joseph McCarthy — known as 'the Irish Pugin' and one of the most important ecclesiastical architects of 19th-century Ireland — added the tower and spire. McCarthy's addition remains the most distinctive feature of the Ballinakill skyline.",
      "Like its sister church in Ballyroan, St. Brigid's features exceptional stained glass windows, almost certainly all from Mayer & Co. of Munich — the celebrated German workshop responsible for much of the finest Victorian-era stained glass in Irish Catholic churches.",
      "Ballinakill was historically the 'mother parish' of the area — until 1824, Abbeyleix itself was part of Ballinakill parish, before Bishop James Doyle created a new parish centred on Abbeyleix. The connection between the two communities, therefore, goes back over two hundred years.",
    ],
    heritageHighlights: [
      { title: "J.J. McCarthy tower & spire", description: "Added in 1854 by one of Ireland's greatest 19th-century church architects." },
      { title: "Mayer & Co. windows", description: "Stained glass from Munich, almost certainly all from the celebrated Mayer & Co. workshop." },
      { title: "The mother parish", description: "Ballinakill was the historic parish from which Abbeyleix was formed in 1824." },
    ],
    massTimes: [
      { day: "Mon", time: "11:00" },
      { day: "Tue", time: "11:00" },
      { day: "Thu", time: "11:00" },
      { day: "Fri", time: "11:00" },
      { day: "Sun", time: "11:00" },
    ],
    hasWebcam: false,
    hasCemetery: true,
    heroImage: "",
    galleryImages: [],
  },
  {
    slug: "knock",
    name: "St Laserian's",
    fullName: "St. Laserian's Church",
    village: "Knock",
    dedication: "St Laserian (Laisrén)",
    builtYear: "1847",
    architecturalStyle: "Rural Catholic church, Famine era",
    patron: "St Laserian (Laisrén), 7th-century first Bishop of Leighlin",
    address: "Knock, near Ballinakill, Co. Laois",
    phone: "057 873 0844",
    coordinates: { lat: 52.90111, lng: -7.23306 },
    shortDescription: "A Famine-era church dedicated to the founding bishop of the Diocese of Leighlin.",
    history: [
      "St. Laserian's Church at Knock was built in 1847, at the very height of the Great Famine — a remarkable act of faith and community perseverance in the darkest years of Irish history.",
      "The church is dedicated to St Laserian (Laisrén), the 7th-century abbot who founded and led the monastery at Old Leighlin and became the first Bishop of Leighlin. It was St Laserian who, at the Synod of Old Leighlin in 630 AD, convinced the bishops of Ireland to adopt the Roman dating of Easter — a pivotal moment in the history of the Irish Church. As such, St Laserian is one of the founding figures of the Diocese of Kildare & Leighlin, making his dedication deeply fitting.",
      "The church sits in a quiet rural setting south of the Chapel Cross Roads, near the village of Spink. Its adjoining graveyard contains over 150 memorials, with headstones dating from the 18th to the 21st centuries — a continuous record of the community it has served for nearly 180 years.",
    ],
    heritageHighlights: [
      { title: "Built during the Famine", description: "Completed in 1847, at the height of the Great Famine — a testament to faith in hard times." },
      { title: "Dedicated to a founding bishop", description: "St Laserian was the first Bishop of Leighlin and a founding father of the diocese." },
      { title: "Historic graveyard", description: "Over 150 memorials spanning three centuries of the local community." },
    ],
    massTimes: [
      { day: "Sat", time: "20:00", notes: "Vigil Mass" },
    ],
    hasWebcam: false,
    hasCemetery: true,
    heroImage: "",
    galleryImages: [],
  },
  {
    slug: "shanahoe",
    name: "St Brigid's",
    fullName: "St. Brigid's Church",
    village: "Shanahoe",
    dedication: "St Brigid of Kildare",
    builtYear: "1974",
    architecturalStyle: "Modern",
    patron: "St Brigid of Kildare",
    address: "Shanahoe, Co. Laois",
    phone: "057 873 0844",
    coordinates: { lat: 52.9317, lng: -7.4147 },
    shortDescription: "The youngest of the six churches, built by the Shanahoe community in 1974 and marking its golden jubilee in 2024.",
    history: [
      "St. Brigid's Church, Shanahoe, is the youngest of the six churches in Abbeyleix Parish — and in many ways the proudest. Built and opened in 1974, it was constructed within living memory by the very community that worships in it today. In 2024, the parish gathered to celebrate its golden jubilee: fifty years of prayer, baptisms, weddings, and funerals in a church the people of Shanahoe built themselves.",
      "Catholic worship in Shanahoe goes back far longer than the current church. Historical records reference a 'Clash Chapel' at Shanahoe in the 19th century, and Shanahoe appears in Lewis's Topographical Dictionary of Ireland (1837) as one of five chapels serving the surrounding area. For centuries, the faithful of Shanahoe have gathered to pray on this ground.",
      "Nearby, at Cromogue, stand the ruins of a Romanesque church beside St Fintan's Well — reminders that Christian worship in this area goes back well over a thousand years. Shanahoe's current church, though the youngest in the parish, is the most recent chapter of a very ancient story.",
    ],
    heritageHighlights: [
      { title: "Built by the community", description: "Opened in 1974, the current St Brigid's was built within living memory by the people who worship in it." },
      { title: "Golden Jubilee 2024", description: "Fifty years of prayer, marked by celebrations in 2024." },
      { title: "Ancient roots", description: "Christian worship at Shanahoe goes back centuries, with earlier chapels recorded on this site." },
    ],
    massTimes: [
      { day: "Sun", time: "12:00" },
    ],
    hasWebcam: false,
    hasCemetery: true,
    heroImage: "",
    galleryImages: [],
  },
  {
    slug: "raheen",
    name: "St Fintan's",
    fullName: "St. Fintan's Church",
    village: "Raheen",
    dedication: "St Fintan of Clonenagh",
    builtYear: "1857",
    architecturalStyle: "Gothic Revival",
    patron: "St Fintan of Clonenagh, 6th-century abbot",
    address: "Raheen, Co. Laois",
    phone: "057 873 0844",
    coordinates: { lat: 52.9217, lng: -7.3894 },
    shortDescription: "A Gothic Revival church on a site granted by a Protestant family in 1729 — home to one of Ireland's most moving Penal-era stories.",
    history: [
      "St. Fintan's Church at Raheen stands on one of the most historically significant Catholic sites in County Laois. Before any church existed here, local Catholics — forbidden by law from worshipping openly — were forced to celebrate Mass in a deep pit hidden in the open fields. That pit is still known locally today as 'the Mass Pit', and it can still be seen near the village.",
      "In 1729, a Protestant family named Baldwin, moved by the sight of the poor Catholics of Raheen gathered in their open-air Mass Pit, did something extraordinary for the Penal era: they granted land for a proper Catholic chapel. A simple thatched chapel was built on the site — an act of religious generosity rare in 18th-century Ireland, and one that should be remembered with gratitude to this day.",
      "In 1746, an English tourist passing through wrote of seeing a priest in full vestments celebrating Mass under a tree to a large congregation, audible from a great distance. He described the Catholics of the area as 'very solemn and sincere in their religion'.",
      "The present Gothic Revival church, dedicated to St Fintan — the 6th-century abbot of Clonenagh — was built in 1857 on the site of the thatched chapel. The tower and porches were added around 1880, and the interior was remodelled around 1980. The adjoining graveyard, in very good order, holds generations of the families who once worshipped in the Mass Pit.",
    ],
    heritageHighlights: [
      { title: "The Mass Pit", description: "Still visible near the village — the deep pit where Raheen's Catholics were forced to celebrate Mass during the Penal era." },
      { title: "Granted in 1729", description: "The Protestant Baldwin family granted the site for a Catholic chapel — a rare act of generosity in Penal times." },
      { title: "1746 eyewitness", description: "An English tourist described Raheen's Catholics as 'very solemn and sincere in their religion'." },
      { title: "Patron of Clonenagh", description: "Dedicated to St Fintan, the great 6th-century abbot of nearby Clonenagh monastery." },
    ],
    massTimes: [
      { day: "Sat", time: "19:00", notes: "Vigil Mass" },
    ],
    hasWebcam: false,
    hasCemetery: true,
    heroImage: "",
    galleryImages: [],
  },
];

// Helper: get church by slug
export function getChurchBySlug(slug: string): Church | undefined {
  return churches.find((c) => c.slug === slug);
}

// Helper: format 24hr time to 12hr display
export function formatTime(time24: string): string {
  const [h, m] = time24.split(':').map(Number);
  const suffix = h >= 12 ? 'pm' : 'am';
  const h12 = h === 0 ? 12 : h > 12 ? h - 12 : h;
  return `${h12}:${m.toString().padStart(2, '0')}${suffix}`;
}

// Helper: get the next upcoming Mass across all churches or for one church
export function getNextMass(churchSlug?: string): { church: Church; mass: MassTime } | null {
  const now = new Date();
  const dayMap: Record<number, DayOfWeek> = {
    0: 'Sun', 1: 'Mon', 2: 'Tue', 3: 'Wed', 4: 'Thu', 5: 'Fri', 6: 'Sat',
  };

  const candidates: { church: Church; mass: MassTime; minutesUntil: number }[] = [];
  const targetChurches = churchSlug ? churches.filter((c) => c.slug === churchSlug) : churches;

  for (const church of targetChurches) {
    for (const mass of church.massTimes) {
      const dayIndex = Object.entries(dayMap).find(([, v]) => v === mass.day)?.[0];
      if (dayIndex === undefined) continue;
      const targetDay = Number(dayIndex);
      const [massH, massM] = mass.time.split(':').map(Number);

      // Calculate minutes until this mass (within next 7 days)
      for (let daysAhead = 0; daysAhead < 7; daysAhead++) {
        const candidate = new Date(now);
        candidate.setDate(candidate.getDate() + daysAhead);
        if (candidate.getDay() !== targetDay) continue;
        candidate.setHours(massH, massM, 0, 0);
        const diff = candidate.getTime() - now.getTime();
        if (diff > 0) {
          candidates.push({ church, mass, minutesUntil: diff / 60000 });
        }
      }
    }
  }

  candidates.sort((a, b) => a.minutesUntil - b.minutesUntil);
  return candidates[0] ? { church: candidates[0].church, mass: candidates[0].mass } : null;
}
