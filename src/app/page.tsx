import Hero from "@/components/hero";
import Skills from "@/components/skills";
import ProjectCard from "@/components/project-card";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import Certifications from "@/components/certifications";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { projects } from "@/lib/data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const featuredProjects = projects.slice(0, 4);

  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        {/* Featured Projects Section */}
        <section id="projects" className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-4">
              <div className="space-y-3">
                <div className="text-primary font-bold uppercase tracking-wider text-xs">Selected Works</div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Featured <span className="text-gradient">Projects</span></h2>
              </div>
              <Link href="/projects" className="group flex items-center gap-2 font-bold text-primary hover:gap-4 transition-all text-sm sm:text-base">
                View All Projects ({projects.length}) <ArrowRight size={18} />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        <Skills />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
