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
    <div className="flex flex-col gap-[12px] border border-[#645139] rounded-[10px] p-[10px] w-[249px] shrink-0 h-full md:flex-row md:gap-[67px] md:items-start md:w-full md:shrink md:h-auto">
      {/* Image */}
      <div className="aspect-[811/587] w-full border border-[#b8976d] rounded-[10px] p-[10px] md:aspect-auto md:flex-1 md:min-w-0 md:rounded-none">
        <div className="aspect-[791/567] w-full relative md:aspect-[791/567]">
          <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
        </div>
      </div>

      {/* Description */}
      <div className="flex flex-col gap-[18px] w-full flex-1 md:flex-1 md:gap-[60px] md:items-start md:min-w-0 md:self-stretch">
        <div className="flex flex-col gap-[18px] md:gap-[30px]">
          <p className="text-[33px] leading-[37px] tracking-[-1.32px] font-normal text-black md:text-[50px] md:leading-[56px] md:tracking-[-2px]">
            {titre}
          </p>
          <p className="text-[17px] leading-[24px] font-normal text-black line-clamp-3 md:text-[25px] md:leading-[36px] md:line-clamp-none">
            {description}
          </p>
        </div>
        <Link
          href={`/realisations/${slug}`}
          className="btn-tertiary text-[20px] font-medium text-black tracking-[0.2px] mt-auto"
        >
          Voir le projet
        </Link>
      </div>
    </div>
  );
}
