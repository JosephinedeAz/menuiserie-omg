import Image from 'next/image'
import { urlFor } from '@/lib/sanity'

interface SectionServiceHeaderProps {
  titre: string
  description: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  imageHero: any
}

export default function SectionServiceHeader({
  titre,
  description,
  imageHero,
}: SectionServiceHeaderProps) {
  return (
    <section className="flex items-start gap-[40px] px-[60px] py-[10px]">
      <div className="border border-[#b8976d] flex-1 min-w-0 p-[10px]">
        <div className="relative h-[451px] w-full">
          {imageHero ? (
            <Image
              src={urlFor(imageHero).url()}
              alt={titre}
              fill
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-[#d6c4ad]" />
          )}
          <div className="absolute inset-0 bg-[rgba(100,81,57,0.2)]" />
        </div>
      </div>

      <div className="flex flex-1 min-w-0 max-w-[600px] flex-col gap-[26px] px-[20px] text-black">
        <h1 className="font-black text-[70px] leading-[80px] tracking-[-0.04em]">
          {titre}
        </h1>
        <p className="text-[25px] leading-[36px]">
          {description}
        </p>
      </div>
    </section>
  )
}
