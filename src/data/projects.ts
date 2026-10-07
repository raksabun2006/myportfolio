export interface Project {
  id: string;
  title: string;
  role: string;
  category: string;
  shortDescription: string;
  contributionHighlight?: string;
  image: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  detail: {
    overview: string;
    problem: string;
    solution: string;
    architectureDescription: string;
    architectureNodes?: { label: string; role: string; type: "client" | "gateway" | "service" | "database" | "external" }[];
    keyFeatures: string[];
    challenges: string;
    whatILearned: string;
  };
}

export const projects: Project[] = [
  {
    id: "mart-system",
    title: "Mart System",
    role: "Full-Stack Developer",
    category: "Online Store + POS",
    shortDescription:
      "A full-stack online store and POS platform designed for modern retail management.",
    image: "/projects/mart-system.png",
    technologies: [
      "React",
      "JavaScript",
      "Spring Boot",
      "PostgreSQL",
      "Redis",
      "REST API",
      "KHQR",
    ],
    features: [
      "Product & inventory management with automated stock alerts",
      "Point-of-sale checkout system with barcode scanning",
      "Digital game top-up & instant voucher code generation",
      "National Bakong KHQR dynamic payment integration",
      "Real-time sales analytics and daily turnover reports",
      "Sub-50ms dashboard read response times via Redis caching",
    ],
    githubUrl: "https://github.com/raksabun2006/martsystem",
    liveUrl: "https://martsystemkh.software/",
    featured: true,
    detail: {
      overview:
        "Mart System is a production-grade full-stack online store and POS platform engineered for physical retail merchants and digital voucher distribution. It combines point-of-sale checkout, inventory synchronization, instant digital vouchers, and Cambodian KHQR banking rails into a cohesive architecture.",
      problem:
        "Managing physical retail stock alongside digital vouchers demands zero-latency payment reconciliation and atomic checkout locks. Traditional POS systems suffer from inventory race conditions and lack automated mobile banking verification.",
      solution:
        "Constructed an asynchronous, highly reliable backend in Spring Boot with PostgreSQL and Redis caching. Integrated dynamic Bakong KHQR QR generation with webhook callbacks to settle payments instantly without double-voucher fulfillment.",
      architectureDescription:
        "React frontend on Vercel communicates with containerized Spring Boot REST APIs on Railway. Redis handles distributed locks and dashboard aggregations, while PostgreSQL guarantees ACID transactional compliance.",
      architectureNodes: [
        { label: "React Client", role: "POS Checkout & Storefront UI", type: "client" },
        { label: "Edge Gateway", role: "TLS Termination & Routing", type: "gateway" },
        { label: "Spring Boot Core API", role: "Business Logic & RBAC Security", type: "service" },
        { label: "Redis Cache", role: "Distributed Stock Lock & Analytics", type: "database" },
        { label: "PostgreSQL Database", role: "Transactional Financial Storage", type: "database" },
        { label: "Bakong KHQR Gateway", role: "National Banking Settlement", type: "external" },
      ],
      keyFeatures: [
        "Product catalog with SKU management and barcode compatibility",
        "Streamlined POS flow with fast keyboard-driven checkout",
        "Automated Game Top-Up voucher dispenser with instant code delivery",
        "Dynamic KHQR payment generation with instant webhook settlement",
        "Daily, monthly, and category-level financial analytics dashboards",
        "JWT-based role access control distinguishing Cashiers and Admins",
      ],
      challenges:
        "Preventing race conditions during simultaneous customer checkouts for limited digital voucher codes. Solved by introducing Redis distributed locking with atomic check-and-decrement prior to PostgreSQL commit.",
      whatILearned:
        "Deepened mastery in Spring Boot transaction isolation levels, idempotent webhook processing, Redis caching strategies, and deploying resilient production containers.",
    },
  },
  {
    id: "devsolve",
    title: "DevSolve",
    role: "Team Project",
    category: "Developer Community / Bug Bounty Platform",
    shortDescription:
      "A collaborative software development platform built with a team to solve real-world developer problems.",
    contributionHighlight: "Organization Service APIs and User Profile features",
    image: "/projects/devsolve.png",
    technologies: [
      "Next.js",
      "React",
      "Spring Boot",
      "PostgreSQL",
      "Keycloak",
      "Redis",
      "Docker",
    ],
    features: [
      "Bug bounty program publishing & vulnerability reporting workflows",
      "Organization Service APIs for security program management",
      "User Profile services with researcher reputation & badges",
      "Developer community discussions, knowledge sharing & showcases",
      "Centralized authentication via Keycloak (OIDC, OAuth 2.0 & JWT)",
      "Typo-tolerant search across security programs & developer guides",
    ],
    githubUrl: "https://github.com/raksabun2006",
    liveUrl: "https://devsolve.app",
    featured: true,
    detail: {
      overview:
        "DevSolve is a collaborative cybersecurity and developer platform built with a team to connect security researchers, organizations, and developers through bug bounty programs, vulnerability triage, and community knowledge sharing.",
      problem:
        "Organizations struggle to publish security disclosure programs and manage vulnerability reports cleanly, while security researchers and developers lack a unified hub to share technical solutions and build verified reputations.",
      solution:
        "Architected a scalable multi-service web platform with Next.js and Spring Boot. Personally engineered the Organization Service APIs and User Profile features, enabling companies to manage security programs and developers to showcase their achievements.",
      architectureDescription:
        "Next.js 16 frontend with Tailwind CSS connects to a Spring Boot REST API core. Traefik serves as reverse proxy, Keycloak manages enterprise auth (OIDC/OAuth 2.0), PostgreSQL stores relational records, Redis handles caching, and MinIO provides S3-compatible file storage.",
      architectureNodes: [
        { label: "Next.js 16 Web Client", role: "Researcher & Developer Portal", type: "client" },
        { label: "Traefik Proxy", role: "SSL Termination & Rate Limiting", type: "gateway" },
        { label: "Keycloak IAM", role: "OIDC & OAuth 2.0 Centralized Auth", type: "service" },
        { label: "Spring Boot Core API", role: "Organization & Profile Services", type: "service" },
        { label: "PostgreSQL Database", role: "Normalized Schema & Audit Logs", type: "database" },
        { label: "Redis & MinIO S3", role: "Cache & Secure Object Storage", type: "external" },
      ],
      keyFeatures: [
        "Organization Service APIs managing program lifecycles and team access",
        "User Profile subsystem tracking bounties, reputation points, and badges",
        "Vulnerability disclosure pipeline with severity classification",
        "Developer knowledge hub with code solutions and technical problem solving",
        "Keycloak integration providing secure single sign-on across microservices",
        "Automated file attachment uploads with storage in MinIO S3",
      ],
      challenges:
        "Collaborating across a multi-member development team while coordinating API contracts between frontend and backend. Addressed by designing strict OpenAPI specs and maintaining clean modular service boundaries.",
      whatILearned:
        "Gained direct experience working in an agile team, designing Organization Service APIs, implementing User Profile data structures, integrating Keycloak OIDC authentication, and debugging across distributed services.",
    },
  },
  {
    id: "khmer-service-marketplace",
    title: "Khmer Service Marketplace",
    role: "Full-Stack Developer",
    category: "Service Marketplace",
    shortDescription:
      "A Khmer-focused service marketplace connecting customers with local service providers.",
    image: "/projects/khmer-service.png",
    technologies: [
      "Next.js",
      "React",
      "Spring Boot",
      "PostgreSQL",
      "Docker",
      "JWT",
      "Railway",
      "Vercel",
    ],
    features: [
      "Customer registration, service discovery & categorized browsing",
      "Local service provider onboarding with portfolio verification",
      "Real-time service booking requests with job details & scheduling",
      "Location filtering optimized for Phnom Penh and provinces",
      "Role-based authorization distinguishing Customer, Provider, and Admin",
      "RESTful API architecture with complete OpenAPI documentation",
    ],
    githubUrl: "https://github.com/raksabun2006",
    liveUrl: "https://servicemaketplacefront.vercel.app/services",
    featured: true,
    detail: {
      overview:
        "Khmer Service Marketplace is a two-sided digital platform built to bridge the trust gap between Cambodian homeowners and skilled local tradesmen—such as air conditioning technicians, electricians, plumbers, and cleaning professionals.",
      problem:
        "In Cambodia, finding reliable home service providers is largely fragmented across social media groups without standardized pricing, verified credentials, or reliable scheduling history.",
      solution:
        "Engineered a modular service discovery platform with Spring Boot and PostgreSQL. The architecture features role-based access control, indexed location searches, image verification for past work, and transparent request pipelines from quote to job completion.",
      architectureDescription:
        "Next.js frontend deployed on Vercel interacts with Spring Boot microservices deployed on Railway using Docker. Authentication is handled statelessly via JWT with granular claims for Customer, Provider, and Administrator roles.",
      architectureNodes: [
        { label: "Next.js Web Client", role: "Service Catalog & Booking Portal", type: "client" },
        { label: "Spring Security Filter", role: "Stateless JWT Auth & Validation", type: "gateway" },
        { label: "Spring Boot Core API", role: "Provider & Booking Management", type: "service" },
        { label: "Media Storage", role: "Provider Verification Documents", type: "external" },
        { label: "PostgreSQL Database", role: "Relational Service Records & Indexing", type: "database" },
        { label: "Swagger / OpenAPI 3.0", role: "Living API Documentation", type: "service" },
      ],
      keyFeatures: [
        "Interactive service discovery categorized by home maintenance disciplines",
        "Verified provider profiles with service menus, pricing, and ratings",
        "Direct booking requests with job descriptions and customer contact details",
        "Secure JWT authentication with refresh token rotation",
        "Role-based API security protecting provider management and admin audits",
        "Swagger/OpenAPI interface allowing third-party API exploration",
      ],
      challenges:
        "Structuring a flexible database schema capable of handling varying service pricing models (hourly rates, fixed service fees, diagnostic quotes) without database denormalization.",
      whatILearned:
        "Deepened understanding of relational schema design for two-sided marketplaces, OpenAPI contract-first documentation, and building predictable RESTful APIs for frontend teams.",
    },
  },
  {
    id: "educorekh",
    title: "EduCoreKH — School Management System",
    role: "Backend Developer",
    category: "Academic ERP & Records",
    shortDescription:
      "A Spring Boot-based school management system designed to manage students, grades, enrollment, and school information.",
    image: "/projects/educore.jpg",
    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Docker",
      "REST API",
      "Hibernate",
      "JWT",
    ],
    features: [
      "Student record and lifecycle management",
      "Academic grade and transcript processing",
      "Classroom capacity and enrollment constraints",
      "Teacher assignment and course scheduling",
      "Institutional and school branch configuration",
      "Fully typed REST APIs with validation constraints",
    ],
    githubUrl: "https://github.com/raksabun2006",
    liveUrl: undefined,
    featured: false,
    detail: {
      overview:
        "EduCoreKH is a robust backend system engineered for educational institutions to centralize student registration, course enrollment limits, and semester grade tracking with audit compliance.",
      problem:
        "Schools frequently suffer from enrollment overcrowding, grade tampering risks, and slow student transcript generation due to disconnected desktop software or spreadsheets.",
      solution:
        "Architected an enterprise Spring Boot application that enforces strict domain validation rules, transactional enrollment with classroom capacity bounds, and automated GPA calculations via optimized JPA criteria queries.",
      architectureDescription:
        "Layered enterprise architecture adhering strictly to Controller-Service-Repository patterns. Spring Data JPA interfaces with PostgreSQL, packaged with a multi-stage Dockerfile for containerized deployment.",
      architectureNodes: [
        { label: "Administrative Web Client", role: "Registrar & Teacher Portal", type: "client" },
        { label: "Spring Controller Layer", role: "Request Validation & DTO Mapping", type: "gateway" },
        { label: "Spring Service Layer", role: "Enrollment & GPA Domain Logic", type: "service" },
        { label: "Spring Data JPA / Hibernate", role: "Object-Relational Mapping & Transactions", type: "service" },
        { label: "PostgreSQL Database", role: "Normalized Academic Schema", type: "database" },
        { label: "Docker Compose", role: "Isolated Local & CI Execution", type: "external" },
      ],
      keyFeatures: [
        "Comprehensive student profile directory with historical enrollment logs",
        "Course capacity management that automatically halts enrollment when full",
        "Grade submission system with audit trail tracking instructor updates",
        "Semester transcript calculation with weighted GPA logic",
        "Global exception handling with standardized RFC-7807 error responses",
        "Database migration scripts ensuring clean schema evolution across environments",
      ],
      challenges:
        "Ensuring race-condition-free enrollment checks when multiple students attempt to register for the final seat in a course simultaneously. Addressed via pessimistic database locking at the repository level.",
      whatILearned:
        "Gained deep command of Spring Data JPA concurrency controls, Jakarta Bean Validation, DTO pattern best practices, and writing integration tests using Testcontainers and JUnit 5.",
    },
  },
];
