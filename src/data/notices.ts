export interface Notice {
  id: string;
  title: string;
  date: string; // ISO date
  church?: string; // slug, or undefined for parish-wide
  excerpt: string;
  body: string;
  isFuneral?: boolean;
}

export const notices: Notice[] = [
  {
    id: "1",
    title: "Easter Triduum Schedule 2026",
    date: "2026-04-01",
    excerpt: "Full schedule of Holy Week and Easter ceremonies across all six churches in Abbeyleix Parish.",
    body: "The Easter Triduum will be celebrated across the parish. Holy Thursday: Mass of the Lord's Supper at Abbeyleix 7:30pm. Good Friday: Stations of the Cross at Ballinakill 3:00pm, Celebration of the Lord's Passion at Abbeyleix 7:30pm. Holy Saturday: Easter Vigil at Abbeyleix 8:00pm. Easter Sunday: Masses at all six churches at usual times. All are welcome.",
  },
  {
    id: "2",
    title: "Parish Newsletter — April 2026",
    date: "2026-04-06",
    excerpt: "The latest parish newsletter is now available to read online or pick up at any of our six churches.",
    body: "The April 2026 edition of the Abbeyleix Parish newsletter is now available. Copies can be found at the back of each church. Topics this month include the Easter Triduum schedule, upcoming First Communion dates, and a remembrance of parishioners who passed away during Lent.",
  },
  {
    id: "3",
    title: "First Holy Communion — Dates Confirmed",
    date: "2026-03-20",
    church: "abbeyleix",
    excerpt: "First Holy Communion will take place in Abbeyleix on Saturday 16th May at 11:00am.",
    body: "First Holy Communion for children attending Scoil Mhuire, Abbeyleix, will take place on Saturday 16th May 2026 at 11:00am in the Church of the Most Holy Rosary. Parents are asked to attend the preparation meeting on Wednesday 7th May at 7:30pm in the parish centre.",
  },
  {
    id: "4",
    title: "Cemetery Sunday — Raheen",
    date: "2026-03-15",
    church: "raheen",
    excerpt: "Annual Cemetery Sunday Mass at Raheen graveyard will take place on Sunday 22nd June at 3:00pm.",
    body: "The annual Cemetery Sunday Mass for Raheen will be held at 3:00pm on Sunday 22nd June in the graveyard adjoining St. Fintan's Church. All families with loved ones buried in Raheen are invited to attend. Refreshments will be served afterwards in the community hall.",
  },
  {
    id: "5",
    title: "Shanahoe Golden Jubilee Celebrations Continue",
    date: "2026-03-10",
    church: "shanahoe",
    excerpt: "A series of events marking 50 years of St. Brigid's Church, Shanahoe, will continue through spring 2026.",
    body: "Following the hugely successful golden jubilee Mass in 2024, further celebrations are planned for 2026 including a heritage walk, a photographic exhibition in the community centre, and a special evening of music and reflection. Details will be announced in the parish newsletter.",
  },
];

export function getRecentNotices(count: number = 3): Notice[] {
  return [...notices]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

export function getNoticesByChurch(slug: string): Notice[] {
  return notices.filter((n) => n.church === slug);
}
