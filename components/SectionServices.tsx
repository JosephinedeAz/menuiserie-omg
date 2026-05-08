import CardService from "@/components/CardService";
import { servicesData } from "@/lib/services-data";

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
        {servicesData.map((s) => (
          <CardService
            key={s.slug}
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
