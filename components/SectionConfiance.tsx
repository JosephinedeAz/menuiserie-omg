import Image from 'next/image'
import TestimonialCarousel from '@/components/TestimonialCarousel'

const figmaGoogleIcon = '/images/Icon-google.svg'
const googleLinkIcon = '/images/Icon-link.svg'
const GOOGLE_MAPS_URL = "https://www.google.com/maps/place/Ouest+Menuiserie+G%C3%A9n%C3%A9rale/@47.3451308,-2.4454434,9z/data=!4m10!1m2!2m1!1smenuisierie+omg+all%C3%A9e+des+liards!3m6!1s0x4805efdd2801437d:0x909cb761e26f124b!8m2!3d47.2631932!4d-1.4919423!15sCiBtZW51aXNlcmllIG9tZyBhbGzDqWUgZGVzIGxpYXJkc1oiIiBtZW51aXNlcmllIG9tZyBhbGzDqWUgZGVzIGxpYXJkc5IBCndvb2R3b3JrZXKaAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMnRTVkZJeFduQlpWMUY0VkZob1NWWkdUalJTVlhCVlpXZHJlVlpZWXhBQuABAPoBBAgAEB8!16s%2Fg%2F11x7y_kr4v?entry=ttu&g_ep=EgoyMDI2MDUxMi4wIKXMDSoASAFQAw%3D%3D"

interface Testimonial {
  auteur: string
  date: string
  lieu: string
  contenu: string
}

interface Confiance {
  stat1Valeur: string
  stat1Label: string
  stat2Valeur: string
  stat2Label: string
}

interface Props {
  testimonials: Testimonial[]
  confiance: Confiance | null
}

export default function SectionConfiance({ testimonials, confiance }: Props) {
  return (
    <section id="confiance" className="mt-[80px]">

      {/* ── Confiance mobile ────────────────────────────────────────── */}
      <div className="md:hidden flex flex-col gap-[40px] px-[20px] py-[10px]">
        <h2 className="text-[40px] font-medium text-black leading-[48px]">
          Nous sommes votre partenaire de confiance.
        </h2>

        {/* Stats mobile */}
        <div className="flex flex-col gap-[20px]">
          <div className="flex flex-col gap-1 pb-[20px] border-b border-[#645139]">
            <p className="text-[40px] font-medium text-[#b85a3c]">{confiance?.stat1Valeur ?? '—'}</p>
            <p className="text-[21px] text-black tracking-[-0.42px]">{confiance?.stat1Label ?? ''}</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[40px] font-medium text-[#b85a3c]">{confiance?.stat2Valeur ?? '—'}</p>
            <p className="text-[21px] text-black tracking-[-0.42px]">{confiance?.stat2Label ?? ''}</p>
          </div>
        </div>

        {/* Google badge mobile */}
        <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer">
        <div className="bg-white border border-[#e5e7eb] rounded-[14px] shadow-sm flex flex-col gap-3 px-4 py-3 w-[161px] transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-md cursor-pointer">
          <div className="flex items-center gap-2">
            <Image src={figmaGoogleIcon} alt="Google" width={18} height={18} className="size-[18px]" />
            <span className="font-medium text-[16px] text-[#101828]">Google</span>
            <Image src={googleLinkIcon} alt="" width={16} height={16} className="size-[16px] ml-auto" />
          </div>
          <div className="flex items-end justify-between">
            <span className="font-semibold text-[24px] text-[#9810fa] leading-5">5/5</span>
            <span className="text-[14px] text-[#4a5565]">2 avis</span>
          </div>
        </div>
        </a>

        {/* Verbatim mobile */}
        <TestimonialCarousel testimonials={testimonials} />
      </div>

      {/* ── Confiance desktop ───────────────────────────────────────── */}
      <div className="hidden md:block px-[60px] py-[10px]">
      <div className="flex flex-col gap-[40px]">
        <h2 className="text-[50px] font-normal leading-[56px] tracking-[-2px] text-black">
          Nous sommes votre partenaire de confiance.
        </h2>

        {/* Stats desktop */}
        <div className="flex gap-[68px] items-start">
          <div className="flex-1 flex flex-col gap-2 border-r border-black">
            <p className="text-[60px] font-medium text-[#b85a3c] leading-[72px]">{confiance?.stat1Valeur ?? '—'}</p>
            <p className="text-[32px] text-black tracking-[-0.64px] leading-[38px]">{confiance?.stat1Label ?? ''}</p>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <p className="text-[60px] font-medium text-[#b85a3c] leading-[72px]">{confiance?.stat2Valeur ?? '—'}</p>
            <p className="text-[32px] text-black tracking-[-0.64px] leading-[38px]">{confiance?.stat2Label ?? ''}</p>
          </div>
        </div>

        {/* Testimonial */}
        <div className="flex flex-col gap-[40px]">
          <TestimonialCarousel testimonials={testimonials} />

          {/* Google badge */}
          <div className="py-[30px]">
            <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer">
            <div className="bg-white border border-[#e5e7eb] rounded-[14px] shadow-sm flex flex-col gap-3 px-4 py-3 w-[161px] transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-md cursor-pointer">
              <div className="flex items-center gap-2">
                <Image src={figmaGoogleIcon} alt="Google" width={18} height={18} className="size-[18px]" />
                <span className="font-medium text-[16px] text-[#101828]">Google</span>
                <Image src={googleLinkIcon} alt="" width={16} height={16} className="size-[16px] ml-auto" />
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
