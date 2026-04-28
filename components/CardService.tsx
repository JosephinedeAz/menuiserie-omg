import Image from "next/image";

interface CardServiceProps {
  img: string;
  alt: string;
  title: string;
  subtitle: string;
  mobile?: boolean;
}

export default function CardService({ img, alt, title, subtitle, mobile }: CardServiceProps) {
  if (mobile) {
    return (
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
    );
  }

  return (
    <div className="group bg-[#b8976d] flex-1 p-5 flex flex-col gap-[14px]">
      <div className="relative h-[300px] lg:h-[655px] w-full overflow-hidden">
        <Image src={img} alt={alt} fill className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.04]" />
      </div>
      <div className="flex items-start gap-[38px]">
        <div className="flex-1 text-black">
          <p className="font-bold text-[22px] leading-[30px]">{title}</p>
          <p className="italic text-[22px] leading-[30px]">{subtitle}</p>
        </div>
        <button className="btn-plus group-hover:border-[3px] size-[60px] lg:size-[90px] text-[34px] lg:text-[50px]">+</button>
      </div>
    </div>
  );
}
