export interface Skill {
  name: string;
  level: number; // 0-100
  category: "technical" | "soft" | "language";
  icon?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  logo?: string;
}

export const technicalSkills: Skill[] = [
  { name: "Hotel Management Systems", level: 90, category: "technical" },
  { name: "POS Systems", level: 85, category: "technical" },
  { name: "Reservation Management", level: 88, category: "technical" },
  { name: "Event Planning Software", level: 80, category: "technical" },
  { name: "Microsoft Office Suite", level: 95, category: "technical" },
  { name: "Food Safety & Hygiene", level: 92, category: "technical" },
];

export const softSkills: Skill[] = [
  { name: "Customer Service", level: 95, category: "soft" },
  { name: "Communication", level: 92, category: "soft" },
  { name: "Leadership", level: 85, category: "soft" },
  { name: "Problem Solving", level: 90, category: "soft" },
  { name: "Team Collaboration", level: 93, category: "soft" },
  { name: "Time Management", level: 88, category: "soft" },
  { name: "Attention to Detail", level: 94, category: "soft" },
  { name: "Adaptability", level: 91, category: "soft" },
];

export const languages: Skill[] = [
  { name: "English", level: 95, category: "language" },
  { name: "Nepali", level: 100, category: "language" },
  { name: "Hindi", level: 85, category: "language" },
];

export const certifications: Certification[] = [
  {
    id: "1",
    name: "Certified Hospitality Professional (CHP)",
    issuer: "American Hotel & Lodging Association",
    date: "2024-03",
    credentialId: "CHP-2024-12345",
  },
  {
    id: "2",
    name: "Food Safety Manager Certification",
    issuer: "ServSafe",
    date: "2023-11",
    credentialId: "FS-2023-67890",
  },
  {
    id: "3",
    name: "Event Planning Certificate",
    issuer: "Event Leadership Institute",
    date: "2023-08",
  },
  {
    id: "4",
    name: "Wine & Beverage Service",
    issuer: "Court of Master Sommeliers",
    date: "2023-05",
  },
];
