import {defineField, defineType} from 'sanity'

export const collectionType = defineType({
  name: 'collection',
  title: 'Collections',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Collection Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'season',
      title: 'Season/Year',
      type: 'string',
      description: 'e.g., Spring 2024, Summer Collection'
    }),
    defineField({
      name: 'image',
      title: 'Collection Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured Collection',
      type: 'boolean',
      initialValue: false
    })
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'season',
      media: 'image'
    }
  }
})