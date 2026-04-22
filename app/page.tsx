"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MegaMenu from "@/components/MegaMenu";
import Navbar from "@/components/Navbar";
import CardService from "@/components/CardService";
import SectionContact from "@/components/SectionContact";
import Footer from "@/components/Footer";

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
      {/* Image + overlay */}
      <div className="relative h-screen border border-[#b8976d] overflow-hidden">
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

/* ─── Page ────────────────────────────────────────────────────────── */

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="bg-[#f6e9dd]">
      <div className="relative">
        <Navbar onServicesClick={() => setMenuOpen((m) => !m)} />
        <MegaMenu isOpen={menuOpen} />
      </div>
      <Hero />
      <SectionRealisation />
      <SectionServices />
      <SectionConfiance />
      <SectionContact />
      <Footer />
    </main>
  );
}
