"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import {
  ArrowRight,
  Code2,
  Globe,
  Cpu,
  Smartphone,
  GraduationCap,
  Trophy,
  ShieldCheck,
  Calendar,
  MapPin,
  Sparkles,
  Download,
  Briefcase,
  Layers,
  Award,
  CheckCircle2,
  Clock,
  Flame,
  Zap,
  FileSpreadsheet,
  Languages,
  Mail,
  ChevronRight,
  Phone,
  ExternalLink,
} from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import Profile from "../../../public/images/profile_tech.jpg";
import { personalInfo, education, achievements } from "@/lib/data";

export default function AboutPage() {
  const award = achievements[0];

  const engineeringPillars = [
    {
      icon: Zap,
      title: "Scalability & Speed",
      description:
        "Vendor chunking, Rollup code splitting, and memoized state pipelines ensuring sub-second loads across large enterprise datasets.",
      badge: "Performance",
      color: "text-blue-500 bg-blue-500/10 border-blue-500/20",
    },
    {
      icon: ShieldCheck,
      title: "Enterprise RBAC & SSO",
      description:
        "Strict role-based access control protecting 5+ distinct roles (Super Admin, HR, Manager, Employee) with Microsoft Entra ID (MSAL) SSO.",
      badge: "Security",
      color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      icon: FileSpreadsheet,
      title: "Multi-Format Export Engine",
      description:
        "Engineered 22+ custom enterprise report types with programmatic styling using ExcelJS, jsPDF + autoTable, and Word exports.",
      badge: "22+ Types",
      color: "text-purple-500 bg-purple-500/10 border-purple-500/20",
    },
    {
      icon: Languages,
      title: "Cross-Platform & i18n",
      description:
        "Cross-platform Android/iOS apps with real-time Firebase Firestore synchronization and 6-language internationalization (Norwegian, Swedish, Danish, Spanish, German, French).",
      badge: "6 Locales",
      color: "text-cyan-500 bg-cyan-500/10 border-cyan-500/20",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 sm:pt-28 md:pt-32 pb-20 relative">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 space-y-16 sm:space-y-24">
          {/* Main Story & Profile Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left: Executive Photo Showcase & Professional Dossier */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:col-span-5 relative max-w-[460px] mx-auto lg:mx-0 w-full space-y-5"
            >
              {/* Ambient Glow */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-primary/25 via-indigo-500/20 to-cyan-400/20 rounded-[36px] blur-2xl -z-10 opacity-80" />

              {/* Outer Card Frame */}
              <div className="glass-card p-3 rounded-[32px] border border-border/80 shadow-2xl relative overflow-visible">
                {/* Image Container */}
                <div className="relative aspect-[4/4.5] w-full rounded-[24px] overflow-hidden bg-muted">
                  <Image
                    src={Profile}
                    alt={personalInfo.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 460px"
                    className="object-cover object-top transition-transform duration-700 hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent pointer-events-none" />

                  {/* Top-Right Location Status Pill */}
                  <div className="absolute top-3.5 right-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/90 dark:bg-card/90 backdrop-blur-md text-[11px] font-bold text-foreground border border-border/70 shadow-md z-10">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <MapPin size={11} className="text-primary shrink-0" />
                    <span>Taramani, Chennai</span>
                  </div>

                  {/* Bottom-Left Current Title Pill */}
                  <div className="absolute bottom-3.5 left-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/65 backdrop-blur-md text-[11px] font-semibold text-white border border-white/15 shadow-md z-10">
                    <CheckCircle2 size={12} className="text-emerald-400" />
                    <span>Associate Software Engineer</span>
                  </div>
                </div>

                {/* Floating Bottom-Right Award Satellite */}
                <div className="absolute -bottom-5 -right-3 sm:-right-4 p-2.5 px-3.5 glass-card rounded-2xl border border-amber-500/35 shadow-xl flex items-center gap-2.5 animate-float bg-background/95 z-20">
                  <div className="p-1.5 rounded-xl bg-amber-500/15 text-amber-500 shrink-0">
                    <Trophy size={16} />
                  </div>
                  <div>
                    <div className="text-[9px] uppercase font-bold tracking-wider text-amber-600 dark:text-amber-400">
                      Quarterly R&R Winner
                    </div>
                    <div className="text-xs font-bold text-foreground">
                      Emerging Talent 2026
                    </div>
                  </div>
                </div>

                {/* Floating Top-Left Company Badge */}
                <div className="absolute -top-3.5 -left-3 sm:-left-4 p-2 px-3.5 glass-card rounded-2xl border border-primary/30 shadow-xl flex items-center gap-2 animate-float-reverse bg-background/95 z-20">
                  <div className="p-1.5 rounded-lg bg-primary/10 text-primary">
                    <Briefcase size={14} />
                  </div>
                  <div className="text-xs font-bold text-foreground">
                    Kryptos Infosys
                  </div>
                </div>
              </div>

              {/* Quick Credential Strip */}
              <div className="grid grid-cols-3 gap-2.5 pt-2 text-center">
                <div className="p-3 rounded-2xl glass-card border border-border/70 hover:border-primary/40 transition-all shadow-sm">
                  <div className="text-xl font-black text-foreground flex items-center justify-center gap-1">
                    <Clock size={14} className="text-primary" />
                    <span>2+</span>
                  </div>
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mt-0.5">
                    Years Exp
                  </div>
                </div>

                <div className="p-3 rounded-2xl glass-card border border-border/70 hover:border-primary/40 transition-all shadow-sm">
                  <div className="text-xl font-black text-primary flex items-center justify-center gap-1">
                    <Flame size={14} className="text-primary" />
                    <span>12+</span>
                  </div>
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mt-0.5">
                    Apps Built
                  </div>
                </div>

                <div className="p-3 rounded-2xl glass-card border border-border/70 hover:border-primary/40 transition-all shadow-sm">
                  <div className="text-xl font-black text-emerald-500 flex items-center justify-center gap-1">
                    <GraduationCap size={15} className="text-emerald-500" />
                    <span>M.Sc.</span>
                  </div>
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mt-0.5">
                    IT Degree
                  </div>
                </div>
              </div>

              {/* Professional Dossier & Core Info Card */}
              <div className="glass-card p-5 rounded-3xl border border-border/80 shadow-md space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-border/60">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-primary/10 text-primary">
                      <Briefcase size={15} />
                    </div>
                    <span className="text-xs font-bold text-foreground">
                      Engineering Dossier
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Full-Time Active
                  </span>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-muted-foreground font-medium">Current Role</span>
                    <span className="font-semibold text-foreground text-right">
                      Associate Software Engineer
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-muted-foreground font-medium">Company</span>
                    <span className="font-semibold text-foreground text-right">
                      Kryptos Infosys
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-muted-foreground font-medium">Track Record</span>
                    <span className="font-semibold text-primary text-right">
                      12+ Enterprise Deployments
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-muted-foreground font-medium">Location</span>
                    <span className="font-semibold text-foreground text-right">
                      Taramani, Chennai, India
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-muted-foreground font-medium">Work Mode</span>
                    <span className="font-semibold text-foreground text-right">
                      On-site • Hybrid • Remote
                    </span>
                  </div>
                </div>

                {/* Direct Connect & Social Dock */}
                <div className="pt-3 border-t border-border/60 flex items-center justify-between gap-2">
                  <Link
                    href={`mailto:${personalInfo.email}`}
                    className="flex-1 py-2 px-3 rounded-xl bg-muted/60 hover:bg-primary/10 hover:text-primary transition-all text-center text-xs font-semibold flex items-center justify-center gap-1.5 border border-border/60"
                  >
                    <Mail size={13} />
                    <span>Email Me</span>
                  </Link>
                  <Link
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-muted/60 hover:bg-primary/10 hover:text-primary transition-all border border-border/60"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={15} />
                  </Link>
                  <Link
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-muted/60 hover:bg-primary/10 hover:text-primary transition-all border border-border/60"
                    aria-label="GitHub Profile"
                  >
                    <Github size={15} />
                  </Link>
                  <Link
                    href={`tel:${personalInfo.phone}`}
                    className="p-2 rounded-xl bg-muted/60 hover:bg-primary/10 hover:text-primary transition-all border border-border/60"
                    aria-label="Phone / WhatsApp"
                  >
                    <Phone size={15} />
                  </Link>
                </div>
              </div>

              {/* Career Progression & Milestones */}
              <div className="glass-card p-5 rounded-3xl border border-border/80 shadow-md space-y-3.5">
                <div className="flex items-center justify-between pb-2.5 border-b border-border/60">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-blue-500/10 text-primary">
                      <Clock size={15} />
                    </div>
                    <span className="text-xs font-bold text-foreground">
                      Career Progression
                    </span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    2+ Years Verified
                  </span>
                </div>

                <div className="space-y-3.5 relative before:absolute before:left-2 before:top-2.5 before:bottom-2 before:w-0.5 before:bg-border/70 pl-6">
                  {/* Step 1: Associate Software Engineer */}
                  <div className="relative">
                    <span className="absolute -left-6 top-1 h-2.5 w-2.5 rounded-full bg-primary border-2 border-background ring-2 ring-primary/20" />
                    <div className="flex items-center justify-between">
                      <h5 className="text-xs font-bold text-foreground">
                        Associate Software Engineer
                      </h5>
                      <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                        Current
                      </span>
                    </div>
                    <div className="text-[11px] text-muted-foreground font-medium mt-0.5">
                      Kryptos Infosys • June 2025 – Present
                    </div>
                    <p className="text-[11px] text-muted-foreground/80 mt-1 leading-snug">
                      Leading frontend for 8+ enterprise apps, RBAC engines & report architectures.
                    </p>
                  </div>

                  {/* Step 2: Software Engineer Trainee */}
                  <div className="relative">
                    <span className="absolute -left-6 top-1 h-2.5 w-2.5 rounded-full bg-muted-foreground/70 border-2 border-background" />
                    <h5 className="text-xs font-bold text-foreground">
                      Software Engineer Trainee
                    </h5>
                    <div className="text-[11px] text-muted-foreground font-medium mt-0.5">
                      Kryptos Infosys • 2024 – June 2025
                    </div>
                    <p className="text-[11px] text-muted-foreground/80 mt-1 leading-snug">
                      Cross-platform React Native, Firestore sync, and reusable UI components.
                    </p>
                  </div>

                  {/* Step 3: Postgraduate Degree */}
                  <div className="relative">
                    <span className="absolute -left-6 top-1 h-2.5 w-2.5 rounded-full bg-emerald-500 border-2 border-background ring-2 ring-emerald-500/20" />
                    <h5 className="text-xs font-bold text-foreground">
                      M.Sc. Information Technology
                    </h5>
                    <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium mt-0.5">
                      2022 – 2024 • First Class Distinction
                    </div>
                    <p className="text-[11px] text-muted-foreground/80 mt-1 leading-snug">
                      Specialized in Distributed Web Systems & Database Architectures.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Narrative & Competencies */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="lg:col-span-7 space-y-7"
            >
              {/* Header Badge & Title */}
              <div className="space-y-3.5">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold uppercase tracking-wider">
                  <Sparkles size={13} />
                  <span>About Sakthivasan M</span>
                </div>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] sm:leading-[1.08] text-foreground">
                  Engineering{" "}
                  <span className="text-gradient">Enterprise-Grade</span>{" "}
                  Web & Mobile Architectures.
                </h1>
              </div>

              {/* Bio Summary */}
              <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                <p>
                  I am <strong className="text-foreground font-bold">{personalInfo.name}</strong>, a Software Engineer & Frontend Developer with <span className="text-foreground font-semibold">2+ years</span> of professional experience building scalable, responsive enterprise applications. Proficient in <span className="text-primary font-semibold">React.js</span>, <span className="text-primary font-semibold">Next.js</span>, <span className="text-primary font-semibold">React Native</span>, and <span className="text-primary font-semibold">Firebase</span>, with a proven track record spanning <span className="text-foreground font-semibold">12+ production applications</span> across HRMS, AI, logistics, compliance, and media verticals.
                </p>
                <p>
                  I progressed from <strong className="text-foreground font-semibold">Software Engineer Trainee</strong> to <strong className="text-foreground font-semibold">Associate Software Engineer</strong> at Kryptos Infosys, demonstrating consistent growth in delivering clean, maintainable front-end architectures, integrating complex RESTful APIs, implementing robust Role-Based Access Control (RBAC), and optimizing UI performance. Consistently recognized for code quality, cross-functional collaboration, and on-time delivery.
                </p>
              </div>

              {/* Key Competency Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                {/* React / Next.js */}
                <div className="p-4.5 rounded-2xl glass-card border border-border/70 hover:border-primary/40 hover:-translate-y-0.5 transition-all flex flex-col justify-between">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-blue-500/10 text-primary shrink-0">
                      <Code2 size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm">
                        React.js & Next.js
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                        Production SPAs & SSR applications, state management, lazy chunking, and bundle optimization.
                      </p>
                    </div>
                  </div>
                  <div className="pt-3 mt-3 border-t border-border/50 flex flex-wrap gap-1.5">
                    {["Next.js 14", "TypeScript", "Tailwind CSS"].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-muted/60 text-[10px] font-semibold text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* React Native & Mobile */}
                <div className="p-4.5 rounded-2xl glass-card border border-border/70 hover:border-cyan-500/40 hover:-translate-y-0.5 transition-all flex flex-col justify-between">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 shrink-0">
                      <Smartphone size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm">
                        React Native & Mobile
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                        Cross-platform Android/iOS apps with real-time Firebase Firestore synchronization.
                      </p>
                    </div>
                  </div>
                  <div className="pt-3 mt-3 border-t border-border/50 flex flex-wrap gap-1.5">
                    {["React Native", "Firebase", "6-Lang i18n"].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-muted/60 text-[10px] font-semibold text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* AI Workflows & LLMs */}
                <div className="p-4.5 rounded-2xl glass-card border border-border/70 hover:border-purple-500/40 hover:-translate-y-0.5 transition-all flex flex-col justify-between">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 shrink-0">
                      <Cpu size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm">
                        AI Workflows & LLMs
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                        Azure OpenAI & Tavus AI integrations for screening, proposal summarization & video flows.
                      </p>
                    </div>
                  </div>
                  <div className="pt-3 mt-3 border-t border-border/50 flex flex-wrap gap-1.5">
                    {["Azure OpenAI", "Tavus AI", "Daily.co"].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-muted/60 text-[10px] font-semibold text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* RBAC & Cloud Security */}
                <div className="p-4.5 rounded-2xl glass-card border border-border/70 hover:border-emerald-500/40 hover:-translate-y-0.5 transition-all flex flex-col justify-between">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm">
                        RBAC & Cloud Security
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                        Microsoft Entra ID (MSAL) SSO, permission matrices & Azure Blob Storage migrations.
                      </p>
                    </div>
                  </div>
                  <div className="pt-3 mt-3 border-t border-border/50 flex flex-wrap gap-1.5">
                    {["MSAL SSO", "5+ Roles", "Azure Blob"].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-muted/60 text-[10px] font-semibold text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary to-blue-600 text-primary-foreground font-semibold hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0 transition-all group"
                >
                  <span>Let&apos;s Work Together</span>
                  <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href={personalInfo.resume}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl glass-card text-foreground font-semibold hover:border-primary/40 hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-sm"
                >
                  <Download size={17} className="text-muted-foreground" />
                  <span>Download Full Resume</span>
                </Link>

                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-border/80 hover:bg-muted font-semibold transition-all text-muted-foreground hover:text-foreground hover:-translate-y-0.5"
                >
                  <Layers size={17} className="text-primary" />
                  <span>Explore Projects</span>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Section 2: Core Engineering Pillars */}
          <div className="space-y-8 pt-4">
            <div className="text-center max-w-2xl mx-auto space-y-2.5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                <Zap size={13} />
                <span>Architectural Pillars</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                How I Build <span className="text-gradient">Production Systems</span>
              </h2>
              <p className="text-sm text-muted-foreground">
                Core design patterns and engineering practices implemented across 12+ enterprise production deployments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {engineeringPillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    className="glass-card p-6 rounded-2xl border border-border/80 hover:border-primary/40 transition-all flex flex-col justify-between space-y-4 hover:shadow-xl hover:shadow-primary/5 group"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className={`p-2.5 rounded-xl ${pillar.color} shrink-0`}>
                          <Icon size={20} />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-muted border border-border/60 text-muted-foreground">
                          {pillar.badge}
                        </span>
                      </div>
                      <h3 className="font-bold text-foreground text-base group-hover:text-primary transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Section 3: Education & Honors Dual Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Education Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 md:p-9 rounded-3xl border border-border/80 space-y-6 flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="p-3 bg-primary/10 rounded-2xl text-primary shrink-0 shadow-sm border border-primary/20">
                    <GraduationCap size={26} />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-primary">
                      Academic Background
                    </div>
                    <h3 className="text-2xl font-extrabold text-foreground tracking-tight">
                      Education
                    </h3>
                  </div>
                </div>

                <div className="space-y-4">
                  {education.map((edu, idx) => (
                    <div key={idx} className="p-6 rounded-2xl bg-muted/40 border border-border/70 space-y-3.5">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <h4 className="text-lg font-bold text-foreground leading-snug">
                          {edu.degree}
                        </h4>
                        <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20 w-fit shrink-0">
                          {edu.period}
                        </span>
                      </div>
                      <div className="text-xs md:text-sm font-semibold text-muted-foreground flex items-center gap-1.5">
                        <MapPin size={14} className="text-primary shrink-0" />
                        <span>{edu.school}, {edu.location}</span>
                      </div>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed pt-1">
                        {edu.description}
                      </p>

                      {/* Key Specialization Tags */}
                      <div className="pt-2 border-t border-border/50 flex flex-wrap gap-1.5">
                        {["Distributed Systems", "Database Architectures", "Web Technologies", "Software Engineering"].map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 rounded-md bg-background text-[10px] font-semibold text-muted-foreground border border-border/60"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                <CheckCircle2 size={14} className="text-emerald-500" />
                <span>Verified Postgraduate Degree (M.Sc. IT)</span>
              </div>
            </motion.div>

            {/* Honors & Awards Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-8 md:p-9 rounded-3xl border-2 border-amber-500/35 dark:border-amber-400/30 space-y-6 relative overflow-hidden flex flex-col justify-between shadow-xl"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="p-3 bg-amber-500/15 rounded-2xl text-amber-500 shrink-0 shadow-sm border border-amber-500/30">
                    <Trophy size={26} className="animate-pulse" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                      Quarterly Recognition
                    </div>
                    <h3 className="text-2xl font-extrabold text-foreground tracking-tight">
                      Honors & Awards
                    </h3>
                  </div>
                </div>

                {award && (
                  <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/25 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <h4 className="text-lg font-black text-foreground">
                        {award.title}
                      </h4>
                      <span className="text-xs font-bold text-amber-700 dark:text-amber-400 bg-amber-500/15 px-3 py-1 rounded-full border border-amber-500/30 w-fit shrink-0">
                        {award.date}
                      </span>
                    </div>

                    <div className="text-xs font-bold text-amber-600 dark:text-amber-400 flex items-center gap-2">
                      <Award size={14} className="shrink-0" />
                      <span>{award.event}</span>
                    </div>

                    <div className="text-xs font-semibold text-muted-foreground flex items-center gap-1.5">
                      <MapPin size={13} className="text-primary shrink-0" />
                      <span>{award.company} • {award.location}</span>
                    </div>

                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed pt-1">
                      {award.description}
                    </p>

                    <div className="pt-2 border-t border-amber-500/20 flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-700 dark:text-amber-300 text-[11px] font-bold border border-amber-500/20">
                        Technical Contribution
                      </span>
                      <span className="px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-700 dark:text-amber-300 text-[11px] font-bold border border-amber-500/20">
                        Quality Solutions
                      </span>
                      <span className="px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-700 dark:text-amber-300 text-[11px] font-bold border border-amber-500/20">
                        Team Success
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs font-medium text-amber-600 dark:text-amber-400">
                <Sparkles size={14} />
                <span>Awarded at Kryptos Infosys 2nd Quarterly Ceremony</span>
              </div>
            </motion.div>
          </div>

          {/* Section 4: Direct Connect Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl p-8 md:p-12 relative overflow-hidden bg-gradient-to-tr from-primary/15 via-blue-600/10 to-indigo-600/15 border border-primary/25 shadow-2xl"
          >
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div className="space-y-3 max-w-xl">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                  <Mail size={12} />
                  <span>Open for Opportunities</span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
                  Ready to collaborate on your next enterprise platform?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Available for full-time Frontend & Full-Stack roles, technical consulting, and high-impact web architectures.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3.5 shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:-translate-y-0.5"
                >
                  <span>Get In Touch</span>
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href={personalInfo.resume}
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl glass-card text-foreground font-semibold hover:border-primary/40 transition-all shadow-sm hover:-translate-y-0.5"
                >
                  <Download size={16} />
                  <span>Resume PDF</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
