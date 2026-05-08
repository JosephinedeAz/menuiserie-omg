import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import CardService from "@/components/CardService";
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


/* ─── Hero ────────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section id="hero" className="flex flex-col gap-[40px] mx-[40px] pt-[10px]">

      {/* ── Hero mobile ───────────────────────────────────────────── */}
      <div className="md:hidden border border-[#b8976d] p-[10px]">
        <div className="border-2 border-[#b8976d] relative h-[169px] overflow-hidden">
          <Image
            src="/images/hero-facade-terrasse.jpg"
            alt="Façade menuiserie"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-[#eb7a59] text-center">
            <p
              className="font-thunder font-black leading-none"
              style={{ fontSize: "100px", letterSpacing: "20px" }}
            >
              OMG
            </p>
            <p
              className="font-thunder font-bold leading-tight"
              style={{ fontSize: "25px", letterSpacing: "4.5px" }}
            >
              Ouest Menuiserie Générale
            </p>
          </div>
        </div>
      </div>

      {/* ── Hero desktop ──────────────────────────────────────────── */}
      <div className="hidden md:block border border-[#b8976d] p-[10px]">
        <div className="border-2 border-[#b8976d] relative h-screen overflow-hidden">
          <Image
            src="/images/hero-facade-terrasse.jpg"
            alt="Façade menuiserie"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />

          {/* OMG title + CTAs */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-[160px]">
            <div className="flex flex-col items-center gap-0 text-[#eb7a59] text-center">
              <p
                className="font-thunder font-black leading-none"
                style={{ fontSize: "180px", letterSpacing: "36px" }}
              >
                OMG
              </p>
              <p
                className="font-bold leading-[72px]"
                style={{ fontSize: "50px", letterSpacing: "9px" }}
              >
                Ouest Menuiserie Générale
              </p>
            </div>
            <div className="flex flex-col items-center gap-5 w-[400px]">
              <Link
                href="#services"
                className="btn-primary text-[30px] leading-[36px] w-full"
              >
                Découvrir nos services
              </Link>
              <Link
                href="/realisations"
                className="btn-primary text-[30px] leading-[36px] w-full"
              >
                Voir nos réalisations
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Description text box — mobile */}
      <div className="md:hidden border-2 border-[#b8976d] flex flex-col gap-[30px] px-[20px] py-[30px]">
        <p className="text-[28px] font-medium text-black leading-[30px]">
          Ouest Menuiserie Générale, aménagements intérieurs ou extérieurs.
        </p>
        <div className="border-t border-[#b8976d]" />
        <div className="text-[18px] text-black leading-[22px]">
          <p className="mb-0">
            Nous prenons en charge tous vos projets de rénovations ou créations
            extérieures et intérieures.
          </p>
          <p>
            Confiez-nous la création de vos rangements et de votre mobilier.
          </p>
        </div>
      </div>

      {/* Description text box — desktop */}
      <div className="hidden md:flex items-center gap-[50px] border-2 border-[#b8976d] px-5 py-[30px] min-h-[296px]">
        <p className="flex-1 text-[50px] text-black tracking-[-2px] leading-[56px]">
          Ouest Menuisierie Générale, aménagements intérieurs et extérieurs.
        </p>
        <div className="w-px self-stretch bg-[#b8976d]" />
        <div className="flex-1 text-[32px] text-black tracking-[-0.64px] leading-[38px]">
          <p className="mb-0">
            Nous prenons en charge tous vos projets de rénovations ou créations
            extérieures et intérieures.
          </p>
          <p>
            Confiez-nous la création de vos rangements et de votre mobilier.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Section Réalisation ─────────────────────────────────────────── */

function SectionRealisation() {
  return (
    <section id="realisations" className="mt-[60px]">

      {/* ── Réalisation mobile ──────────────────────────────────────── */}
      <div className="md:hidden flex flex-col gap-[20px] mx-[20px]">
        <div className="relative h-[512px] border-2 border-[#b8976d] overflow-hidden">
          <Image
            src="/images/realisation-salon-interieur.png"
            alt="Réalisation intérieure — salon"
            fill
            className="object-cover"
          />
        </div>
        <p className="text-[18px] text-black leading-[20px]">
          Découvrez nos nombreuses réalisations et inspirez vous&nbsp;: chaque
          chantier est unique, comme votre espace de vie.
        </p>
        <Link
          href="/realisations"
          className="btn-secondary text-[15px] tracking-[0.15px] text-black font-medium self-start"
        >
          Voir nos réalisations
        </Link>
      </div>

      {/* ── Réalisation desktop ─────────────────────────────────────── */}
      <div className="hidden md:flex gap-[40px] items-end mx-[40px] px-[60px] py-[10px]">
        <div className="flex flex-col gap-[20px] items-start shrink-0">
          <p className="text-[25px] text-black leading-[36px] w-[503px]">
            Découvrez nos nombreuses réalisations et inspirez vous&nbsp;: chaque
            chantier est unique, comme votre espace de vie.
          </p>
          <Link
            href="/realisations"
            className="btn-tertiary text-[25px] font-medium text-black tracking-[0.2px]"
          >
            voir nos réalisations
          </Link>
        </div>
        <div className="flex-1 relative h-[512px]">
          <Image
            src="/images/realisation-salon-interieur.png"
            alt="Réalisation intérieure — salon"
            fill
            className="object-cover"
          />
        </div>
      </div>

    </section>
  );
}

/* ─── Section Services ────────────────────────────────────────────── */

function SectionServices() {
  const services = [
    {
      img: "/images/service-menuiserie-interieure.png",
      alt: "Parquet intérieur",
      title: "Menuiserie intérieure",
      subtitle: "parquet, cuisines, agencement",
      slug: "menuiserie-interieure",
    },
    {
      img: "/images/service-menuiserie-exterieure.png",
      alt: "Terrasse extérieure",
      title: "Menuiserie extérieure",
      subtitle: "terrasse, palissade, aménagements durables",
      slug: "menuiserie-exterieure",
    },
    {
      img: "/images/service-mobilier-lampe.png",
      alt: "Mobilier et lampe",
      title: "Ameublement",
      subtitle: "rangement & mobilier",
      slug: "ameublement",
    },
  ];

  return (
    <section id="services" className="mt-[60px]">

      {/* ── Services mobile ─────────────────────────────────────────── */}
      <div className="md:hidden flex flex-col gap-[10px] py-[20px] px-[10px]">
        <CardService
          img="/images/service-menuiserie-interieure.png"
          alt="Parquet intérieur"
          title="Menuiserie intérieure"
          subtitle="parquet, cuisines, agencement"
          slug="menuiserie-interieure"
          mobile
        />
        <CardService
          img="/images/service-menuiserie-exterieure.png"
          alt="Terrasse extérieure"
          title="Menuiserie extérieure"
          subtitle="terrasse, palissade, aménagements durables"
          slug="menuiserie-exterieure"
          mobile
        />
        <CardService
          img="/images/service-mobilier-lampe.png"
          alt="Mobilier et lampe"
          title="Ameublement"
          subtitle="rangement & mobilier"
          slug="ameublement"
          mobile
        />
      </div>

      {/* ── Services desktop ────────────────────────────────────────── */}
      <div className="hidden md:block mx-[40px] px-[60px]">
      <div className="flex flex-col gap-[30px]">
        <div className="flex flex-col gap-[10px]">
          <p className="text-[50px] text-black tracking-[-2px] leading-[56px] whitespace-nowrap">
            Découvrez nos services.
          </p>
          <p className="text-[32px] text-black tracking-[-0.64px] leading-[38px]">
            Quel que soit votre besoin, nous avons l&apos;expertise pour y
            répondre.
          </p>
        </div>

        <div className="flex rounded-[10px] overflow-hidden w-full">
          {services.map((s) => (
            <CardService
              key={s.title}
              img={s.img}
              alt={s.alt}
              title={s.title}
              subtitle={s.subtitle}
              slug={s.slug}
            />
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}

/* ─── Section Confiance ───────────────────────────────────────────── */

/* ─── Page ────────────────────────────────────────────────────────── */

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
      <div className="mt-[130px] md:hidden"><SectionContact mobile /></div>
      <div className="mt-[130px] hidden md:block"><SectionContact /></div>
      <div className="mt-[130px] md:hidden"><Footer mobile /></div>
      <div className="mt-[130px] hidden md:block"><Footer /></div>
    </main>
  );
}
