export interface CurriculumModule {
  moduleNumber: string;
  title: string;
  description: string;
  skills: string[];
}

export interface CapstoneProject {
  title: string;
  role: string;
  description: string;
  technologies: string[];
}

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
  duration: string;
  credentialType: string;
  authority: string;
  highlights: string[];
  curriculum: CurriculumModule[];
  capstoneProject?: CapstoneProject;
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
    duration: "6 Months (Intensive Full-Time)",
    credentialType: "Government Professional Certification",
    authority: "Ministry of Post and Telecommunications (MPTC) & CBRD Fund",
    tags: [
      "Next.js",
      "TypeScript",
      "Spring Boot",
      "PostgreSQL",
      "Docker",
      "CI/CD",
      "Keycloak",
      "Enterprise Architecture",
      "UI/UX",
    ],
    image: "/certificates/fullstack-istad.jpg",
    credentialId: "MPTC-CBRD-ISTAD-G3-2026",
    verifyUrl: "/certificates/fullstack-istad.jpg",
    description:
      "Completed a rigorous 6-month intensive government-sponsored professional training program (Basic Course) validating technical mastery in enterprise architecture, Next.js with TypeScript, Spring Boot microservices, Keycloak IAM authentication, relational database modeling, and containerized deployments.",
    highlights: [
      "Selected for government scholarship program under MPTC & CBRD Fund",
      "End-to-end full-stack engineering from database schema design to container deployment",
      "Enterprise security implementation with OAuth2 / Keycloak role-based access control",
      "Led team capstone project delivering a production POS and inventory management system",
    ],
    curriculum: [
      {
        moduleNumber: "01",
        title: "Enterprise Backend Architecture",
        description:
          "Java 21, Spring Boot 3 RESTful microservices, dependency injection, Clean Architecture, and exception handling strategies.",
        skills: ["Java 21", "Spring Boot", "Spring Data JPA", "REST APIs"],
      },
      {
        moduleNumber: "02",
        title: "Modern Client Architecture & SSR",
        description:
          "Production frontend systems using Next.js App Router, React 19, TypeScript, state management, and optimized server-side rendering.",
        skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      },
      {
        moduleNumber: "03",
        title: "Relational Modeling & PostgreSQL",
        description:
          "Relational schema normalization, database migrations with Flyway, indexing strategies, and transactional consistency.",
        skills: ["PostgreSQL", "Database Design", "SQL Optimization", "Flyway"],
      },
      {
        moduleNumber: "04",
        title: "Identity & Access Management (IAM)",
        description:
          "Enterprise authentication protocols, Keycloak identity servers, JWT tokens, OAuth2 authorization flows, and granular RBAC.",
        skills: ["Keycloak", "OAuth2", "JWT", "Spring Security"],
      },
      {
        moduleNumber: "05",
        title: "Containerization & DevOps Workflows",
        description:
          "Multi-stage Docker builds, Docker Compose orchestration, continuous integration pipelines, and automated deployments.",
        skills: ["Docker", "Docker Compose", "CI/CD", "Linux Server"],
      },
    ],
    capstoneProject: {
      title: "Retail POS & Online Store Platform",
      role: "Lead Full-Stack Developer",
      description:
        "Engineered an enterprise POS platform with real-time stock deductions, role-based operator controls, receipt printing, and sales reporting dashboards.",
      technologies: ["Spring Boot", "Next.js", "PostgreSQL", "Docker", "Keycloak"],
    },
  },
  {
    id: "ccna-networks",
    title: "CCNA: Introduction to Networks",
    issuerName: "Cisco Networking Academy (Royal University of Phnom Penh)",
    issuerHighlight: "Cisco Networking Academy (RUPP)",
    issuerHighlightColor: "text-cyan-400",
    issueDate: "Sep 06, 2026",
    category: "Networking",
    duration: "1 Academic Semester",
    credentialType: "Industry Standard Academic Certification",
    authority: "Cisco Networking Academy & Royal University of Phnom Penh (RUPP)",
    tags: [
      "Networking",
      "CCNA",
      "Cisco IOS",
      "Routing & Switching",
      "Network Security",
      "Subnetting",
      "VLAN",
      "IPv4 / IPv6",
    ],
    image: "/certificates/ccna-cisco.png",
    pdfUrl: "/certificates/ccna-cisco.pdf",
    credentialId: "bf03452b-f4e1-49bb-a56b-10e6eac82a55",
    verifyUrl: "/certificates/ccna-cisco.pdf",
    description:
      "Conducted by the Royal University of Phnom Penh through the official Cisco Networking Academy curriculum. Validates comprehensive expertise in network architectures, IPv4/IPv6 subnetting, Ethernet switching, router configuration, and OSI model security.",
    highlights: [
      "Official Cisco Networking Academy curriculum completion with verified verification hash",
      "Practical configuration of enterprise Cisco routers and Catalyst Layer 2/3 switches",
      "In-depth mastery of VLSM (Variable Length Subnet Masking) and CIDR address engineering",
      "Hands-on lab simulations configuring VLANs, inter-VLAN routing, and ACL packet filters",
    ],
    curriculum: [
      {
        moduleNumber: "01",
        title: "Network Fundamentals & OSI Reference Model",
        description:
          "Physical and data link layer standards, TCP/IP protocol suite comparison, and network topology architectures.",
        skills: ["OSI Model", "TCP/IP", "Ethernet Protocols", "Cabling Standards"],
      },
      {
        moduleNumber: "02",
        title: "IPv4 & IPv6 Addressing & Subnetting",
        description:
          "Binary mathematics, classless IP subnetting, VLSM design calculations, IPv6 global unicast and link-local addressing.",
        skills: ["IPv4 Subnetting", "VLSM", "IPv6 Addressing", "CIDR"],
      },
      {
        moduleNumber: "03",
        title: "Ethernet Switching & VLAN Topologies",
        description:
          "Switch MAC address learning tables, 802.1Q VLAN trunking, native VLAN security, and inter-VLAN router-on-a-stick setups.",
        skills: ["VLANs", "802.1Q Trunking", "Switching", "Inter-VLAN Routing"],
      },
      {
        moduleNumber: "04",
        title: "IP Routing & Static Route Implementations",
        description:
          "Routing table lookup operations, default static routes, floating static routes, and hop verification with traceroute.",
        skills: ["IP Routing", "Static Routes", "Default Gateway", "Cisco IOS CLI"],
      },
      {
        moduleNumber: "05",
        title: "Network Security & Device Hardening",
        description:
          "Securing Cisco administrative access (SSHv2, console passwords), port security MAC filtering, and basic ACL firewall policies.",
        skills: ["Port Security", "SSHv2 Hardening", "Standard ACLs", "Network Defense"],
      },
    ],
    capstoneProject: {
      title: "Campus Multi-Tier Network Topology Simulation",
      role: "Network Architect",
      description:
        "Designed and simulated a multi-building enterprise campus topology featuring separate management, student, and faculty VLANs, DHCP snooping, and inter-VLAN routing.",
      technologies: ["Cisco Packet Tracer", "Cisco IOS", "VLAN Trunking", "IPv4/IPv6"],
    },
  },
  {
    id: "laravel-etec",
    title: "Basic / Advance PHP / OOP / MySQL / Laravel & Project Courses",
    issuerName: "Engineering of Technology and Electronic Center (ETEC)",
    issuerHighlight: "ETEC Center",
    issuerHighlightColor: "text-rose-400",
    issueDate: "Jul 15, 2026",
    category: "Backend",
    duration: "4 Months",
    credentialType: "Professional Software Development Diploma",
    authority: "Engineering of Technology and Electronic Center (ETEC)",
    tags: [
      "PHP 8",
      "OOP Patterns",
      "MySQL",
      "Laravel",
      "RESTful APIs",
      "MVC Architecture",
      "Database Optimization",
    ],
    image: "/certificates/laravel-etec.png",
    credentialId: "ETEC-LRV-2026-0715",
    verifyUrl: "/certificates/laravel-etec.png",
    description:
      "Advanced professional software training in modern Object-Oriented PHP, relational database schema optimization with MySQL, MVC architectural patterns, RESTful API design, and production-grade Laravel web systems.",
    highlights: [
      "Mastery of modern Object-Oriented PHP principles: inheritance, polymorphism, interfaces, and traits",
      "Advanced MySQL relational indexing, foreign key constraints, and stored queries",
      "Built full-featured web applications utilizing Laravel routing, middleware, controllers, and Blade",
      "Engineered secure REST APIs with token authorization and JSON response transformations",
    ],
    curriculum: [
      {
        moduleNumber: "01",
        title: "Modern PHP & OOP Design Patterns",
        description:
          "Type declarations, classes, abstract classes, dependency injection concepts, and SOLID principles in PHP 8.",
        skills: ["PHP 8", "OOP", "Interfaces", "SOLID Principles"],
      },
      {
        moduleNumber: "02",
        title: "Relational Database Design with MySQL",
        description:
          "Data definition language, relational normalization (1NF-3NF), complex joins, and transactional database integrity.",
        skills: ["MySQL", "SQL Joins", "Normalization", "Index Optimization"],
      },
      {
        moduleNumber: "03",
        title: "Laravel Framework Architecture",
        description:
          "Service container, service providers, route modeling, form request validations, and blade component hierarchies.",
        skills: ["Laravel", "MVC", "Middleware", "Blade Engine"],
      },
      {
        moduleNumber: "04",
        title: "Eloquent ORM & Schema Migrations",
        description:
          "Database migrations, relationships (One-to-Many, Many-to-Many, Polymorphic), query scopes, and eager loading.",
        skills: ["Eloquent ORM", "Migrations", "Database Seeders", "Query Performance"],
      },
      {
        moduleNumber: "05",
        title: "REST API Engineering & Security",
        description:
          "API resource controllers, Sanctum token authentication, pagination, CORS configuration, and error response formatting.",
        skills: ["REST APIs", "Laravel Sanctum", "API Resources", "Security"],
      },
    ],
    capstoneProject: {
      title: "Full-Featured E-Commerce System & Admin Portal",
      role: "Backend Developer",
      description:
        "Built a complete e-commerce solution featuring product variant management, customer authentication, shopping cart workflows, and an administrative metrics dashboard.",
      technologies: ["Laravel", "PHP", "MySQL", "REST APIs", "Blade"],
    },
  },
  {
    id: "web-fundamental-istad",
    title: "Web Development Fundamental (5th Generation)",
    issuerName: "Institute of Science and Technology Advanced Development (ISTAD)",
    issuerHighlight: "ISTAD",
    issuerHighlightColor: "text-purple-400",
    issueDate: "Mar 28, 2026",
    category: "Fundamentals",
    duration: "4 Months",
    credentialType: "Foundation Software Engineering Certificate",
    authority: "Institute of Science and Technology Advanced Development (ISTAD)",
    tags: [
      "Frontend",
      "ReactJS",
      "Java Core",
      "HTML5 / CSS3",
      "Git / GitHub",
      "Database Foundations",
      "UI/UX",
    ],
    image: "/certificates/web-fundamental-istad.jpg",
    credentialId: "ISTAD-WDF-G5-2026",
    verifyUrl: "/certificates/web-fundamental-istad.jpg",
    description:
      "4-month foundational software engineering curriculum validating core software developer competencies in modern ReactJS interfaces, Java programming, database structure design, and version control collaboration.",
    highlights: [
      "Rigorous foundations in semantic web markup, modern CSS layouts (Flexbox, Grid), and responsive design",
      "Core JavaScript ES6+ asynchronous programming with Fetch API and DOM events",
      "Component-driven frontend development with ReactJS hooks, props, and modular styles",
      "Foundational Java object-oriented programming and command-line application architectures",
    ],
    curriculum: [
      {
        moduleNumber: "01",
        title: "Web Standards & Semantic Layouts",
        description:
          "HTML5 accessibility, SEO best practices, modern CSS3 animations, Flexbox, and responsive Grid systems.",
        skills: ["HTML5", "CSS3", "Flexbox", "Responsive Design"],
      },
      {
        moduleNumber: "02",
        title: "JavaScript ES6+ & Asynchronous Programming",
        description:
          "Arrow functions, destructuring, promises, async/await, DOM manipulation, and asynchronous HTTP client calls.",
        skills: ["JavaScript ES6+", "DOM Events", "Async/Await", "Fetch API"],
      },
      {
        moduleNumber: "03",
        title: "React.js Component Architecture",
        description:
          "Functional components, React hooks (useState, useEffect), props pipelines, and state management paradigms.",
        skills: ["ReactJS", "Hooks", "Component Life Cycle", "State Flow"],
      },
      {
        moduleNumber: "04",
        title: "Core Java Programming",
        description:
          "Primitive data types, control structures, Object-Oriented modeling (Encapsulation, Inheritance), and collections.",
        skills: ["Java Core", "OOP Basics", "Collections Framework", "Logic Building"],
      },
      {
        moduleNumber: "05",
        title: "Git Workflow & Team Collaboration",
        description:
          "Git branch management, commits, merge resolution, remote GitHub repositories, and open-source pull requests.",
        skills: ["Git", "GitHub", "Branching", "Code Reviews"],
      },
    ],
    capstoneProject: {
      title: "Interactive Course Catalog & Showcase Portal",
      role: "Frontend Developer",
      description:
        "Developed an interactive course catalog web application consuming external REST APIs, featuring search filtering, category pills, and responsive layout scaling.",
      technologies: ["ReactJS", "JavaScript", "HTML5/CSS3", "Git"],
    },
  },
];
