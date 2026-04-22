import Image from "next/image";
import Link from "next/link";

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

/* ─── Navbar ──────────────────────────────────────────────────────── */

function Navbar() {
  return (
    <nav className="border-b-2 border-[#b8976d]">
      {/* Top info bar */}
      <div className="bg-[#e5bc89] flex items-center px-[30px] py-[10px]">
        <p className="flex-1 text-center text-[25px] text-black">
          contact@email.com
        </p>
        <p className="flex-1 text-center text-[25px] text-black">
          tel: 06 01 02 03 04
        </p>
        <p className="flex-1 text-center text-[25px] text-black">
          OMG, Menuiserie à Nantes et sa région
        </p>
      </div>

      {/* Main nav */}
      <div className="flex items-center justify-between">
        <div className="flex flex-1 items-center gap-10">
          {/* Logo */}
          <div className="px-5 py-2">
            <div className="relative size-[100px] rounded-full overflow-hidden shrink-0">
              <Image
                src="/images/logo-atelier.png"
                alt="OMG logo"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-1 items-center justify-center gap-[70px]">
            <Link
              href="#propos"
              className="text-[22px] text-black text-center w-[149px]"
            >
              à propos
            </Link>
            <Link
              href="#services"
              className="text-[22px] text-black text-center w-[149px]"
            >
              services
            </Link>
            <Link
              href="#realisations"
              className="text-[22px] text-black text-center w-[149px]"
            >
              réalisations
            </Link>
            <Link
              href="#contact"
              className="text-[22px] text-black text-center w-[149px]"
            >
              contact
            </Link>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-5 border-l border-[#4a544a] px-5 py-5">
          <Link
            href="#contact"
            className="border-2 border-[#b85a3c] rounded-[20px] px-[15px] py-5 text-[25px] font-medium text-black whitespace-nowrap"
          >
            rencontrons-nous
          </Link>
          <Link
            href="#contact"
            className="bg-[#b85a3c] rounded-[20px] px-[15px] py-5 text-[25px] font-medium text-black whitespace-nowrap"
          >
            devis gratuit
          </Link>
        </div>
      </div>
    </nav>
  );
}

/* ─── Hero ────────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section id="hero" className="flex flex-col gap-[40px] mx-[40px] pt-[10px]">
      {/* Image + overlay */}
      <div className="relative h-[919px] border border-[#b8976d] overflow-hidden">
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
              style={{ fontSize: "270px", letterSpacing: "54px" }}
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
          <div className="flex flex-col items-center gap-5">
            <Link
              href="#services"
              className="bg-[#b85a3c] rounded-[18px] px-5 py-[10px] text-[30px] text-[#f1f1f1] leading-[36px]"
            >
              Découvrir nos services
            </Link>
            <Link
              href="#realisations"
              className="bg-[#b85a3c] rounded-[18px] px-5 py-[10px] text-[30px] text-[#f1f1f1] leading-[36px]"
            >
              Voir nos réalisations
            </Link>
          </div>
        </div>
      </div>

      {/* Description text box */}
      <div className="border-2 border-[#b8976d] flex items-center gap-[50px] px-5 py-[30px] min-h-[296px]">
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
    <section
      id="realisations"
      className="mx-[40px] px-[60px] py-[10px] mt-[60px]"
    >
      <div className="flex gap-[40px] items-end">
        <div className="flex flex-col gap-[90px] items-start shrink-0">
          <p className="text-[25px] text-black leading-[36px] w-[503px]">
            Découvrez nos nombreuses réalisations et inspirez vous&nbsp;: chaque
            chantier est unique, comme votre espace de vie.
          </p>
          <Link
            href="#realisations"
            className="border border-[#6a786a] rounded-[10px] px-[10px] py-[10px] text-[20px] font-medium text-black tracking-[0.2px]"
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
    <section id="services" className="mx-[40px] px-[60px] mt-[60px]">
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
            <div
              key={s.title}
              className="bg-[#b8976d] flex-1 p-5 flex flex-col gap-[14px]"
            >
              <div className="relative h-[655px] w-full">
                <Image
                  src={s.img}
                  alt={s.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-start gap-[38px]">
                <div className="flex-1 text-black">
                  <p className="font-bold text-[22px] leading-[30px]">
                    {s.title}
                  </p>
                  <p className="italic text-[22px] leading-[30px]">
                    {s.subtitle}
                  </p>
                </div>
                <button className="border border-black rounded-full size-[90px] flex items-center justify-center text-[50px] text-black shrink-0 leading-none">
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section Confiance ───────────────────────────────────────────── */

function SectionConfiance() {
  return (
    <section
      id="confiance"
      className="mx-[40px] px-[60px] py-[10px] mt-[80px]"
    >
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
          <div className="flex flex-col gap-[49px]">
            <p className="italic text-[50px] text-black tracking-[-2px] leading-[56px]">
              &ldquo;Très satisfait de ma nouvelle terrasse, excellent devis et
              délais de chantier plus court que prévu, je recommande
              vivement&rdquo;
            </p>
            <p className="text-[32px] text-black text-right tracking-[-0.64px] leading-[38px]">
              Laurent, mars 2025, Nantes
            </p>
          </div>

          {/* Google badge + arrow */}
          <div className="flex items-center justify-between py-[30px]">
            <div className="bg-white border border-[#e5e7eb] rounded-[14px] shadow-sm flex flex-col gap-3 px-4 py-3 w-[161px]">
              <div className="flex items-center gap-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={figmaGoogleIcon}
                  alt="Google"
                  className="size-[18px]"
                />
                <span className="font-medium text-[16px] text-[#101828]">
                  Google
                </span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={figmaGoogleStar}
                  alt=""
                  className="size-[16px] ml-auto"
                />
              </div>
              <div className="flex items-end justify-between">
                <span className="font-semibold text-[24px] text-[#9810fa] leading-5">
                  5/5
                </span>
                <span className="text-[14px] text-[#4a5565]">2 avis</span>
              </div>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={figmaArrow} alt="" className="w-[97px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section Contact ─────────────────────────────────────────────── */

function SectionContact() {
  return (
    <section
      id="contact"
      className="border border-[#833e28] mx-0 mt-[80px] px-[60px] py-[10px]"
    >
      <div className="bg-[#f5efe7] flex flex-col gap-8 items-center px-[80px] py-[70px]">
        <div className="flex flex-col gap-[25px] items-center">
          <h2 className="font-medium text-[48px] text-[#4a544a] leading-[48px] text-center">
            Parlons de votre projet!
          </h2>
          <p className="text-[25px] text-[rgba(74,84,74,0.8)] text-center leading-[36px] max-w-[637px]">
            Que vous souhaitiez échanger autour de votre projet ou demander un
            devis, nous prenons le temps de comprendre vos besoins et de vous
            accompagner avec attention et expertise.
          </p>
        </div>
        <div className="flex gap-4 items-center justify-center">
          <Link
            href="#contact"
            className="bg-[#b85a3c] border border-[#b85a3c] rounded-[10px] px-[10px] py-[10px] text-[20px] font-medium text-[#f1f1f1] tracking-[0.2px]"
          >
            Demander un devis gratuit
          </Link>
          <Link
            href="#contact"
            className="border-2 border-[#4a544a] rounded-[10px] px-[10px] py-[10px] text-[20px] font-medium text-[#1d1d1d] tracking-[0.2px]"
          >
            Parlons-en
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ──────────────────────────────────────────────────────── */

function Footer() {
  return (
    <footer className="bg-[#4a544a] relative flex items-stretch overflow-hidden">
      <div className="flex flex-1 flex-col gap-[60px] pl-[60px] pr-10 py-[40px] z-10">
        {/* Links columns */}
        <div className="flex gap-8">
          <div className="flex-1 flex flex-col gap-6">
            <p className="font-semibold text-[18px] text-[#b8976d] leading-7">
              À propos
            </p>
            <div className="flex flex-col gap-3">
              <Link href="#" className="text-[16px] text-white/80 leading-6">
                Qui sommes-nous
              </Link>
              <Link href="#" className="text-[16px] text-white/80 leading-6">
                Notre expertise
              </Link>
              <Link href="#" className="text-[16px] text-white/80 leading-6">
                Notre approche
              </Link>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-6">
            <p className="font-semibold text-[18px] text-[#b8976d] leading-7">
              Services
            </p>
            <div className="flex flex-col gap-3">
              <Link href="#" className="text-[16px] text-white/80 leading-6">
                Menuiserie intérieure
              </Link>
              <Link href="#" className="text-[16px] text-white/80 leading-6">
                Menuiserie extérieure
              </Link>
              <Link href="#" className="text-[16px] text-white/80 leading-6">
                Ameublement &amp; rangement
              </Link>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-6">
            <p className="font-semibold text-[18px] text-[#b8976d] leading-7">
              Réalisations
            </p>
            <Link href="#" className="text-[16px] text-white/80 leading-6">
              Notre sélection
            </Link>
          </div>

          <div className="flex-1 flex flex-col gap-6">
            <p className="font-semibold text-[18px] text-[#b8976d] leading-7">
              Contact
            </p>
            <Link
              href="#contact"
              className="bg-[#b85a3c] rounded-[8px] px-4 py-3 text-[16px] font-medium text-white w-fit leading-6"
            >
              Nous contacter
            </Link>
            <div className="flex gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={figmaInstagram} alt="Instagram" className="size-6" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={figmaLinkedin} alt="LinkedIn" className="size-6" />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 pt-[25px] px-6">
          <div className="flex items-center justify-between">
            <Link href="#" className="text-[14px] text-white/60 leading-5">
              Mentions légales
            </Link>
            <p className="text-[14px] text-white/40 leading-5">
              Menuiserie Ouest Générale — OMG
            </p>
            <p className="text-[14px] text-white/40 leading-5">
              Réalisé par deazstudio
            </p>
          </div>
        </div>
      </div>

      {/* Blurred logo — decorative background */}
      <div className="absolute right-0 inset-y-0 flex items-center justify-center p-[10px] opacity-30 w-[278px]">
        <div className="relative size-[258px] rounded-full overflow-hidden blur-sm">
          <div className="absolute inset-0 bg-black/50 rounded-full z-10" />
          <Image
            src="/images/logo-atelier.png"
            alt=""
            fill
            className="object-cover opacity-60"
          />
        </div>
      </div>
    </footer>
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
      <SectionContact />
      <Footer />
    </main>
  );
}
