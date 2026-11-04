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
      "Computer Science and Engineering Foundations",
      "Software Development & OOP Principles",
      "Data Structures & Algorithmic Complexity",
      "Relational Database Management Systems",
      "Computer Networks & Communication Protocols",
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
      "Analytical problem solving & logical reasoning",
    ],
  },
];
