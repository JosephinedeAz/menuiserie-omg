import Image from "next/image";
import Link from "next/link";

interface FooterProps {
  mobile?: boolean;
  className?: string;
}

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

export default function Footer({ mobile, className }: FooterProps) {
  if (mobile) {
    return (
      <footer
        className={`relative overflow-hidden${className ? ` ${className}` : ''}`}
        style={{ backgroundColor: "var(--primary-500)" }}
      >
        <div className="flex flex-col gap-[32px] px-[24px] py-[32px]">
          {/* Link columns */}
          <div className="flex flex-col gap-[32px]">
            {columns.map((col) => (
              <div key={col.heading} className="flex flex-col gap-4">
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
            <div className="flex flex-col gap-4">
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
          <div className="border-t border-white/20 pt-[25px]">
            <div className="flex flex-col items-center gap-2 text-center">
              <Link href="#" className="text-[14px] text-white/60 leading-5">
                Mentions légales
              </Link>
              <p className="text-[14px] text-white/40 leading-5">
                Menuiserie Ouest Générale — OMG
              </p>
              <p className="text-[14px] text-white/40 leading-5">
                <a href="https://www.deazstudio.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Réalisé par deazstudio</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer
      className={`relative flex items-stretch overflow-hidden${className ? ` ${className}` : ''}`}
      style={{ backgroundColor: "var(--primary-500)" }}
    >
      {/* Main content */}
      <div className="flex flex-1 flex-col gap-[60px] pl-[60px] pr-10 py-[40px] z-10">
        {/* Link columns */}
        <div className="flex gap-8">
          {columns.map((col) => (
            <div key={col.heading} className="flex-1 flex flex-col gap-6">
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
          <div className="flex-1 flex flex-col gap-6">
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
        <div className="border-t border-white/20 pt-[25px] px-6">
          <div className="flex items-center justify-between">
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
      <div className="absolute right-0 inset-y-0 flex items-center justify-center p-[10px] opacity-30 w-[278px]">
        <div className="relative size-[258px] rounded-full overflow-hidden blur-sm">
          <div className="absolute inset-0 bg-black/50 rounded-full z-10" />
          <Image src="/images/img-logo.svg" alt="" fill className="object-cover opacity-60" />
        </div>
      </div>
    </footer>
  );
}
