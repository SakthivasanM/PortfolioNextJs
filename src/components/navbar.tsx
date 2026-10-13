"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, ArrowRight, FileText } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { personalInfo, navItems } from "@/lib/data";
import MsvLogo from "@/components/msv-logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  if (!mounted) return null;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/80 py-3 shadow-md shadow-slate-900/5 dark:shadow-black/20"
          : "bg-transparent py-5"
      )}
    >
      <nav className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="text-2xl font-bold group flex items-center gap-2.5">
          <MsvLogo size={36} />
          <span className="text-foreground font-extrabold tracking-tight group-hover:text-primary transition-colors">
            Sakthivasan<span className="text-primary font-black">.M</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-7">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href ||
                  (!item.href.includes("#") && pathname.startsWith(item.href));
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-semibold transition-colors relative py-1",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.name}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                  />
                )}
              </Link>
            );
          })}

          <div className="h-4 w-[1px] bg-border/80 mx-1" />

          {/* Quick Resume Link */}
          <Link
            href={personalInfo.resume}
            target="_blank"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold border border-border/80 bg-muted/40 hover:bg-muted text-foreground/80 hover:text-primary transition-all shadow-sm"
          >
            <FileText size={13} className="text-primary" />
            <span>Resume</span>
          </Link>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl border border-border/70 bg-card hover:bg-muted transition-all text-muted-foreground hover:text-primary focus:outline-none shadow-sm"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center space-x-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl border border-border/70 bg-card hover:bg-muted transition-all text-muted-foreground hover:text-primary focus:outline-none"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl border border-border/70 bg-card hover:bg-muted transition-all text-muted-foreground hover:text-primary focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border shadow-xl overflow-hidden"
          >
            <div className="flex flex-col space-y-4 p-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-base font-bold transition-colors py-1",
                    pathname === item.href
                      ? "text-primary border-l-2 border-primary pl-3"
                      : "text-muted-foreground hover:text-foreground pl-3"
                  )}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-2 border-t border-border/60 flex items-center justify-between">
                <Link
                  href={personalInfo.resume}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm font-bold text-primary"
                >
                  <FileText size={16} /> Download Resume
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-bold"
                >
                  Hire Me <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
