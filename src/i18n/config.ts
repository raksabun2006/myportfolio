export const locales = ["en", "kh"] as const;

export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  kh: "ខ្មែរ",
};

export const translations = {
  en: {
    home: "Home",
    about: "About",
    projects: "Projects",
    skills: "Skills",
    education: "Education",
    certificates: "Certificates",
    contact: "Contact",
    language: "Language",
    fullStackDeveloper: "Full-Stack Developer",
    available: "Available for Junior Roles & Internships",
    backgroundFocus: "Background & Focus",
    featuredProjects: "Featured Projects",
    technicalSkills: "Skills & Technologies",
    educationMilestones: "Education & Milestones",
    verifiedCertifications: "Verified Certifications",
    getInTouch: "Get in Touch",
    backToTop: "Back to Top",
    downloadCv: "Download CV (PDF)",
  },
  kh: {
    home: "ទំព័រដើម",
    about: "អំពីខ្ញុំ",
    projects: "គម្រោង",
    skills: "ជំនាញ",
    education: "ការអប់រំ",
    certificates: "វិញ្ញាបនបត្រ",
    contact: "ទំនាក់ទំនង",
    language: "ភាសា",
    fullStackDeveloper: "អ្នកអភិវឌ្ឍ Full-Stack",
    available: "កំពុងស្វែងរកការងារ និងកម្មសិក្សា",
    backgroundFocus: "ប្រវត្តិ និងការផ្តោត",
    featuredProjects: "គម្រោងសំខាន់ៗ",
    technicalSkills: "ជំនាញ និងបច្ចេកវិទ្យា",
    educationMilestones: "ការអប់រំ និងសមិទ្ធផល",
    verifiedCertifications: "វិញ្ញាបនបត្រដែលបានបញ្ជាក់",
    getInTouch: "ទំនាក់ទំនង",
    backToTop: "ត្រឡប់ទៅខាងលើ",
    downloadCv: "ទាញយកប្រវត្តិរូប (PDF)",
  },
} as const;

export type TranslationKey = keyof typeof translations.en;
