import CardService from "@/components/CardService";

const services = [
  {
    img: "/images/service-menuiserie-interieure.png",
    alt: "Parquet intérieur",
    title: "Menuiserie intérieure",
    subtitle: "parquet, cuisines, agencement",
    slug: "menuiserie-interieure",
  },
  {
    img: "/images/service-menuiserie-exterieure.png",
    alt: "Terrasse extérieure",
    title: "Menuiserie extérieure",
    subtitle: "terrasse, palissade, aménagements durables",
    slug: "menuiserie-exterieure",
  },
  {
    img: "/images/service-mobilier-lampe.png",
    alt: "Mobilier et lampe",
    title: "Ameublement",
    subtitle: "rangement & mobilier",
    slug: "ameublement",
  },
];

export default function SectionServices() {
  return (
    <section id="services" className="mt-[60px] px-[10px] py-[20px] md:mx-[40px] md:px-[60px]">
      <div className="hidden md:flex flex-col gap-[10px] mb-[30px]">
        <p className="text-[50px] text-black tracking-[-2px] leading-[56px] whitespace-nowrap">
          Découvrez nos services.
        </p>
        <p className="text-[32px] text-black tracking-[-0.64px] leading-[38px]">
          Quel que soit votre besoin, nous avons l&apos;expertise pour y
          répondre.
        </p>
      </div>

      <div className="flex flex-col gap-[10px] md:flex-row md:rounded-[10px] md:overflow-hidden md:gap-0">
        {services.map((s) => (
          <CardService
            key={s.title}
            img={s.img}
            alt={s.alt}
            title={s.title}
            subtitle={s.subtitle}
            slug={s.slug}
          />
        ))}
      </div>
    </section>
  );
}
