import TestimonialCarousel from '@/components/TestimonialCarousel'

const figmaGoogleIcon =
  'https://www.figma.com/api/mcp/asset/f4171804-c472-42f4-9daa-bb484fc93f22'
const figmaGoogleStar =
  'https://www.figma.com/api/mcp/asset/7a148378-1358-43d7-9fe1-15e284b69daa'

export default function SectionConfiance() {
  return (
    <section id="confiance" className="mt-[80px]">

      {/* ── Confiance mobile ────────────────────────────────────────── */}
      <div className="md:hidden flex flex-col gap-[40px] px-[20px] py-[10px]">
        <p className="text-[40px] font-medium text-black leading-[48px]">
          Nous sommes votre partenaire de confiance.
        </p>

        {/* Stats mobile */}
        <div className="flex flex-col gap-[20px]">
          <div className="flex flex-col gap-1 pb-[20px] border-b border-[#645139]">
            <p className="text-[40px] font-medium text-[#b85a3c]">60 projets</p>
            <p className="text-[21px] text-black tracking-[-0.42px]">en 2025</p>
          </div>
          <div className="flex flex-col gap-1 pb-[20px] border-b border-[#645139]">
            <p className="text-[40px] font-medium text-[#b85a3c]">0 retard</p>
            <p className="text-[21px] text-black tracking-[-0.42px]">sur les chantiers</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[40px] font-medium text-[#b85a3c]">100%</p>
            <p className="text-[21px] text-black tracking-[-0.42px]">satisfaction client</p>
          </div>
        </div>

        {/* Google badge mobile */}
        <div className="bg-white border border-[#e5e7eb] rounded-[14px] shadow-sm flex flex-col gap-3 px-4 py-3 w-[161px]">
          <div className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={figmaGoogleIcon} alt="Google" className="size-[18px]" />
            <span className="font-medium text-[16px] text-[#101828]">Google</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={figmaGoogleStar} alt="" className="size-[16px] ml-auto" />
          </div>
          <div className="flex items-end justify-between">
            <span className="font-semibold text-[24px] text-[#9810fa] leading-5">5/5</span>
            <span className="text-[14px] text-[#4a5565]">2 avis</span>
          </div>
        </div>

        {/* Verbatim mobile */}
        <TestimonialCarousel testimonials={[]} />
      </div>

      {/* ── Confiance desktop ───────────────────────────────────────── */}
      <div className="hidden md:block mx-[40px] px-[60px] py-[10px]">
      <div className="flex flex-col gap-[69px]">
        <p className="text-[60px] font-medium text-black leading-[72px]">
          Nous sommes votre partenaire de confiance.
        </p>

        {/* Stats */}
        <div className="flex gap-[68px] items-start">
          <div className="flex-1 flex flex-col gap-2 border-r border-black pr-4">
            <p className="text-[60px] font-medium text-[#b85a3c] leading-[72px]">
              60 projets
            </p>
            <p className="text-[32px] text-black tracking-[-0.64px] leading-[38px]">
              en 2025
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-2 border-r border-black pr-4">
            <p className="text-[60px] font-medium text-[#b85a3c] leading-[72px]">
              0 retard
            </p>
            <p className="text-[32px] text-black tracking-[-0.64px] leading-[38px]">
              sur les chantiers
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <p className="text-[60px] font-medium text-[#b85a3c] leading-[72px]">
              100%
            </p>
            <p className="text-[32px] text-black tracking-[-0.64px] leading-[38px]">
              satisfaction client
            </p>
          </div>
        </div>

        {/* Testimonial */}
        <div className="flex flex-col gap-[40px]">
          <TestimonialCarousel testimonials={[]} />

          {/* Google badge */}
          <div className="py-[30px]">
            <div className="bg-white border border-[#e5e7eb] rounded-[14px] shadow-sm flex flex-col gap-3 px-4 py-3 w-[161px]">
              <div className="flex items-center gap-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={figmaGoogleIcon} alt="Google" className="size-[18px]" />
                <span className="font-medium text-[16px] text-[#101828]">Google</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={figmaGoogleStar} alt="" className="size-[16px] ml-auto" />
              </div>
              <div className="flex items-end justify-between">
                <span className="font-semibold text-[24px] text-[#9810fa] leading-5">5/5</span>
                <span className="text-[14px] text-[#4a5565]">2 avis</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

    </section>
  )
}
