"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { Sparkles } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-muted/20 relative">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-16 text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold uppercase tracking-wider"
          >
            <Sparkles size={13} />
            <span>Technical Capabilities</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight"
          >
            Core Stack & <span className="text-gradient">Expertise</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed"
          >
            Battle-tested technologies powering high-concurrency enterprise web and mobile platforms with security and performance baked in.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="glass-card p-5 sm:p-7 md:p-8 rounded-3xl hover:border-primary/40 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="p-3 bg-primary/10 rounded-2xl text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm">
                    <skill.icon size={24} />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold tracking-tight text-foreground">
                    {skill.category}
                  </h3>
                </div>

                <ul className="flex flex-wrap gap-2 pt-1">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="px-3 py-1.5 bg-muted/60 hover:bg-primary/10 hover:text-primary hover:border-primary/30 text-xs font-semibold rounded-xl border border-border/70 transition-all text-foreground/80"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
