"use client";

import { useState, useEffect } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Download,
  Trophy,
  Mail,
  Phone,
  Sparkles,
  ShieldCheck,
  Layers,
  Cpu,
  Smartphone,
  Activity,
  CheckCircle2,
  Code2,
  Database,
  MapPin,
  Flame,
} from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import { personalInfo } from "@/lib/data";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

type TabType = "architecture" | "telemetry" | "tech";
const TABS: TabType[] = ["architecture", "telemetry", "tech"];

export default function Hero() {
  const [activeTab, setActiveTab] = useState<TabType>("architecture");
  const [isPaused, setIsPaused] = useState(false);

  // Auto-switch tabs every 3.8s with pause-on-hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => {
        const nextIndex = (TABS.indexOf(prev) + 1) % TABS.length;
        return TABS[nextIndex];
      });
    }, 3800);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="relative min-h-[calc(100vh-4.5rem)] flex items-center justify-center py-10 lg:py-16 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-center">
        {/* Left Column: Bio & CTAs */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 lg:col-span-7 flex flex-col space-y-6 lg:space-y-7"
        >
          {/* Pill Badges */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/25 text-xs font-semibold tracking-wide shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Open for Opportunities</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/30 text-xs font-semibold tracking-wide shadow-sm backdrop-blur-md">
              <Trophy size={13} className="text-amber-500 animate-pulse" />
              <span>Emerging Talent Award 2026</span>
            </div>

            <div className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-semibold tracking-wide">
              <Flame size={13} className="text-primary" />
              <span>12+ Production Apps</span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl 2xl:text-[4rem] font-black tracking-tight leading-[1.08] text-foreground"
          >
            Crafting{" "}
            <span className="text-gradient inline-block">
              Enterprise-Grade
            </span>{" "}
            Web & Mobile Architectures.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={item}
            className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed"
          >
            I am <strong className="text-foreground font-bold">{personalInfo.name}</strong>, a Software Engineer & Frontend Developer with <span className="text-foreground font-semibold">2+ years</span> building scalable enterprise platforms across HRMS, AI, logistics, and compliance domains using <span className="text-primary font-semibold">React.js</span>, <span className="text-primary font-semibold">Next.js</span>, <span className="text-primary font-semibold">React Native</span>, and <span className="text-primary font-semibold">Firebase</span>.
          </motion.p>

          {/* Action Buttons */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-3.5 pt-1">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary to-blue-600 text-primary-foreground font-semibold hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0 transition-all group"
            >
              <span>Explore Projects</span>
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href={personalInfo.resume}
              target="_blank"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl glass-card text-foreground font-semibold hover:border-primary/40 hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-sm group"
            >
              <Download size={17} className="text-muted-foreground group-hover:text-primary transition-colors" />
              <span>Download Resume</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-border/80 bg-background/60 hover:bg-muted/80 text-foreground/80 hover:text-foreground font-semibold hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-sm"
            >
              <Mail size={17} className="text-muted-foreground" />
              <span>Contact Me</span>
            </Link>
          </motion.div>

          {/* Social Dock */}
          <motion.div
            variants={item}
            className="pt-2 flex flex-wrap items-center gap-3 text-muted-foreground"
          >
            <div className="inline-flex items-center gap-2.5 p-1.5 px-3 rounded-2xl glass border border-border/60 shadow-sm">
              <Link
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-1.5 rounded-lg hover:bg-primary/10 hover:text-primary transition-all focus:outline-none"
              >
                <Github size={18} />
              </Link>
              <Link
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-1.5 rounded-lg hover:bg-primary/10 hover:text-primary transition-all focus:outline-none"
              >
                <Linkedin size={18} />
              </Link>
              <Link
                href={`mailto:${personalInfo.email}`}
                aria-label="Send Email"
                className="p-1.5 rounded-lg hover:bg-primary/10 hover:text-primary transition-all focus:outline-none"
              >
                <Mail size={18} />
              </Link>
              <Link
                href={`tel:${personalInfo.phone}`}
                aria-label="Call or WhatsApp"
                className="p-1.5 rounded-lg hover:bg-primary/10 hover:text-primary transition-all focus:outline-none"
              >
                <Phone size={18} />
              </Link>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-2 rounded-2xl bg-muted/40 text-xs font-semibold border border-border/50 text-muted-foreground">
              <MapPin size={13} className="text-primary shrink-0" />
              <span>{personalInfo.location}</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Interactive System Architecture & Cockpit */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative lg:col-span-5 w-full"
        >
          {/* Ambient Glowing Aura */}
          <div className="absolute -inset-3 bg-gradient-to-tr from-primary/20 via-indigo-500/15 to-cyan-400/20 rounded-3xl blur-2xl -z-10 opacity-70 group-hover:opacity-100 transition-opacity" />

          {/* Main Cockpit Window */}
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="glass-card rounded-3xl border border-border/80 shadow-2xl overflow-hidden relative"
          >
            {/* Window Header */}
            <div className="px-5 py-3.5 border-b border-border/70 flex items-center justify-between bg-muted/40">
              {/* Traffic Lights */}
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="h-3 w-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="text-xs font-mono text-muted-foreground/80 ml-2 font-medium">
                  system-telemetry.tsx
                </span>
              </div>

              {/* Live Status Indicator & Auto-switch badge */}
              <div className="flex items-center gap-2.5">
                <span className="text-[11px] text-muted-foreground/70 hidden sm:inline font-mono">
                  {isPaused ? "Paused" : "Auto-cycle"}
                </span>
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                  <span>ONLINE</span>
                </div>
              </div>
            </div>

            {/* Interactive Tab Switcher with Auto Switch Indicator */}
            <div className="flex border-b border-border/60 bg-muted/20 px-3 pt-2 relative">
              {TABS.map((tab) => {
                const label =
                  tab === "architecture"
                    ? "Architecture"
                    : tab === "telemetry"
                    ? "Telemetry"
                    : "Tech Stack";
                const isActive = activeTab === tab;

                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 pb-2.5 pt-1 text-xs font-bold transition-all relative ${
                      isActive
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {label}
                    {isActive && (
                      <motion.div
                        layoutId="activeCockpitTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                        transition={{ type: "spring", stiffness: 450, damping: 35 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Tab Contents (Exact uniform height for all tabs) */}
            <div className="p-5 md:p-6 h-[400px] flex flex-col justify-between">
              <div className="flex-1 flex flex-col overflow-hidden pb-3">
                <AnimatePresence mode="wait">
                  {activeTab === "architecture" && (
                    <motion.div
                      key="architecture"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col justify-between flex-1 gap-2.5 h-full"
                    >
                      {/* Item 1: RBAC */}
                      <div className="p-2.5 sm:p-3 rounded-2xl bg-muted/40 hover:bg-muted/70 border border-border/60 transition-all flex items-start gap-3">
                        <div className="p-2 rounded-xl bg-blue-500/10 text-primary shrink-0 mt-0.5">
                          <ShieldCheck size={17} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1.5">
                            <h4 className="text-xs font-bold text-foreground truncate">
                              Enterprise RBAC & Auth
                            </h4>
                            <span className="text-[10px] uppercase font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full shrink-0">
                              5+ Roles
                            </span>
                          </div>
                          <p className="text-[11px] text-muted-foreground mt-0.5 leading-relaxed line-clamp-1">
                            Microsoft Entra ID (MSAL) SSO, permission matrix & audit logs.
                          </p>
                        </div>
                      </div>

                      {/* Item 2: Export Engine */}
                      <div className="p-2.5 sm:p-3 rounded-2xl bg-muted/40 hover:bg-muted/70 border border-border/60 transition-all flex items-start gap-3">
                        <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500 shrink-0 mt-0.5">
                          <Layers size={17} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1.5">
                            <h4 className="text-xs font-bold text-foreground truncate">
                              Multi-Format Export Engine
                            </h4>
                            <span className="text-[10px] uppercase font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full shrink-0">
                              22+ Types
                            </span>
                          </div>
                          <p className="text-[11px] text-muted-foreground mt-0.5 leading-relaxed line-clamp-1">
                            Excel via ExcelJS, PDF via jsPDF+autoTable, and Word exports.
                          </p>
                        </div>
                      </div>

                      {/* Item 3: AI Workflows */}
                      <div className="p-2.5 sm:p-3 rounded-2xl bg-muted/40 hover:bg-muted/70 border border-border/60 transition-all flex items-start gap-3">
                        <div className="p-2 rounded-xl bg-purple-500/10 text-purple-500 shrink-0 mt-0.5">
                          <Cpu size={17} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1.5">
                            <h4 className="text-xs font-bold text-foreground truncate">
                              AI & LLM Integrations
                            </h4>
                            <span className="text-[10px] uppercase font-bold text-purple-600 dark:text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-full shrink-0">
                              Azure OpenAI
                            </span>
                          </div>
                          <p className="text-[11px] text-muted-foreground mt-0.5 leading-relaxed line-clamp-1">
                            Tavus AI screening, proposal summarization & conversational flows.
                          </p>
                        </div>
                      </div>

                      {/* Item 4: Mobile & i18n */}
                      <div className="p-2.5 sm:p-3 rounded-2xl bg-muted/40 hover:bg-muted/70 border border-border/60 transition-all flex items-start gap-3">
                        <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-500 shrink-0 mt-0.5">
                          <Smartphone size={17} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1.5">
                            <h4 className="text-xs font-bold text-foreground truncate">
                              Cross-Platform & Localization
                            </h4>
                            <span className="text-[10px] uppercase font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full shrink-0">
                              6 Locales
                            </span>
                          </div>
                          <p className="text-[11px] text-muted-foreground mt-0.5 leading-relaxed line-clamp-1">
                            React Native, real-time Firestore sync, 30+ screens translated.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "telemetry" && (
                    <motion.div
                      key="telemetry"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col justify-between flex-1 gap-3 h-full"
                    >
                      <div className="grid grid-cols-2 gap-2.5">
                        <div className="p-3 rounded-2xl bg-muted/40 border border-border/60 text-center space-y-0.5">
                          <div className="text-2xl font-black text-foreground">12+</div>
                          <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                            Production Apps
                          </div>
                        </div>
                        <div className="p-3 rounded-2xl bg-muted/40 border border-border/60 text-center space-y-0.5">
                          <div className="text-2xl font-black text-primary">22+</div>
                          <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                            Report Formats
                          </div>
                        </div>
                        <div className="p-3 rounded-2xl bg-muted/40 border border-border/60 text-center space-y-0.5">
                          <div className="text-2xl font-black text-emerald-500">99%</div>
                          <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                            Lighthouse Vitals
                          </div>
                        </div>
                        <div className="p-3 rounded-2xl bg-muted/40 border border-border/60 text-center space-y-0.5">
                          <div className="text-2xl font-black text-amber-500">6</div>
                          <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                            Locales Supported
                          </div>
                        </div>
                      </div>

                      {/* Performance Progress */}
                      <div className="p-3 rounded-2xl bg-muted/30 border border-border/60 space-y-1.5">
                        <div className="flex justify-between items-center text-xs">
                          <span className="font-semibold text-foreground text-xs">Code Splitting & Bundle Size</span>
                          <span className="font-mono text-primary font-bold text-xs">Optimized (Lazy)</span>
                        </div>
                        <div className="h-2 w-full bg-muted/60 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-primary via-indigo-500 to-cyan-400 w-[94%] rounded-full" />
                        </div>
                      </div>

                      {/* Reliability Banner */}
                      <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between text-xs">
                        <span className="text-emerald-700 dark:text-emerald-300 font-bold text-[11px] flex items-center gap-1.5">
                          <CheckCircle2 size={13} className="text-emerald-500" />
                          Production Grade Architecture
                        </span>
                        <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                          99.9% Vitals
                        </span>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "tech" && (
                    <motion.div
                      key="tech"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col justify-between flex-1 gap-2.5 h-full"
                    >
                      <div className="space-y-1">
                        <div className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">
                          Core Frameworks
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {["React.js", "Next.js", "React Native", "TypeScript", "Tailwind CSS"].map((t) => (
                            <span
                              key={t}
                              className="px-2.5 py-1 rounded-lg bg-primary/10 text-primary text-xs font-semibold border border-primary/20"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-1">
                        <div className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">
                          Cloud & Integrations
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {["Firebase Firestore", "Azure Blob", "Azure OpenAI", "MSAL", "REST APIs"].map((t) => (
                            <span
                              key={t}
                              className="px-2.5 py-1 rounded-lg bg-muted/50 text-foreground text-xs font-semibold border border-border/70"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-1">
                        <div className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">
                          UI Libraries & Tools
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {["Material UI", "Ant Design", "ExcelJS", "jsPDF", "Git/DevOps"].map((t) => (
                            <span
                              key={t}
                              className="px-2.5 py-1 rounded-lg bg-muted/50 text-muted-foreground text-xs font-medium border border-border/70"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-1">
                        <div className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">
                          Architectural Capabilities
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {["RBAC 5+ Roles", "6-Lang i18n", "22+ Report Engine", "Lazy Chunking"].map((t) => (
                            <span
                              key={t}
                              className="px-2.5 py-1 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold border border-indigo-500/20"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom Quick Bar (Pinned at constant bottom position) */}
              <div className="pt-3 border-t border-border/50 flex items-center justify-between text-xs text-muted-foreground shrink-0">
                <span className="flex items-center gap-1.5 font-semibold text-foreground text-xs">
                  <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                  Kryptos Infosys • Chennai
                </span>
                <span className="flex items-center gap-1.5 text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">
                  <Activity size={13} className="shrink-0" />
                  12+ Enterprise Apps
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
