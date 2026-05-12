import { MetadataRoute } from 'next'
import { client } from '@/lib/sanity'

const BASE_URL = 'https://menuiserie-omg.fr'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const realisations: { slug: string }[] = await client.fetch(
    `*[_type == "realisation"]{ "slug": slug.current }`
  )

  const serviceSlugs: string[] = await client.fetch(
    `*[_type == "service" && defined(slug.current)].slug.current`
  )

  return [
    {
      url: BASE_URL,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/realisations`,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    ...realisations.map(({ slug }) => ({
      url: `${BASE_URL}/realisations/${slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...serviceSlugs.map((slug) => ({
      url: `${BASE_URL}/services/${slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
  ]
}
