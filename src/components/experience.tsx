"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import { Briefcase, Calendar, CheckCircle2, MapPin, Sparkles } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-background relative">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-16 text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold uppercase tracking-wider"
          >
            <Sparkles size={13} />
            <span>Career Progression</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight"
          >
            Professional <span className="text-gradient">Journey</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed"
          >
            Track record of continuous growth at Kryptos Infosys, evolving from Trainee to Associate Software Engineer delivering production-grade architectures.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-primary/20 ml-3.5 sm:ml-6 md:ml-10 space-y-8 sm:space-y-12 max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.position}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative pl-5 sm:pl-7 md:pl-10"
            >
              {/* Timeline Node - centered on border line */}
              <div className="absolute -left-[17px] sm:-left-[21px] top-5 sm:top-6 md:top-[30px] w-8 h-8 sm:w-10 sm:h-10 bg-background rounded-full border-2 border-primary shadow-md shadow-primary/20 flex items-center justify-center z-10">
                <Briefcase className="text-primary w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>

              {/* Experience Card */}
              <div className="glass-card p-5 sm:p-7 md:p-8 rounded-3xl hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 group">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-5 gap-3">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-extrabold group-hover:text-primary transition-colors text-foreground">
                      {exp.position}
                    </h3>
                    <div className="text-base font-semibold text-muted-foreground flex flex-wrap items-center gap-2.5 mt-1">
                      <span className="text-foreground/90">{exp.company}</span>
                      <span className="text-muted-foreground/40">•</span>
                      <span className="flex items-center gap-1 text-xs md:text-sm font-medium">
                        <MapPin size={13} className="text-primary" /> {exp.location}
                      </span>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-primary bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20 w-fit self-start md:self-auto">
                    <Calendar size={13} /> {exp.period}
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 text-sm md:text-base leading-relaxed">
                  {exp.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {exp.achievements.map((achievement, i) => (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.04 }}
                      key={i}
                      className="flex items-start gap-3 p-4 bg-muted/40 rounded-2xl border border-border/70 group-hover:border-primary/15 transition-all text-foreground/90"
                    >
                      <CheckCircle2 className="text-primary mt-0.5 shrink-0" size={16} />
                      <span className="text-xs md:text-sm font-medium leading-relaxed">
                        {achievement}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
