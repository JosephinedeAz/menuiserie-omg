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
        className={`bg-primary-100 md:bg-secondary-500 px-[16px] md:px-[40px] pb-[30px] pt-[10px] transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <p className="text-[#1d1d1d] md:text-[#f1f1f1] text-[17px] leading-[24px] md:text-[38px] md:leading-[44px] tracking-[0.38px] py-[10px] mb-[24px] md:mb-[64px]">
          Découvrez tous nos services.
        </p>
        <div className="flex flex-col gap-[28px] md:gap-[30px]">
          {services.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              onClick={onClose}
              className="group/item flex items-center justify-between w-full gap-[8px] md:gap-[80px] hover:no-underline"
            >
              {/* Image */}
              <div className="relative h-[75px] w-[129px] md:h-[150px] md:w-[259px] shrink-0 rounded-[10px] overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.alt}
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out group-hover/item:scale-[1.04]"
                />
              </div>

              {/* Texte */}
              <div className="flex flex-col gap-[5px] flex-1 min-w-0 text-[#1d1d1d] md:text-[#f1f1f1]">
                <p className="text-[21px] leading-[25px] tracking-[-0.42px] md:text-[32px] md:leading-[38px] md:tracking-[-0.64px]">
                  {s.title}
                </p>
                <p className="text-[12px] leading-[13px] md:text-[25px] md:leading-[36px]">
                  {s.subtitle}
                </p>
              </div>

              {/* Bouton Découvrir — styles directs, pas de classe btn-* */}
              <div className="border border-[#b85a3c] rounded-[10px] p-[10px] shrink-0 flex items-center justify-center
                              md:border-[#f1f1f1] md:p-[10px]">
                <span className="text-[12px] leading-[13px] text-[#1d1d1d] whitespace-nowrap font-normal
                                 md:text-[25px] md:leading-[normal] md:font-medium md:text-[#f1f1f1] md:tracking-[0.25px]">
                  Découvrir
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
