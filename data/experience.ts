export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  type: "full-time" | "part-time" | "internship" | "contract";
  responsibilities: string[];
  achievements: string[];
  current?: boolean;
}

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Commis Chef",
    company: "Doubletree by Hilton Glasgow Central",
    location: "Glasgow, United Kingdom",
    duration: "Current",
    type: "full-time",
    current: true,
    responsibilities: [
      "Prepare high-quality dishes in a fast-paced kitchen environment",
      "Assist senior chefs in menu planning and execution",
      "Maintain kitchen hygiene and food safety standards",
      "Manage inventory and ingredient preparation",
      "Collaborate with kitchen team to ensure timely service",
    ],
    achievements: [
      "Contributing to maintaining Hilton's quality standards",
      "Recognized for exceptional food presentation",
      "Improved prep efficiency by 20%",
    ],
  },
  {
    id: "exp-2",
    role: "Team Leader",
    company: "The Everest Hotel",
    location: "Kathmandu, Nepal",
    duration: "2023 - 2024",
    type: "full-time",
    responsibilities: [
      "Led and supervised hotel operations team",
      "Coordinated daily activities and staff scheduling",
      "Ensured exceptional guest service standards",
      "Trained and mentored new team members",
      "Handled guest complaints and resolved issues efficiently",
    ],
    achievements: [
      "Improved team efficiency by 25%",
      "Maintained 95% guest satisfaction rating",
      "Successfully trained 15+ new staff members",
    ],
  },
  {
    id: "exp-3",
    role: "Commis Chef",
    company: "Delish Opera Restro & Banquet",
    location: "Kathmandu, Nepal",
    duration: "2022 - 2023",
    type: "full-time",
    responsibilities: [
      "Prepared diverse cuisine for restaurant and banquet events",
      "Assisted in large-scale event catering",
      "Maintained food quality and presentation standards",
      "Managed kitchen station during service hours",
      "Coordinated with banquet team for event execution",
    ],
    achievements: [
      "Successfully catered events for 200+ guests",
      "Developed new menu items with head chef",
      "Maintained zero food safety violations",
    ],
  },
  {
    id: "exp-4",
    role: "Bartender",
    company: "Kathmandu FBA",
    location: "Kathmandu, Nepal",
    duration: "2021 - 2022",
    type: "part-time",
    responsibilities: [
      "Crafted cocktails and beverages for guests",
      "Managed bar inventory and stock ordering",
      "Provided excellent customer service",
      "Maintained bar cleanliness and organization",
      "Handled cash transactions and billing",
    ],
    achievements: [
      "Created signature cocktail menu",
      "Increased beverage sales by 15%",
      "Received positive customer feedback consistently",
    ],
  },
];
