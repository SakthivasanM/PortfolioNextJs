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
  const categoryLabel = Array.isArray(project.category)
    ? project.category[0]
    : project.category;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="group glass-card rounded-3xl overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 flex flex-col h-full"
    >
      {/* Thumbnail */}
      <Link
        href={`/projects/${project.slug}`}
        className="block relative aspect-[16/9] overflow-hidden group/img bg-muted"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end p-5">
          <span className="text-white text-sm font-semibold flex items-center gap-2 drop-shadow-md">
            View Project Case Study <ArrowRight size={15} />
          </span>
        </div>
        <div className="absolute top-4 left-4 px-3 py-1 bg-background/90 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider text-primary border border-border/70 shadow-sm">
          {categoryLabel}
        </div>
      </Link>

      {/* Content */}
      <div className="p-6 md:p-7 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-3">
          <Link
            href={`/projects/${project.slug}`}
            className="text-lg md:text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug"
          >
            {project.title}
          </Link>
          <div className="flex items-center gap-1 shrink-0">
            {project.github && project.github !== "#" && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub repo for ${project.title}`}
                className="p-2 hover:bg-primary/10 rounded-xl transition-colors text-muted-foreground hover:text-primary focus:outline-none"
              >
                <Github size={17} />
              </Link>
            )}
            {project.live && project.live !== "#" && (
              <Link
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live site for ${project.title}`}
                className="p-2 hover:bg-primary/10 rounded-xl transition-colors text-muted-foreground hover:text-primary focus:outline-none"
              >
                <ExternalLink size={17} />
              </Link>
            )}
          </div>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-border/50">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 bg-muted/50 rounded-lg text-[11px] font-semibold text-muted-foreground uppercase tracking-wider border border-border/60"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
