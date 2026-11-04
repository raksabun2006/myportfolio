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
    title: "Backend",
    description: "Robust server-side architecture, Spring Boot microservices & secure RESTful APIs",
    skills: [
      { name: "Java", description: "Modern Java (21), OOP principles, concurrency & JVM fundamentals" },
      { name: "Spring Boot", description: "Enterprise REST APIs, Spring Security, Spring Data JPA & MVC" },
      { name: "REST API Design", description: "Resource modeling, HTTP semantics, validation & RFC error contracts" },
      { name: "Auth & Security", description: "JWT tokens, stateless authentication, OAuth 2.0 / Keycloak & RBAC" },
      { name: "Microservices", description: "Service decomposition, API gateway routing & inter-service contracts" },
      { name: "Laravel", description: "MVC architecture, Eloquent ORM & RESTful endpoints" },
    ],
  },
  {
    title: "Database",
    description: "Relational data modeling, schema optimization, ACID transactions & caching",
    skills: [
      { name: "PostgreSQL", description: "Primary relational database, schema design, constraints & query tuning" },
      { name: "SQL", description: "Complex joins, indexing, ACID transactions & relational normalization" },
      { name: "Redis", description: "In-memory caching, TTL sessions & distributed locking for concurrency" },
      { name: "MySQL", description: "Relational storage, foreign keys, migrations & index optimization" },
    ],
  },
  {
    title: "Frontend",
    description: "Modern, responsive user interfaces and client-side application state",
    skills: [
      { name: "React", description: "Component-driven architecture, custom hooks & reactive state" },
      { name: "Next.js", description: "App Router, SSR, SEO optimization & production web performance" },
      { name: "TypeScript", description: "Type-safe interfaces, generics & frontend-backend contract alignment" },
      { name: "JavaScript", description: "Modern ES6+, asynchronous promises, fetch API & DOM events" },
      { name: "Tailwind CSS", description: "Utility-first responsive layouts, dark/light themes & design systems" },
    ],
  },
  {
    title: "Tools & DevOps",
    description: "Version control, containerization, API testing, deployment & troubleshooting",
    skills: [
      { name: "Docker", description: "Multi-stage container builds, runtime isolation & Docker Compose" },
      { name: "Git & GitHub", description: "Branching strategies, pull requests, code reviews & clean commits" },
      { name: "Postman & Swagger", description: "API contract testing, OpenAPI 3.0 documentation & verification" },
      { name: "Deployment", description: "Cloud hosting on Railway, Vercel & server troubleshooting" },
    ],
  },
];
