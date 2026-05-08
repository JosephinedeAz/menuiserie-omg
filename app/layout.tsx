import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import FabWrapper from "@/components/FabWrapper";
import { MenuProvider } from "@/context/MenuContext";
import { SanityLive } from "@/sanity/lib/live";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ouestmenuiseriegenerale.fr'),
  title: {
    default: 'Ouest Menuiserie Générale — Menuisier Nantes et alentours',
    template: '%s — Ouest Menuiserie Générale',
  },
  description: 'Artisan menuisier à Nantes et alentours. Pose de fenêtres, portes, volets, parquet et agencement sur mesure. Devis gratuit.',
  openGraph: {
    siteName: 'Ouest Menuiserie Générale',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: '/og-default.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
  },
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
