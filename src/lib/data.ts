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
  Server,
  Cloud,
  FileText,
  Search,
  Users,
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
  role: "Software Engineer",
  subtitle: "Frontend & Full-Stack Developer",
  location: "Chennai, India",
  email: "sakthivasanmani21@gmail.com",
  phone: "9597588036",
  linkedin: "https://linkedin.com/in/sakthivasanm",
  github: "https://github.com/SakthivasanM",
  resume: "/SAKTHIVASAN_M_Resume.pdf",
};

export const skills = [
  {
    category: "Frontend",
    icon: Layout,
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Ant Design",
      "Material UI",
    ],
  },
  {
    category: "Mobile",
    icon: Smartphone,
    items: [
      "React Native",
      "Expo",
      "iOS/Android Deployment",
      "Localization",
      "Skeleton Loaders",
    ],
  },
  {
    category: "Backend & Cloud",
    icon: Database,
    items: [
      "Firebase (Firestore, Auth, Functions)",
      "Azure Blob Storage",
      "Azure OpenAI",
      "MSAL",
      "RESTful APIs",
    ],
  },
  {
    category: "State & Performance",
    icon: Zap,
    items: [
      "React Context API",
      "React Query",
      "React.memo",
      "useMemo",
      "useCallback",
      "Code Splitting",
    ],
  },
  {
    category: "Tooling & Other",
    icon: Terminal,
    items: [
      "ExcelJS",
      "jsPDF",
      "Git/GitHub",
      "Azure DevOps",
      "JIRA",
      "Postman",
      "Responsive Design",
    ],
  },
  {
    category: "Domains",
    icon: Globe,
    items: [
      "HRMS",
      "AI Automation",
      "Logistics",
      "Compliance",
      "Media",
      "SaaS",
    ],
  },
];

export const experiences = [
  {
    company: "Kryptos Infosys",
    position: "Associate Software Engineer",
    period: "July 2025 - Present",
    location: "Chennai, India",
    description:
      "Engineering enterprise-grade applications across AI, media, and compliance verticals.",
    achievements: [
      "Engineered and maintained 8+ enterprise applications using React.js, Next.js, and Firebase.",
      "Architected RBAC systems for 5+ distinct user roles (Super Admin, HR, Manager, etc.).",
      "Built a multi-format report export engine covering 22+ report types (Excel, PDF, Word).",
      "Integrated Azure OpenAI and Tavous AI APIs for conversational AI and automated screening.",
    ],
  },
  {
    company: "Kryptos Infosys",
    position: "Software Engineer Trainee",
    period: "May 2024 - June 2025",
    location: "Chennai, India",
    description:
      "Developed functional modules and cross-platform mobile solutions.",
    achievements: [
      "Developed 10+ modules for Rowgistic Android app including Training and Marketplace systems.",
      "Implemented multi-language localization for 6 languages across 30+ screens.",
      "Built SharePoint to Blob Migration frontend with MSAL and complex filtering.",
      "Integrated Firebase Firestore for real-time CRUD and scheduling operations.",
    ],
  },
];

export const projects = [
  {
    slug: "hrms",
    title: "Attendance Management",
    description:
      "Full-scale HRMS covering 20+ modules including Attendance, Payroll, Appraisal, and color-coded Monthly Calendars.",
    category: ["Enterprise", "HRMS"],
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2000&auto=format&fit=crop",
    tech: ["React.js", "Ant Design", "ExcelJS", "jsPDF", "REST API"],
    features: [
      "22-type daily report engine with multi-format export",
      "Appraisal system with KRA workflows and Salary Revision letters",
      "Probation module with automated Confirmation Letter generation",
      "Role-based access control for 5+ distinct roles",
    ],
    github: "https://github.com/SakthivasanM",
    live: "#",
  },
  {
    slug: "ai-interview-platform",
    title: "AI Interview Panel",
    description:
      "End-to-end AI interview platform with live video sessions, AI analysis reports, and multi-tab security.",
    category: ["AI", "Web App"],
    image:
      "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=2000&auto=format&fit=crop",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Daily.co", "jsPDF"],
    features: [
      "Live video sessions with Daily.co integration",
      "AI analysis with score breakdown and session playback",
      "PDF analysis reports using jsPDF and html2canvas",
      "Google Calendar ICS integration for scheduling",
    ],
    github: "https://github.com/SakthivasanM",
    live: "#",
  },
  {
    slug: "rowgistic-logistics",
    title: "Rowgistic Logistics App",
    description:
      "Cross-platform logistics and training management application with multi-language support and real-time Firestore integration.",
    category: ["Mobile", "Logistics"],
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000&auto=format&fit=crop",
    tech: ["React Native", "Firebase", "Xcode", "Localization"],
    features: [
      "Multi-language localization supporting 6 languages",
      "Real-time Firestore integration for marketplace and scheduling",
      "Training Calendar with Day/Week/Month views",
      "Automated PDF payment receipt generation",
    ],
    github: "https://github.com/SakthivasanM",
    live: "#",
  },
  {
    slug: "qatar-living",
    title: "QatarLiving Web Platform",
    description:
      "Content-rich media platform built with Next.js SSR/SSG and a MonoRepo architecture.",
    category: ["Web App", "Media"],
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2000&auto=format&fit=crop",
    tech: ["Next.js", "Ant Design", "Drupal API", "MonoRepo"],
    features: [
      "Next.js SSR/SSG for optimized performance and SEO",
      "Dynamic article slugs and WatchOnQatar section",
      "Multi-language localization and newsletter UI",
      "Integration with Drupal REST APIs",
    ],
    github: "https://github.com/SakthivasanM",
    live: "#",
  },
  {
    slug: "knower-ai",
    title: "KnowerAI SaaS Dashboard",
    description:
      "Multi-tenant SaaS dashboard for managing clients, tenants, and granular RBAC permissions.",
    category: ["Web App", "Enterprise", "SaaS"],
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000&auto=format&fit=crop",
    tech: ["React.js", "Material UI", "REST API", "RBAC"],
    features: [
      "Granular RBAC for tenants and users",
      "Infinite-scroll dropdowns and dynamic UI components",
      "Billing management with PDF invoice generation",
      "Comprehensive Audit Log and activity tracking",
    ],
    github: "https://github.com/SakthivasanM",
    live: "#",
  },
];

export const education = [
  {
    degree: "M.Sc. Information Technology",
    school: "Arignar Anna Government Arts College, Vilupuram",
    period: "2021 – 2023",
  },
  {
    degree: "B.C.A. Computer Applications",
    school: "Apollo Arts and Science College, Chennai",
    period: "2018 – 2021",
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
