import {defineField, defineType} from 'sanity'

export const colorType = defineType({
  name: 'color',
  title: 'Colors',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Color Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'hex',
      title: 'Hex Code',
      type: 'string',
      validation: Rule => Rule.required()
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'type'
    }
  }
})