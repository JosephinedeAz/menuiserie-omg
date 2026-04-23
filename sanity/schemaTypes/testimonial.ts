import { defineField, defineType } from 'sanity'

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Témoignage',
  type: 'document',
  fields: [
    defineField({
      name: 'auteur',
      title: 'Auteur',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'string',
      description: 'Ex: mars 2025',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'lieu',
      title: 'Lieu',
      type: 'string',
      description: 'Ex: Nantes',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'contenu',
      title: 'Témoignage',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
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
      title: 'auteur',
      subtitle: 'contenu',
    },
  },
})
