import Image from "next/image"
import Link from "next/link"

interface CardRealisationMobileProps {
  titre: string
  sousTitre: string
  imageSrc: string
  imageAlt: string
  slug: string
}

export default function CardRealisationMobile({
  titre,
  sousTitre,
  imageSrc,
  imageAlt,
  slug,
}: CardRealisationMobileProps) {
  return (
    <div className="flex flex-col w-full">
      {/* Image */}
      <div className="relative h-[254px] w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="300px"
        />
      </div>

      {/* Caption */}
      <div className="bg-[#f6e9dd] flex gap-2 items-end justify-end pb-3 pl-1 pr-2 pt-1">
        <div className="flex flex-1 flex-col gap-1 px-1 py-2">
          <p className="font-bold text-[12px] leading-[13px] text-[#1d1d1d]">
            {titre}
          </p>
          <p className="font-normal text-[12px] leading-[13px] text-[#1d1d1d]">
            {sousTitre}
          </p>
        </div>
        <Link
          href={`/realisations/${slug}`}
          className="shrink-0 border border-[#6a786a] rounded-[10px] px-2 py-1 text-[12px] tracking-[0.12px] font-medium text-[#1d1d1d] whitespace-nowrap"
        >
          Voir le projet
        </Link>
      </div>
    </div>
  )
}
