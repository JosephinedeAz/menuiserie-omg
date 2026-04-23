type Props = {
  description: string
  detailsTechniques?: string
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

      {detailsTechniques && (
        <div className="flex flex-row items-start gap-[29px] mt-[44px]">
          <div
            className="shrink-0 border border-[#eb7a59] rounded-full flex items-center justify-center text-[#eb7a59]"
            style={{ width: 90, height: 90, fontSize: 70, lineHeight: '30px' }}
          >
            +
          </div>
          <div className="flex flex-col gap-[10px]">
            <p
              className="text-[#eb7a59]"
              style={{ fontFamily: 'Work Sans', fontWeight: 700, fontSize: 32, lineHeight: '38px', letterSpacing: '-0.64px' }}
            >
              Les détails techniques
            </p>
            <p
              className="text-black"
              style={{ fontFamily: 'Work Sans', fontWeight: 400, fontSize: 25, lineHeight: '36px' }}
            >
              {detailsTechniques}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
