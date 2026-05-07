import Image from 'next/image'
import Link from 'next/link'

type Props = {
  images: { url: string; alt: string }[]
}

const PILLS = ['Menuiserie intérieure', 'Menuiserie extérieure', 'Ameublement & rangement']

export default function SectionIllustrationRealisation({ images }: Props) {
  const displayed = images.slice(0, 2)
  const mobilDisplayed = images.slice(0, 3)

  return (
    <>
      {/* ── Mobile ── */}
      <section className="md:hidden border-2 border-[#e5bc89] rounded-[30px] px-[12px] pt-[12px] pb-[16px] flex flex-col gap-[16px]">
        <div className="overflow-x-auto flex gap-[10px] whitespace-nowrap px-[10px] py-[10px] scrollbar-hide">
          {PILLS.map((pill, i) => (
            <span
              key={pill}
              className={`rounded-[30px] px-[10px] py-[10px] text-[12px] text-[#1d1d1d] border border-[#eb7a59] shrink-0 ${i === 0 ? 'bg-[#eb7a59]' : 'bg-transparent'}`}
            >
              {pill}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-[16px]">
          {mobilDisplayed.map((image, index) => (
            <div key={index} className="flex flex-col w-full max-w-[300px] mx-auto">
              <div className="relative h-[254px] w-full">
                <Image src={image.url} alt={image.alt} fill className="object-cover" />
              </div>
              <div className="bg-[#f6e9dd] flex items-end justify-end gap-[8px] pb-[12px] pl-[4px] pr-[8px] pt-[4px]">
                <div className="flex flex-col gap-[4px] text-[12px] text-[#1d1d1d] text-center px-[4px] py-[8px] flex-1">
                  <span className="font-bold">{image.alt}</span>
                </div>
                <Link
                  href="/realisations"
                  className="border border-[#6a786a] rounded-[10px] px-[8px] py-[4px] text-[12px] font-medium tracking-[0.12px] shrink-0"
                >
                  Voir le projet
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Desktop ── */}
      <section className="hidden md:block px-[4px] py-[10px] md:px-[120px]">
        <div className="flex flex-col gap-[12px] items-center md:flex-row md:gap-[50px]">
          {displayed.map((image, index) => (
            <div key={index} className="w-full h-[629px] relative md:flex-1">
              <Image src={image.url} alt={image.alt} fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
