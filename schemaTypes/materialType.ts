import {defineField, defineType} from 'sanity'

export const materialType = defineType({
  name: 'material',
  title: 'Materials',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Material Name',
      type: 'object',
      fields: [
        defineField({
          name: 'en',
          title: 'English',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'hr',
          title: 'Croatian',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'image',
      title: 'Material Image',
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
        subtitle: hr ? `HR: ${hr}` : '',
      }
    },
  },
})
