export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  category: string;
  impact: string;
  beneficiaries: number;
  status: "active" | "completed" | "upcoming";
  location: string;
}

export const projects: Project[] = [
  {
    id: "school-support",
    title: "School Support Program",
    description: "Providing essential school supplies, uniforms, and learning materials to children who cannot afford them.",
    longDescription: "Our School Support Program bridges the resource gap for over 2,000 children across 40 government schools. We provide comprehensive kits including books, stationery, uniforms, and school bags — removing the financial barriers that keep children away from education.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    category: "Education",
    impact: "2,000+ children supported annually",
    beneficiaries: 2000,
    status: "active",
    location: "Mumbai, Maharashtra",
  },
  {
    id: "digital-learning",
    title: "Digital Learning Initiative",
    description: "Equipping learning centers with tablets, computers, and internet access to bridge the digital divide.",
    longDescription: "Technology is transforming education. Our Digital Learning Initiative ensures that children from low-income families are not left behind. We've established 30 digital classrooms with high-speed internet, interactive software, and trained facilitators.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    category: "Technology",
    impact: "30 digital classrooms established",
    beneficiaries: 1500,
    status: "active",
    location: "Pune, Maharashtra",
  },
  {
    id: "community-library",
    title: "Community Library Program",
    description: "Building reading corners and mobile libraries in underserved communities to foster a love of reading.",
    longDescription: "Reading opens worlds. Our Community Library Program has established 25 reading corners in urban slums and rural villages. Each library holds 500+ curated books and hosts weekly storytelling sessions, reading competitions, and learning workshops.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",
    category: "Literacy",
    impact: "25 libraries serving 3,000+ readers",
    beneficiaries: 3000,
    status: "active",
    location: "Nashik, Maharashtra",
  },
  {
    id: "scholarship-program",
    title: "Merit Scholarship Program",
    description: "Supporting academically bright children from low-income families with full educational scholarships.",
    longDescription: "Talent knows no socioeconomic boundary. Our Merit Scholarship Program identifies high-potential students from underprivileged backgrounds and provides full scholarships covering tuition, accommodation, and living expenses through secondary and higher education.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",
    category: "Scholarships",
    impact: "500 scholarships awarded",
    beneficiaries: 500,
    status: "active",
    location: "Pan-Maharashtra",
  },
  {
    id: "teacher-training",
    title: "Teacher Empowerment Program",
    description: "Training government school teachers in modern pedagogy, child psychology, and inclusive education practices.",
    longDescription: "Great education begins with great teachers. We've trained over 800 government school teachers in child-centered teaching methods, inclusive education, and digital tools — creating a ripple effect that benefits thousands of students in their classrooms.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
    category: "Training",
    impact: "800+ teachers trained",
    beneficiaries: 800,
    status: "active",
    location: "Rural Maharashtra",
  },
  {
    id: "after-school",
    title: "After-School Learning Centers",
    description: "Safe, nurturing spaces where children receive homework help, tutoring, and enrichment activities after school.",
    longDescription: "Many children return home to environments that are not conducive to study. Our After-School Learning Centers provide safe, quiet, well-lit spaces staffed by trained educators where children can complete homework, receive tutoring, and participate in arts, music, and sports programs.",
    image: "https://images.unsplash.com/photo-1540479859555-17af45c78602?w=800&q=80",
    category: "Support",
    impact: "50 centers across 20 cities",
    beneficiaries: 4000,
    status: "active",
    location: "Maharashtra & Goa",
  },
  {
    id: "girl-child",
    title: "Girl Child Education Initiative",
    description: "Targeted support to keep girls in school through menstrual health education, safety programs, and family outreach.",
    longDescription: "Girls face unique barriers to education. Our initiative combines menstrual health support, self-defense training, family counseling, and conditional cash transfers to keep girls enrolled and thriving. We've reduced dropout rates by 60% in our partner schools.",
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80",
    category: "Gender Equity",
    impact: "60% reduction in girl dropout rates",
    beneficiaries: 1200,
    status: "active",
    location: "Rural Maharashtra",
  },
  {
    id: "vocational",
    title: "Youth Vocational Training",
    description: "Equipping school dropouts and out-of-school youth with marketable skills for dignified employment.",
    longDescription: "For youth who have left formal education, we offer 3–6 month vocational courses in plumbing, electrical work, tailoring, computer operations, and hospitality. Our placement cell connects graduates with employers, achieving 75% placement rates.",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80",
    category: "Vocational",
    impact: "75% job placement rate",
    beneficiaries: 600,
    status: "upcoming",
    location: "Mumbai & Pune",
  },
];
