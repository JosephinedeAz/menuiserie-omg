import { client } from '@/lib/sanity'

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
        imageHero
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

  return (
    <main>
      <h1>{service?.titre}</h1>
      <p>{service?.description}</p>
    </main>
  )
}
