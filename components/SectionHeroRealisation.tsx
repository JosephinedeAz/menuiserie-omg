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
    <section className="flex flex-col gap-[44px] px-[60px] py-[10px]">
      <h1
        style={{
          fontFamily: "'Work Sans', sans-serif",
          fontWeight: 900,
          fontSize: '70px',
          lineHeight: '80px',
          letterSpacing: '-2.8px',
        }}
        className="text-black"
      >
        {titre}
      </h1>

      <div className="relative h-[843px] w-full border border-[#b8976d]">
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
