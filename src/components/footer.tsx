import Link from "next/link";
import { personalInfo, navItems } from "@/lib/data";
import { Mail, ExternalLink } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-muted/30 py-12 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="flex flex-col space-y-4 md:col-span-2">
          <Link
            href="/"
            className="text-2xl font-bold flex items-center gap-2 group"
          >
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground text-sm font-black group-hover:scale-110 transition-transform">
              S
            </div>
            <span className="text-foreground group-hover:text-primary transition-colors">
              Sakthivasan
              <span className="text-primary group-hover:text-foreground">
                .M
              </span>
            </span>
          </Link>
          <p className="text-muted-foreground max-w-md">
            {personalInfo.role} specializing in modern frontend architectures,
            enterprise-grade RBAC systems, and AI-powered web solutions.
            Crafting scalable and user-centric digital experiences.
          </p>
          <div className="flex items-center space-x-6 pt-4">
            <Link
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors focus:outline-none"
            >
              <Github size={20} />
            </Link>
            <Link
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors focus:outline-none"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href={`mailto:${personalInfo.email}`}
              className="text-muted-foreground hover:text-primary transition-colors focus:outline-none"
            >
              <Mail size={20} />
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-foreground">
            Navigation
          </h4>
          <ul className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors focus:outline-none"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-foreground">
            Work
          </h4>
          <ul className="flex flex-col space-y-4">
            <li>
              <Link
                href="/projects"
                className="text-muted-foreground hover:text-primary transition-colors focus:outline-none"
              >
                Featured Projects
              </Link>
            </li>
            <li>
              <Link
                href="/experience"
                className="text-muted-foreground hover:text-primary transition-colors focus:outline-none"
              >
                Career Timeline
              </Link>
            </li>
            <li>
              <Link
                href="/SAKTHIVASAN_M_Resume.pdf"
                target="_blank"
                className="text-muted-foreground hover:text-primary flex items-center gap-2 transition-colors focus:outline-none"
              >
                Download Resume <ExternalLink size={14} />
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-primary transition-colors focus:outline-none"
              >
                Hire Me
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground space-y-4 md:space-y-0">
        <p>© {currentYear} Software Engineer Portfolio. All rights reserved.</p>
        <p>Built with Next.js, Tailwind CSS & Framer Motion.</p>
      </div>
    </footer>
  );
}
