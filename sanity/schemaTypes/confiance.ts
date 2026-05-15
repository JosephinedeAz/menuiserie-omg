import { defineField, defineType } from 'sanity'

export const confianceType = defineType({
  name: 'confiance',
  title: 'Section Confiance',
  type: 'document',
  fields: [
    defineField({
      name: 'stat1Valeur',
      title: 'Stat 1 — Valeur',
      type: 'string',
      description: 'Ex: 60 projets',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'stat1Label',
      title: 'Stat 1 — Label',
      type: 'string',
      description: 'Ex: en 2025',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'stat2Valeur',
      title: 'Stat 2 — Valeur',
      type: 'string',
      description: 'Ex: 100%',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'stat2Label',
      title: 'Stat 2 — Label',
      type: 'string',
      description: 'Ex: satisfaction client',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: 'stat1Valeur' },
  },
})
