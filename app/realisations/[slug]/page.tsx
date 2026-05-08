export const revalidate = 60
export const dynamicParams = true

import type { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'
import { client } from '@/lib/sanity'
import Navbar from '@/components/Navbar'
import SectionHeroRealisation from '@/components/SectionHeroRealisation'
import SectionDescriptionRealisation from '@/components/SectionDescriptionRealisation'
import SectionIllustrationRealisation from '@/components/SectionIllustrationRealisation'
import SectionCTARealisation from '@/components/SectionCTARealisation'
import SectionContact from '@/components/SectionContact'
import Footer from '@/components/Footer'

export async function generateStaticParams() {
  const slugs: { slug: string }[] = await client.fetch(
    `*[_type == "realisation"]{ "slug": slug.current }`
  )
  return slugs.map(({ slug }) => ({ slug }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params
  const realisation = await client.fetch<{ titre: string; descriptionCourte: string; imageHeroUrl: string } | null>(
    `*[_type == "realisation" && slug.current == $slug][0]{
      titre,
      descriptionCourte,
      "imageHeroUrl": imageHero.asset->url
    }`,
    { slug }
  )
  if (!realisation) return {}
  return {
    title: realisation.titre,
    description: realisation.descriptionCourte ?? `Réalisation de menuiserie : ${realisation.titre}`,
    openGraph: {
      title: realisation.titre,
      description: realisation.descriptionCourte ?? '',
      url: `/realisations/${slug}`,
      images: realisation.imageHeroUrl ? [{ url: realisation.imageHeroUrl }] : [],
    },
  }
}

export default async function RealisationPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const realisation = await client.fetch(
    `*[_type == "realisation" && slug.current == $slug][0]{
      titre,
      "imageHeroUrl": imageHero.asset->url,
      "imageHeroAlt": imageHero.alt,
      description,
      detailsTechniques,
      "imagesGalerie": imagesGalerie[]{
        "url": asset->url,
        alt
      }
    }`,
    { slug }
  )

  if (!realisation) notFound()

  return (
    <main className="bg-[#f6e9dd]">
      <Navbar />
      <SectionHeroRealisation
        titre={realisation.titre}
        imageHeroUrl={realisation.imageHeroUrl}
        imageHeroAlt={realisation.imageHeroAlt}
      />
      <SectionDescriptionRealisation
        description={realisation.description}
        detailsTechniques={realisation.detailsTechniques}
      />
      <SectionIllustrationRealisation images={realisation.imagesGalerie ?? []} />
      <SectionCTARealisation />
      <div className="mt-[130px]"><SectionContact /></div>
      <div className="mt-[130px]"><Footer /></div>
    </main>
  )
}
