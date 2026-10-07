export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    description?: string;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend Development",
    description: "Core server-side engineering, enterprise business logic, and API architecture",
    skills: [
      { name: "Java", description: "OOP, Concurrency, JVM internals" },
      { name: "Spring Boot", description: "Production microservices & web APIs" },
      { name: "Spring Security", description: "RBAC, OAuth2, Filter chains" },
      { name: "REST API", description: "Contract-first, idempotent design" },
      { name: "JPA / Hibernate", description: "ORM, query tuning, transaction management" },
      { name: "JWT", description: "Stateless auth & token lifecycle" },
      { name: "Microservices", description: "Service decomposition, API gateways" },
    ],
  },
  {
    title: "Databases & Storage",
    description: "Relational modeling, caching layers, and high-performance querying",
    skills: [
      { name: "PostgreSQL", description: "Indexing, relational integrity, transactions" },
      { name: "MySQL", description: "Schema normalization, indexing" },
      { name: "Redis", description: "In-memory caching, distributed locks, pub/sub" },
    ],
  },
  {
    title: "Frontend Engineering",
    description: "Modern, responsive client interfaces integrated with backend APIs",
    skills: [
      { name: "React", description: "Hooks, state management, component architecture" },
      { name: "Next.js", description: "SSR, App Router, hybrid rendering" },
      { name: "TypeScript", description: "Type safety, generics, interfaces" },
      { name: "JavaScript", description: "ES6+, async/await, event loop" },
      { name: "HTML5", description: "Semantic markup, web accessibility" },
      { name: "CSS3 / Tailwind", description: "Responsive layouts, design systems" },
    ],
  },
  {
    title: "DevOps & Cloud",
    description: "Containerization, automated deployment pipelines, and cloud hosting",
    skills: [
      { name: "Docker", description: "Multi-stage builds, compose networks" },
      { name: "Git", description: "Branching strategies, history maintenance" },
      { name: "GitHub", description: "Pull requests, code reviews, releases" },
      { name: "Railway", description: "Containerized backend deployment" },
      { name: "Vercel", description: "Edge frontend deployment & routing" },
      { name: "CI/CD", description: "Automated test & build pipelines" },
    ],
  },
  {
    title: "Developer Tools",
    description: "Daily development, API testing, and interactive API documentation",
    skills: [
      { name: "IntelliJ IDEA", description: "Primary enterprise IDE for Java/Spring" },
      { name: "Postman", description: "API contract testing & automated collections" },
      { name: "Swagger / OpenAPI", description: "Interactive documentation & client spec" },
    ],
  },
];
