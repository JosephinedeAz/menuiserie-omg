import Link from "next/link";

export default function SectionContact() {
  return (
    <section
      id="contact"
      className="border border-[#833e28] mt-[80px]"
    >
      <div
        className="bg-[#f5efe7] flex flex-col gap-8 items-center px-[80px] py-[70px]"
      >
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
            style={{
              fontSize: "var(--body-01)",
              color: "rgba(74, 84, 74, 0.8)",
            }}
          >
            Que vous souhaitiez échanger autour de votre projet ou demander un
            devis, nous prenons le temps de comprendre vos besoins et de vous
            accompagner avec attention et expertise.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex gap-4 items-center justify-center">
          <Link
            href="/contact"
            className="btn-primary text-[25px] font-medium tracking-[0.25px]"
          >
            Demander un devis gratuit
          </Link>
          <Link
            href="/contact"
            className="btn-primary text-[25px] font-medium tracking-[0.25px]"
          >
            Parlons-en
          </Link>
        </div>
      </div>
    </section>
  );
}
