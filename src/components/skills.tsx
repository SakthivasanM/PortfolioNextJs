"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-16 text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold uppercase tracking-wider text-xs"
          >
            My Technology Stack
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            Capabilities & <span className="text-gradient">Tools</span>
          </motion.h2>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-muted-foreground text-lg max-w-2xl"
          >
             I leverage the latest technologies to build scalable, high-performance web and mobile applications with focus on security and user experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-2xl hover:border-primary/20 transition-all group hover:shadow-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform">
                  <skill.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold">{skill.category}</h3>
              </div>
              <ul className="flex flex-wrap gap-2 pt-2">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="px-3 py-1 bg-white dark:bg-muted text-xs font-medium rounded-lg border border-border group-hover:border-primary/20 transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
