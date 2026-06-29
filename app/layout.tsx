import "./globals.css";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Providers from "@/components/Providers";
import HeaderPill from "@/components/HeaderPill";
import TopControls from "@/components/TopControls";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jan Bojko — cloud-native fullstack developer",
  description:
    "Portfolio of Jan Bojko, cloud-native full-stack developer based in Ostrava, Czechia. Building distributed systems in Go, Kubernetes and Next.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <Providers>
          <HeaderPill />
          <TopControls />
          <div style={{ paddingTop: 32 }}>
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
