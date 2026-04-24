import type { PortableTextBlock } from '@portabletext/react'
import DetailsTechniques from './DetailsTechniques'

type Props = {
  description: string
  detailsTechniques?: PortableTextBlock[]
}

export default function SectionDescriptionRealisation({ description, detailsTechniques }: Props) {
  return (
    <section className="px-[12px] py-[10px] md:px-[60px]">
      <p
        className="w-full text-black font-normal text-[21px] leading-[25px] tracking-[-0.42px] md:text-[32px] md:leading-[38px] md:tracking-[-0.64px]"
        style={{ fontFamily: 'Work Sans' }}
      >
        {description}
      </p>

      {detailsTechniques && detailsTechniques.length > 0 && (
        <DetailsTechniques contenu={detailsTechniques} />
      )}
    </section>
  )
}
