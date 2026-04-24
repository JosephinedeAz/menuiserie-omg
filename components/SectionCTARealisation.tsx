import Link from 'next/link'

export default function SectionCTARealisation() {
  return (
    <section className="px-[20px] py-[10px] md:px-[120px]">
      <div className="flex flex-col gap-[60px] items-center">
        <div className="border-2 border-[#b8976d] flex flex-col gap-[20px] h-auto px-[16px] py-[20px] w-full md:flex-row md:gap-[50px] md:h-[355px] md:px-[20px] md:py-[30px] items-center">
          <p className="font-bold text-[32px] leading-[37px] tracking-[-1.28px] text-black md:flex-1 md:font-medium md:text-[50px] md:leading-[72px] md:tracking-normal">
            Ouest Menuiserie Générale, aménagements intérieurs ou extérieurs.
          </p>

          <div className="hidden md:block md:self-stretch md:w-px md:bg-[#b8976d] md:shrink-0" />

          <div className="flex flex-col gap-[50px] w-full md:flex-1 md:h-full items-center justify-end">
            <p className="text-[21px] leading-[25px] font-normal flex-1 flex flex-col justify-center md:text-[30px] md:leading-[40px]">
              Nous prenons en charge tous vos projets de rénovations ou créations extérieures et intérieures. Confiez-nous la création de vos rangements et de votre mobilier.
            </p>
            <Link href="/#contact" className="btn-secondary text-[20px] md:text-[25px]">
              Parlons de votre projet
            </Link>
          </div>
        </div>

        <Link href="/realisations" className="btn-primary w-full text-center text-[17px] leading-[36px] px-[20px] py-[14px] rounded-[18px] md:w-auto md:text-[30px] md:py-[10px]">
          Voir toutes nos réalisations
        </Link>
      </div>
    </section>
  )
}
