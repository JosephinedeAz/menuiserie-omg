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
    <div
      className={`absolute top-full left-0 w-full z-50 ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      {/* Desktop */}
      <div
        className={`hidden md:block bg-secondary-500 px-[40px] pb-[30px] pt-[10px] transition-transform duration-300 ${
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
              <span className="border border-[#f1f1f1] rounded-[10px] p-[10px] text-[25px] font-medium text-[#f1f1f1] tracking-[0.25px] whitespace-nowrap">
                Découvrir
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile — panneau plein écran */}
<div
  className={`md:hidden fixed inset-0 z-50 bg-[#f6e9dd] flex flex-col px-[16px] pt-[56px] pb-[91px] transition-all duration-300 overflow-hidden ${
    isOpen ? "max-h-[100vh] opacity-100" : "max-h-0 opacity-0"
  }`}
>
  <div className="flex flex-col gap-[38px] w-full h-full">

    {/* Header : logo + croix */}
    <div className="flex items-center justify-between w-full">
      <div className="px-[20px]">
        <div className="relative size-[40px] rounded-full overflow-hidden">
          <Image src="/images/img-logo.svg" alt="OMG logo" fill className="object-cover" />
        </div>
      </div>
      <button onClick={onClose} className="size-[38px] flex items-center justify-center">
        <span className="text-[#b85a3c] text-[24px] leading-none">✕</span>
      </button>
    </div>

    {/* Corps : titre + items */}
    <div className="flex flex-col justify-between flex-1">
      <div className="flex flex-col gap-[28px] py-[10px]">
        <p className="text-[#1d1d1d] text-[17px] leading-[24px] font-normal">
          Découvrez tous nos services.
        </p>
        <div className="flex flex-col gap-[30px]">
          {/* DEBUG — item 1 en inline styles purs */}
          <Link href="/services/menuiserie-interieure" onClick={onClose} className="block w-full hover:no-underline">
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: '8px'}}>
              <div style={{display: 'flex', alignItems: 'flex-start', gap: '8px', flex: 1, minWidth: 0}}>
                <div style={{width: '129px', height: '75px', background: '#ccc', borderRadius: '10px', flexShrink: 0}} />
                <div style={{display: 'flex', flexDirection: 'column', gap: '5px', minWidth: 0}}>
                  <p style={{fontSize: '21px', lineHeight: '25px', margin: 0}}>Menuiserie intérieure</p>
                  <p style={{fontSize: '12px', lineHeight: '13px', margin: 0}}>parquet, cuisines, agencement</p>
                </div>
              </div>
              <div style={{flexShrink: 0, border: '1px solid #b85a3c', borderRadius: '10px', padding: '10px'}}>
                <span style={{fontSize: '12px', whiteSpace: 'nowrap'}}>Découvrir</span>
              </div>
            </div>
          </Link>
          {/* items 2 & 3 en Tailwind */}
          {services.slice(1).map((s) => (
            <Link
              key={s.title}
              href={s.href}
              onClick={onClose}
              className="block w-full hover:no-underline"
            >
              <div className="flex items-center justify-between gap-[8px]">
                <div className="flex items-start gap-[8px] flex-1 min-w-0">
                  <div className="relative h-[75px] w-[129px] shrink-0 rounded-[10px] overflow-hidden">
                    <Image src={s.img} alt={s.alt} fill className="object-cover" />
                  </div>
                  <div className="flex flex-col gap-[5px] min-w-0 text-[#1d1d1d]">
                    <p className="text-[21px] leading-[25px] tracking-[-0.42px] font-normal">{s.title}</p>
                    <p className="text-[12px] leading-[13px] font-normal">{s.subtitle}</p>
                  </div>
                </div>
                <div className="shrink-0 border border-[#b85a3c] rounded-[10px] p-[10px] flex items-center">
                  <span className="text-[12px] leading-[13px] text-[#1d1d1d] whitespace-nowrap font-normal">
                    Découvrir
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTAs bas de page */}
      <div className="flex flex-col gap-[21px] px-[20px]">
        <Link href="/contact" onClick={onClose} className="btn-secondary text-center font-medium text-[20px] tracking-[0.2px]">
          Rencontrons-nous
        </Link>
        <Link href="/contact" onClick={onClose} className="btn-primary text-[20px] tracking-[0.2px]">
          Devis gratuit
        </Link>
      </div>
    </div>

  </div>
</div>
    </div>
  );
}
