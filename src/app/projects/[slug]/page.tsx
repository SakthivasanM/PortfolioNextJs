"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { ExternalLink, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Github } from "@/components/icons";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-12">
          {/* Header */}
          <Link href="/projects" className="group flex items-center gap-2 mb-12 text-muted-foreground hover:text-primary transition-colors font-bold w-fit">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Projects
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <div className="text-primary font-bold uppercase tracking-wider text-xs">Project Case Study</div>
                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
                  {project.title}
                </h1>
                <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((t) => (
                        <span key={t} className="px-3 py-1 bg-muted/60 rounded-full text-xs font-bold text-muted-foreground uppercase tracking-widest border border-border">
                            {t}
                        </span>
                    ))}
                </div>
              </div>

              <div className="prose prose-lg dark:prose-invert">
                <p className="text-muted-foreground text-xl leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                <Link href={project.live} target="_blank" className="flex items-center justify-center gap-3 py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all shadow-xl group">
                   Live Demo <ExternalLink size={20} className="group-hover:scale-110 transition-transform" />
                </Link>
                <Link href={project.github} target="_blank" className="flex items-center justify-center gap-3 py-4 rounded-xl border border-border bg-card font-bold hover:bg-muted transition-all group shadow-sm">
                   View Codebase <Github size={20} className="group-hover:scale-110 transition-transform" />
                </Link>
              </div>

              {/* Key Features */}
              <div className="pt-8 space-y-6">
                <h3 className="text-2xl font-bold">Key Features implemented</h3>
                <div className="grid grid-cols-1 gap-4">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-4 p-5 glass rounded-2xl border border-white/10 shadow-sm hover:border-primary/10 transition-all">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <CheckCircle2 size={18} className="text-primary" />
                      </div>
                      <span className="font-medium text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Image Showcase */}
            <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.2 }}
               className="relative lg:sticky lg:top-40 group"
            >
              <div className="absolute inset-0 bg-primary/10 blur-[100px] -z-10 group-hover:scale-110 transition-transform duration-700" />
              <div className="relative aspect-video rounded-3xl overflow-hidden border border-border shadow-2xl">
                 <Image 
                   src={project.image} 
                   alt={project.title} 
                   fill 
                   sizes="(max-width: 1024px) 100vw, 50vw"
                   className="object-cover" 
                 />
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                 <div className="aspect-video relative rounded-2xl overflow-hidden border border-border bg-muted/20" />
                 <div className="aspect-video relative rounded-2xl overflow-hidden border border-border bg-muted/20" />
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
