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

interface Testimonial {
  auteur: string
  date: string
  lieu: string
  contenu: string
}

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

  const [service, projets, testimonials]: [any, any[], Testimonial[]] = await Promise.all([
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
      `*[_type == "realisation" && categorie == $slug] | order(ordre asc){
        titre,
        "sousTitre": descriptionCourte,
        description,
        imageHero,
        slug
      }`,
      { slug }
    ),
    client.fetch(
      `*[_type == "testimonial"] | order(ordre asc){ auteur, date, lieu, contenu }`
    ),
  ])

  if (!service) { notFound() }

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
      <div className="px-[30px]"><SectionServicePhilosophie /></div>
      <SectionServiceRealisations className="mt-20" projets={projets} />
      <SectionConfiance testimonials={testimonials} />
      <div className="mt-[130px]"><SectionContact /></div>
      <div className="mt-[130px]"><Footer /></div>
    </main>
  )
}
