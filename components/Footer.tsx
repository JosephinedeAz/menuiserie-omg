import Image from "next/image";
import Link from "next/link";

const columns = [
  {
    heading: "À propos",
    links: [
      { label: "Qui sommes-nous", href: "#propos" },
      { label: "Notre expertise", href: "#propos" },
      { label: "Notre approche", href: "#propos" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Menuiserie intérieure", href: "/services/menuiserie-interieure" },
      { label: "Menuiserie extérieure", href: "/services/menuiserie-exterieure" },
      { label: "Ameublement & rangement", href: "/services/ameublement" },
    ],
  },
  {
    heading: "Réalisations",
    links: [{ label: "Notre sélection", href: "#realisations" }],
  },
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden md:flex md:items-stretch"
      style={{ backgroundColor: "var(--primary-500)" }}
    >
      {/* Main content */}
      <div className="flex flex-1 flex-col gap-[32px] md:gap-[60px] px-[24px] py-[32px] md:pl-[60px] md:pr-10 md:py-[40px] z-10">
        {/* Link columns */}
        <div className="flex flex-col gap-[32px] md:flex-row md:gap-8">
          {columns.map((col) => (
            <div key={col.heading} className="flex flex-col gap-4 md:flex-1 md:gap-6">
              <p className="font-semibold text-[18px] leading-7" style={{ color: "var(--secondary-300)" }}>
                {col.heading}
              </p>
              <div className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <Link key={link.label} href={link.href} className="text-[16px] text-white/80 leading-6">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Contact column */}
          <div className="flex flex-col gap-4 md:flex-1 md:gap-6">
            <p className="font-semibold text-[18px] leading-7" style={{ color: "var(--secondary-300)" }}>
              Contact
            </p>
            <Link href="/contact" className="btn-primary text-[16px] font-medium w-fit leading-6">
              Nous contacter
            </Link>
            <div className="flex gap-4">
              {/* TODO: SVG Instagram */}
              {/* TODO: SVG LinkedIn */}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 pt-[25px] md:px-6">
          <div className="flex flex-col items-center gap-2 text-center md:flex-row md:justify-between md:text-left md:gap-0">
            <Link href="#" className="text-[14px] text-white/60 leading-5">
              Mentions légales
            </Link>
            <p className="text-[14px] text-white/40 leading-5">
              Menuiserie Ouest Générale — OMG
            </p>
            <a href="https://www.deazstudio.com" target="_blank" rel="noopener noreferrer" className="text-[14px] text-white/40 leading-5 hover:underline">
              Réalisé par deazstudio
            </a>
          </div>
        </div>
      </div>

      {/* Decorative blurred logo */}
      <div className="hidden md:flex absolute right-0 inset-y-0 items-center justify-center p-[10px] opacity-30 w-[278px]">
        <div className="relative size-[258px] rounded-full overflow-hidden blur-sm">
          <div className="absolute inset-0 bg-black/50 rounded-full z-10" />
          <Image src="/images/img-logo.svg" alt="" fill className="object-cover opacity-60" />
        </div>
      </div>
    </footer>
  );
}
