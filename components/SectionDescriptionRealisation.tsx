import type { PortableTextBlock } from '@portabletext/react'
import DetailsTechniques from './DetailsTechniques'

type Props = {
  description: string
  detailsTechniques?: PortableTextBlock[]
}

export default function SectionDescriptionRealisation({ description, detailsTechniques }: Props) {
  return (
    <section className="px-[60px] py-[10px]">
      <p
        className="w-full text-black"
        style={{ fontFamily: 'Work Sans', fontWeight: 400, fontSize: 32, lineHeight: '38px', letterSpacing: '-0.64px' }}
      >
        {description}
      </p>

      {detailsTechniques && detailsTechniques.length > 0 && (
        <DetailsTechniques contenu={detailsTechniques} />
      )}
    </section>
  )
}
