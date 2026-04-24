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
    <section className="flex flex-col items-start gap-[40px] px-[12px] py-[10px] md:flex-row md:px-[60px]">
      <div className="border border-[#b8976d] w-full min-w-0 p-[10px] md:flex-1">
        <div className="relative h-[451px] w-full">
          {imageHero ? (
            <Image
              src={urlFor(imageHero).url()}
              alt={titre}
              fill
              className="object-cover w-full"
            />
          ) : (
            <div className="absolute inset-0 bg-[#d6c4ad]" />
          )}
          <div className="absolute inset-0 bg-[rgba(100,81,57,0.2)]" />
        </div>
      </div>

      <div className="flex w-full min-w-0 flex-col gap-[26px] px-[20px] text-black md:flex-1 md:max-w-[600px]">
        <h1 className="font-black text-[47px] leading-[54px] tracking-[-1.88px] md:text-[70px] md:leading-[80px] md:tracking-[-0.04em]">
          {titre}
        </h1>
        <p className="text-[17px] leading-[24px] md:text-[25px] md:leading-[36px]">
          {description}
        </p>
      </div>
    </section>
  )
}
