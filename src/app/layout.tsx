import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

import { Toaster } from "@/components/ui/toaster";
import WelcomeToast from "@/components/WelcomeToaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nexus JR",
  description: "Tech excellence always.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Navbar />
        <div className="pt-16">{children}</div>
        <WelcomeToast />
        <Toaster />
      </body>
    </html>
  );
}
