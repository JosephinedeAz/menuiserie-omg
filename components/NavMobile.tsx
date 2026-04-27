"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    img: "/images/service-menuiserie-interieure.png",
    alt: "Parquet intérieur",
    title: "Menuiserie intérieure",
    subtitle: "parquet, cuisines, agencement",
    href: "/services/menuiserie-interieure",
  },
  {
    img: "/images/service-menuiserie-exterieure.png",
    alt: "Terrasse extérieure",
    title: "Menuiserie extérieure",
    subtitle: "terrasse, palissade, aménagements durables",
    href: "/services/menuiserie-exterieure",
  },
  {
    img: "/images/service-mobilier-lampe.png",
    alt: "Mobilier et lampe",
    title: "Agencement",
    subtitle: "rangement & mobilier",
    href: "/services/ameublement",
  },
];

function BurgerIcon() {
  return (
    <svg width="35" height="24" viewBox="0 0 35 24" fill="none">
      <line y1="2" x2="35" y2="2" stroke="#eb7a59" strokeWidth="3" strokeLinecap="round" />
      <line y1="12" x2="35" y2="12" stroke="#eb7a59" strokeWidth="3" strokeLinecap="round" />
      <line y1="22" x2="35" y2="22" stroke="#eb7a59" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
      <line x1="9" y1="9" x2="29" y2="29" stroke="#eb7a59" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="29" y1="9" x2="9" y2="29" stroke="#eb7a59" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function Logo() {
  return (
    <Link href="/">
      <div className="relative size-[40px] rounded-full overflow-hidden shrink-0">
        <Image
          src="/images/img-logo.svg"
          alt="OMG logo"
          fill
          className="object-cover"
        />
      </div>
    </Link>
  );
}

export default function NavMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);

  function close() {
    setIsOpen(false);
    setShowServices(false);
  }

  return (
    <>
      {/* Top bar */}
      <div className="flex items-center justify-between px-[20px] py-3 w-full">
        <Logo />
        <button onClick={() => setIsOpen(true)} aria-label="Ouvrir le menu">
          <BurgerIcon />
        </button>
      </div>

      {/* Full-screen overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white flex items-start pt-[56px] pb-[91px] px-[16px]">
          <div className="flex flex-col gap-[38px] items-center w-full">

            {/* Header: logo + close */}
            <div className="flex items-center justify-between w-full">
              <div className="px-[20px]">
                <Logo />
              </div>
              <button onClick={close} aria-label="Fermer le menu" className="size-[38px]">
                <CloseIcon />
              </button>
            </div>

            {/* Content: main menu or services submenu */}
            <div className="flex flex-col justify-between w-full flex-1 gap-[40px]">
              {!showServices ? (
                /* Main menu */
                <div className="flex flex-col gap-[40px] items-start">
                  <Link href="/about" onClick={close} className="text-[22px] text-black">
                    À propos
                  </Link>
                  <button
                    onClick={() => setShowServices(true)}
                    className="text-[22px] text-black text-left"
                  >
                    Services
                  </button>
                  <Link href="/realisations/une-chambre-douce" onClick={close} className="text-[22px] text-black">
                    Réalisations
                  </Link>
                  <Link href="/contact" onClick={close} className="text-[22px] text-black">
                    Contact
                  </Link>
                </div>
              ) : (
                /* Services submenu */
                <div className="flex flex-col gap-[28px] items-start w-full">
                  <p className="text-[17px] text-[#1d1d1d] leading-[24px] w-full">
                    Découvrez tous nos services.
                  </p>
                  <div className="flex flex-col gap-[30px] items-end w-full">
                    {services.map((s) => (
                      <div
                        key={s.title}
                        className="flex items-center justify-between w-full"
                      >
                        <div className="flex flex-1 gap-[8px] items-start min-w-0">
                          <div className="relative h-[75px] w-[129px] shrink-0 rounded-[10px] overflow-hidden">
                            <Image src={s.img} alt={s.alt} fill className="object-cover" />
                          </div>
                          <div className="flex flex-col gap-[5px] text-[#1d1d1d] min-w-0">
                            <p className="text-[21px] leading-[25px] tracking-[-0.42px]">
                              {s.title}
                            </p>
                            <p className="text-[12px] leading-[13px]">{s.subtitle}</p>
                          </div>
                        </div>
                        <Link
                          href={s.href}
                          onClick={close}
                          className="btn-secondary text-[12px] font-medium text-[#1d1d1d] whitespace-nowrap shrink-0"
                        >
                          Découvrir
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTAs */}
              <div className="flex flex-col gap-[21px] items-center px-[20px] w-full">
                <Link
                  href="/contact"
                  onClick={close}
                  className="btn-secondary text-[25px] font-medium text-black tracking-[0.25px] w-full text-center"
                >
                  Rencontrons-nous
                </Link>
                <Link
                  href="/contact"
                  onClick={close}
                  className="btn-primary text-[25px] font-medium tracking-[0.25px] w-full text-center"
                >
                  Devis gratuit
                </Link>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
