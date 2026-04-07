"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ProjectCard from "@/components/project-card";
import { projects } from "@/lib/data";
import { Search, Filter, X } from "lucide-react";

const categories = ["All", "Web App", "Mobile", "Enterprise", "AI"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((project: any) => {
    const matchesCategory =
      activeCategory === "All" ||
      (Array.isArray(project.category)
        ? project.category.some((c: string) => c.toLowerCase().includes(activeCategory.toLowerCase()))
        : project.category.toLowerCase().includes(activeCategory.toLowerCase()));
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         project.tech.some((t: string) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 section-padding">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-primary font-bold uppercase tracking-wider text-xs"
              >
                Showcase
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-6xl font-bold tracking-tight"
              >
                All <span className="text-gradient">Projects</span>.
              </motion.h1>
              <motion.p
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.2 }}
                 className="text-muted-foreground text-lg max-w-xl"
              >
                 Explore a collection of my work ranging from enterprise dashboards to innovative AI integrations and mobile apps.
              </motion.p>
            </div>

            {/* Search and Filter */}
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.3 }}
               className="flex flex-col sm:flex-row gap-4 w-full md:w-auto"
            >
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={18} />
                <input 
                  type="text" 
                  placeholder="Search skills or title..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-6 py-3 rounded-full bg-muted/50 border border-border focus:ring-2 focus:ring-primary/20 outline-none w-full sm:w-64 transition-all"
                />
              </div>
            </motion.div>
          </div>

          {/* Category Tabs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center gap-2 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all border ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                    : "bg-muted/50 text-muted-foreground border-border hover:bg-muted hover:border-primary/20"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="popLayout">
            <motion.div 
               layout
               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="py-20 text-center space-y-4"
            >
              <div className="text-4xl text-muted-foreground">No projects found.</div>
              <p className="text-muted-foreground">Try adjusting your filters or search query.</p>
              <button 
                onClick={() => {setActiveCategory("All"); setSearchQuery("");}}
                className="text-primary font-bold hover:underline"
              >
                  Clear all filters
              </button>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
