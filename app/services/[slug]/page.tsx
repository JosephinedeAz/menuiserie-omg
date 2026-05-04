export const revalidate = 60

import { notFound } from 'next/navigation'
import { client } from '@/lib/sanity'
import Navbar from '@/components/Navbar'
import SectionServiceHeader from '@/components/SectionServiceHeader'
import SectionServiceFigures from '@/components/SectionServiceFigures'
import SectionServiceImage from '@/components/SectionServiceImage'
import SectionServicePhilosophie from '@/components/SectionServicePhilosophie'
import SectionServiceRealisations from '@/components/SectionServiceRealisations'
import SectionConfiance from '@/components/SectionConfiance'
import SectionContact from '@/components/SectionContact'
import Footer from '@/components/Footer'

const SLUGS = ['menuiserie-exterieure', 'menuiserie-interieure', 'ameublement'] as const

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }))
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const [service, projets] = await Promise.all([
    client.fetch(
      `*[_type == "service" && slug.current == $slug][0]{
        titre,
        sousTitre,
        description,
        imageHero,
        imageSecondaire
      }`,
      { slug }
    ),
    client.fetch(
      `*[_type == "projet" && categorie == $slug]{
        titre,
        description,
        images,
        slug
      }`,
      { slug }
    ),
  ])

  if (!service) { notFound() }

  console.log('slug:', slug)
  console.log('projets:', projets)

  return (
    <main className="bg-[#f6e9dd] overflow-x-hidden">
      <Navbar />
      <SectionServiceHeader
        titre={service?.titre}
        description={service?.description}
        imageHero={service?.imageHero}
      />
      <SectionServiceFigures />
      <SectionServiceImage
        className="mt-[50px] mb-[50px]"
        image={service?.imageSecondaire}
        titre={service?.titre ?? ''}
      />
      <SectionServicePhilosophie />
      <SectionServiceRealisations className="mt-20" projets={projets} />
      <SectionConfiance />
      <div className="mt-[130px] md:hidden"><SectionContact mobile /></div>
      <div className="mt-[130px] hidden md:block"><SectionContact /></div>
      <div className="mt-[130px] md:hidden"><Footer mobile /></div>
      <div className="mt-[130px] hidden md:block"><Footer /></div>
    </main>
  )
}
