import CardRealisation from "@/components/CardRealisation"
import CardRealisationMobile from "@/components/CardRealisationMobile"

type RealisationItem = {
  titre: string
  sousTitre: string
  imageSrc: string
  imageAlt: string
  slug: string
}

type Props = {
  realisations: RealisationItem[]
}

export default function SectionGalerieRealisation({ realisations }: Props) {
  return (
    <section className="md:px-[120px] md:py-[10px]">

      {/* Mobile */}
      <div className="border-2 border-[#e5bc89] rounded-[30px] flex flex-col gap-3 pb-4 pt-3 px-3 md:hidden">
        <div className="flex flex-col gap-3 items-center w-full">
          {realisations.map((item, i) => (
            <CardRealisationMobile key={i} {...item} />
          ))}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex md:flex-col md:gap-[50px]">
        {realisations.map((item, i) => (
          <CardRealisation
            key={i}
            titre={item.titre}
            description={item.sousTitre}
            imageSrc={item.imageSrc}
            imageAlt={item.imageAlt}
            slug={item.slug}
          />
        ))}
      </div>

    </section>
  )
}
