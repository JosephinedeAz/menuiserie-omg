export const revalidate = 60

import { client } from '@/lib/sanity'
import Navbar from '@/components/Navbar'
import SectionContact from '@/components/SectionContact'
import Footer from '@/components/Footer'
import SectionHeaderRealisations from '@/components/SectionHeaderRealisations'
import SectionRealisationsGalerie from '@/components/SectionRealisationsGalerie'

export interface Projet {
  titre: string
  descriptionCourte: string
  images: any[]
  slug: { current: string }
  categorie: string
}

type ProjetsParCategorie = {
  'menuiserie-interieure': Projet[]
  'menuiserie-exterieure': Projet[]
  'ameublement': Projet[]
}

const CATEGORIES = ['menuiserie-interieure', 'menuiserie-exterieure', 'ameublement'] as const

export default async function RealisationsPage() {
  const [projets, pageRealisations]: [Projet[], { imageHero: any } | null] = await Promise.all([
    client.fetch(`*[_type == "projet"]{ titre, "descriptionCourte": coalesce(descriptionCourte, description), images, slug, categorie }`),
    client.fetch(`*[_type == "pageRealisations"][0]{ imageHero }`),
  ])

  const projetsParCategorie: ProjetsParCategorie = {
    'menuiserie-interieure': [],
    'menuiserie-exterieure': [],
    'ameublement': [],
  }

  for (const projet of projets) {
    if (CATEGORIES.includes(projet.categorie as typeof CATEGORIES[number])) {
      projetsParCategorie[projet.categorie as typeof CATEGORIES[number]].push(projet)
    }
  }

  return (
    <main className="bg-[#f6e9dd]">
      <Navbar />
      <div className="mb-[27px] md:mb-[40px]"><SectionHeaderRealisations imageHero={pageRealisations?.imageHero ?? null} /></div>
      <div className="mb-[27px] px-[30px] md:px-0 md:mb-[40px]"><SectionRealisationsGalerie projetsParCategorie={projetsParCategorie} /></div>
      <div className="mt-[130px] mb-[40px] md:hidden md:mb-[60px]"><SectionContact mobile /></div>
      <div className="mt-[130px] mb-[40px] hidden md:block md:mb-[60px]"><SectionContact /></div>
      <div className="mt-[130px] mb-[40px] md:hidden md:mb-[60px]"><Footer mobile /></div>
      <div className="mt-[130px] mb-[40px] hidden md:block md:mb-[60px]"><Footer /></div>
    </main>
  )
}
