export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
  type: "beneficiary" | "volunteer" | "donor";
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Priya Sharma",
    role: "Scholarship Recipient, 2022",
    quote: "Ruchi Foundation gave me more than a scholarship — they gave me belief in myself. Today I am studying engineering, something my family never imagined possible. I want to give back to this foundation someday.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    type: "beneficiary",
  },
  {
    id: "t2",
    name: "Rahul Mehta",
    role: "Volunteer, 3 years",
    quote: "Every Saturday I spend two hours at the community library, reading with kids. The transformation in their confidence over months is indescribable. Volunteering here is the most meaningful thing I do all week.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    type: "volunteer",
  },
  {
    id: "t3",
    name: "Sunita Patel",
    role: "Mother of beneficiary",
    quote: "My son used to skip school because we couldn't afford books. After he joined the School Support Program, everything changed. He now loves studying and dreams of becoming a doctor. Thank you from our whole family.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    type: "beneficiary",
  },
  {
    id: "t4",
    name: "Arjun Nair",
    role: "Corporate Volunteer, 1 year",
    quote: "Our company partnered with Ruchi Foundation for our CSR program. The transparency, impact, and professionalism of their team is unlike any NGO I have worked with. Our employees feel genuinely connected to the mission.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    type: "donor",
  },
  {
    id: "t5",
    name: "Kavita Desai",
    role: "Teacher Trainer, 2 years",
    quote: "Before the training program, I was teaching the way I was taught 30 years ago. The pedagogy workshops opened my eyes to child-centered learning. My students are more engaged, curious, and happy. I wish I had this 20 years ago.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
    type: "volunteer",
  },
  {
    id: "t6",
    name: "Mohammed Irfan",
    role: "Digital Learning Graduate",
    quote: "I had never touched a computer before joining the digital classroom. Today I manage social media for a local business. This program did not just teach me skills — it showed me that opportunities exist for people like me.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    type: "beneficiary",
  },
];
