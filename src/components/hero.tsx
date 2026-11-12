"use client";

import { useState, useEffect } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Download,
  Trophy,
  Mail,
  Phone,
  ShieldCheck,
  Layers,
  Cpu,
  Smartphone,
  MapPin,
  Sparkles,
  CheckCircle2,
  Briefcase,
  Code2,
} from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import { personalInfo } from "@/lib/data";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

type FocusTab = "stack" | "capabilities" | "cloud";

const FOCUS_TABS: { id: FocusTab; label: string }[] = [
  { id: "stack", label: "Core Stack" },
  { id: "capabilities", label: "Architecture" },
  { id: "cloud", label: "AI & Cloud" },
];

const METRICS = [
  {
    value: "12+",
    label: "Production Apps",
    accent: "text-primary",
    bg: "bg-primary/10 border-primary/20",
  },
  {
    value: "2+ Yrs",
    label: "Enterprise Exp.",
    accent: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    value: "22+",
    label: "Report Formats",
    accent: "text-indigo-600 dark:text-indigo-400",
    bg: "bg-indigo-500/10 border-indigo-500/20",
  },
  {
    value: "6",
    label: "i18n Locales",
    accent: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/20",
  },
];

const TECH_MARQUEE = [
  "React.js",
  "Next.js",
  "TypeScript",
  "React Native",
  "Tailwind CSS",
  "Firebase",
  "Azure OpenAI",
  "Node.js",
  "REST APIs",
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState<FocusTab>("stack");
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => {
        const idx = FOCUS_TABS.findIndex((t) => t.id === prev);
        return FOCUS_TABS[(idx + 1) % FOCUS_TABS.length].id;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-16 overflow-hidden">
      {/* Subtle Architectural Grid & Radial Spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--border)/0.45)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.45)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_75%_60%_at_50%_20%,#000_60%,transparent_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[780px] h-[420px] -z-10 rounded-full bg-gradient-to-tr from-primary/15 via-indigo-500/10 to-cyan-400/15 blur-3xl opacity-80"
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Editorial Intro & CTAs */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:col-span-7 flex flex-col space-y-6"
          >
            {/* Status & Award Pills */}
            <motion.div
              variants={item}
              className="flex flex-wrap items-center gap-2.5"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/25 text-xs font-semibold tracking-wide backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Open for Opportunities</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/25 text-xs font-semibold tracking-wide backdrop-blur-md">
                <Trophy size={13} className="text-amber-500" />
                <span>Emerging Talent Award 2026</span>
              </div>
            </motion.div>

            {/* Eyebrow + Main Heading */}
            <motion.div variants={item} className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-primary">
                <Code2 size={15} />
                <span>{personalInfo.name} • Software Engineer</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[4.15rem] font-black tracking-tight leading-[1.08] text-foreground">
                Designing &amp; Shipping{" "}
                <span className="text-gradient">High-Impact</span> Web &amp;
                Mobile Products.
              </h1>
            </motion.div>

            {/* Concise Bio */}
            <motion.p
              variants={item}
              className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed"
            >
              Frontend &amp; Cross-Platform Engineer with{" "}
              <span className="text-foreground font-semibold">2+ years</span> of
              experience building scalable enterprise applications across HRMS,
              AI, logistics, and compliance using{" "}
              <span className="text-foreground font-semibold">React.js</span>,{" "}
              <span className="text-foreground font-semibold">Next.js</span>,{" "}
              <span className="text-foreground font-semibold">
                React Native
              </span>
              , and{" "}
              <span className="text-foreground font-semibold">Firebase</span>.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={item}
              className="flex flex-wrap items-center gap-3 pt-1"
            >
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-primary to-blue-600 text-primary-foreground font-semibold text-sm sm:text-base shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0 transition-all group"
              >
                <span>Explore Projects</span>
                <ArrowRight
                  size={17}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl glass-card text-foreground font-semibold text-sm sm:text-base hover:border-primary/40 hover:-translate-y-0.5 active:translate-y-0 transition-all group"
              >
                <Mail
                  size={16}
                  className="text-muted-foreground group-hover:text-primary transition-colors"
                />
                <span>Let&apos;s Talk</span>
              </Link>

              <Link
                href={personalInfo.resume}
                target="_blank"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl border border-border/80 bg-background/60 hover:bg-muted/80 text-foreground/85 hover:text-foreground font-semibold text-sm sm:text-base hover:-translate-y-0.5 active:translate-y-0 transition-all group"
              >
                <Download
                  size={16}
                  className="text-muted-foreground group-hover:text-primary transition-colors"
                />
                <span>Resume</span>
              </Link>
            </motion.div>

            {/* Social & Location Strip */}
            <motion.div
              variants={item}
              className="pt-2 flex flex-wrap items-center gap-3 text-muted-foreground"
            >
              <div className="inline-flex items-center gap-1.5 p-1.5 rounded-2xl glass border border-border/70">
                <Link
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2 rounded-xl hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <Github size={17} />
                </Link>
                <Link
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2 rounded-xl hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <Linkedin size={17} />
                </Link>
                <Link
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Send Email"
                  className="p-2 rounded-xl hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <Mail size={17} />
                </Link>
                <Link
                  href={`tel:${personalInfo.phone}`}
                  aria-label="Call or WhatsApp"
                  className="p-2 rounded-xl hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <Phone size={17} />
                </Link>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-2xl bg-muted/50 border border-border/60 text-xs font-medium text-muted-foreground">
                <MapPin size={13} className="text-primary shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Bento Profile & Engineering Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.15 }}
            className="lg:col-span-5 space-y-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Bento Card 1: Profile & Current Role */}
            <div className="glass-card rounded-3xl p-5 border border-border/80 flex items-center gap-4 relative overflow-hidden">
              <div className="relative h-16 w-16 sm:h-18 sm:w-18 rounded-2xl overflow-hidden border-2 border-primary/20 shrink-0 shadow-md">
                <Image
                  src="/images/Profile_Picture.jpg"
                  alt={personalInfo.name}
                  fill
                  sizes="72px"
                  className="object-cover"
                  priority
                />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h2 className="text-base sm:text-lg font-bold text-foreground truncate">
                    {personalInfo.name}
                  </h2>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shrink-0">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Active
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1.5 mt-0.5 truncate">
                  <Briefcase size={13} className="text-primary shrink-0" />
                  <span className="truncate">
                    Associate Software Engineer @ Kryptos Infosys
                  </span>
                </p>
                <div className="flex items-center gap-3 mt-2 text-[11px] font-semibold text-muted-foreground">
                  <span className="inline-flex items-center gap-1 text-foreground">
                    <CheckCircle2 size={12} className="text-primary" />
                    99% Lighthouse Vitals
                  </span>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-0.5 text-primary hover:underline ml-auto"
                  >
                    About Me <ArrowUpRight size={12} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Bento Card 2: 2x2 Key Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3">
              {METRICS.map((metric) => (
                <div
                  key={metric.label}
                  className="glass-card rounded-2xl p-4 border border-border/70 hover:border-primary/30 transition-all group"
                >
                  <div
                    className={`text-2xl sm:text-3xl font-black tracking-tight ${metric.accent}`}
                  >
                    {metric.value}
                  </div>
                  <div className="text-xs font-semibold text-muted-foreground mt-0.5">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Bento Card 3: Interactive Engineering Focus Switcher */}
            <div className="glass-card rounded-3xl p-5 border border-border/80 space-y-4">
              <div className="flex items-center justify-between gap-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  <Sparkles size={13} className="text-primary" />
                  <span>Engineering Focus</span>
                </div>

                {/* Segmented Pill Control */}
                <div className="inline-flex p-1 rounded-xl bg-muted/60 border border-border/60">
                  {FOCUS_TABS.map((tab) => {
                    const active = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveTab(tab.id)}
                        className={`relative px-2.5 py-1 text-[11px] font-semibold rounded-lg transition-colors ${
                          active
                            ? "text-primary-foreground"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {active && (
                          <motion.span
                            layoutId="heroFocusPill"
                            className="absolute inset-0 rounded-lg bg-primary shadow-sm"
                            transition={{
                              type: "spring",
                              stiffness: 420,
                              damping: 32,
                            }}
                          />
                        )}
                        <span className="relative z-10">{tab.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="min-h-[126px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  {activeTab === "stack" && (
                    <motion.div
                      key="stack"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-2.5"
                    >
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Production-tested frontend &amp; mobile frameworks with
                        strict TypeScript and modern UI systems.
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {[
                          "React.js",
                          "Next.js",
                          "React Native",
                          "TypeScript",
                          "Tailwind CSS",
                          "Material UI",
                          "Ant Design",
                        ].map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg bg-primary/10 text-primary text-xs font-semibold border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "capabilities" && (
                    <motion.div
                      key="capabilities"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-2.5"
                    >
                      <div className="p-2.5 rounded-xl bg-muted/40 border border-border/60 flex items-center gap-2.5">
                        <ShieldCheck
                          size={16}
                          className="text-emerald-500 shrink-0"
                        />
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-foreground truncate">
                            RBAC &amp; MSAL SSO
                          </div>
                          <div className="text-[11px] text-muted-foreground truncate">
                            5+ enterprise roles
                          </div>
                        </div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-muted/40 border border-border/60 flex items-center gap-2.5">
                        <Layers size={16} className="text-primary shrink-0" />
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-foreground truncate">
                            Export Engine
                          </div>
                          <div className="text-[11px] text-muted-foreground truncate">
                            ExcelJS, jsPDF, Word
                          </div>
                        </div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-muted/40 border border-border/60 flex items-center gap-2.5">
                        <Smartphone
                          size={16}
                          className="text-cyan-500 shrink-0"
                        />
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-foreground truncate">
                            Cross-Platform i18n
                          </div>
                          <div className="text-[11px] text-muted-foreground truncate">
                            30+ screens, 6 locales
                          </div>
                        </div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-muted/40 border border-border/60 flex items-center gap-2.5">
                        <Cpu size={16} className="text-purple-500 shrink-0" />
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-foreground truncate">
                            Lazy Code Splitting
                          </div>
                          <div className="text-[11px] text-muted-foreground truncate">
                            Optimized Core Vitals
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "cloud" && (
                    <motion.div
                      key="cloud"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-2.5"
                    >
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        AI-powered workflows, real-time cloud sync, and
                        enterprise identity &amp; storage integrations.
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {[
                          "Azure OpenAI",
                          "Tavus AI",
                          "Firebase Firestore",
                          "Azure Blob Storage",
                          "Microsoft Entra ID",
                          "RESTful APIs",
                        ].map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold border border-indigo-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Tech Strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-12 lg:mt-16 pt-6 border-t border-border/60 flex flex-wrap items-center justify-between gap-4"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Core Technologies
          </span>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {TECH_MARQUEE.map((tech) => (
              <span
                key={tech}
                className="text-xs sm:text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
