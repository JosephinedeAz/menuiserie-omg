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
      className="relative flex items-stretch overflow-hidden"
      style={{ backgroundColor: "var(--primary-500)" }}
    >
      {/* Main content */}
      <div className="flex flex-1 flex-col gap-[60px] pl-[60px] pr-10 py-[40px] z-10">
        {/* Link columns */}
        <div className="flex gap-8">
          {columns.map((col) => (
            <div key={col.heading} className="flex-1 flex flex-col gap-6">
              <p
                className="font-semibold text-[18px] leading-7"
                style={{ color: "var(--secondary-300)" }}
              >
                {col.heading}
              </p>
              <div className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-[16px] text-white/80 leading-6"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Contact column */}
          <div className="flex-1 flex flex-col gap-6">
            <p
              className="font-semibold text-[18px] leading-7"
              style={{ color: "var(--secondary-300)" }}
            >
              Contact
            </p>
            <Link
              href="/contact"
              className="btn-primary text-[16px] font-medium w-fit leading-6"
            >
              Nous contacter
            </Link>
            <div className="flex gap-4">
              {/* Instagram */}
              <Link href="https://instagram.com" aria-label="Instagram">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
                </svg>
              </Link>
              {/* LinkedIn */}
              <Link href="https://linkedin.com" aria-label="LinkedIn">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="2"
                    y="9"
                    width="4"
                    height="12"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="4" cy="4" r="2" stroke="white" strokeWidth="2" />
                </svg>
              </Link>
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

      {/* Decorative blurred logo */}
      <div className="absolute right-0 inset-y-0 flex items-center justify-center p-[10px] opacity-30 w-[278px]">
        <div className="relative size-[258px] rounded-full overflow-hidden blur-sm">
          <div className="absolute inset-0 bg-black/50 rounded-full z-10" />
          <Image
            src="/images/img-logo.svg"
            alt=""
            fill
            className="object-cover opacity-60"
          />
        </div>
      </div>
    </footer>
  );
}
