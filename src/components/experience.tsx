"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-16 text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold uppercase tracking-wider text-xs"
          >
            My Professional Journey
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            Career <span className="text-gradient">Timeline</span>
          </motion.h2>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-muted-foreground text-lg max-w-2xl"
          >
             A history of roles in building software products, focusing on enterprise solutions and scalable architectures.
          </motion.p>
        </div>

        <div className="relative border-l border-muted-foreground/30 pl-8 ml-8 space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.position}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -left-12 top-0 p-3 bg-primary/10 rounded-full border border-border shadow-sm group-hover:scale-110 transition-transform">
                <Briefcase className="text-primary" size={20} />
              </div>
              
              <div className="glass p-8 rounded-2xl hover:border-primary/20 transition-all hover:shadow-xl group">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 space-y-2 md:space-y-0">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-extrabold group-hover:text-primary transition-colors">{exp.position}</h3>
                    <div className="text-lg font-semibold text-muted-foreground flex items-center gap-2">
                        {exp.company}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold text-primary bg-primary/5 px-4 py-2 rounded-full border border-primary/10">
                    <Calendar size={14} /> {exp.period}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-8 text-lg">
                  {exp.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {exp.achievements.map((achievement, i) => (
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + (i * 0.05) }}
                        key={i} 
                        className="flex items-start gap-3 p-4 bg-muted/20 rounded-xl border border-border group-hover:border-primary/10 transition-colors"
                    >
                      <CheckCircle2 className="text-primary mt-1 shrink-0" size={18} />
                      <span className="text-sm font-medium leading-relaxed">{achievement}</span>
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
