import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SectionRealisation from "@/components/SectionRealisation";
import SectionServices from "@/components/SectionServices";
import SectionContact from "@/components/SectionContact";
import Footer from "@/components/Footer";
import SectionConfiance from "@/components/SectionConfiance";
import { client } from "@/lib/sanity";

interface Testimonial {
  auteur: string
  date: string
  lieu: string
  contenu: string
}

export default async function Home() {
  const testimonials: Testimonial[] = await client.fetch(
    `*[_type == "testimonial"] | order(ordre asc){ auteur, date, lieu, contenu }`
  )

  return (
    <main className="bg-[#f6e9dd]">
      <Navbar />
      <Hero />
      <div className="mt-[50px]"><SectionRealisation /></div>
      <div className="mt-[50px]"><SectionServices /></div>
      <div className="mt-[50px]"><SectionConfiance testimonials={testimonials} /></div>
      <div className="mt-[130px]"><SectionContact /></div>
      <div className="mt-[130px]"><Footer /></div>
    </main>
  );
}
