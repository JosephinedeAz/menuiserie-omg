import Image from "next/image";
import Link from "next/link";

interface CardRealisationProps {
  titre: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  slug: string;
}

export default function CardRealisation({
  titre,
  description,
  imageSrc,
  imageAlt,
  slug,
}: CardRealisationProps) {
  return (
    <div className="border border-[#645139] flex gap-[67px] items-start p-[10px] rounded-[10px] w-full">
      {/* Image */}
      <div className="flex-1 border border-[#b8976d] p-[10px] min-w-0">
        <div className="relative w-full aspect-[791/567]">
          <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
        </div>
      </div>

      {/* Description */}
      <div className="flex-1 flex flex-col gap-[60px] items-start min-w-0 self-stretch">
        <div className="flex flex-col gap-[30px]">
          <p className="text-[50px] text-black leading-[56px] tracking-[-2px]">
            {titre}
          </p>
          <p className="text-[25px] text-black leading-[36px]">{description}</p>
        </div>
        <Link
          href={`/realisations/${slug}`}
          className="btn-tertiary text-[20px] font-medium text-black tracking-[0.2px]"
        >
          Voir le projet
        </Link>
      </div>
    </div>
  );
}
