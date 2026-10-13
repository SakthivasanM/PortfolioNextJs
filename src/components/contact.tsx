"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="section-padding bg-muted/20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary font-bold uppercase tracking-wider text-xs"
              >
                Get In Touch
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
              >
                Let&apos;s Build <span className="text-gradient">Something Great</span> Together.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-muted-foreground text-base sm:text-lg max-w-md"
              >
                Whether you have a project in mind or just want to chat about AI/Frontend trends, feel free to reach out.
              </motion.p>
            </div>

            <div className="space-y-4 pt-4 sm:pt-6">
              <motion.a 
               href={`mailto:${personalInfo.email}`}
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="flex items-center gap-4 sm:gap-6 p-4 sm:p-5 glass rounded-2xl border border-white/20 dark:border-white/10 hover:border-primary/30 transition-all group block"
              >
                <div className="p-3 sm:p-3.5 bg-primary/10 rounded-2xl group-hover:scale-105 transition-transform shrink-0">
                  <Mail className="text-primary" size={20} />
                </div>
                <div className="min-w-0 flex-1">
                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-0.5">Email Me</div>
                    <div className="text-sm sm:text-base md:text-xl font-bold group-hover:text-primary transition-colors break-all sm:break-normal">{personalInfo.email}</div>
                </div>
              </motion.a>

              <motion.a 
               href={`tel:${personalInfo.phone}`}
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.05 }}
               className="flex items-center gap-4 sm:gap-6 p-4 sm:p-5 glass rounded-2xl border border-white/20 dark:border-white/10 hover:border-primary/30 transition-all group block"
              >
                <div className="p-3 sm:p-3.5 bg-primary/10 rounded-2xl group-hover:scale-105 transition-transform shrink-0">
                  <Phone className="text-primary" size={20} />
                </div>
                <div className="min-w-0 flex-1">
                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-0.5">Call / WhatsApp</div>
                    <div className="text-sm sm:text-base md:text-xl font-bold group-hover:text-primary transition-colors">+91 {personalInfo.phone}</div>
                </div>
              </motion.a>

              <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="flex items-center gap-4 sm:gap-6 p-4 sm:p-5 glass rounded-2xl border border-white/20 dark:border-white/10"
              >
                <div className="p-3 sm:p-3.5 bg-primary/10 rounded-2xl shrink-0">
                    <MapPin className="text-primary" size={20} />
                </div>
                <div className="min-w-0 flex-1">
                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-0.5">Location</div>
                    <div className="text-sm sm:text-base md:text-xl font-bold">{personalInfo.location}</div>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden border border-border/80"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-blue-500 to-cyan-400" />
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold ml-1 uppercase tracking-wider text-muted-foreground">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-5 py-3.5 rounded-xl border border-border/80 bg-muted/40 focus:bg-background focus:ring-2 focus:ring-primary/20 transition-all outline-none text-foreground placeholder:text-muted-foreground/60"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold ml-1 uppercase tracking-wider text-muted-foreground">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-5 py-3.5 rounded-xl border border-border/80 bg-muted/40 focus:bg-background focus:ring-2 focus:ring-primary/20 transition-all outline-none text-foreground placeholder:text-muted-foreground/60"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-bold ml-1 uppercase tracking-wider text-muted-foreground">Subject</label>
                <input
                  type="text"
                  id="subject"
                  required
                  className="w-full px-5 py-3.5 rounded-xl border border-border/80 bg-muted/40 focus:bg-background focus:ring-2 focus:ring-primary/20 transition-all outline-none text-foreground placeholder:text-muted-foreground/60"
                  placeholder="Project Inquiry / Job Opportunity"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold ml-1 uppercase tracking-wider text-muted-foreground">Your Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full px-5 py-3.5 rounded-xl border border-border/80 bg-muted/40 focus:bg-background focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none text-foreground placeholder:text-muted-foreground/60"
                  placeholder="Tell me about your project or role..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg active:scale-[0.98]",
                  isSuccess 
                    ? "bg-emerald-600 text-white" 
                    : "bg-gradient-to-r from-primary to-blue-600 text-primary-foreground hover:shadow-xl hover:shadow-primary/25"
                )}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Sending Message...
                  </>
                ) : isSuccess ? (
                  "Message Sent Successfully"
                ) : (
                  <>
                    Send Message <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
