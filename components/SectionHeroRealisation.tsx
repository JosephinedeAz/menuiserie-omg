import Image from 'next/image'

interface SectionHeroRealisationProps {
  titre: string
  imageHeroUrl: string
  imageHeroAlt?: string
}

export default function SectionHeroRealisation({
  titre,
  imageHeroUrl,
  imageHeroAlt,
}: SectionHeroRealisationProps) {
  return (
    <section className="flex flex-col gap-[44px] px-[12px] py-[10px] md:px-[60px]">
      <h1
        className="text-black font-black text-[47px] leading-[54px] tracking-[-1.88px] md:text-[70px] md:leading-[80px] md:tracking-[-2.8px] md:font-black"
        style={{ fontFamily: "'Work Sans', sans-serif" }}
      >
        {titre}
      </h1>

      <div className="relative h-[260px] md:h-[843px] w-full border border-[#b8976d]">
        <Image
          src={imageHeroUrl}
          alt={imageHeroAlt ?? titre}
          fill
          className="object-cover"
        />
      </div>
    </section>
  )
}
