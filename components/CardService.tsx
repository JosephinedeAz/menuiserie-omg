import Image from "next/image";
import Link from "next/link";

interface CardServiceProps {
  img: string;
  alt: string;
  title: string;
  subtitle: string;
  mobile?: boolean;
  slug?: string;
}

export default function CardService({ img, alt, title, subtitle, mobile, slug }: CardServiceProps) {
  const Wrapper = ({ children }: { children: React.ReactNode }) =>
    slug ? (
      <Link href={`/services/${slug}`} className="cursor-pointer">
        {children}
      </Link>
    ) : (
      <>{children}</>
    );

  if (mobile) {
    return (
      <Wrapper>
        <div className="group bg-[#b8976d] flex flex-col gap-[14px] px-[20px] py-[16px]">
          <div className="relative h-[261px] w-full overflow-hidden">
            <Image src={img} alt={alt} fill className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.04]" />
          </div>
          <div className="flex items-start gap-[38px]">
            <div className="flex-1 text-black">
              <p className="font-bold text-[22px] leading-[30px]">{title}</p>
              <p className="text-[17px] leading-[24px]">{subtitle}</p>
            </div>
            <button className="btn-plus group-hover:border-[3px] size-[60px] text-[34px]">+</button>
          </div>
        </div>
      </Wrapper>
    );
  }

  const inner = (
    <div className="flex flex-col gap-[14px] h-full items-start w-full">
      <div className="h-[655px] shrink-0 relative w-full overflow-hidden">
        <Image src={img} alt={alt} fill className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.04]" />
      </div>
      <div className="flex gap-[38px] items-start shrink-0 w-full">
        <div className="flex-1 min-w-0 flex flex-col">
          <p className="font-bold leading-[30px] text-[22px] text-black">{title}</p>
          <p className="italic leading-[30px] text-[22px] text-black">{subtitle}</p>
        </div>
        <div className="btn-plus group-hover:border-[3px]">+</div>
      </div>
    </div>
  );

  const cls = "group bg-[#b8976d] flex-1 min-w-0 h-[809px] flex items-center p-[20px] relative";

  return slug ? (
    <Link href={`/services/${slug}`} className={cls}>{inner}</Link>
  ) : (
    <div className={cls}>{inner}</div>
  );
}
