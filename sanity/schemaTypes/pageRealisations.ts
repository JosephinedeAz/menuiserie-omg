export const pageRealisationsType = {
  name: 'pageRealisations',
  title: 'Page Réalisations',
  type: 'document',
  fields: [
    {
      name: 'imageHero',
      title: 'Image hero',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Texte alternatif',
          type: 'string',
        },
      ],
    },
    {
      name: 'titreSeo',
      title: 'Titre SEO',
      type: 'string',
      description: 'Affiché dans les résultats Google (max 60 caractères)',
    },
    {
      name: 'descriptionSeo',
      title: 'Description SEO',
      type: 'text',
      rows: 3,
      description: 'Affiché dans les résultats Google (max 160 caractères)',
    },
  ],
  preview: {
    select: {
      title: 'titreSeo',
      media: 'imageHero',
    },
  },
}
