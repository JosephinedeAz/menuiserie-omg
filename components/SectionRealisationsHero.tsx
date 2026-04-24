import Image from 'next/image'
import Link from 'next/link'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { urlFor } from '@/lib/sanity'

interface Props {
  imageHero: SanityImageSource | null
}

export default function SectionRealisationsHero({ imageHero }: Props) {
  return (
    <section className="relative w-full h-[500px] md:h-[771px]">
      {imageHero ? (
        <Image
          src={urlFor(imageHero).url()}
          alt="Réalisations Ouest Menuiserie Générale"
          fill
          className="absolute inset-0 w-full h-full object-cover opacity-90"
          priority
        />
      ) : (
        <div className="absolute inset-0 bg-[#4a544a]" />
      )}

      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.1) 100%), linear-gradient(90deg, rgba(229,188,137,0.1) 0%, rgba(229,188,137,0.1) 100%)',
        }}
      />

      <div className="relative px-[20px] md:px-[60px] py-[10px]">
        <div className="flex flex-col gap-[70px] items-start w-full">
          <div className="flex flex-col gap-[15px] items-start text-black pr-0 md:pr-[60px]">
            <h1
              className="text-[40px] leading-[48px] font-medium md:text-[60px] md:leading-[72px]"
              style={{ fontFamily: 'Work Sans' }}
            >
              Découvrez une sélection de nos projets les plus récents.
            </h1>
            <p
              className="text-[21px] leading-[25px] font-normal md:text-[32px] md:leading-[38px] tracking-[-0.64px]"
              style={{ fontFamily: 'Work Sans' }}
            >
              Inspirez-vous et confiez-nous vos idées pour transformer vos espaces avec un service efficace et prestigieux.
            </p>
          </div>

          <Link href="/#contact" className="btn-primary shrink-0 w-auto">
            Echangeons sur votre projet
          </Link>
        </div>
      </div>
    </section>
  )
}
