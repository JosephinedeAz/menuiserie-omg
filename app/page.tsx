import type { Metadata } from 'next'
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SectionRealisation from "@/components/SectionRealisation";
import SectionServices from "@/components/SectionServices";
import SectionContact from "@/components/SectionContact";
import Footer from "@/components/Footer";
import SectionConfiance from "@/components/SectionConfiance";
import { client } from "@/lib/sanity";
import { TESTIMONIALS_QUERY, CONFIANCE_QUERY } from "@/lib/queries";

interface Testimonial {
  auteur: string
  date: string
  lieu: string
  contenu: string
}

interface Confiance {
  stat1Valeur: string
  stat1Label: string
  stat2Valeur: string
  stat2Label: string
}

export const metadata: Metadata = {
  title: 'Menuisier Nantes — Fenêtres, Portes, Parquet sur mesure',
  description: 'Artisan menuisier à Nantes et alentours. Pose de fenêtres, portes, volets, parquet et agencement sur mesure. Devis gratuit.',
  openGraph: {
    title: 'Ouest Menuiserie Générale — Menuisier Nantes',
    description: 'Artisan menuisier à Nantes et alentours. Devis gratuit.',
    url: '/',
  },
}

export default async function Home() {
  const [testimonials, confiance]: [Testimonial[], Confiance | null] = await Promise.all([
    client.fetch(TESTIMONIALS_QUERY),
    client.fetch(CONFIANCE_QUERY),
  ])

  return (
    <main className="bg-[#f6e9dd]">
      <Navbar />
      <Hero />
      <div className="mt-[50px]"><SectionRealisation /></div>
      <div className="mt-[50px]"><SectionServices /></div>
      <div className="mt-[50px]"><SectionConfiance testimonials={testimonials} confiance={confiance} /></div>
      <div className="mt-[130px]"><SectionContact /></div>
      <div className="mt-[130px]"><Footer /></div>
    </main>
  );
}
