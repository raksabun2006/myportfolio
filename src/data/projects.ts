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
  apiDocsUrl?: string;
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
      "A full-stack online store and point-of-sale (POS) system engineered with React, Spring Boot, PostgreSQL, and Redis, featuring inventory management, barcode scanning, and Bakong KHQR dynamic payment integration.",
    image: "/projects/mart-system.png",
    technologies: [
      "Spring Boot",
      "Java",
      "PostgreSQL",
      "Redis",
      "REST API",
      "React",
      "KHQR",
      "Docker",
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
    apiDocsUrl: "https://martsystemkh.software/",
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
    role: "Backend & Full-Stack Contributor",
    category: "Developer Community & Bug Bounty",
    shortDescription:
      "A collaborative developer community and vulnerability triage platform. Personally engineered the Organization Service APIs, User Profile features, and Keycloak authentication workflows.",
    contributionHighlight: "Organization Service APIs, User Profile features, and Keycloak authentication",
    image: "/projects/devsolve.png",
    technologies: [
      "Spring Boot",
      "Java",
      "PostgreSQL",
      "Keycloak",
      "REST API",
      "Redis",
      "Next.js",
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
    liveUrl: "https://www.devsolve.app/",
    apiDocsUrl: "https://github.com/raksabun2006",
    featured: true,
    detail: {
      overview:
        "DevSolve is a collaborative cybersecurity and developer platform built with a team to connect security researchers, organizations, and developers through bug bounty programs, vulnerability triage, and community knowledge sharing.",
      problem:
        "Organizations struggle to publish security disclosure programs and manage vulnerability reports cleanly, while security researchers and developers lack a unified hub to share technical solutions and build verified reputations.",
      solution:
        "Architected a scalable multi-service web platform with Next.js and Spring Boot. Personally engineered the Organization Service APIs and User Profile features, enabling companies to manage security programs and developers to showcase their achievements.",
      architectureDescription:
        "Next.js frontend with Tailwind CSS connects to a Spring Boot REST API core. Keycloak manages enterprise auth (OIDC/OAuth 2.0), PostgreSQL stores relational records, Redis handles caching, and Docker ensures reproducible service runs.",
      architectureNodes: [
        { label: "Next.js Web Client", role: "Researcher & Developer Portal", type: "client" },
        { label: "Edge Proxy", role: "SSL Termination & Rate Limiting", type: "gateway" },
        { label: "Keycloak IAM", role: "OIDC & OAuth 2.0 Centralized Auth", type: "service" },
        { label: "Spring Boot Core API", role: "Organization & Profile Services", type: "service" },
        { label: "PostgreSQL Database", role: "Normalized Schema & Audit Logs", type: "database" },
        { label: "Redis Cache", role: "Cache & Fast Lookups", type: "external" },
      ],
      keyFeatures: [
        "Organization Service APIs managing program lifecycles and team access",
        "User Profile subsystem tracking bounties, reputation points, and badges",
        "Vulnerability disclosure pipeline with severity classification",
        "Developer knowledge hub with code solutions and technical problem solving",
        "Keycloak integration providing secure single sign-on across microservices",
        "Automated file attachment uploads with storage management",
      ],
      challenges:
        "Designing modular Spring Boot organization endpoints that handle fine-grained permissions without tight coupling between bounty workflows and user profile states. Solved with event-driven service separation and Keycloak JWT claims.",
      whatILearned:
        "Practical mastery of Keycloak OIDC/OAuth 2.0 integration, modular Spring Boot microservice boundaries, multi-tenant database constraints, and team-based API contract alignment.",
    },
  },
  {
    id: "job-portal-kh",
    title: "Job Portal KH – Cambodia Job Recruitment Platform",
    role: "Full-Stack Developer",
    category: "Recruitment & Job Platform",
    shortDescription:
      "A web-based job recruitment platform designed to connect job seekers with employers across Cambodia, built with Laravel, React.js, RESTful APIs, and MySQL featuring vacancy discovery, resume submissions, and recruitment management.",
    contributionHighlight:
      "Full-Stack Development with Laravel REST API, React.js client, and MySQL architecture",
    image: "/projects/job-portal-kh.png",
    technologies: [
      "Laravel",
      "PHP",
      "REST API",
      "MySQL",
      "React.js",
      "Tailwind CSS",
    ],
    features: [
      "Browse and search job opportunities with category, location, and salary filters",
      "View detailed job descriptions with qualifications and company profiles",
      "Job seeker account management with profile and resume file attachments",
      "Employer and company management with corporate branding and job postings",
      "Online job applications with real-time status and submission tracking",
      "Recruitment workflow management with candidate evaluation and interview scheduling",
    ],
    githubUrl: "https://github.com/raksabun2006/job-portal-backend",
    liveUrl: "https://job-portal-kh-v1.vercel.app/",
    featured: true,
    detail: {
      overview:
        "Job Portal KH is a web-based job recruitment platform designed to connect job seekers with employers across Cambodia. The platform provides an accessible environment for discovering job opportunities, publishing vacancies, and managing recruitment activities.",
      problem:
        "Job recruitment in Cambodia is often fragmented across social media channels and informal groups, resulting in difficult vacancy discovery for candidates and disorganized applicant screening for employers.",
      solution:
        "Engineered a full-stack platform featuring a responsive React.js frontend and a robust Laravel REST API backend with MySQL. Implemented role-based access control for candidates and employers, structured resume management, online application submissions, and recruitment workflow tracking.",
      architectureDescription:
        "Vite-powered React.js frontend deployed on Vercel communicates with a Laravel RESTful API backend deployed on Laravel Cloud. Authentication is secured using Laravel Sanctum bearer tokens with Spatie Permission for role-based access control, backed by a relational MySQL database.",
      architectureNodes: [
        { label: "React.js Web Client", role: "Job Search & Candidate/Employer Portals", type: "client" },
        { label: "Vercel Edge Network", role: "Global Asset Delivery & Routing", type: "gateway" },
        { label: "Laravel REST API", role: "Recruitment Logic & Controller Endpoints", type: "service" },
        { label: "Sanctum Auth & RBAC", role: "Stateless Token Security & Role Guards", type: "gateway" },
        { label: "MySQL Database", role: "Relational Storage for Jobs, Users & Resumes", type: "database" },
        { label: "Media Storage", role: "Candidate Resumes & Company Logos", type: "external" },
      ],
      keyFeatures: [
        "Browse and search job opportunities with keyword, category, and province filters",
        "View detailed job descriptions with requirements, company profiles, and salary info",
        "Job seeker account management with profile editing and resume attachment uploads",
        "Employer and company management with logo branding and team configuration",
        "Online job applications with direct status monitoring and interview scheduling",
        "Job posting and recruitment management with draft, published, and closed lifecycle states",
      ],
      challenges:
        "Coordinating multi-tier role authorization (Candidate, Employer, Admin) while handling secure resume file uploads and complex relational queries across applications, interviews, and company listings. Solved by leveraging Spatie permission guards and optimized Eloquent relationships in Laravel.",
      whatILearned:
        "Strengthened full-stack development experience integrating Laravel RESTful APIs with modern React.js frontends, designing robust relational MySQL schemas, managing Sanctum bearer token security, and deploying production web applications on Vercel and Laravel Cloud.",
    },
  },
  {
    id: "khmer-service-marketplace",
    title: "Khmer Service Marketplace",
    role: "Full-Stack Developer",
    category: "Service Marketplace",
    shortDescription:
      "A two-sided service marketplace connecting customers who need services with verified local service providers, featuring categorical browsing, job requests, and role-based access control.",
    contributionHighlight: "Spring Boot microservices, JWT authentication, and OpenAPI contracts",
    image: "/projects/khmer-service.png",
    technologies: [
      "Spring Boot",
      "Java",
      "PostgreSQL",
      "REST API",
      "JWT",
      "Next.js",
      "Docker",
      "Railway",
    ],
    features: [
      "Customer registration, service discovery & categorized browsing",
      "Local service provider onboarding with portfolio verification",
      "Real-time service booking requests with job details & scheduling",
      "Location filtering optimized for Phnom Penh and provinces",
      "Role-based authorization distinguishing Customer, Provider, and Admin",
      "RESTful API architecture with complete OpenAPI documentation",
    ],
    githubUrl: "https://github.com/raksabun2006/servicemaketplaceapi",
    liveUrl: "https://servicemaketplacefront.vercel.app/services",
    apiDocsUrl: "https://servicemaketplaceapi.software/swagger-ui/index.html",
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
    id: "educore-kh",
    title: "EduCoreKH — School & Academic Management System",
    role: "Backend Architect & Spring Boot Engineer",
    category: "Academic & Institutional System",
    shortDescription:
      "A centralized school information and student records management system engineered with Spring Boot, Spring Data JPA, PostgreSQL, and Docker. Designed to streamline academic administration, course enrollment, student grading, and faculty record-keeping.",
    contributionHighlight: "Engineered student enrollment transaction isolation, JPA criteria grading queries, and RFC-7807 error responses",
    image: "/projects/educore-kh.png",
    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Spring Data JPA",
      "Hibernate",
      "REST API",
      "Docker",
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
