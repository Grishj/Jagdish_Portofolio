export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  link?: string;
  featured: boolean;
}

export const projectCategories = [
  "All",
  "Culinary Excellence",
  "Hospitality Management",
  "Event Coordination",
  "Hotel Operations",
  "Guest Services",
  "Training & Development",
] as const;

export const projects: Project[] = [
  {
    id: "1",
    title: "Fine Dining Experience Design",
    category: "Culinary Excellence",
    description: "Developed a comprehensive fine dining service protocol for a 5-star hotel restaurant",
    longDescription: "Created and implemented a complete fine dining experience framework including menu curation, wine pairing protocols, table service standards, and guest interaction guidelines. This project resulted in a 40% increase in guest satisfaction scores and a 25% increase in repeat dining customers.",
    image: "/images/projects/fine-dining.jpg",
    technologies: ["Menu Planning", "Wine Pairing", "Service Excellence", "Guest Relations"],
    featured: true,
  },
  {
    id: "2",
    title: "Luxury Hotel Operations Optimization",
    category: "Hotel Operations",
    description: "Streamlined front desk operations and guest check-in processes",
    longDescription: "Analyzed and optimized the entire guest journey from reservation to checkout. Implemented new SOPs that reduced check-in time by 50% while improving personalization. Integrated technology solutions for seamless guest experience.",
    image: "/images/projects/hotel-ops.jpg",
    technologies: ["Operations Management", "Process Optimization", "Guest Experience", "Technology Integration"],
    featured: true,
  },
  {
    id: "3",
    title: "Corporate Event Management",
    category: "Event Coordination",
    description: "Coordinated a 500-person corporate conference with multiple breakout sessions",
    longDescription: "Led the planning and execution of a three-day corporate conference including venue setup, catering coordination, AV management, and guest services. Successfully managed a budget of $150,000 and received outstanding feedback from attendees.",
    image: "/images/projects/event-mgmt.jpg",
    technologies: ["Event Planning", "Budget Management", "Vendor Coordination", "Logistics"],
    featured: true,
  },
  {
    id: "4",
    title: "Guest Service Excellence Program",
    category: "Guest Services",
    description: "Designed and implemented a comprehensive guest service training program",
    longDescription: "Developed a multi-tier training program for front-line staff focusing on anticipatory service, problem resolution, and creating memorable experiences. Program resulted in 35% improvement in guest satisfaction scores.",
    image: "/images/projects/guest-service.jpg",
    technologies: ["Training Development", "Service Standards", "Quality Assurance", "Customer Relations"],
    featured: false,
  },
  {
    id: "5",
    title: "Sustainable Hospitality Initiative",
    category: "Hospitality Management",
    description: "Implemented eco-friendly practices across hotel operations",
    longDescription: "Led a sustainability initiative that reduced water consumption by 30%, energy usage by 25%, and waste by 40%. Created guest engagement programs to promote environmental awareness while maintaining luxury standards.",
    image: "/images/projects/sustainability.jpg",
    technologies: ["Sustainability", "Operations", "Guest Engagement", "Cost Reduction"],
    featured: false,
  },
  {
    id: "6",
    title: "Staff Development & Training",
    category: "Training & Development",
    description: "Created comprehensive onboarding and continuous training programs",
    longDescription: "Designed a structured training curriculum for new hires and ongoing professional development for existing staff. Implemented mentorship programs and skills assessments that improved staff retention by 45%.",
    image: "/images/projects/training.jpg",
    technologies: ["Curriculum Design", "Mentorship", "Skills Assessment", "Career Development"],
    featured: false,
  },
];
