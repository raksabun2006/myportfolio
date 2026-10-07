export interface CredentialItem {
  id: string;
  title: string;
  issuerName: string;
  issuerHighlight: string;
  issuerHighlightColor: string;
  issueDate: string;
  category: "Full Stack" | "Networking" | "Backend" | "Fundamentals";
  credentialId?: string;
  tags: string[];
  image: string;
  pdfUrl?: string;
  verifyUrl?: string;
  description: string;
}

export const credentialsData: CredentialItem[] = [
  {
    id: "fullstack-istad",
    title: "Full Stack Web Development (IT Expert 3rd Generation)",
    issuerName: "Ministry of Post and Telecommunications & CBRD Fund / ISTAD",
    issuerHighlight: "MPTC & CBRD Fund / ISTAD",
    issuerHighlightColor: "text-emerald-400",
    issueDate: "Sep 16, 2026",
    category: "Full Stack",
    tags: [
      "Basic Course",
      "Next.js",
      "TypeScript",
      "Spring Boot",
      "PostgreSQL",
      "Docker",
      "CI/CD",
      "Keycloak",
      "UI/UX",
    ],
    image: "/certificates/fullstack-istad.jpg",
    credentialId: "MPTC-CBRD-ISTAD-G3-2026",
    verifyUrl: "/certificates/fullstack-istad.jpg",
    description:
      "Completed 6-month intensive government-sponsored professional training program (Basic Course) validating technical mastery in enterprise architecture, Next.js with TypeScript, Spring Framework, Keycloak authentication, database modeling, and containerized deployments.",
  },
  {
    id: "ccna-networks",
    title: "CCNA: Introduction to Networks",
    issuerName: "Cisco Networking Academy (Royal University of Phnom Penh)",
    issuerHighlight: "Cisco Networking Academy (RUPP)",
    issuerHighlightColor: "text-cyan-400",
    issueDate: "Sep 06, 2026",
    category: "Networking",
    tags: [
      "Networking",
      "CCNA",
      "Cisco",
      "Routing & Switching",
      "Network Security",
      "Subnetting",
    ],
    image: "/certificates/ccna-cisco.png",
    pdfUrl: "/certificates/ccna-cisco.pdf",
    credentialId: "bf03452b-f4e1-49bb-a56b-10e6eac82a55",
    verifyUrl: "/certificates/ccna-cisco.pdf",
    description:
      "Offered by Royal University of Phnom Penh through the Cisco Networking Academy program. Validates foundational expertise in network architecture, IPv4/IPv6 subnetting, Ethernet switching, router configuration, and OSI network security.",
  },
  {
    id: "laravel-etec",
    title: "Basic / Advance PHP / OOP / MySQL / Laravel & Project Courses",
    issuerName: "Engineering of Technology and Electronic Center (ETEC)",
    issuerHighlight: "ETEC Center",
    issuerHighlightColor: "text-rose-400",
    issueDate: "Jul 15, 2026",
    category: "Backend",
    tags: ["PHP", "OOP", "MySQL", "Laravel", "REST APIs", "MVC"],
    image: "/certificates/laravel-etec.png",
    credentialId: "ETEC-LRV-2026-0715",
    verifyUrl: "/certificates/laravel-etec.png",
    description:
      "Completed advanced software training courses in modern Object-Oriented PHP, relational database schema optimization with MySQL, MVC architecture, RESTful API development, and production-grade Laravel web projects.",
  },
  {
    id: "web-fundamental-istad",
    title: "Web Development Fundamental (5th Generation)",
    issuerName: "Institute of Science and Technology Advanced Development (ISTAD)",
    issuerHighlight: "ISTAD",
    issuerHighlightColor: "text-purple-400",
    issueDate: "Mar 28, 2026",
    category: "Fundamentals",
    tags: ["Frontend", "ReactJS", "Java", "Databases", "Git", "UI/UX"],
    image: "/certificates/web-fundamental-istad.jpg",
    credentialId: "ISTAD-WDF-G5-2026",
    verifyUrl: "/certificates/web-fundamental-istad.jpg",
    description:
      "4-month foundational software engineering curriculum validating core developer competencies in modern ReactJS interfaces, Java programming, database structure design, and version control collaboration.",
  },
];
