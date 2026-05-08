import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col gap-[40px] mx-[40px] pt-[10px]">

      {/* ── Hero mobile ───────────────────────────────────────────── */}
      <div className="md:hidden border border-[#b8976d] p-[10px]">
        <div className="border-2 border-[#b8976d] relative h-[169px] overflow-hidden">
          <Image
            src="/images/hero-facade-terrasse.jpg"
            alt="Façade menuiserie"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-[#eb7a59] text-center">
            <p
              className="font-thunder font-black leading-none"
              style={{ fontSize: "100px", letterSpacing: "20px" }}
            >
              OMG
            </p>
            <p
              className="font-thunder font-bold leading-tight"
              style={{ fontSize: "25px", letterSpacing: "4.5px" }}
            >
              Ouest Menuiserie Générale
            </p>
          </div>
        </div>
      </div>

      {/* ── Hero desktop ──────────────────────────────────────────── */}
      <div className="hidden md:block border border-[#b8976d] p-[10px]">
        <div className="border-2 border-[#b8976d] relative h-screen overflow-hidden">
          <Image
            src="/images/hero-facade-terrasse.jpg"
            alt="Façade menuiserie"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />

          {/* OMG title + CTAs */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-[160px]">
            <div className="flex flex-col items-center gap-0 text-[#eb7a59] text-center">
              <p
                className="font-thunder font-black leading-none"
                style={{ fontSize: "180px", letterSpacing: "36px" }}
              >
                OMG
              </p>
              <p
                className="font-bold leading-[72px]"
                style={{ fontSize: "50px", letterSpacing: "9px" }}
              >
                Ouest Menuiserie Générale
              </p>
            </div>
            <div className="flex flex-col items-center gap-5 w-[400px]">
              <Link
                href="#services"
                className="btn-primary text-[30px] leading-[36px] w-full"
              >
                Découvrir nos services
              </Link>
              <Link
                href="/realisations"
                className="btn-primary text-[30px] leading-[36px] w-full"
              >
                Voir nos réalisations
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Description text box — mobile */}
      <div className="md:hidden border-2 border-[#b8976d] flex flex-col gap-[30px] px-[20px] py-[30px]">
        <p className="text-[28px] font-medium text-black leading-[30px]">
          Ouest Menuiserie Générale, aménagements intérieurs ou extérieurs.
        </p>
        <div className="border-t border-[#b8976d]" />
        <div className="text-[18px] text-black leading-[22px]">
          <p className="mb-0">
            Nous prenons en charge tous vos projets de rénovations ou créations
            extérieures et intérieures.
          </p>
          <p>
            Confiez-nous la création de vos rangements et de votre mobilier.
          </p>
        </div>
      </div>

      {/* Description text box — desktop */}
      <div className="hidden md:flex items-center gap-[50px] border-2 border-[#b8976d] px-5 py-[30px] min-h-[296px]">
        <p className="flex-1 text-[50px] text-black tracking-[-2px] leading-[56px]">
          Ouest Menuiserie Générale, aménagements intérieurs et extérieurs.
        </p>
        <div className="w-px self-stretch bg-[#b8976d]" />
        <div className="flex-1 text-[32px] text-black tracking-[-0.64px] leading-[38px]">
          <p className="mb-0">
            Nous prenons en charge tous vos projets de rénovations ou créations
            extérieures et intérieures.
          </p>
          <p>
            Confiez-nous la création de vos rangements et de votre mobilier.
          </p>
        </div>
      </div>
    </section>
  );
}
