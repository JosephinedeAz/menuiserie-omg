export const revalidate = 60

import { client } from '@/lib/sanity'
import Navbar from '@/components/Navbar'
import SectionContact from '@/components/SectionContact'
import Footer from '@/components/Footer'
import SectionHeaderRealisations from '@/components/SectionHeaderRealisations'
import SectionRealisationsGalerie from '@/components/SectionRealisationsGalerie'

export interface Realisation {
  titre: string
  descriptionCourte: string
  imageHero: any
  slug: { current: string }
  categorie: string
}

type RealisationsParCategorie = {
  'menuiserie-interieure': Realisation[]
  'menuiserie-exterieure': Realisation[]
  'ameublement': Realisation[]
}

const CATEGORIES = ['menuiserie-interieure', 'menuiserie-exterieure', 'ameublement'] as const

export default async function RealisationsPage() {
  const [realisations, pageRealisations]: [Realisation[], { imageHero: any } | null] = await Promise.all([
    client.fetch(`*[_type == "realisation"] | order(ordre asc){ titre, descriptionCourte, imageHero, slug, categorie }`),
    client.fetch(`*[_type == "pageRealisations"][0]{ imageHero }`),
  ])

  const realisationsParCategorie: RealisationsParCategorie = {
    'menuiserie-interieure': [],
    'menuiserie-exterieure': [],
    'ameublement': [],
  }

  for (const realisation of realisations) {
    if (CATEGORIES.includes(realisation.categorie as typeof CATEGORIES[number])) {
      realisationsParCategorie[realisation.categorie as typeof CATEGORIES[number]].push(realisation)
    }
  }

  return (
    <main className="bg-[#f6e9dd]">
      <Navbar />
      <div className="mb-[27px] md:mb-[40px]"><SectionHeaderRealisations imageHero={pageRealisations?.imageHero ?? null} /></div>
      <div className="mb-[27px] px-[30px] md:px-0 md:mb-[40px]"><SectionRealisationsGalerie realisationsParCategorie={realisationsParCategorie} /></div>
      <div className="mt-[130px] md:hidden"><SectionContact mobile /></div>
      <div className="mt-[130px] hidden md:block"><SectionContact /></div>
      <div className="mt-[130px] md:hidden"><Footer mobile /></div>
      <div className="mt-[130px] hidden md:block"><Footer /></div>
    </main>
  )
}
