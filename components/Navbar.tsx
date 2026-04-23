"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavMobile from "@/components/NavMobile";
import MegaMenu from "@/components/MegaMenu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative">
    <div className="md:hidden">
      <NavMobile />
    </div>
    <nav className="border-b-2 border-[#b8976d] hidden md:block">
      {/* Top info bar */}
      <div className="bg-[#e5bc89] flex items-center px-[30px] py-[10px]">
        <p className="flex-1 text-center text-[16px] lg:text-[25px] text-black">
          contact@email.com
        </p>
        <p className="flex-1 text-center text-[16px] lg:text-[25px] text-black">
          tel: 06 01 02 03 04
        </p>
        <p className="flex-1 text-center text-[16px] lg:text-[25px] text-black">
          OMG, Menuiserie à Nantes et sa région
        </p>
      </div>

      {/* Main nav */}
      <div className="flex items-center justify-between">
        <div className="flex flex-1 items-center gap-10">
          {/* Logo */}
          <div className="px-5 py-2">
            <div className="relative size-[60px] lg:size-[100px] rounded-full overflow-hidden shrink-0">
              <Image
                src="/images/img-logo.svg"
                alt="OMG logo"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-1 items-center justify-center gap-4 lg:gap-[70px]">
            <Link
              href="#propos"
              className="text-[15px] lg:text-[22px] text-black text-center whitespace-nowrap"
            >
              À propos
            </Link>
            <button
              className="text-[15px] lg:text-[22px] text-black text-center whitespace-nowrap"
              onClick={() => setMenuOpen((m) => !m)}
            >
              Services
            </button>
            <Link
              href="/realisations/une-chambre-douce"
              className="text-[15px] lg:text-[22px] text-black text-center whitespace-nowrap"
            >
              Réalisations
            </Link>
            <Link
              href="#contact"
              className="text-[15px] lg:text-[22px] text-black text-center whitespace-nowrap"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-2 lg:gap-[21px] border-l border-[#4a544a] px-5">
          <Link
            href="#contact"
            className="btn-secondary text-[16px] lg:text-[25px] font-medium tracking-[0.25px] text-black whitespace-nowrap"
          >
            Rencontrons-nous
          </Link>
          <Link
            href="#contact"
            className="btn-secondary bg-[#b85a3c] text-[16px] lg:text-[25px] font-medium tracking-[0.25px] text-black whitespace-nowrap"
          >
            Devis gratuit
          </Link>
        </div>
      </div>
    </nav>
    <MegaMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
}
