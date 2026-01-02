import {defineField, defineType} from 'sanity'

export const categoryType = defineType({
  name: 'category',
  title: 'Categories',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Category Name',
      type: 'object',
      fields: [
        defineField({
          name: 'en',
          title: 'English',
          type: 'string',
          validation: (Rule) => Rule.required(),
          description: 'English name for category',
        }),
        defineField({
          name: 'hr',
          title: 'Croatian',
          type: 'string',
          validation: (Rule) => Rule.required(),
          description: 'Croatian translation of category name',
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
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({ 
      name: 'image',
      title: 'Category Image',
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
      media: 'image',
    },
    prepare({en, hr}) {
      return {
        title: en || 'No name',
        subtitle: hr ? 'HR: ' + hr : ''
      }
    }
  }
})
