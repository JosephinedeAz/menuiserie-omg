export const revalidate = 60

import type { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'
import { client } from '@/lib/sanity'
import { TESTIMONIALS_QUERY } from '@/lib/queries'
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

export async function generateStaticParams() {
  const slugs = await client.fetch<string[]>(
    `*[_type == "service" && defined(slug.current)].slug.current`
  )
  return slugs.map((slug) => ({ slug }))
}

const SERVICE_LABELS: Record<string, string> = {
  'menuiserie-interieure': 'Menuiserie intérieure',
  'menuiserie-exterieure': 'Menuiserie extérieure',
  'ameublement': 'Ameublement sur mesure',
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params
  const service = await client.fetch<{ titre: string; sousTitre: string } | null>(
    `*[_type == "service" && slug.current == $slug][0]{ titre, sousTitre }`,
    { slug }
  )
  const label = SERVICE_LABELS[slug] ?? service?.titre ?? slug
  return {
    title: label,
    description: service?.sousTitre ?? `Découvrez nos prestations de ${label.toLowerCase()} à Nantes et alentours.`,
    openGraph: {
      title: `${label} — Ouest Menuiserie Générale`,
      description: service?.sousTitre ?? '',
      url: `/services/${slug}`,
    },
  }
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
    client.fetch(TESTIMONIALS_QUERY),
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
