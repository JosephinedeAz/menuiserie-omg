import Link from "next/link";

export default function SectionContact() {
  return (
    <section id="contact">
      <div className="mx-[10px] md:mx-[30px] p-[10px] border border-[#833e28]">
        <div className="bg-[#f5efe7] w-full flex flex-col items-center gap-[32px] px-[40px] md:px-[80px] py-[70px]">
          <div className="flex flex-col gap-[25px] items-center w-full">
            <h2
              className="font-medium text-center tracking-[-1.32px] leading-[37px] text-[33px] md:text-[48px] md:leading-[48px] md:tracking-normal"
              style={{ color: "var(--primary-500)" }}
            >
              Parlons de votre projet!
            </h2>
            <p
              className="text-center text-[17px] leading-[24px] md:text-[25px] md:leading-[36px] md:max-w-[637px]"
              style={{ color: "rgba(74, 84, 74, 0.8)" }}
            >
              Que vous souhaitiez échanger autour de votre projet ou demander un
              devis, nous prenons le temps de comprendre vos besoins et de vous
              accompagner avec attention et expertise.
            </p>
          </div>
          <div className="flex flex-col gap-[8px] w-full md:flex-row md:gap-4 md:w-auto md:items-center md:justify-center">
            <Link href="/contact" className="btn-primary">
              Demander un devis gratuit
            </Link>
            <Link href="/contact" className="btn-primary">
              Parlons-en
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
