import {defineField, defineType} from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    // Company Information (shared across languages)
    defineField({
      name: 'oib',
      title: 'OIB (Company ID)',
      type: 'string',
      validation: (Rule) => Rule.length(11).warning('OIB must be 11 digits'),
      description: 'Osobni identifikacijski broj - Croatian company identification number',
    }),

    // Website Name (single-language - NOT multilingual)
    defineField({
      name: 'siteName',
      title: 'Website Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Name of your website or project',
    }),

    // Branding & Images (shared across languages)
    defineField({
      name: 'logo',
      title: 'Logo (Light Mode)',
      type: 'image',
      description: 'SVG format preferred for navbar and footer logos',
    }),
    defineField({
      name: 'logoDark',
      title: 'Logo (Dark Mode)',
      type: 'image',
      description: 'SVG format preferred for dark mode theme',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      description: 'Cover image for hero sections, banners, and backgrounds',
      options: {
        hotspot: {
          previews: [{title: '9:16 Portrait/Mobile', aspectRatio: 9 / 16}],
        },
        accept: 'image/gif, image/png, image/jpeg, image/webp',
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Important for SEO and accessibility',
        },
      ],
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      description: 'ICO, PNG, or SVG format for browser tab icon',
      options: {
        accept: 'image/x-icon, image/png, image/svg+xml',
      },
    }),

    // Contact Information (shared across languages)
    defineField({
      name: 'email',
      title: 'Email',
      type: 'email',
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
      rows: 3,
    }),

    // Business Hours (array of custom strings)
    defineField({
      name: 'hours',
      title: 'Business Hours',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'hourItem',
          fields: [
            defineField({
              name: 'label',
              title: 'Hours Label',
              type: 'string',
              description: 'e.g., "Mon-Fri: 9am-5pm"',
            }),
          ],
        },
      ],
    }),

    // Social Links (shared)
    defineField({
      name: 'facebook',
      title: 'Facebook URL',
      type: 'url',
    }),
    defineField({
      name: 'tiktok',
      title: 'TikTok URL',
      type: 'url',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram URL',
      type: 'url',
    }),
    defineField({
      name: 'youtube',
      title: 'YouTube URL',
      type: 'url',
    }),

    // About (rich text - multilingual)
    defineField({
      name: 'about',
      title: 'About',
      type: 'object',
      fields: [
        defineField({
          name: 'en',
          title: 'English',
          type: 'array',
          of: [{type: 'block'}],
        }),
        defineField({
          name: 'hr',
          title: 'Croatian',
          type: 'array',
          of: [{type: 'block'}],
        }),
      ],
    }),

    // Shipping Information (rich text - multilingual)
    defineField({
      name: 'shipping',
      title: 'Shipping Information',
      type: 'object',
      fields: [
        defineField({
          name: 'en',
          title: 'English',
          type: 'array',
          of: [{type: 'block'}],
        }),
        defineField({
          name: 'hr',
          title: 'Croatian',
          type: 'array',
          of: [{type: 'block'}],
        }),
      ],
    }),

    // Returns Information (rich text - multilingual)
    defineField({
      name: 'returns',
      title: 'Returns Information',
      type: 'object',
      fields: [
        defineField({
          name: 'en',
          title: 'English',
          type: 'array',
          of: [{type: 'block'}],
        }),
        defineField({
          name: 'hr',
          title: 'Croatian',
          type: 'array',
          of: [{type: 'block'}],
        }),
      ],
    }),

    // FAQ (array of Q&A - multilingual)
    defineField({
      name: 'faq',
      title: 'FAQ',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'faqItem',
          fields: [
            defineField({
              name: 'question',
              title: 'Question',
              type: 'object',
              fields: [
                defineField({
                  name: 'en',
                  title: 'English',
                  type: 'string',
                }),
                defineField({
                  name: 'hr',
                  title: 'Croatian',
                  type: 'string',
                }),
              ],
            }),
            defineField({
              name: 'answer',
              title: 'Answer',
              type: 'object',
              fields: [
                defineField({
                  name: 'en',
                  title: 'English',
                  type: 'text',
                  rows: 3,
                }),
                defineField({
                  name: 'hr',
                  title: 'Croatian',
                  type: 'text',
                  rows: 3,
                }),
              ],
            }),
          ],
        },
      ],
    }),

    // Custom Orders Page (rich text - multilingual) - NEW
    defineField({
      name: 'customOrders',
      title: 'Custom Orders Page',
      type: 'object',
      fields: [
        defineField({
          name: 'en',
          title: 'English',
          type: 'array',
          of: [{type: 'block'}],
          description: 'Content for custom orders page',
        }),
        defineField({
          name: 'hr',
          title: 'Croatian',
          type: 'array',
          of: [{type: 'block'}],
          description: 'Sadržaj za narudbe po mjeri',
        }),
      ],
    }),
  ],
})
