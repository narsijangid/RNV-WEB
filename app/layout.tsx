import Footer from "@/components/custom/Footer";
import Navbar from "@/components/custom/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";
import "@/lib/GSAPAnimations";
import { defaultMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen w-full">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
        <Script
          src="https://cdn.jotfor.ms/agent/embedjs/019c80086156706ea95ee4092bcb885e252b/embed.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
