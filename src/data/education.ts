export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  status: string;
  location: string;
  logo?: string;
  highlights: string[];
}

export const educationList: EducationItem[] = [
  {
    institution: "Royal University of Phnom Penh (RUPP)",
    degree: "Bachelor of Computer Science and Engineering",
    period: "2025 – Present",
    status: "Currently Enrolled",
    location: "Phnom Penh, Cambodia",
    logo: "/logos/rupp-logo.png",
    highlights: [
      "Computer Science Foundations",
      "Software Development",
      "Data Structures & Algorithms",
      "Relational Database Systems",
      "Computer Networks & Protocols",
    ],
  },
  {
    institution: "ISTAD",
    degree: "IT Expert 3rd Generation",
    period: "March 2026 – Present",
    status: "Active Intensive Training",
    location: "Phnom Penh, Cambodia",
    logo: "/logos/istad-logo.png",
    highlights: [
      "Enterprise Java & Spring Boot",
      "Production-Grade RESTful APIs",
      "Microservices Architecture",
      "Spring Security & JWT Authentication",
      "PostgreSQL & Database Optimization",
      "DevOps, Docker & CI/CD Pipelines",
    ],
  },
  {
    institution: "Samrong Ponley High School",
    degree: "High School Diploma",
    period: "2018 – 2024",
    status: "Graduated",
    location: "Cambodia",
    highlights: [
      "National High School Baccalaureate",
      "Strong foundation in Mathematics and Sciences",
    ],
  },
];
