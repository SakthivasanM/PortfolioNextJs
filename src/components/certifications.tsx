"use client";

import { motion } from "framer-motion";
import { certifications } from "@/lib/data";
import { Award, ExternalLink, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-muted/10">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-16 text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold uppercase tracking-wider text-xs"
          >
            Verified Expertise
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            Professional <span className="text-gradient">Certifications</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group glass p-8 rounded-2xl flex items-center justify-between hover:border-primary/20 transition-all hover:shadow-xl"
            >
              <div className="flex items-center gap-6">
                <div className="p-4 bg-muted/50 rounded-xl group-hover:scale-110 transition-transform shadow-inner border border-white/10">
                  <Award className="text-primary" size={32} />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">{cert.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                      <ShieldCheck size={14} className="text-green-500" /> {cert.issuer} • {cert.date}
                  </div>
                </div>
              </div>
              <Link href={cert.link} target="_blank" className="p-3 hover:bg-primary/10 rounded-full transition-colors group/link focus:outline-none">
                <ExternalLink size={20} className="text-muted-foreground group-hover/link:text-primary" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
