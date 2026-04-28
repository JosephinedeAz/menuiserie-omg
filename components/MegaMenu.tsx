import Image from "next/image";
import Link from "next/link";

interface MegaMenuProps {
  isOpen?: boolean;
  onClose?: () => void;
}

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

export default function MegaMenu({ isOpen = false, onClose = () => {} }: MegaMenuProps) {
  return (
    // Clip wrapper — hides the panel when it's translated above this boundary
    <div
      className={`absolute top-full left-0 w-full z-50 overflow-hidden ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      {/* Animated panel */}
      <div
        className={`bg-[#645139] px-[40px] pb-[30px] pt-[10px] transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <p className="text-[#f1f1f1] text-[38px] leading-[44px] tracking-[0.38px] py-[10px] mb-[64px]">
          Découvrez tous nos services.
        </p>
        <div className="flex flex-col gap-[30px]">
          {services.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              onClick={onClose}
              className="group/item flex gap-[80px] items-center hover:no-underline"
            >
              <div className="flex flex-1 gap-[30px] items-start min-w-0">
                <div className="relative h-[150px] w-[259px] shrink-0 rounded-[10px] overflow-hidden">
                  <Image
                    src={s.img}
                    alt={s.alt}
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover/item:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-col gap-[5px] text-[#f1f1f1]">
                  <p className="text-[32px] leading-[38px] tracking-[-0.64px]">{s.title}</p>
                  <p className="text-[25px] leading-[36px]">{s.subtitle}</p>
                </div>
              </div>
              <span className="btn-secondary group-hover/item:border-2 text-[25px] font-medium text-[#f1f1f1] tracking-[0.25px] whitespace-nowrap">
                Découvrir
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
