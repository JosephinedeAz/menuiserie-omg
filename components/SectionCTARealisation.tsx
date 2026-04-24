import Link from 'next/link'

export default function SectionCTARealisation() {
  return (
    <section className="px-[120px] py-[10px]">
      <div className="flex flex-col gap-[60px] items-center">
        <div className="border-2 border-[#b8976d] flex gap-[50px] h-[355px] items-center px-[20px] py-[30px] w-full">
          <p className="font-medium text-[50px] leading-[72px] text-black flex-1">
            Ouest Menuiserie Générale, aménagements intérieurs ou extérieurs.
          </p>

          <div className="self-stretch w-px bg-[#b8976d] shrink-0" />

          <div className="flex-1 flex flex-col gap-[50px] h-full items-center justify-end">
            <p className="text-[30px] leading-[40px] font-normal flex-1 flex flex-col justify-center">
              Nous prenons en charge tous vos projets de rénovations ou créations extérieures et intérieures. Confiez-nous la création de vos rangements et de votre mobilier.
            </p>
            <Link href="/#contact" className="btn-secondary">
              Parlons de votre projet
            </Link>
          </div>
        </div>

        <Link href="/realisations" className="btn-primary text-[30px] leading-[36px] px-[20px] py-[10px] rounded-[18px]">
          Voir toutes nos réalisations
        </Link>
      </div>
    </section>
  )
}
