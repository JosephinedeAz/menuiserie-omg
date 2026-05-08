import Image from "next/image";
import Link from "next/link";

export default function SectionRealisation() {
  return (
    <section id="realisations" className="mt-[60px]">

      {/* ── Réalisation mobile ──────────────────────────────────────── */}
      <div className="md:hidden flex flex-col gap-[20px] mx-[20px]">
        <div className="relative h-[512px] border-2 border-[#b8976d] overflow-hidden">
          <Image
            src="/images/realisation-salon-interieur.png"
            alt="Réalisation intérieure — salon"
            fill
            className="object-cover"
          />
        </div>
        <p className="text-[18px] text-black leading-[20px]">
          Découvrez nos nombreuses réalisations et inspirez vous&nbsp;: chaque
          chantier est unique, comme votre espace de vie.
        </p>
        <Link
          href="/realisations"
          className="btn-secondary text-[15px] tracking-[0.15px] text-black font-medium self-start"
        >
          Voir nos réalisations
        </Link>
      </div>

      {/* ── Réalisation desktop ─────────────────────────────────────── */}
      <div className="hidden md:flex gap-[40px] items-end mx-[40px] px-[60px] py-[10px]">
        <div className="flex flex-col gap-[20px] items-start shrink-0">
          <p className="text-[25px] text-black leading-[36px] w-[503px]">
            Découvrez nos nombreuses réalisations et inspirez vous&nbsp;: chaque
            chantier est unique, comme votre espace de vie.
          </p>
          <Link
            href="/realisations"
            className="btn-tertiary text-[25px] font-medium text-black tracking-[0.2px]"
          >
            voir nos réalisations
          </Link>
        </div>
        <div className="flex-1 relative h-[512px]">
          <Image
            src="/images/realisation-salon-interieur.png"
            alt="Réalisation intérieure — salon"
            fill
            className="object-cover"
          />
        </div>
      </div>

    </section>
  );
}
