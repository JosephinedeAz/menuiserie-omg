import { defineField, defineType } from 'sanity'

export const realisationType = defineType({
  name: 'realisation',
  title: 'Réalisation',
  type: 'document',
  fields: [
    defineField({
      name: 'titre',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'imageHero',
      title: 'Image principale',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Texte alternatif',
          type: 'string',
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'detailsTechniques',
      title: 'Détails techniques',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'imagesGalerie',
      title: 'Galerie d\'images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              title: 'Texte alternatif',
              type: 'string',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'titre' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categorie',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          { title: 'Menuiserie extérieure', value: 'menuiserie-exterieure' },
          { title: 'Menuiserie intérieure', value: 'menuiserie-interieure' },
          { title: 'Ameublement', value: 'ameublement' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'descriptionCourte',
      title: 'Description courte',
      type: 'string',
      description: 'Affichée sur les cards (max ~80 caractères)',
    }),
    defineField({
      name: 'ordre',
      title: "Ordre d'affichage",
      type: 'number',
      description: "Nombre entier — le plus petit s'affiche en premier",
    }),
  ],
  preview: {
    select: {
      title: 'titre',
      subtitle: 'categorie',
      media: 'imageHero',
    },
  },
})
