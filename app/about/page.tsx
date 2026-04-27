import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import MegaMenu from '@/components/MegaMenu'
import CardService from '@/components/CardService'
import SectionContact from '@/components/SectionContact'
import Footer from '@/components/Footer'

const services = [
  {
    img: '/images/service-menuiserie-interieure.png',
    alt: 'Parquet intérieur',
    title: 'Menuiserie intérieure',
    subtitle: 'parquet, cuisines, agencement',
    href: '/services/menuiserie-interieure',
  },
  {
    img: '/images/service-menuiserie-exterieure.png',
    alt: 'Terrasse extérieure',
    title: 'Menuiserie extérieure',
    subtitle: 'terrasse, palissade, aménagements durables',
    href: '/services/menuiserie-exterieure',
  },
  {
    img: '/images/service-mobilier-lampe.png',
    alt: 'Mobilier et lampe',
    title: 'Ameublement',
    subtitle: 'rangement & mobilier',
    href: '/services/ameublement',
  },
]

function SectionAboutServices() {
  return (
    <section className="mt-[60px]">

      {/* Mobile */}
      <div className="md:hidden flex flex-col gap-[10px] py-[20px] px-[10px]">
        {services.map((s) => (
          <Link key={s.href} href={s.href}>
            <CardService
              img={s.img}
              alt={s.alt}
              title={s.title}
              subtitle={s.subtitle}
              mobile
            />
          </Link>
        ))}
      </div>

      {/* Desktop */}
      <div className="hidden md:block mx-[40px] px-[60px]">
        <div className="flex flex-col gap-[30px]">
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-[50px] leading-[56px] tracking-[-2px] text-black">
              Nos savoir-faire.
            </h1>
            <p className="text-[32px] leading-[38px] tracking-[-0.64px] text-black">
              Quel que soit votre besoin, nous avons l&apos;expertise pour y répondre.
            </p>
          </div>

          <div className="flex rounded-[10px] overflow-hidden">
            {services.map((s) => (
              <CardService
                key={s.href}
                img={s.img}
                alt={s.alt}
                title={s.title}
                subtitle={s.subtitle}
              />
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}

export default function AboutPage() {
  return (
    <main className="bg-[#f6e9dd]">
      <Navbar />
      <MegaMenu />

      {/* ── Header ──────────────────────────────────────────────────── */}
      <section className="relative bg-[#8c9e8c] px-[60px] pt-[20px] pb-[80px] flex flex-col gap-[40px] rounded-b-[120px] overflow-visible">

        {/* Titre */}
        <div className="w-full px-[50px]">
          <p className="font-black text-[70px] leading-[80px] tracking-[-2.8px] text-[#833e28]">
            Créer, transformer, révéler le potentiel d&apos;un espace
          </p>
        </div>

        {/* Texte seul */}
        <div className="w-full pr-[580px] border-t border-b border-[#b8976d] py-[40px] font-normal text-[25px] text-black flex flex-col gap-[16px]">
          <p className="leading-[36px]">
            Romain Glémain est artisan menuisier et fondateur de{' '}
            <span className="font-bold text-[#833e28]">Ouest Menuiserie Générale</span>
            .<br />
            Sa passion pour le bois et l&apos;aménagement est née sur le terrain, dès les
            premières années au sein de Decobois, à Lorient, où il apprend la rigueur
            de l&apos;agencement intérieur et extérieur.
          </p>
          <p className="leading-[36px]">
            Aujourd&apos;hui, Romain met ses compétences techniques, son expérience et sa
            créativité au service de ses clients.<br />
            Ouest Menuiserie Générale est née de cette envie&nbsp;: proposer un
            accompagnement complet, humain et maîtrisé, pour tous les projets
            d&apos;aménagement, du plus simple au plus ambitieux.
          </p>
        </div>

        {/* Image en absolute — dépasse vers le bas, alignée à droite */}
        <div className="absolute bottom-[-200px] right-[60px] h-[498px] w-[545px]">
          <Image
            src="/images/romain__ID.jpeg"
            alt="Romain Glémain, artisan menuisier fondateur de Ouest Menuiserie Générale"
            fill
            className="object-cover rounded-none"
          />
        </div>

      </section>

      {/* Spacer pour compenser le débordement de l'image */}
      <div className="h-[200px]" />

      <SectionAboutServices />

      {/* ── Manifeste ───────────────────────────────────────────────── */}
      <section className="mt-[40px] px-[40px] py-[10px] flex flex-col items-start">

        <div className="w-full flex items-end justify-between gap-[0px]">

          {/* Colonne gauche — "Philosophie" vertical */}
          <div className="flex items-end self-stretch">
            <div className="px-[10px] flex h-full items-start">
              <div className="h-[438px] w-[80px] flex items-center justify-center">
                <div className="-rotate-90 flex-none">
                  <p className="font-bold text-[70px] leading-[80px] tracking-[3.5px] text-[#b85a3c] text-center whitespace-nowrap">
                    Philosophie
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne droite — titre + texte */}
          <div className="flex-1 flex flex-col gap-[15px] items-start">

            <p className="font-black text-[70px] leading-[80px] tracking-[-2.8px] text-[#b85a3c]">
              Le mot de l&apos;artisan
            </p>

            <div className="font-normal text-[25px] leading-[36px] text-black flex flex-col gap-[0px]">
              <p>
                Pour moi, la menuiserie ne se limite pas à l&apos;assemblage de matériaux.
                C&apos;est un métier d&apos;écoute, de vision et de précision. Chaque projet est
                une rencontre entre l&apos;usage, l&apos;esthétique et les attentes de mes clients.
                J&apos;aime observer un lieu, comprendre ses contraintes et ses usages pour
                imaginer ce qu&apos;il pourrait devenir.
                <br />
                Mon objectif&nbsp;: concevoir des espaces sur mesure, fonctionnels et
                chaleureux, qui simplifient le quotidien et reflètent la personnalité
                de ceux qui y vivent.
              </p>
              <p>
                Je crois profondément que même les petits espaces méritent de grandes idées.
                <br />
                Et je mets un point d&apos;honneur à accompagner mes clients du conseil à
                la réalisation, avec honnêteté, transparence et exigence.
              </p>
              <p>
                Chaque chantier est pour moi l&apos;occasion d&apos;allier savoir-faire et créativité
              </p>
            </div>

          </div>

        </div>

      </section>

      <div className="md:hidden"><SectionContact mobile /></div>
      <div className="hidden md:block"><SectionContact /></div>
      <div className="md:hidden"><Footer mobile /></div>
      <div className="hidden md:block"><Footer /></div>
    </main>
  )
}
