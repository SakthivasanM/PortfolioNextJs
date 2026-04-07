"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ArrowRight, Code2, Globe, Cpu, Smartphone } from "lucide-react";
import Profile from "../../../public/images/profile_tech.png";
import { personalInfo } from "@/lib/data";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-square max-w-[500px] mx-auto lg:mx-0 group"
            >
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-[80px] -z-10 group-hover:scale-110 transition-transform duration-700" />
              <div className="relative h-full w-full rounded-3xl overflow-hidden border border-primary/20 dark:border-primary/10 shadow-[0_0_50px_rgba(var(--primary),0.2)]">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent pointer-events-none z-10" />
                <Image
                  src={Profile}
                  alt={personalInfo.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <div className="text-primary font-bold uppercase tracking-wider text-xs">
                  My Story
                </div>
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                  Bridging <span className="text-gradient">Innovation</span> and{" "}
                  <span className="text-gradient">Efficiency</span>.
                </h1>
              </div>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I am {personalInfo.name}, a Software Engineer based in{" "}
                  {personalInfo.location}, with over 2 years of experience
                  specializing in building scalable, responsive enterprise
                  applications. With a track record of delivering 12+
                  production-grade applications, I have worked across HRMS, AI,
                  logistics, and media domains.
                </p>
                <p>
                  My expertise lies in crafting clean, maintainable front-end
                  solutions, integrating complex RESTful APIs, and architecting
                  secure Role-Based Access Control (RBAC) systems. I thrive on
                  optimizing UI performance and integrating state-of-the-art AI
                  capabilities to drive business value.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-4">
                <div>
                  <h4 className="font-bold flex items-center gap-2 mb-2">
                    <Code2 size={18} className="text-primary" /> Web First
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Expertise in React, Next.js and high-performance frontend
                    solutions.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold flex items-center gap-2 mb-2">
                    <Smartphone size={18} className="text-primary" /> Mobile
                    Ready
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Building cross-platform apps with React Native and Expo.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold flex items-center gap-2 mb-2">
                    <Cpu size={18} className="text-primary" /> AI Integrated
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Integrating generative AI capabilities into enterprise
                    products.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold flex items-center gap-2 mb-2">
                    <Globe size={18} className="text-primary" /> SEO Focused
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Ensuring maximum visibility through modern web standards.
                  </p>
                </div>
              </div>

              <div className="pt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all shadow-xl group"
                >
                  Let&apos;s Work Together{" "}
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-2 transition-transform"
                  />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
