import Link from "next/link";

interface SectionContactProps {
  mobile?: boolean;
}

export default function SectionContact({ mobile }: SectionContactProps) {
  if (mobile) {
    return (
      <section id="contact" className="mt-[80px]">
        <div className="mx-[10px] md:mx-[30px] p-[10px] border border-[#833e28]">
          <div className="bg-[#f5efe7] w-full flex flex-col items-center gap-[32px] px-[40px] md:px-[80px] py-[70px]">
            <div className="flex flex-col gap-[25px] items-center w-full">
              <h2
                className="font-medium text-center tracking-[-1.32px] leading-[37px]"
                style={{ fontSize: "33px", color: "var(--primary-500)" }}
              >
                Parlons de votre projet!
              </h2>
              <p
                className="text-center leading-[24px]"
                style={{ fontSize: "17px", color: "rgba(74, 84, 74, 0.8)" }}
              >
                Que vous souhaitiez échanger autour de votre projet ou demander un
                devis, nous prenons le temps de comprendre vos besoins et de vous
                accompagner avec attention et expertise.
              </p>
            </div>
            <div className="flex flex-col gap-[8px] w-full">
              <Link href="/contact" className="btn-primary text-[25px] font-medium tracking-[0.25px] w-full">
                Demander un devis gratuit
              </Link>
              <Link href="/contact" className="btn-primary text-[25px] font-medium tracking-[0.25px] w-full">
                Parlons-en
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="mt-[80px]">
      <div className="mx-[10px] md:mx-[30px] p-[10px] border border-[#833e28]">
        <div className="bg-[#f5efe7] w-full flex flex-col items-center gap-[32px] px-[40px] md:px-[80px] py-[70px]">
          {/* Texte */}
          <div className="flex flex-col gap-[25px] items-center w-full">
            <h2
              className="font-medium text-center leading-[48px]"
              style={{ fontSize: "48px", color: "var(--primary-500)" }}
            >
              Parlons de votre projet!
            </h2>
            <p
              className="text-center leading-[36px] max-w-[637px]"
              style={{ fontSize: "var(--body-01)", color: "rgba(74, 84, 74, 0.8)" }}
            >
              Que vous souhaitiez échanger autour de votre projet ou demander un
              devis, nous prenons le temps de comprendre vos besoins et de vous
              accompagner avec attention et expertise.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex gap-4 items-center justify-center">
            <Link href="/contact" className="btn-primary text-[25px] font-medium tracking-[0.25px]">
              Demander un devis gratuit
            </Link>
            <Link href="/contact" className="btn-primary text-[25px] font-medium tracking-[0.25px]">
              Parlons-en
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
