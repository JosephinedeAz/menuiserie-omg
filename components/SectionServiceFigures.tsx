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
    <section className="flex flex-col gap-[35px] items-center px-[40px] py-[10px]">
      <div className="flex gap-[50px] items-start w-full">
        {etapes.map((etape) => (
          <div key={etape.numero} className="flex flex-1 flex-col gap-[5px] px-[5px] text-black">
            <p className="font-black text-[70px] leading-[80px] tracking-[-0.04em]">
              {etape.numero}
            </p>
            <p className="text-[25px] leading-[36px] whitespace-pre-line">
              {etape.texte}
            </p>
          </div>
        ))}
      </div>
      <Link
        href="/a-propos"
        className="btn-secondary text-[25px] font-medium tracking-[0.01em]"
      >
        Découvrez notre philosophie
      </Link>
    </section>
  )
}
