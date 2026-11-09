export type ProgressStatus = "completed" | "in-progress" | "not-started";

export interface LearningTopic {
  id: string;
  title: string;
  status: ProgressStatus;
}

export interface LearningPhase {
  phaseNumber: string;
  title: string;
  status: ProgressStatus;
  topics: LearningTopic[];
}

export interface LearningPath {
  id: string;
  title: string;
  badge: string;
  category: string;
  description: string;
  iconName: "flutter";
  currentPhase: string;
  lastUpdated: string;
  technologies: string[];
  phases: LearningPhase[];
}

export interface ProgressSummary {
  totalTopics: number;
  completedTopics: number;
  inProgressTopics: number;
  percentage: number;
}

export const progressMetadata = {
  title: "My Progress",
  subtitle:
    "Learning continuously, building consistently, and improving my engineering skills every day.",
  currentFocus: "Flutter & Android Mobile Development",
  activePathsCount: 1,
  learningStatus: "Active Continuous Learning",
  lastUpdated: "November 2026",
};

export const learningPathsData: LearningPath[] = [
  {
    id: "flutter-android",
    title: "Flutter & Android Development",
    badge: "Currently Learning",
    category: "Mobile Application Engineering",
    description:
      "I'm expanding my development skills into mobile application development, focusing on Flutter and Dart to build modern Android applications.",
    iconName: "flutter",
    currentPhase: "Phase 03: Android Application Development",
    lastUpdated: "November 2026",
    technologies: [
      "Flutter",
      "Dart",
      "Android SDK",
      "Android Studio",
      "REST API Integration",
      "JSON Serialization",
      "State Management",
      "Mobile UI Development",
    ],
    phases: [
      {
        phaseNumber: "Phase 01",
        title: "Dart Fundamentals",
        status: "completed",
        topics: [
          { id: "dart-vars", title: "Variables and Data Types", status: "completed" },
          { id: "dart-funcs", title: "Functions", status: "completed" },
          { id: "dart-classes", title: "Classes and Objects", status: "completed" },
          { id: "dart-oop", title: "OOP Concepts", status: "completed" },
          { id: "dart-collections", title: "Collections", status: "completed" },
          { id: "dart-null-safety", title: "Null Safety", status: "completed" },
          { id: "dart-async", title: "Async / Await and Futures", status: "completed" },
        ],
      },
      {
        phaseNumber: "Phase 02",
        title: "Flutter Fundamentals",
        status: "completed",
        topics: [
          { id: "flt-structure", title: "Flutter Project Structure", status: "completed" },
          { id: "flt-widgets", title: "Widgets and Widget Lifecycle", status: "completed" },
          { id: "flt-state-widgets", title: "StatelessWidget and StatefulWidget", status: "completed" },
          { id: "flt-layouts", title: "Layouts and Responsive UI", status: "completed" },
          { id: "flt-routing", title: "Navigation and Routing", status: "completed" },
          { id: "flt-forms", title: "Forms and Validation", status: "completed" },
        ],
      },
      {
        phaseNumber: "Phase 03",
        title: "Android Application Development",
        status: "in-progress",
        topics: [
          { id: "flt-android-devices", title: "Android Emulator and Physical Devices", status: "completed" },
          { id: "flt-api-integration", title: "API Integration", status: "completed" },
          { id: "flt-http", title: "HTTP Requests", status: "completed" },
          { id: "flt-json", title: "JSON Parsing", status: "in-progress" },
          { id: "flt-storage", title: "Local Storage", status: "in-progress" },
          { id: "flt-state-mgmt", title: "State Management", status: "in-progress" },
        ],
      },
      {
        phaseNumber: "Phase 04",
        title: "Practical Projects",
        status: "in-progress",
        topics: [
          { id: "flt-banking-ui", title: "Banking UI Practice Application", status: "completed" },
          { id: "flt-auth-screens", title: "Authentication Screens", status: "completed" },
          { id: "flt-proj-api", title: "REST API Integration", status: "in-progress" },
          { id: "flt-product-app", title: "Product Management Application", status: "in-progress" },
          { id: "flt-deploy", title: "Android Application Deployment", status: "not-started" },
        ],
      },
    ],
  },
];

/**
 * Calculates progress statistics for a given learning path based on completed topics.
 */
export function calculatePathProgress(path: LearningPath): ProgressSummary {
  let totalTopics = 0;
  let completedTopics = 0;
  let inProgressTopics = 0;

  for (const phase of path.phases) {
    for (const topic of phase.topics) {
      totalTopics += 1;
      if (topic.status === "completed") {
        completedTopics += 1;
      } else if (topic.status === "in-progress") {
        inProgressTopics += 1;
      }
    }
  }

  const percentage = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;

  return {
    totalTopics,
    completedTopics,
    inProgressTopics,
    percentage,
  };
}

/**
 * Calculates overall progress statistics across all active learning paths.
 */
export function calculateOverallProgress(paths: LearningPath[]): ProgressSummary {
  let totalTopics = 0;
  let completedTopics = 0;
  let inProgressTopics = 0;

  for (const path of paths) {
    const summary = calculatePathProgress(path);
    totalTopics += summary.totalTopics;
    completedTopics += summary.completedTopics;
    inProgressTopics += summary.inProgressTopics;
  }

  const percentage = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;

  return {
    totalTopics,
    completedTopics,
    inProgressTopics,
    percentage,
  };
}
