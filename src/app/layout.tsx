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
  title: "Software Engineer Portfolio | Senior Fullstack Developer",
  description: "Specializing in React, Next.js, and Enterprise architectures.",
  openGraph: {
    title: "Software Engineer Portfolio",
    description: "Senior Fullstack Developer Portfolio",
    url: "https://sakthivasan-portfolio.vercel.app/",
    siteName: "Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/profile_tech.png",
        width: 1200,
        height: 630,
        alt: "Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Engineer Portfolio",
    description: "Senior Fullstack Developer Portfolio",
    images: ["/images/profile_tech.png"],
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
            <div className="fixed top-0 left-0 -z-50 h-full w-full bg-[radial-gradient(circle_at_50%_-20%,hsl(var(--primary)/0.15),transparent)] pointer-events-none" />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
