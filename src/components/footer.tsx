"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { personalInfo, navItems } from "@/lib/data";
import { Mail, ExternalLink, Phone } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import { cn } from "@/lib/utils";
import MsvLogo from "@/components/msv-logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  const workLinks = [
    { name: "Featured Projects", href: "/projects" },
    { name: "Career Timeline", href: "/experience" },
    { name: "Download Resume", href: "/SAKTHIVASAN_M_Resume.pdf", external: true },
    { name: "Hire Me", href: "/contact" },
  ];

  return (
    <footer className="mt-auto border-t border-border bg-muted/30 py-12 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="flex flex-col space-y-4 md:col-span-2">
          <Link
            href="/"
            className="text-2xl font-bold flex items-center gap-2.5 group"
          >
            <MsvLogo size={32} showGlow={false} />
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
              aria-label="GitHub Profile"
              className="text-muted-foreground hover:text-primary transition-colors focus:outline-none"
            >
              <Github size={20} />
            </Link>
            <Link
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-muted-foreground hover:text-primary transition-colors focus:outline-none"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href={`mailto:${personalInfo.email}`}
              aria-label="Send Email"
              className="text-muted-foreground hover:text-primary transition-colors focus:outline-none"
            >
              <Mail size={20} />
            </Link>
            <Link
              href={`tel:${personalInfo.phone}`}
              aria-label="Call / WhatsApp"
              className="text-muted-foreground hover:text-primary transition-colors focus:outline-none"
            >
              <Phone size={20} />
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-foreground">
            Navigation
          </h4>
          <ul className="flex flex-col space-y-3.5">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href ||
                    (!item.href.includes("#") && pathname.startsWith(item.href));

              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "transition-all duration-200 focus:outline-none inline-flex items-center gap-2 text-sm",
                      isActive
                        ? "text-primary font-bold translate-x-1"
                        : "text-muted-foreground hover:text-primary hover:translate-x-1"
                    )}
                  >
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse shrink-0" />
                    )}
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-foreground">
            Work
          </h4>
          <ul className="flex flex-col space-y-3.5">
            {workLinks.map((work) => {
              const isActive =
                !work.external &&
                (work.href === "/"
                  ? pathname === "/"
                  : pathname === work.href || pathname.startsWith(work.href));

              return (
                <li key={work.name}>
                  <Link
                    href={work.href}
                    target={work.external ? "_blank" : undefined}
                    className={cn(
                      "transition-all duration-200 focus:outline-none inline-flex items-center gap-2 text-sm",
                      isActive
                        ? "text-primary font-bold translate-x-1"
                        : "text-muted-foreground hover:text-primary hover:translate-x-1"
                    )}
                  >
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse shrink-0" />
                    )}
                    <span>{work.name}</span>
                    {work.external && <ExternalLink size={13} className="shrink-0" />}
                  </Link>
                </li>
              );
            })}
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
