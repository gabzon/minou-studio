import {defineField, defineType} from 'sanity'

export const genreType = defineType({
  name: 'genre',
  title: 'Genres',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Genre Name',
      type: 'object',
      fields: [
        defineField({
          name: 'en',
          title: 'English',
          type: 'string',
          validation: (Rule) => Rule.required(),
          description: 'English name for genre',
        }),
        defineField({
          name: 'hr',
          title: 'Croatian',
          type: 'string',
          validation: (Rule) => Rule.required(),
          description: 'Croatian translation of genre name',
        }),
      ],
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name.en',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Genre Description',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Genre Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      en: 'name.en',
      hr: 'name.hr',
    },
    prepare({en, hr}) {
      return {
        title: en || 'No name',
        subtitle: hr ? 'HR: ' + hr : '',
      }
    }
  },
})
