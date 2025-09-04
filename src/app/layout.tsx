import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Sidebar from "./partials/sidebar";
import Content from "./partials/content";
import Footer from "./partials/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Opinion Journey",
  description: "Membagikan berbagai opini terkait semua isu atau sebuah pendapat yang menarik untuk dibahas.",
  icons: {
    icon: "/OJ.png",
    shortcut: "/OJ.png",
    // apple: "/apple-touch-icon.png", // opsional
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-full h-screen flex">
          <Sidebar />
          <div className="p-8 flex flex-col justify-between overflow-auto w-full">
            <Content>{children}</Content>
            <Footer />
          </div>
        </div>

      </body>
    </html>
  );
}
