export interface InterestItem {
  id: string;
  title: string;
  shortDescription: string;
  details: string;
  technologies: string[];
}

export const technicalInterests: InterestItem[] = [
  {
    id: "backend-systems",
    title: "Backend Systems",
    shortDescription:
      "REST APIs, authentication, authorization, business logic and database design.",
    details:
      "Focusing on high-throughput server architectures, clean entity modeling, idempotency, strict validation, and transaction isolation levels.",
    technologies: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "JPA"],
  },
  {
    id: "microservices",
    title: "Microservices",
    shortDescription:
      "Service decomposition, API Gateway, service-to-service communication and event-driven architecture.",
    details:
      "Designing decoupled services with centralized authentication, service discovery, distributed tracing, and fault-tolerant communication.",
    technologies: ["API Gateway", "Service Registry", "Docker", "REST", "Redis"],
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    shortDescription:
      "Docker, deployment, CI/CD and cloud-native applications.",
    details:
      "Automating reproducible environments, containerizing services, streamlining deployment pipelines, and managing cloud infrastructure.",
    technologies: ["Docker", "Docker Compose", "Railway", "Vercel", "GitHub Actions"],
  },
  {
    id: "full-stack-apps",
    title: "Full-Stack Applications",
    shortDescription:
      "Modern frontend applications connected to scalable backend APIs.",
    details:
      "Building seamless end-to-end user experiences where clean React / Next.js interfaces bind smoothly to secure, fast backend endpoints.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
  },
];
