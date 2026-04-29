import TestimonialCarousel from '@/components/TestimonialCarousel'

const figmaGoogleIcon = 
'/images/Icon-google.svg'
  
const figmaGoogleStar =
  '/images/Icon-link.svg'

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
        <a href="https://www.google.com/maps/place/Ouest+Menuiserie+G%C3%A9n%C3%A9rale/@47.2578112,-1.5796054,17z/data=!4m17!1m8!3m7!1s0x4805edf7bb4b6fbb:0x18980d18ccd4f9ef!2sOuest+Menuiserie+G%C3%A9n%C3%A9rale!8m2!3d47.257771!4d-1.57971!10e5!16s%2Fg%2F11xcrvxpcq!3m7!1s0x4805edf7bb4b6fbb:0x18980d18ccd4f9ef!8m2!3d47.257771!4d-1.57971!9m1!1b1!16s%2Fg%2F11xcrvxpcq?entry=ttu&g_ep=EgoyMDI2MDQyNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
        <div className="bg-white border border-[#e5e7eb] rounded-[14px] shadow-sm flex flex-col gap-3 px-4 py-3 w-[161px] transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-md cursor-pointer">
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
        </a>

        {/* Verbatim mobile */}
        <TestimonialCarousel testimonials={[]} />
      </div>

      {/* ── Confiance desktop ───────────────────────────────────────── */}
      <div className="hidden md:block px-[60px] py-[10px]">
      <div className="flex flex-col gap-[40px]">
        <p className="text-[50px] font-normal leading-[56px] tracking-[-2px] text-black">
          Nous sommes votre partenaire de confiance.
        </p>

        {/* Stats */}
        <div className="flex gap-[68px] items-start">
          <div className="flex-1 flex flex-col gap-2 border-r border-black">
            <p className="text-[60px] font-medium text-[#b85a3c] leading-[72px]">
              60 projets
            </p>
            <p className="text-[32px] text-black tracking-[-0.64px] leading-[38px]">
              en 2025
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-2 border-r border-black">
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
            <a href="https://www.google.com/maps/place/Ouest+Menuiserie+G%C3%A9n%C3%A9rale/@47.2578112,-1.5796054,17z/data=!4m17!1m8!3m7!1s0x4805edf7bb4b6fbb:0x18980d18ccd4f9ef!2sOuest+Menuiserie+G%C3%A9n%C3%A9rale!8m2!3d47.257771!4d-1.57971!10e5!16s%2Fg%2F11xcrvxpcq!3m7!1s0x4805edf7bb4b6fbb:0x18980d18ccd4f9ef!8m2!3d47.257771!4d-1.57971!9m1!1b1!16s%2Fg%2F11xcrvxpcq?entry=ttu&g_ep=EgoyMDI2MDQyNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
            <div className="bg-white border border-[#e5e7eb] rounded-[14px] shadow-sm flex flex-col gap-3 px-4 py-3 w-[161px] transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-md cursor-pointer">
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
            </a>
          </div>
        </div>
      </div>
      </div>

    </section>
  )
}
