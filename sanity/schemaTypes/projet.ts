import { defineField, defineType } from 'sanity'

export const projetType = defineType({
  name: 'projet',
  title: 'Card réalisation',
  type: 'document',
  fields: [
    defineField({
      name: 'titre',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'titre',
      },
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
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'descriptionCourte',
      title: 'Description courte',
      type: 'string',
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image' }],
    }),
  ],
})
