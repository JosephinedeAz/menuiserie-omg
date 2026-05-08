import Image from "next/image";
import Link from "next/link";

interface CardServiceProps {
  img: string;
  alt: string;
  title: string;
  subtitle: string;
  slug?: string;
}

export default function CardService({ img, alt, title, subtitle, slug }: CardServiceProps) {
  const cls = "group bg-[#b8976d] flex-1 min-w-0 md:h-[809px] flex items-center px-[20px] py-[16px] md:p-[20px] relative";

  const inner = (
    <div className="flex flex-col gap-[14px] h-full items-start w-full">
      <div className="relative h-[261px] md:h-[655px] shrink-0 w-full overflow-hidden">
        <Image src={img} alt={alt} fill className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.04]" />
      </div>
      <div className="flex items-start gap-[38px] shrink-0 w-full">
        <div className="flex-1 min-w-0 flex flex-col text-black">
          <p className="font-bold text-[22px] leading-[30px]">{title}</p>
          <p className="md:italic text-[17px] md:text-[22px] leading-[24px] md:leading-[30px]">{subtitle}</p>
        </div>
        <button className="btn-plus group-hover:border-[3px] size-[60px] text-[34px] md:size-[90px] md:text-[50px]">+</button>
      </div>
    </div>
  );

  return slug ? (
    <Link href={`/services/${slug}`} className={cls}>{inner}</Link>
  ) : (
    <article className={cls}>{inner}</article>
  );
}
