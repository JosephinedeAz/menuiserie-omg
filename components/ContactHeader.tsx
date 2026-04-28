export default function ContactHeader() {
  return (
    <>
      {/* Mobile */}
      <section className="md:hidden bg-[#b85a3c] mx-[16px] px-[12px] py-[10px] pb-[70px] rounded-b-[30px] flex flex-col gap-[10px]">
        <div className="px-[10px] py-[10px]">
          <p className="font-black text-[40px] leading-[48px] tracking-[-1.6px] text-[#2c332c]">
            Donnez vie à votre projet.
          </p>
        </div>
        <div className="py-[4px]">
          <p className="font-normal text-[17px] leading-[24px] text-[#f1f1f1]">
            Ce premier contact est le début d&apos;un échange. Parlez-nous de vos idées, de vos
            envies ou de votre contexte&nbsp;: nous prendrons le temps de vous lire et de vous
            répondre sous trois jours ouvrés.
          </p>
        </div>
      </section>

      {/* Desktop */}
      <section className="hidden md:flex bg-[#b85a3c] px-[120px] pt-[40px] pb-[70px] rounded-b-[120px] flex-col gap-[24px] items-center">
        <p className="font-black text-[70px] leading-[80px] tracking-[-2.8px] text-[#2c332c] text-center">
          Donnez vie à votre projet.
        </p>
        <p className="font-normal text-[32px] leading-[38px] tracking-[-0.64px] text-[#f6e9dd] text-center max-w-[1100px]">
          Ce premier contact est le début d&apos;un échange. Parlez-nous de vos idées, de vos
          envies ou de votre contexte&nbsp;: nous prendrons le temps de vous lire et de vous
          répondre sous trois jours ouvrés.
        </p>
      </section>
    </>
  )
}
