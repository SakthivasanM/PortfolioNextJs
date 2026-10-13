"use client";

import { motion } from "framer-motion";
import { certifications, achievements } from "@/lib/data";
import { Award, ExternalLink, ShieldCheck, Trophy, Sparkles, Calendar, MapPin } from "lucide-react";
import Link from "next/link";

export default function Certifications() {
  const featuredAward = achievements[0];

  return (
    <section id="certifications" className="section-padding bg-muted/20 relative">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-16 text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/30 text-xs font-bold uppercase tracking-wider"
          >
            <Sparkles size={13} className="text-amber-500" />
            <span>Honors & Verified Expertise</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight"
          >
            Achievements & <span className="text-gradient">Certifications</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed"
          >
            Milestones of excellence recognized through quarterly corporate rewards and industry credentials.
          </motion.p>
        </div>

        {/* Featured Award Showcase */}
        {featuredAward && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-16 relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/25 via-orange-500/20 to-amber-500/25 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-80" />
            
            <div className="relative glass-card p-5 sm:p-8 md:p-10 rounded-3xl border-2 border-amber-500/35 dark:border-amber-400/30 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3.5 sm:gap-4">
                  <div className="p-3 sm:p-4 bg-gradient-to-br from-amber-500/20 to-orange-500/20 text-amber-500 rounded-2xl border border-amber-500/30 shadow-inner shrink-0">
                    <Trophy size={32} className="text-amber-500 animate-pulse sm:w-9 sm:h-9" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30 mb-2">
                      <Sparkles size={12} /> {featuredAward.badge}
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
                      {featuredAward.title}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-wrap md:flex-col items-start md:items-end gap-2 text-xs font-semibold text-muted-foreground">
                  <span className="flex items-center gap-1.5 bg-muted/60 px-3 py-1.5 rounded-full border border-border/80">
                    <Calendar size={13} className="text-primary" /> {featuredAward.date}
                  </span>
                  <span className="flex items-center gap-1.5 bg-muted/60 px-3 py-1.5 rounded-full border border-border/80">
                    <MapPin size={13} className="text-primary" /> {featuredAward.company}, {featuredAward.location}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-sm font-bold text-amber-600 dark:text-amber-400">
                  {featuredAward.event}
                </div>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {featuredAward.description}
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group glass-card p-6 md:p-7 rounded-3xl flex flex-col justify-between hover:border-primary/40 transition-all hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="p-3 bg-primary/10 text-primary rounded-2xl group-hover:scale-110 transition-transform shadow-inner">
                  <Award size={26} />
                </div>
                <Link
                  href={cert.link}
                  target="_blank"
                  className="p-2 hover:bg-primary/10 rounded-xl transition-colors group/link focus:outline-none"
                  aria-label={`View certificate for ${cert.title}`}
                >
                  <ExternalLink size={17} className="text-muted-foreground group-hover/link:text-primary" />
                </Link>
              </div>

              <div className="space-y-2">
                <h3 className="text-base md:text-lg font-bold group-hover:text-primary transition-colors text-foreground">
                  {cert.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
                  <ShieldCheck size={14} className="text-emerald-500" /> {cert.issuer} • {cert.date}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
