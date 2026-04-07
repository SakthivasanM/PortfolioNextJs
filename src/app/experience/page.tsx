"use client";

import Experience from "@/components/experience";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function ExperiencePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <Experience />
      </main>
      <Footer />
    </>
  );
}
