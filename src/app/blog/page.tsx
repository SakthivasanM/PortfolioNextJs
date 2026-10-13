"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { Mail, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 section-padding">
        <div className="container mx-auto">
          <div className="flex flex-col items-center mb-20 text-center space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary font-bold uppercase tracking-wider text-xs"
            >
              Insights & Thoughts
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight"
            >
              Tech <span className="text-gradient">Blog</span>.
            </motion.h1>
            <motion.p
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="text-muted-foreground text-lg max-w-xl"
            >
               Coming soon: articles on Next.js, AI integrations, and enterprise architecture.
            </motion.p>
          </div>

          <div className="flex flex-col items-center justify-center py-20 border-2 border-dashed border-border rounded-3xl bg-muted/20">
             <div className="p-6 bg-primary/10 rounded-full mb-8">
                <Clock className="text-primary" size={64} />
             </div>
             <h2 className="text-3xl font-bold mb-4">Under Construction</h2>
             <p className="text-muted-foreground text-center max-w-sm mb-8 px-6">
                I am currently writing some deep-dive articles. Subscribe to get notified when they launch.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md px-6">
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-grow px-6 py-4 rounded-xl border border-border bg-white dark:bg-muted/50 focus:ring-2 focus:ring-primary/20 outline-none w-full transition-all"
                />
                <button className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all shadow-xl group flex items-center justify-center gap-2">
                   Notify <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
             </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
