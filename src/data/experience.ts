export interface JourneyStep {
  title: string;
  path: string[];
  description: string;
  keyConcepts: string[];
  tag: string;
}

export const learningJourney: JourneyStep[] = [
  {
    title: "Backend Development",
    tag: "Core Engineering",
    path: ["Java", "Spring Boot", "REST API", "Spring Security", "PostgreSQL"],
    description:
      "Built rigorous server-side foundation focusing on Object-Oriented principles, multi-threading, Spring Boot dependency injection, clean RESTful endpoints, JWT stateless security, and transactional relational data persistence.",
    keyConcepts: [
      "Controller-Service-Repository Pattern",
      "Stateless JWT Authentication",
      "ACID Transaction Management",
      "Database Schema Design & Indexing",
    ],
  },
  {
    title: "Full-Stack Development",
    tag: "End-to-End Delivery",
    path: ["React", "API Integration", "Authentication", "Deployment"],
    description:
      "Bridged frontend and backend by constructing responsive single-page and server-rendered web applications with React and Next.js, integrating backend REST APIs with proper state management, error boundaries, and token storage.",
    keyConcepts: [
      "Axios & Fetch Interceptors",
      "Client-side State & Cache Invalidation",
      "Dynamic Route Guards & Auth Context",
      "Production Bundle Delivery",
    ],
  },
  {
    title: "Advanced Backend & Systems",
    tag: "Scalability & Distributed Systems",
    path: ["Microservices", "API Gateway", "Service Communication", "Event-Driven Architecture"],
    description:
      "Expanded monolithic structures into scalable microservices. Implemented API Gateways for reverse proxying and rate limiting, inter-service communication patterns, and asynchronous messaging with message brokers and Redis caching.",
    keyConcepts: [
      "API Gateway Routing & Rate Limiting",
      "Service-to-Service REST / gRPC",
      "Distributed Caching with Redis",
      "Event-Driven Design Patterns",
    ],
  },
  {
    title: "DevOps & Cloud Engineering",
    tag: "Infrastructure & Automation",
    path: ["Docker", "Cloud Deployment", "Railway", "Vercel", "CI/CD"],
    description:
      "Adopted containerization to guarantee environment parity across development and production. Orchestrated multi-stage Docker builds and automated continuous integration and continuous deployment pipelines.",
    keyConcepts: [
      "Docker Multi-Stage Optimization",
      "Environment Configuration & Secrets",
      "Cloud Infrastructure on Railway & Vercel",
      "Automated CI/CD Workflows",
    ],
  },
];
