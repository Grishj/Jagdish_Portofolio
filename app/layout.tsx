import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { BackToTop } from "@/components/layout/BackToTop";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jagdish Joshi | Hotel Management Portfolio",
  description: "Professional portfolio of Jagdish Joshi, a passionate Hotel Management student specializing in hospitality operations, guest services, and event coordination.",
  keywords: ["hotel management", "hospitality", "guest services", "event coordination", "portfolio"],
  authors: [{ name: "Jagdish Joshi" }],
  openGraph: {
    title: "Jagdish Joshi | Hotel Management Portfolio",
    description: "Professional portfolio showcasing expertise in hotel management and hospitality",
    type: "website",
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
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        <ThemeProvider defaultTheme="system" storageKey="hotel-portfolio-theme">
          <ScrollProgress />
          <Header />
          {children}
          <Footer />
          <BackToTop />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

