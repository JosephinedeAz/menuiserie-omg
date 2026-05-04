import Link from 'next/link'

const etapes = [
  {
    numero: '01.',
    texte: `Nous échangeons sur vos besoins, vos envies et vos inspirations. Nous établissons ensuite une étude personnalisée de votre projet : du devis aux mesures des espaces, des plans aux commandes.\n\nNous vous accompagnons à chaque étape et vous conseillons dans vos projets.`,
  },
  {
    numero: '02.',
    texte: `Au sein de notre atelier, nous concevons chaque détail imaginé à vos côtés. Nous vous garantissons un accompagnement personnalisé jusqu'au processus de finition.`,
  },
  {
    numero: '03.',
    texte: `La pose est la plus attendue. Elle représente la concrétisation de tout un projet que nous avons imaginé et conçu ensemble. Pour vous, comme pour nous, il s'agit d'un moment précieux.`,
  },
]

export default function SectionServiceFigures() {
  return (
    <section className="flex flex-col gap-[28px] items-center px-[12px] py-[10px] mt-20 md:px-[40px]">
      <div className="flex flex-col gap-[30px] items-start w-full md:flex-row md:gap-[50px]">
        {etapes.map((etape) => (
          <div key={etape.numero} className="flex w-full flex-col gap-[5px] text-black md:flex-1">
            <p className="font-black text-[47px] leading-[54px] tracking-[-1.88px] md:text-[70px] md:leading-[80px] md:tracking-[-0.04em]">
              {etape.numero}
            </p>
            <p className="text-[17px] leading-[24px] whitespace-pre-line md:text-[25px] md:leading-[36px]">
              {etape.texte}
            </p>
          </div>
        ))}
      </div>
      <Link
        href="/about"
        className="btn-secondary"
      >
        Découvrez notre philosophie
      </Link>
    </section>
  )
}
