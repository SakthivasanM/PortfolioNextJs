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
                className="text-4xl md:text-5xl font-bold tracking-tight"
              >
                Let&apos;s Build <span className="text-gradient">Something Great</span> Together.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-muted-foreground text-lg max-w-md"
              >
                Whether you have a project in mind or just want to chat about AI/Frontend trends, feel free to reach out.
              </motion.p>
            </div>

            <div className="space-y-6 pt-8">
              <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="flex items-center gap-6 p-6 glass rounded-2xl border border-white/20 dark:border-white/10"
              >
                <div className="p-4 bg-primary/10 rounded-2xl">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                    <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-1">Email Me</div>
                    <div className="text-xl font-bold">{personalInfo.email}</div>
                </div>
              </motion.div>

              <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="flex items-center gap-6 p-6 glass rounded-2xl border border-white/20 dark:border-white/10"
              >
                <div className="p-4 bg-primary/10 rounded-2xl">
                    <MapPin className="text-primary" size={24} />
                </div>
                <div>
                   <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-1">Location</div>
                   <div className="text-xl font-bold">{personalInfo.location}</div>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-3xl shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-blue-500 to-purple-500" />
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold ml-1 uppercase tracking-widest text-muted-foreground">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-6 py-4 rounded-xl border border-border bg-white dark:bg-muted/50 focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold ml-1 uppercase tracking-widest text-muted-foreground">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-6 py-4 rounded-xl border border-border bg-white dark:bg-muted/50 focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-bold ml-1 uppercase tracking-widest text-muted-foreground">Subject</label>
                <input
                  type="text"
                  id="subject"
                  required
                  className="w-full px-6 py-4 rounded-xl border border-border bg-white dark:bg-muted/50 focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  placeholder="Project Inquiry"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold ml-1 uppercase tracking-widest text-muted-foreground">Your Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full px-6 py-4 rounded-xl border border-border bg-white dark:bg-muted/50 focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg active:scale-[0.98]",
                  isSuccess 
                    ? "bg-green-500 text-white" 
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
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
