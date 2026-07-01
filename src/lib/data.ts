export const profile = {
  name: "Vishal Choudhary",
  title: "Flutter Developer",
  tagline: "Crafting fast, beautiful cross-platform apps for Android & iOS.",
  location: "Panchkula, Haryana, India",
  email: "vc46320@gmail.com",
  phone: "+91 7591033165",
  resumeUrl: "/Vishal_Choudhary_Resume.pdf",
  summary:
    "Flutter Developer with experience building high-performance cross-platform mobile applications for Android and iOS using Flutter and Dart. Skilled in creating responsive UIs, integrating REST APIs, implementing state management solutions such as GetX and Riverpod, and working with Firebase services. Experienced in app deployment, performance optimization, debugging, and collaborating with cross-functional teams to deliver scalable, user-friendly mobile applications.",
};

export const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["Dart", "Python"],
  },
  {
    title: "Frameworks",
    skills: ["Flutter", "Django"],
  },
  {
    title: "Backend & APIs",
    skills: ["REST APIs", "JSON", "Supabase", "Firebase"],
  },
  {
    title: "Database",
    skills: ["PostgreSQL (Supabase)", "MySQL"],
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "GitHub", "VS Code", "Android Studio", "Antigravity", "AI Tooling"],
  },
  {
    title: "App Deployment",
    skills: ["Google Play Store", "Apple App Store", "TestFlight"],
  },
];

export const experience = [
  {
    role: "Junior Flutter Developer",
    company: "Vision Vivante Private Limited",
    period: "Aug 2025 — Present",
    points: [
      "Develop and maintain cross-platform mobile applications for Android and iOS using Flutter and Dart.",
      "Design responsive, user-friendly interfaces and integrate REST APIs end-to-end.",
      "Implement state management with GetX and Riverpod for scalable app architecture.",
      "Integrate Firebase services including Authentication, Cloud Messaging, and Crashlytics.",
      "Collaborate with backend developers, designers, and QA to ship high-quality releases.",
      "Optimize app performance, resolve bugs, and manage smooth deployment to the Play Store and App Store.",
    ],
  },
];

export const projects = [
  {
    name: "TowTrace",
    subtitle: "Vehicle Towing & Tracking App",
    description:
      "A mobile application built with Flutter to help users locate and track towed vehicles, featuring real-time location tracking, request handling, and a seamless status-update experience.",
    tags: ["Flutter", "Real-time Location", "REST APIs"],
    icon: "smartphone",
    visual: "towtrace",
  },
  {
    name: "Bid4Style",
    subtitle: "E-commerce Mobile Application",
    description:
      "An e-commerce app enabling users to browse products, manage a cart, and interact with the platform, with role-based authentication for separate customer and admin experiences.",
    tags: ["Flutter", "E-commerce", "Role-based Auth"],
    icon: "smartphone",
    visual: "bid4style",
  },
  {
    name: "MariSpeaks",
    subtitle: "Real-time Push-to-Talk Communication",
    description:
      "A real-time PTT app enabling instant voice communication via low-latency WebSocket audio streaming, with Firebase Auth, REST APIs, FCM/APNs push notifications, and background audio.",
    tags: ["WebSockets", "Firebase", "Push Notifications"],
    icon: "smartphone",
    visual: "marispeaks",
  },
  {
    name: "OneStop Delivery",
    subtitle: "Delivery Partner & Customer App",
    description:
      "A delivery app for partners with order assignment, real-time status updates, GPS tracking, navigation, earnings management, and delivery history — synced via REST APIs and push notifications.",
    tags: ["Flutter", "GPS Tracking", "Push Notifications"],
    icon: "smartphone",
    visual: "onestop",
  },
  {
    name: "AI Virtual Assistant",
    subtitle: "Voice-controlled Automation Tool",
    description:
      "A Python-based virtual assistant with voice recognition and automation features, integrating multiple libraries to perform real-time tasks such as opening applications, fetching information, and responding to user queries.",
    tags: ["Python", "Voice Recognition", "Automation"],
    icon: "bot",
    visual: "ai-assistant",
  },
  {
    name: "Career Mentor App",
    subtitle: "Career Guidance Platform for Students",
    description:
      "An application to guide Class 12 students in choosing suitable career paths based on their interests and academic background, offering career suggestions, course information, and user-friendly navigation.",
    tags: ["Career Guidance", "Recommendations", "UX"],
    icon: "compass",
    visual: "career-mentor",
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "PG Degree College, Dharamshala (HP)",
    period: "Aug 2023 — July 2025",
    grade: "CGPA: 7.39",
  },
  {
    degree: "Bachelor in Computer Applications (BCA)",
    school: "MCM DAV College, Kangra (HP)",
    period: "Aug 2020 — July 2023",
    grade: "CGPA: 7.69",
  },
];

export const socials = {
  email: `mailto:${profile.email}`,
  phone: `tel:${profile.phone.replace(/\s+/g, "")}`,
};
