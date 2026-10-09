import React from "react";

export function PersonJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://bunraksa.site/#person",
        "name": "Bun Raksa",
        "alternateName": ["ប៊ុន រក្សា", "Raksa Bun"],
        "jobTitle": "Backend Developer / Full-Stack Developer",
        "description":
          "Backend and Full-Stack Developer based in Phnom Penh, Cambodia, specializing in Java, Spring Boot, React, PostgreSQL, REST APIs, and microservices.",
        "url": "https://bunraksa.site",
        "image": "https://bunraksa.site/bun-raksa.jpg",
        "email": "raksabun2006@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Phnom Penh",
          "addressCountry": "KH",
        },
        "alumniOf": [
          {
            "@type": "CollegeOrUniversity",
            "name": "Royal University of Phnom Penh (RUPP)",
            "url": "https://www.rupp.edu.kh",
          },
          {
            "@type": "EducationalOrganization",
            "name": "Institute of Science and Technology Advanced Development (ISTAD)",
            "url": "https://www.cstad.edu.kh",
          },
        ],
        "sameAs": [
          "https://github.com/raksabun2006",
          "https://www.linkedin.com/in/bun-raksa-0062b9326/",
        ],
        "knowsAbout": [
          "Java",
          "Spring Boot",
          "PostgreSQL",
          "React",
          "Next.js",
          "TypeScript",
          "REST APIs",
          "Microservices",
          "Docker",
          "Redis",
          "Keycloak",
          "Git",
          "Bakong KHQR Payment Integration",
          "Full-Stack Development",
          "Backend Development",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://bunraksa.site/#website",
        "url": "https://bunraksa.site",
        "name": "Bun Raksa | Backend & Full-Stack Developer Portfolio",
        "description":
          "Explore Bun Raksa's developer portfolio featuring Java, Spring Boot, React, REST APIs, PostgreSQL, and full-stack projects. Based in Phnom Penh, Cambodia.",
        "inLanguage": "en-US",
        "publisher": {
          "@id": "https://bunraksa.site/#person",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://bunraksa.site/#webpage",
        "url": "https://bunraksa.site",
        "name": "Bun Raksa | Backend & Full-Stack Developer in Cambodia",
        "isPartOf": {
          "@id": "https://bunraksa.site/#website",
        },
        "about": {
          "@id": "https://bunraksa.site/#person",
        },
        "description":
          "Explore Bun Raksa's developer portfolio featuring Java, Spring Boot, React, REST APIs, PostgreSQL, and full-stack projects. Based in Phnom Penh, Cambodia.",
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://martsystemkh.software/#app",
        "name": "Mart System",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web Browser",
        "url": "https://martsystemkh.software/",
        "author": {
          "@id": "https://bunraksa.site/#person",
        },
        "description":
          "A production-grade full-stack online store and point-of-sale platform built with React, Spring Boot, PostgreSQL, and Redis, featuring inventory control, barcode POS checkout, and Bakong KHQR dynamic payment integration.",
        "softwareRequirements": "Java 21, Spring Boot 3, React, PostgreSQL, Redis",
      },
      {
        "@type": "SoftwareSourceCode",
        "@id": "https://github.com/raksabun2006/martsystem",
        "name": "Mart System Source Repository",
        "codeRepository": "https://github.com/raksabun2006/martsystem",
        "programmingLanguage": ["Java", "JavaScript", "SQL"],
        "author": {
          "@id": "https://bunraksa.site/#person",
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://servicemaketplacefront.vercel.app/services#app",
        "name": "Khmer Service Marketplace",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web Browser",
        "url": "https://servicemaketplacefront.vercel.app/services",
        "author": {
          "@id": "https://bunraksa.site/#person",
        },
        "description":
          "A two-sided service marketplace connecting Cambodian customers with verified local service providers with booking pipelines, provider verification, and Spring Boot REST APIs.",
        "softwareRequirements": "Next.js, React, Spring Boot, PostgreSQL, Docker",
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://devsolve.app/#app",
        "name": "DevSolve",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "Web Browser",
        "url": "https://devsolve.app",
        "author": {
          "@id": "https://bunraksa.site/#person",
        },
        "description":
          "A collaborative developer and bug bounty platform with organization service APIs, user profile reputation systems, and Keycloak authentication.",
        "softwareRequirements": "Next.js, Spring Boot, PostgreSQL, Keycloak, Redis",
      },
      {
        "@type": "SoftwareSourceCode",
        "@id": "https://github.com/raksabun2006#educorekh",
        "name": "EduCoreKH — School Management System",
        "codeRepository": "https://github.com/raksabun2006",
        "programmingLanguage": ["Java", "SQL"],
        "author": {
          "@id": "https://bunraksa.site/#person",
        },
        "description":
          "Spring Boot school management backend architecture for student record lifecycles, enrollment concurrency control, and automated GPA calculations.",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
