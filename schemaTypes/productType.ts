import {defineField, defineType} from 'sanity'

export const productType = defineType({
  name: 'products',
  title: 'Products',
  type: 'document',
  groups: [
    {
      name: 'classification',
      title: 'Classification',
    },
    {
      name: 'pricing',
      title: 'Pricing',
    },
    {
      name: 'specifications',
      title: 'Specifications',
    },
    {
      name: 'inventory',
      title: 'Inventory & Availability',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    // Basic Information
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      description: 'The name of the jewelry piece',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL-friendly identifier',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'video',
      title: 'Video',
      type: 'url',
      description: 'Video URL for product',
    }),

    // Images
    defineField({
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              description: 'Important for SEO and accessibility',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),

    // Description (multilingual)
    defineField({
      name: 'description',
      title: 'Full Description',
      type: 'object',
      fields: [
        defineField({
          name: 'en',
          title: 'English',
          type: 'array',
          of: [{type: 'block'}],
          description: 'Detailed product description in English with rich text formatting',
        }),
        defineField({
          name: 'hr',
          title: 'Croatian',
          type: 'array',
          of: [{type: 'block'}],
          description: 'Detaljan opis proizvoda s bogatom tekstom',
        }),
      ],
      description: 'Detailed product description with rich text formatting',
    }),

    // Pricing
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price in EUR',
      group: 'pricing',
      validation: (Rule) => Rule.required().min(0),
    }),

    defineField({
      name: 'discount',
      title: 'Discount',
      type: 'number',
      description: 'Original price (for showing discounts)',
      group: 'pricing',
    }),

    // Category (Reference)
    defineField({
      name: 'type',
      title: 'Type',
      type: 'reference',
      to: [{type: 'genre'}],
      group: 'classification',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
      group: 'classification',
      validation: (Rule) => Rule.required(),
    }),

    // Collection (Reference)
    defineField({
      name: 'collection',
      title: 'Collection',
      type: 'reference',
      to: [{type: 'collection'}],
      group: 'classification',
      description: 'Which collection does this belong to?',
    }),

    // Tags
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      group: 'classification',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),

    defineField({
      name: 'isCustomizable',
      title: 'Is Customizable',
      type: 'boolean',
      group: 'classification',
      description: 'Can this item be customized or made to order?',
    }),

    // Featured & New
    defineField({
      name: 'isFeatured',
      title: 'Featured Product',
      type: 'boolean',
      group: 'classification',
      description: 'Show this product in featured sections',
    }),

    defineField({
      name: 'isNew',
      title: 'New Arrival',
      type: 'boolean',
      group: 'classification',
      description: 'Mark this as a new arrival',
    }),

    // Colors (References with additional details)
    defineField({
      name: 'color',
      title: 'Colors',
      type: 'array',
      group: 'specifications',
      of: [
        {
          type: 'reference',
          to: [{type: 'color'}],
        },
      ],
    }),

    // Materials (References - Multiple)
    defineField({
      name: 'materials',
      title: 'Materials',
      type: 'array',
      group: 'specifications',
      of: [
        {
          type: 'reference',
          to: [{type: 'material'}],
        },
      ],
    }),

    // Weight
    defineField({
      name: 'weight',
      title: 'Weight',
      type: 'number',
      group: 'specifications',
      description: 'Weight in grams',
    }),

    // Size Options (Unified)
    defineField({
      name: 'sizeOptions',
      title: 'Available Sizes',
      type: 'array',
      of: [{type: 'string'}],
      group: 'specifications',
      description: 'Ring sizes, chain lengths, bracelet sizes, etc.',
      options: {
        list: [
          // Generic sizes
          {title: 'Extra Small', value: 'XS'},
          {title: 'Small', value: 'S'},
          {title: 'Medium', value: 'M'},
          {title: 'Large', value: 'L'},
          {title: 'Extra Large', value: 'XL'},
          {title: 'One Size', value: 'one-size'},
        ],
      },
    }),

    // Dimensions
    defineField({
      name: 'dimensions',
      title: 'Dimensions',
      type: 'object',
      group: 'specifications',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        {
          name: 'length',
          title: 'Length (mm)',
          type: 'number',
        },
        {
          name: 'width',
          title: 'Width (mm)',
          type: 'number',
        },
        {
          name: 'height',
          title: 'Height/Thickness (mm)',
          type: 'number',
        },
      ],
    }),

    // Inventory & Availability
    defineField({
      name: 'inStock',
      title: 'In Stock',
      type: 'boolean',
      initialValue: true,
      group: 'inventory',
    }),
    defineField({
      name: 'quantity',
      title: 'Quantity Available',
      type: 'number',
      initialValue: 1,
      group: 'inventory',
    }),
    defineField({
      name: 'sku',
      title: 'SKU',
      type: 'string',
      group: 'inventory',
      description: 'Stock Keeping Unit',
    }),

    // SEO (multilingual)
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      group: 'seo',
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        defineField({
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'object',
          fields: [
            defineField({
              name: 'en',
              title: 'English',
              type: 'string',
              description: 'SEO title for English users (50-60 characters)',
            }),
            defineField({
              name: 'hr',
              title: 'Croatian',
              type: 'string',
              description: 'SEO naslov za hrvatske korisnike (50-60 znakova)',
            }),
          ],
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'object',
          fields: [
            defineField({
              name: 'en',
              title: 'English',
              type: 'text',
              rows: 3,
              description: 'SEO description for English users (150-160 characters)',
            }),
            defineField({
              name: 'hr',
              title: 'Croatian',
              type: 'text',
              rows: 3,
              description: 'SEO opis za hrvatske korisnike (150-160 znakova)',
            }),
          ],
        }),
      ],
    }),
  ],

  // Preview configuration
  preview: {
    select: {
      title: 'name',
      media: 'images.0',
      price: 'price',
      category: 'category.name',
      inStock: 'inStock',
    },
    prepare({title, media, price, category, inStock}) {
      return {
        title: title,
        subtitle: `${category || 'No category'} - €${price} ${!inStock ? '(Out of Stock)' : ''}`,
        media: media,
      }
    },
  },
})
