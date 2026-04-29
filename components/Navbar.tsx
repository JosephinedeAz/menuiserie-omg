"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import NavMobile from "@/components/NavMobile";
import MegaMenu from "@/components/MegaMenu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [menuOpen])

  return (
    <div className="relative" ref={menuRef}>
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
          <Link href="/" className="px-5 py-2">
            <div className="relative size-[60px] lg:size-[100px] rounded-full overflow-hidden shrink-0">
              <Image
                src="/images/img-logo.svg"
                alt="OMG logo"
                fill
                className="object-cover"
              />
            </div>
          </Link>

          {/* Links */}
          <div className="flex flex-1 items-center justify-center gap-4 lg:gap-[70px]">
            <Link
              href="/about"
              className="relative group text-[15px] lg:text-[22px] text-black text-center whitespace-nowrap"
            >
              À propos
              <span className={`absolute -bottom-[3px] left-0 h-[1.5px] bg-[#b85a3c] transition-all duration-300 ease-in-out ${pathname === '/about' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </Link>
            <button
              className="relative group text-[15px] lg:text-[22px] text-black text-center whitespace-nowrap"
              onClick={() => setMenuOpen((m) => !m)}
            >
              Services
              <span className={`absolute -bottom-[3px] left-0 h-[1.5px] bg-[#b85a3c] transition-all duration-300 ease-in-out ${pathname?.startsWith('/services') ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </button>
            <Link
              href="/realisations/une-chambre-douce"
              className="relative group text-[15px] lg:text-[22px] text-black text-center whitespace-nowrap"
            >
              Réalisations
              <span className={`absolute -bottom-[3px] left-0 h-[1.5px] bg-[#b85a3c] transition-all duration-300 ease-in-out ${pathname?.startsWith('/realisations') ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </Link>
            <Link
              href="/contact"
              className="relative group text-[15px] lg:text-[22px] text-black text-center whitespace-nowrap"
            >
              Contact
              <span className={`absolute -bottom-[3px] left-0 h-[1.5px] bg-[#b85a3c] transition-all duration-300 ease-in-out ${pathname === '/contact' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </Link>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-2 lg:gap-[21px] border-l border-[#4a544a] px-5">
          <Link
            href="/contact"
            className="btn-secondary text-[16px] lg:text-[25px] font-medium tracking-[0.25px] text-black whitespace-nowrap"
          >
            Rencontrons-nous
          </Link>
          <Link
            href="/contact"
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
