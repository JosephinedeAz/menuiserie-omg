import Image from 'next/image'
import Link from 'next/link'

export default function SectionRealisationsHero() {
  return (
    <section className="relative h-[400px] w-full md:h-[771px]">
      {/* Image hero — placer l'image dans /public/realisations-hero.jpg */}
      <Image
        src="/realisations-hero.jpg"
        alt="Réalisations Ouest Menuiserie Générale"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.1), rgba(0,0,0,0.1))' }}
      />

      {/* Contenu */}
      <div className="relative h-full flex flex-col justify-end gap-[30px] px-[12px] py-[30px] md:px-[60px] md:py-[50px]">
        <div className="flex flex-col gap-[16px]">
          <h1
            className="text-[40px] leading-[48px] font-medium text-black md:text-[60px] md:leading-[72px]"
            style={{ fontFamily: 'Work Sans' }}
          >
            Nos réalisations
          </h1>
          <p
            className="text-[21px] leading-[25px] font-normal text-black md:text-[32px] md:leading-[38px] md:tracking-[-0.64px]"
            style={{ fontFamily: 'Work Sans' }}
          >
            Chaque chantier est unique, comme votre espace de vie.
          </p>
        </div>

        <Link href="/#contact" className="btn-primary w-full text-center md:w-fit">
          Echangeons sur votre projet
        </Link>
      </div>
    </section>
  )
}
