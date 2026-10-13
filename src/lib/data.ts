import {
  Code2,
  Database,
  Globe,
  Layers,
  Layout,
  Cpu,
  Smartphone,
  ShieldCheck,
  Zap,
  Terminal,
  Cloud,
  Award,
  Sparkles,
} from "lucide-react";

export const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
];

export const personalInfo = {
  name: "Sakthivasan M",
  role: "Software Engineer | Frontend Developer",
  subtitle: "React.js • Next.js • React Native • Firebase • AI Solutions",
  location: "Taramani, Chennai, India - 600113",
  email: "sakthivasanmani21@gmail.com",
  phone: "9597588036",
  linkedin: "https://www.linkedin.com/in/sakthivasanm/",
  github: "https://github.com/SakthivasanM",
  resume: "/SAKTHIVASAN_M_Resume.pdf",
  summary:
    "Results-driven Software Engineer with 2+ years of experience building scalable, responsive enterprise web and mobile applications. Proficient in React.js, Next.js, React Native, and Firebase, with a proven track record spanning 12+ production applications across HRMS, AI, logistics, compliance, and media domains. Progressed from Software Engineer Trainee to Associate Software Engineer at Kryptos Infosys, demonstrating consistent growth in delivering clean, maintainable front-end solutions, integrating RESTful APIs, implementing role-based access control, and optimizing UI performance. Consistently recognized for code quality, cross-functional collaboration, and on-time delivery.",
};

export const skills = [
  {
    category: "Languages",
    icon: Code2,
    items: [
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3",
      "SQL",
    ],
  },
  {
    category: "Frameworks & Libraries",
    icon: Layout,
    items: [
      "React.js",
      "Next.js",
      "React Native",
      "Material UI",
      "Ant Design",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend & Cloud",
    icon: Cloud,
    items: [
      "Firebase (Firestore, Auth, Functions)",
      "Azure Blob Storage",
      "Azure OpenAI",
      "MSAL (Entra ID)",
      "RESTful APIs",
    ],
  },
  {
    category: "Dev Tools",
    icon: Terminal,
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Azure DevOps",
      "Xcode",
    ],
  },
  {
    category: "Architecture & Delivery",
    icon: Zap,
    items: [
      "Role-Based Access Control (RBAC)",
      "Multi-Format Reporting (ExcelJS, jsPDF)",
      "Multi-Language Localization (i18n)",
      "Code Splitting & Lazy Loading",
      "UI Performance Optimization",
    ],
  },
  {
    category: "Domains & Verticals",
    icon: Globe,
    items: [
      "HRMS & Enterprise Portals",
      "AI & LLM Workflows",
      "Cross-Platform Logistics",
      "Cloud Migration & Compliance",
      "Media Platforms & SaaS",
    ],
  },
];

export const experiences = [
  {
    company: "Kryptos Infosys",
    position: "Associate Software Engineer",
    period: "June 2025 – Present",
    location: "Chennai, India",
    description:
      "Engineering and maintaining 8+ enterprise-grade web applications using React.js, Next.js, Firebase, Ant Design, and Material UI across AI, media, compliance, and cloud service verticals.",
    achievements: [
      "Engineered and maintained 8+ enterprise-grade web applications using React.js, Next.js, Firebase, Ant Design, and Material UI across AI, media, compliance, and cloud service verticals.",
      "Architected role-based access control (RBAC) systems enforcing secure, permission-driven navigation for 5+ distinct user roles (Super Admin, HR Admin, Manager, Team Lead, Employee) across multiple applications.",
      "Built a comprehensive multi-format report export engine covering 22+ report types (Excel via ExcelJS, PDF via jsPDF+autoTable, Word) including attendance, statutory, appraisal, and payroll reports.",
      "Integrated Azure OpenAI and Tavous AI APIs into production applications, enabling conversational AI, automated proposal summarization, and AI-driven candidate screening workflows.",
    ],
  },
  {
    company: "Kryptos Infosys",
    position: "Software Engineer Trainee",
    period: "May 2024 – May 2025",
    location: "Chennai, India",
    description:
      "Developed functional modules for Android/iOS mobile solutions, multi-language internationalization pipelines, and enterprise cloud migration applications.",
    achievements: [
      "Developed 10+ functional modules for the Rowgistic Android app including Training Management (Create, Edit, View, Join), Account Deletion, Marketplace, Club, Events, Logging, and Training Calendar (Day/Week/Month views).",
      "Implemented multi-language localization across the entire Rowgistic app supporting Norwegian, Swedish, Danish, Spanish, German, and French translations for 30+ screens.",
      "Integrated Firebase Firestore for real-time CRUD operations including training scheduling, membership management, boat marketplace listings, and PDF payment receipt generation.",
      "Built the SharePoint to Blob Migration Application frontend using React.js and MSAL: user table with Teams-style avatars, multi-file selection, Backup/Migrate/Restore workflows, schedule form, date-range filtering, and report generation.",
    ],
  },
];

export const projects = [
  {
    slug: "a4a-user-management",
    title: "A4A User Management Application",
    description:
      "Enterprise membership platform client managing Groups, Contacts, and Companies with Microsoft Entra ID SSO, Microsoft 365 Sync Management console, and debounced global search.",
    category: ["Enterprise", "Web App"],
    image: "/images/projects/a4a-user-management.jpg",
    tech: ["React.js", "TypeScript", "Material UI", "MSAL", "REST API"],
    features: [
      "Built membership platform client managing Groups, Contacts and Companies with global search, dashboard, audit logs, and PDF/Excel reports (Participation, Group Details, Liaison, Chair Counts) with mock-mode fallback.",
      "Implemented Microsoft Entra ID single sign-on with automatic login redirect, plus a permission-driven UI covering read-only modes, admin-only reports, and chair/vice-chair limit validations.",
      "Developed Microsoft 365 Sync Management admin console with pending, failed, and successful sync tabs, manual provisioning/deprovisioning, retry actions, and discrepancy error trace dialogs.",
      "Created reusable CSV/Excel export across 5 modules and global API error handling utility; optimized load time with Rollup vendor chunking and React.lazy route splitting.",
    ],
    github: "https://github.com/SakthivasanM",
    live: "#",
  },
  {
    slug: "interu-ai",
    title: "InterU.AI – AI Interview Platform",
    description:
      "End-to-end AI interview platform featuring candidate registration, live Daily.co video sessions, automated scoring analysis, and multi-tab security.",
    category: ["AI", "Web App"],
    image: "/images/projects/interu-ai.jpg",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Daily.co", "jsPDF"],
    features: [
      "End-to-end AI interview platform: HR dashboard, candidate registration, live video sessions (Daily.co), AI analysis with score breakdown, session recording playback, multi-tab security, and AuditLogs.",
      "Implemented Google Calendar ICS integration, PDF analysis reports (jsPDF + html2canvas), and full responsive design with unit-tested layouts across all screens.",
    ],
    github: "https://github.com/SakthivasanM",
    live: "#",
  },
  {
    slug: "hrms",
    title: "Attendance Management Application",
    description:
      "Full-scale enterprise HRMS covering 20+ modules including Attendance, Leave, Shift, Holiday, Employee Profile, Probation, Appraisal, Goals & KRA, and Payroll.",
    category: ["Enterprise", "HRMS"],
    image: "/images/projects/hrms-attendance.jpg",
    tech: ["React.js", "Ant Design", "ExcelJS", "jsPDF", "REST API"],
    features: [
      "Full-scale HRMS covering 20+ modules: Attendance, Leave, Shift, Holiday, Employee Profile, Probation, Appraisal, Goals & KRA, Payroll, and Reports.",
      "Engineered a 22-type daily report engine with multi-format export (Excel via ExcelJS, PDF via jsPDF+autoTable, Word) and an Appraisal Management system with KRA workflows and Salary Revision letter generation.",
      "Implemented role-based access control for 5+ distinct roles (Super Admin, HR Admin, Manager, Team Lead, Employee) and interactive Monthly Calendar with color-coded attendance status.",
      "Built Probation Module with Checklist and Confirmation Letter generation, and session-based token refresh security.",
    ],
    github: "https://github.com/SakthivasanM",
    live: "#",
  },
  {
    slug: "knower-ai",
    title: "KnowerAI – Multi-Tenant SaaS Dashboard",
    description:
      "Multi-tenant SaaS dashboard managing Client, Tenant, User, App, Billing, and Audit Log modules with granular RBAC and infinite-scroll dropdowns.",
    category: ["AI", "Enterprise"],
    image: "/images/projects/knower-ai.jpg",
    tech: ["React.js", "Material UI", "REST API", "RBAC"],
    features: [
      "Developed Client, Tenant, User, App, Billing, and Audit Log management with granular RBAC.",
      "Implemented infinite-scroll dropdowns, dynamic form workflows, and 30+ components documented inline.",
      "Billing management module with automated PDF invoice generation.",
      "Comprehensive Audit Log and system activity tracking with real-time feedback.",
    ],
    github: "https://github.com/SakthivasanM",
    live: "#",
  },
  {
    slug: "rowgistic-logistics",
    title: "Rowgistic – Cross-Platform Logistics App",
    description:
      "Cross-platform mobile logistics and training management application with 10+ Android modules, real-time Firestore integration, and 6-language localization.",
    category: ["Mobile", "Enterprise"],
    image: "/images/projects/rowgistic.jpg",
    tech: ["React Native", "Firebase", "Xcode", "Localization"],
    features: [
      "Developed 10+ functional modules for Android including Training Management (Create, Edit, View, Join), Account Deletion, Marketplace, Club, Events, Logging, and Training Calendar (Day/Week/Month).",
      "Implemented multi-language localization across 30+ screens (Norwegian, Swedish, Danish, Spanish, German, French).",
      "Integrated Firebase Firestore for real-time CRUD operations and automated PDF payment receipt generation.",
      "Resolved complex iOS build configurations enabling simulator deployment; implemented global stylesheets and skeleton loaders.",
    ],
    github: "https://github.com/SakthivasanM",
    live: "#",
  },
  {
    slug: "sharepoint-blob-migration",
    title: "SharePoint to Blob Migration Application",
    description:
      "Enterprise cloud migration frontend enabling seamless file migration from Microsoft SharePoint to Azure Blob Storage with automated scheduling.",
    category: ["Enterprise", "Web App"],
    image: "/images/projects/sharepoint-blob-migration.jpg",
    tech: ["React.js", "MSAL", "Azure Blob Storage", "REST API"],
    features: [
      "Built SharePoint to Blob Migration Application frontend using React.js and MSAL.",
      "Interactive user table with Teams-style avatars, multi-file selection, and date-range filtering.",
      "End-to-end Backup, Migrate, and Restore workflows with live progress tracking.",
      "Schedule form with automated triggers, date-range filtering, and migration report generation.",
    ],
    github: "https://github.com/SakthivasanM",
    live: "#",
  },
];

export const achievements = [
  {
    id: "emerging-talent-award-2026",
    title: "Emerging Talent Award – 2026",
    event: "Quarterly Rewards & Recognition – 2nd Quarter",
    company: "Kryptos Infosys",
    date: "September 2026",
    location: "Chennai, India",
    description:
      "Received the Emerging Talent Award during the 2nd Quarterly Rewards & Recognition Ceremony in September 2026. This recognition highlights technical contributions, commitment to delivering quality solutions, adaptability in learning new technologies, and dedication to supporting project objectives and team success.",
    badge: "Quarterly R&R Winner",
  },
];

export const education = [
  {
    degree: "Master of Science (M.Sc.) in Information Technology",
    school: "Arignar Anna Government Arts College",
    location: "Vilupuram, India",
    period: "2021 – 2023",
    description:
      "Advanced postgraduate coursework focusing on software systems engineering, data structures, cloud architectures, and scalable web solutions.",
  },
];

export const certifications = [
  {
    title: "Front-End Development",
    issuer: "Login360",
    date: "2023",
    link: "#",
  },
  {
    title: "HTML/CSS Essential Bootcamp",
    issuer: "Letsupgrade",
    date: "2022",
    link: "#",
  },
  {
    title: "Web Development Bootcamp",
    issuer: "Codekaro",
    date: "2022",
    link: "#",
  },
];

export const declaration = {
  statement:
    "I hereby declare that the information provided in this resume and portfolio is true and accurate to the best of my knowledge. I am committed to maintaining integrity and transparency in all professional matters.",
  author: "Sakthivasan M",
  location: "Chennai, India",
  date: "September 2026",
};
