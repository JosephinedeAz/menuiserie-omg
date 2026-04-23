export const revalidate = 60
export const dynamicParams = true

import { notFound } from 'next/navigation'
import { client } from '@/lib/sanity'
import Navbar from '@/components/Navbar'
import MegaMenu from '@/components/MegaMenu'
import SectionHeroRealisation from '@/components/SectionHeroRealisation'

export async function generateStaticParams() {
  const slugs: { slug: string }[] = await client.fetch(
    `*[_type == "realisation"]{ "slug": slug.current }`
  )
  return slugs.map(({ slug }) => ({ slug }))
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
      <MegaMenu />
      <SectionHeroRealisation
        titre={realisation.titre}
        imageHeroUrl={realisation.imageHeroUrl}
        imageHeroAlt={realisation.imageHeroAlt}
      />
    </main>
  )
}
