import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity'

interface SectionServiceImageProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any
  titre: string
}

export default function SectionServiceImage({ image, titre }: SectionServiceImageProps) {
  return (
    <section className="flex flex-col items-end gap-[30px] p-[10px]">
      <div className="w-full md:w-[959px] md:shrink-0">
        <div className="border border-[#b8976d] p-[10px]">
          <div className="relative w-full aspect-[1081/700]">
            {image ? (
              <Image
                src={urlFor(image).url()}
                alt={titre}
                fill
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 bg-[#b8976d] opacity-20" />
            )}
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <Link
          href="/contact"
          className="btn-primary text-[30px] leading-[36px] px-[20px] py-[10px] w-[393px] text-center"
        >
          Donnons vie à vos idées
        </Link>
      </div>
    </section>
  )
}
