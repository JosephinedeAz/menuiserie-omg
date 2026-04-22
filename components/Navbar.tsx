"use client";

import Image from "next/image";
import Link from "next/link";
import NavMobile from "@/components/NavMobile";

export default function Navbar({ onServicesClick }: { onServicesClick: () => void }) {
  return (
    <>
    <div className="md:hidden">
      <NavMobile />
    </div>
    <nav className="border-b-2 border-[#b8976d] hidden md:block">
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
                src="/images/img-logo.svg"
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
              À propos
            </Link>
            <button
              className="text-[22px] text-black text-center w-[149px]"
              onClick={onServicesClick}
            >
              Services
            </button>
            <Link
              href="#realisations"
              className="text-[22px] text-black text-center w-[149px]"
            >
              Réalisations
            </Link>
            <Link
              href="#contact"
              className="text-[22px] text-black text-center w-[149px]"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-[21px] border-l border-[#4a544a] px-5">
          <Link
            href="#contact"
            className="btn-secondary text-[25px] font-medium tracking-[0.25px] text-black whitespace-nowrap"
          >
            Rencontrons-nous
          </Link>
          <Link
            href="#contact"
            className="btn-secondary bg-[#b85a3c] text-[25px] font-medium tracking-[0.25px] text-black whitespace-nowrap"
          >
            Devis gratuit
          </Link>
        </div>
      </div>
    </nav>
    </>
  );
}
