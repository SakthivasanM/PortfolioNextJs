"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import { personalInfo } from "@/lib/data";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center section-padding pt-32 lg:pt-40 overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
           variants={container}
           initial="hidden"
           animate="show"
           className="relative z-10 flex flex-col space-y-6 lg:space-y-8"
        >
          <motion.div variants={item} className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-semibold w-fit uppercase tracking-wider">
            <span>Open for new opportunities</span>
          </motion.div>

          <motion.h1 variants={item} className="text-5xl lg:text-7xl font-bold tracking-tight leading-tight md:leading-tight lg:leading-tight">
             Crafting <span className="text-gradient">Enterprise Grade</span> Digital Experiences.
          </motion.h1>

          <motion.p variants={item} className="text-lg lg:text-xl text-muted-foreground max-w-xl">
             I am {personalInfo.name}, a {personalInfo.role} with 2+ years of experience in React, Next.js, and Mobile development. 
             Specialized in high-performance enterprise architectures and robust AI-driven platforms.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-4 pt-4">
            <Link 
              href="/projects" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-medium group"
            >
              View My Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href={personalInfo.resume} 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border hover:bg-muted transition-all font-medium"
            >
              Download Resume <Download size={18} />
            </Link>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={item} className="flex items-center space-x-6 pt-6">
            <Link href={personalInfo.github} target="_blank" className="text-muted-foreground hover:text-primary transition-colors focus:outline-none">
              <Github size={24} />
            </Link>
            <Link href={personalInfo.linkedin} target="_blank" className="text-muted-foreground hover:text-primary transition-colors focus:outline-none">
              <Linkedin size={24} />
            </Link>
          </motion.div>
        </motion.div>

        {/* Decorative elements / Mockup placeholder */}
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.2, ease: "easeOut" }}
           className="relative hidden lg:block"
        >
          <div className="relative aspect-square max-w-[500px] mx-auto group">
            {/* Glass Box Container */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-blue-500/10 to-transparent rounded-full blur-3xl -z-10 group-hover:scale-110 transition-transform duration-700" />
            <div className="glass h-full w-full rounded-2xl p-8 relative flex items-center justify-center border border-white/20 dark:border-white/10 shadow-2xl">
              <div className="flex flex-col space-y-6 w-full text-left">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="text-[10px] uppercase tracking-widest text-primary font-bold opacity-70">Performance Optimization</div>
                    <div className="text-[10px] font-mono text-primary/70">85%</div>
                  </div>
                  <div className="h-1.5 w-full bg-muted/30 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }} 
                      animate={{ width: "85%" }} 
                      transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }} 
                      className="h-full bg-gradient-to-r from-primary to-teal-400" 
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-2 group/card hover:bg-white/10 transition-colors">
                    <div className="h-1 w-6 bg-emerald-500/50 rounded-full" />
                    <div className="text-xl font-bold tracking-tight text-foreground">99<span className="text-sm font-normal text-muted-foreground ml-0.5">%</span></div>
                    <div className="text-[9px] text-muted-foreground uppercase font-semibold tracking-tighter">Lighthouse Score</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-2 group/card hover:bg-white/10 transition-colors">
                    <div className="h-1 w-6 bg-teal-500/50 rounded-full" />
                    <div className="text-xl font-bold tracking-tight text-foreground">1.1<span className="text-sm font-normal text-muted-foreground ml-0.5">s</span></div>
                    <div className="text-[9px] text-muted-foreground uppercase font-semibold tracking-tighter">Load Time</div>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center space-x-3 p-2.5 rounded-xl bg-black/20 border border-white/5 group-hover:border-primary/20 transition-colors">
                    <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                    <div className="h-2 w-24 bg-muted/40 rounded-full" />
                    <div className="ml-auto h-3 w-8 bg-primary/10 rounded border border-primary/20" />
                  </div>
                  <div className="flex items-center space-x-3 p-2.5 rounded-xl bg-black/20 border border-white/5 group-hover:border-primary/20 transition-colors">
                    <div className="h-2 w-2 rounded-full bg-teal-400" />
                    <div className="h-2 w-32 bg-muted/40 rounded-full" />
                    <div className="ml-auto h-3 w-8 bg-teal-400/10 rounded border border-teal-400/20" />
                  </div>
                </div>
              </div>
              <div className="absolute -top-12 -right-8 p-4 glass rounded-xl border border-white/20 dark:border-white/10 shadow-lg animate-bounce duration-3000">
                <div className="text-xs font-bold text-primary">React expert</div>
              </div>
              <div className="absolute -bottom-4 -left-12 p-4 glass rounded-xl border border-white/20 dark:border-white/10 shadow-lg animate-float delay-1000">
                <div className="text-xs font-bold text-teal-500">Fast performance</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
