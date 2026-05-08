import CardService from "@/components/CardService";

interface Service {
  titre: string
  sousTitre: string
  imageHero: { asset: { url: string }; alt?: string }
  slug: { current: string }
}

interface SectionServicesProps {
  services: Service[]
}

export default function SectionServices({ services }: SectionServicesProps) {
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
            key={s.slug.current}
            img={s.imageHero?.asset?.url}
            alt={s.imageHero?.alt ?? s.titre}
            title={s.titre}
            subtitle={s.sousTitre}
            slug={s.slug.current}
          />
        ))}
      </div>
    </section>
  );
}
