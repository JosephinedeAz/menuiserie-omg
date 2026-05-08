import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import FabWrapper from "@/components/FabWrapper";
import { MenuProvider } from "@/context/MenuContext";
import { SanityLive } from "@/lib/live";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ouest Menuiserie Générale — Menuisier Nantes et alentours",
  description: "Artisan menuisier à Nantes et alentours. Pose de fenêtres, portes, volets, parquet et agencement sur mesure. Devis gratuit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${workSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <MenuProvider>
          {children}
          <FabWrapper />
        </MenuProvider>
        <SanityLive />
      </body>
    </html>
  );
}
