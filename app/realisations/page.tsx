export const revalidate = 60

import { client } from '@/lib/sanity'
import Navbar from '@/components/Navbar'
import SectionContact from '@/components/SectionContact'
import Footer from '@/components/Footer'
import SectionRealisationsHero from '@/components/SectionRealisationsHero'
import SectionRealisationsGalerie from '@/components/SectionRealisationsGalerie'

export interface Projet {
  titre: string
  description: string
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
  const projets: Projet[] = await client.fetch(
    `*[_type == "projet"]{ titre, description, images, slug, categorie }`
  )

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
      <SectionRealisationsHero />
      <SectionRealisationsGalerie projetsParCategorie={projetsParCategorie} />
      <div className="md:hidden"><SectionContact mobile /></div>
      <div className="hidden md:block"><SectionContact /></div>
      <div className="md:hidden"><Footer mobile /></div>
      <div className="hidden md:block"><Footer /></div>
    </main>
  )
}
