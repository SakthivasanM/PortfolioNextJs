import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sakthivasan-portfolio.vercel.app/"),
  title: "Sakthivasan M | Software Engineer & Frontend Developer",
  description: "Results-driven Software Engineer with 2+ years of experience building scalable enterprise web and mobile applications across 12+ production systems (React.js, Next.js, React Native, Firebase, AI).",
  openGraph: {
    title: "Sakthivasan M | Software Engineer & Frontend Developer",
    description: "Results-driven Software Engineer with 2+ years of experience building scalable enterprise web and mobile applications across 12+ production systems.",
    url: "https://sakthivasan-portfolio.vercel.app/",
    siteName: "Sakthivasan M Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/profile_tech.jpg",
        width: 1200,
        height: 630,
        alt: "Sakthivasan M - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sakthivasan M | Software Engineer & Frontend Developer",
    description: "Results-driven Software Engineer with 2+ years of experience building scalable enterprise web and mobile applications.",
    images: ["/images/profile_tech.jpg"],
  },
  icons: {
    icon: "/images/msv-logo.jpg",
    shortcut: "/images/msv-logo.jpg",
    apple: "/images/msv-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex flex-col min-h-screen overflow-x-hidden">
            <div className="fixed inset-0 -z-50 bg-grid-mesh pointer-events-none" />
            <div className="fixed inset-0 -z-50 bg-dot-pattern opacity-40 pointer-events-none" />
            <div className="fixed top-0 left-1/2 -translate-x-1/2 -z-50 h-[450px] w-[850px] max-w-full bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12),transparent_70%)] pointer-events-none blur-3xl" />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
