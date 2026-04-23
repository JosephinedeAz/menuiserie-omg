import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import CardService from "@/components/CardService";
import SectionContact from "@/components/SectionContact";
import Footer from "@/components/Footer";
import TestimonialCarousel from "@/components/TestimonialCarousel";

// Temporary Figma SVG icon URLs (valid ~7 days)
const figmaGoogleIcon =
  "https://www.figma.com/api/mcp/asset/f4171804-c472-42f4-9daa-bb484fc93f22";
const figmaGoogleStar =
  "https://www.figma.com/api/mcp/asset/7a148378-1358-43d7-9fe1-15e284b69daa";
const figmaArrow =
  "https://www.figma.com/api/mcp/asset/d828e5a8-ec0e-425f-a85c-944727c84b12";
const figmaInstagram =
  "https://www.figma.com/api/mcp/asset/4f07b7eb-ffaf-42fb-899c-de955cebde7f";
const figmaLinkedin =
  "https://www.figma.com/api/mcp/asset/a9d5709f-1615-43da-85ba-c50453aa50cc";

/* ─── Hero ────────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section id="hero" className="flex flex-col gap-[40px] mx-[40px] pt-[10px]">

      {/* ── Hero mobile ───────────────────────────────────────────── */}
      <div className="md:hidden relative h-[169px] border border-[#b8976d] overflow-hidden">
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

      {/* ── Hero desktop ──────────────────────────────────────────── */}
      <div className="hidden md:block relative h-screen border border-[#b8976d] overflow-hidden">
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
              href="#realisations"
              className="btn-primary text-[30px] leading-[36px] w-full"
            >
              Voir nos réalisations
            </Link>
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
          className="btn-secondary text-[15px] tracking-[0.15px] text-black font-medium"
        >
          Voir nos réalisations
        </Link>
      </div>

      {/* ── Réalisation desktop ─────────────────────────────────────── */}
      <div className="hidden md:flex gap-[40px] items-end mx-[40px] px-[60px] py-[10px]">
        <div className="flex flex-col gap-[90px] items-start shrink-0">
          <p className="text-[25px] text-black leading-[36px] w-[503px]">
            Découvrez nos nombreuses réalisations et inspirez vous&nbsp;: chaque
            chantier est unique, comme votre espace de vie.
          </p>
          <Link
            href="#realisations"
            className="btn-tertiary text-[20px] font-medium text-black tracking-[0.2px]"
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
    },
    {
      img: "/images/service-menuiserie-exterieure.png",
      alt: "Terrasse extérieure",
      title: "Menuiserie extérieure",
      subtitle: "terrasse, palissade, aménagements durables",
    },
    {
      img: "/images/service-mobilier-lampe.png",
      alt: "Mobilier et lampe",
      title: "Ameublement",
      subtitle: "rangement & mobilier",
    },
  ];

  return (
    <section id="services" className="mt-[60px]">

      {/* ── Services mobile ─────────────────────────────────────────── */}
      <div className="md:hidden flex flex-col gap-[10px] py-[20px] px-[10px]">
        <Link href="/services/menuiserie-interieure">
          <CardService
            img="/images/service-menuiserie-interieure.png"
            alt="Parquet intérieur"
            title="Menuiserie intérieure"
            subtitle="parquet, cuisines, agencement"
            mobile
          />
        </Link>
        <Link href="/services/menuiserie-exterieure">
          <CardService
            img="/images/service-menuiserie-exterieure.png"
            alt="Terrasse extérieure"
            title="Menuiserie extérieure"
            subtitle="terrasse, palissade, aménagements durables"
            mobile
          />
        </Link>
        <Link href="/services/ameublement">
          <CardService
            img="/images/service-mobilier-lampe.png"
            alt="Mobilier et lampe"
            title="Ameublement"
            subtitle="rangement & mobilier"
            mobile
          />
        </Link>
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

        <div className="flex rounded-[10px] overflow-hidden">
          {services.map((s) => (
            <CardService
              key={s.title}
              img={s.img}
              alt={s.alt}
              title={s.title}
              subtitle={s.subtitle}
            />
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}

/* ─── Section Confiance ───────────────────────────────────────────── */

function SectionConfiance() {
  return (
    <section id="confiance" className="mt-[80px]">

      {/* ── Confiance mobile ────────────────────────────────────────── */}
      <div className="md:hidden flex flex-col gap-[40px] px-[20px] py-[10px]">
        <p className="text-[40px] font-medium text-black leading-[48px]">
          Nous sommes votre partenaire de confiance.
        </p>

        {/* Stats mobile */}
        <div className="flex flex-col gap-[20px]">
          <div className="flex flex-col gap-1 pb-[20px] border-b border-[#645139]">
            <p className="text-[40px] font-medium text-[#b85a3c]">60 projets</p>
            <p className="text-[21px] text-black tracking-[-0.42px]">en 2025</p>
          </div>
          <div className="flex flex-col gap-1 pb-[20px] border-b border-[#645139]">
            <p className="text-[40px] font-medium text-[#b85a3c]">0 retard</p>
            <p className="text-[21px] text-black tracking-[-0.42px]">sur les chantiers</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[40px] font-medium text-[#b85a3c]">100%</p>
            <p className="text-[21px] text-black tracking-[-0.42px]">satisfaction client</p>
          </div>
        </div>

        {/* Google badge mobile */}
        <div className="bg-white border border-[#e5e7eb] rounded-[14px] shadow-sm flex flex-col gap-3 px-4 py-3 w-[161px]">
          <div className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={figmaGoogleIcon} alt="Google" className="size-[18px]" />
            <span className="font-medium text-[16px] text-[#101828]">Google</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={figmaGoogleStar} alt="" className="size-[16px] ml-auto" />
          </div>
          <div className="flex items-end justify-between">
            <span className="font-semibold text-[24px] text-[#9810fa] leading-5">5/5</span>
            <span className="text-[14px] text-[#4a5565]">2 avis</span>
          </div>
        </div>

        {/* Verbatim mobile */}
        <TestimonialCarousel testimonials={[]} />
      </div>

      {/* ── Confiance desktop ───────────────────────────────────────── */}
      <div className="hidden md:block mx-[40px] px-[60px] py-[10px]">
      <div className="flex flex-col gap-[69px]">
        <p className="text-[60px] font-medium text-black leading-[72px]">
          Nous sommes votre partenaire de confiance.
        </p>

        {/* Stats */}
        <div className="flex gap-[68px] items-start">
          <div className="flex-1 flex flex-col gap-2 border-r border-black pr-4">
            <p className="text-[60px] font-medium text-[#b85a3c] leading-[72px]">
              60 projets
            </p>
            <p className="text-[32px] text-black tracking-[-0.64px] leading-[38px]">
              en 2025
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-2 border-r border-black pr-4">
            <p className="text-[60px] font-medium text-[#b85a3c] leading-[72px]">
              0 retard
            </p>
            <p className="text-[32px] text-black tracking-[-0.64px] leading-[38px]">
              sur les chantiers
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <p className="text-[60px] font-medium text-[#b85a3c] leading-[72px]">
              100%
            </p>
            <p className="text-[32px] text-black tracking-[-0.64px] leading-[38px]">
              satisfaction client
            </p>
          </div>
        </div>

        {/* Testimonial */}
        <div className="flex flex-col gap-[40px]">
          <TestimonialCarousel testimonials={[]} />

          {/* Google badge */}
          <div className="py-[30px]">
            <div className="bg-white border border-[#e5e7eb] rounded-[14px] shadow-sm flex flex-col gap-3 px-4 py-3 w-[161px]">
              <div className="flex items-center gap-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={figmaGoogleIcon} alt="Google" className="size-[18px]" />
                <span className="font-medium text-[16px] text-[#101828]">Google</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={figmaGoogleStar} alt="" className="size-[16px] ml-auto" />
              </div>
              <div className="flex items-end justify-between">
                <span className="font-semibold text-[24px] text-[#9810fa] leading-5">5/5</span>
                <span className="text-[14px] text-[#4a5565]">2 avis</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

    </section>
  );
}

/* ─── Page ────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <main className="bg-[#f6e9dd]">
      <Navbar />
      <Hero />
      <SectionRealisation />
      <SectionServices />
      <SectionConfiance />
      <div className="md:hidden"><SectionContact mobile /></div>
      <div className="hidden md:block"><SectionContact /></div>
      <div className="md:hidden"><Footer mobile /></div>
      <div className="hidden md:block"><Footer /></div>
    </main>
  );
}
