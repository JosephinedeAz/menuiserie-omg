import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import FabWrapper from "@/components/FabWrapper";
import { MenuProvider } from "@/context/MenuContext";
import { SanityLive } from "@/sanity/lib/live";
import { Analytics } from "@vercel/analytics/next";

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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Ouest Menuiserie Générale",
              "description": "Artisan menuisier à Nantes et alentours. Fenêtres, portes, volets, parquet et agencement sur mesure.",
              "url": "https://www.ouestmenuiseriegenerale.fr",
              "telephone": "+33 6 71 23 48 58",
              "address": {
  "@type": "PostalAddress",
  "streetAddress": "165 Rte de Rennes",
  "addressLocality": "Nantes",
  "postalCode": "44700",
  "addressRegion": "Pays de la Loire",
  "addressCountry": "FR"
},
              "areaServed": "Nantes et alentours",
              "priceRange": "€€",
              "openingHours": "Mo-Fr 08:00-18:00"
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <MenuProvider>
          {children}
          <FabWrapper />
        </MenuProvider>
        <SanityLive />
        <Analytics />
      </body>
    </html>
  );
}
