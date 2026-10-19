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
    title: "Frontend",
    description: "Responsive, accessible user interfaces and web applications",
    skills: [
      { name: "React", description: "Component-driven UI, hooks & state management" },
      { name: "Next.js", description: "SSR, App Router & modern web performance" },
      { name: "JavaScript", description: "ES6+, async/await & DOM manipulation" },
      { name: "TypeScript", description: "Static typing, interfaces & contract alignment" },
      { name: "HTML", description: "Semantic markup & web accessibility standards" },
      { name: "CSS", description: "Responsive layouts, Flexbox, Grid & Tailwind CSS" },
    ],
  },
  {
    title: "Backend",
    description: "Robust server-side architecture, business logic & RESTful APIs",
    skills: [
      { name: "Java", description: "Object-oriented programming, concurrency & JVM fundamentals" },
      { name: "Spring Boot", description: "Production REST APIs, Spring Security & Spring Data JPA" },
      { name: "Laravel", description: "MVC architecture, Eloquent ORM & backend routing" },
      { name: "REST APIs", description: "Stateless HTTP protocol design & RFC error handling" },
    ],
  },
  {
    title: "Database",
    description: "Relational data modeling, ACID compliance & indexing",
    skills: [
      { name: "PostgreSQL", description: "Primary relational database, schema design & query optimization" },
      { name: "SQL", description: "Complex joins, aggregations, transactions & normalization" },
      { name: "Redis", description: "In-memory caching & distributed locking for concurrency" },
    ],
  },
  {
    title: "Tools & DevOps",
    description: "Version control, collaboration, API testing & containerization",
    skills: [
      { name: "Git", description: "Feature-branch workflows, rebasing & clean commit history" },
      { name: "GitHub", description: "Pull requests, code review & repository management" },
      { name: "Docker", description: "Containerized application runtime & Docker Compose" },
      { name: "Postman", description: "API contract testing & automated verification" },
    ],
  },
];

