"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Github } from "@/components/icons";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: {
    slug: string;
    title: string;
    description: string;
    category: string | string[];
    image: string;
    tech: string[];
    github: string;
    live: string;
  };
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/20 transition-all hover:shadow-xl shadow-md"
    >
      <Link href={`/projects/${project.slug}`} className="block relative aspect-video overflow-hidden group">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <span className="text-white font-medium flex items-center gap-2">
            Explore Project <ArrowRight size={16} />
          </span>
        </div>
        <div className="absolute top-4 left-4 px-3 py-1 bg-background/80 backdrop-blur-md rounded-full text-xs font-semibold uppercase tracking-wider text-primary border border-border">
          {Array.isArray(project.category) ? project.category[0] : project.category}
        </div>
      </Link>
      <div className="p-8 flex flex-col h-full bg-white dark:bg-muted/10">
        <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors flex items-center justify-between">
           {project.title}
           <div className="flex gap-4">
              <Link href={project.github} target="_blank" className="p-2 hover:bg-muted rounded-full transition-colors focus:outline-none">
                 <Github size={18} className="text-muted-foreground hover:text-primary" />
              </Link>
              <Link href={project.live} target="_blank" className="p-2 hover:bg-muted rounded-full transition-colors focus:outline-none">
                 <ExternalLink size={18} className="text-muted-foreground hover:text-primary" />
              </Link>
           </div>
        </h3>
        <p className="text-muted-foreground mb-6 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((t) => (
            <span key={t} className="px-2 py-0.5 bg-muted/40 rounded-md text-[10px] font-bold text-muted-foreground uppercase tracking-widest border border-border">
                {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
