import type { Locale } from "@/i18n/config";

const khmerProjectContent = {
  "mart-system": {
    title: "ប្រព័ន្ធ Mart",
    category: "ហាង Online និង POS",
    shortDescription:
      "ប្រព័ន្ធហាង Online និង Point-of-Sale ដែលបង្កើតដោយ React, Spring Boot, PostgreSQL និង Redis មានការគ្រប់គ្រងស្តុក ស្កេន Barcode និងការទូទាត់ Bakong KHQR។",
  },
  "khmer-service-marketplace": {
    title: "Khmer Service Marketplace",
    category: "Marketplace សេវាកម្ម",
    shortDescription:
      "Platform សេវាកម្មពីរភាគី ដែលភ្ជាប់អតិថិជនជាមួយអ្នកផ្តល់សេវាកម្មក្នុងស្រុកដែលបានផ្ទៀងផ្ទាត់ មានការស្វែងរកសេវាកម្ម ស្នើការងារ និងការគ្រប់គ្រងតាមតួនាទី។",
  },
  devsolve: {
    title: "DevSolve",
    category: "Developer Collaboration",
    shortDescription:
      "Platform សហការសម្រាប់អ្នកអភិវឌ្ឍ ដែលអាចពិភាក្សាបញ្ហាបច្ចេកទេស ចែករំលែកដំណោះស្រាយ និងរៀនជាមួយសហគមន៍អ្នកសរសេរកូដ។",
  },
  educorekh: {
    title: "EduCoreKH",
    category: "Education Platform",
    shortDescription:
      "Platform អប់រំដែលជួយសិស្សរៀនតាមមេរៀន រៀបចំធនធានសិក្សា និងតាមដានការរីកចម្រើនតាមរយៈបទពិសោធន៍ដែលងាយប្រើ។",
  },
  "farmer-digital-marketing": {
    title: "Farmer Digital Marketing",
    category: "កម្មវិធី Web Full-Stack",
    shortDescription:
      "Platform ទីផ្សារឌីជីថលសម្រាប់វិស័យកសិកម្ម ដែលជួយភ្ជាប់កសិករជាមួយអ្នកទិញ និងធ្វើឱ្យផលិតផលកសិកម្មងាយស្វែងរក និងទទួលបានព័ត៌មាន។",
  },
} as const;

export function getProjectText(
  locale: Locale,
  id: keyof typeof khmerProjectContent,
  field: keyof (typeof khmerProjectContent)[keyof typeof khmerProjectContent],
  fallback: string,
) {
  return locale === "kh" ? khmerProjectContent[id][field] : fallback;
}
