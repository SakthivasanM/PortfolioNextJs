"use client";

import Certifications from "@/components/certifications";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function CertificationsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <Certifications />
      </main>
      <Footer />
    </>
  );
}
