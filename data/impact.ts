export interface ImpactStat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
  icon: string;
}

export const impactStats: ImpactStat[] = [
  {
    id: "students",
    value: 5000,
    suffix: "+",
    label: "Students Supported",
    description: "Children receiving direct educational support annually",
    icon: "GraduationCap",
  },
  {
    id: "centers",
    value: 150,
    suffix: "+",
    label: "Learning Centers",
    description: "Safe spaces for children to learn and grow",
    icon: "Building2",
  },
  {
    id: "volunteers",
    value: 250,
    suffix: "+",
    label: "Dedicated Volunteers",
    description: "Passionate individuals giving their time and skills",
    icon: "Heart",
  },
  {
    id: "communities",
    value: 50,
    suffix: "+",
    label: "Communities Reached",
    description: "Urban slums and rural villages we serve",
    icon: "MapPin",
  },
];

export const teamMembers = [
  {
    id: "1",
    name: "Dr. Ananya Krishnan",
    role: "Founder & Executive Director",
    bio: "Former IAS officer with 20 years in rural development. Founded Ruchi Foundation in 2010 after witnessing firsthand how education transforms lives.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
  {
    id: "2",
    name: "Vikram Rathore",
    role: "Director — Programs",
    bio: "MBA from IIM Ahmedabad. Left a corporate career to design scalable education programs for underserved communities.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    id: "3",
    name: "Meera Iyer",
    role: "Head of Partnerships",
    bio: "Social entrepreneur with experience building NGO-corporate partnerships that create genuine community impact.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
  },
  {
    id: "4",
    name: "Suresh Patil",
    role: "Community Outreach Lead",
    bio: "Born and raised in the communities we serve. Suresh is the bridge between Ruchi Foundation and the families who need us most.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    id: "5",
    name: "Deepa Shenoy",
    role: "Head of Digital Education",
    bio: "EdTech specialist who designed curriculum for India's first tablet-based learning program for government schools.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80",
  },
  {
    id: "6",
    name: "Arun Joshi",
    role: "Finance & Operations",
    bio: "Chartered Accountant ensuring every donated rupee is spent with maximum impact and full transparency.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
];
