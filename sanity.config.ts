import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {languageFilter} from '@sanity/language-filter'
import {schemaTypes} from './schemaTypes'

const singletonActions = new Set(['publish', 'discardChanges', 'restore'])
const singletonTypes = new Set(['siteSettings'])

export default defineConfig({
  name: 'default',
  title: 'Minou website',

  projectId: '5nz4uhz2',
  dataset: 'production',

  plugins: [
    languageFilter({
      supportedLanguages: [
        {id: 'en', title: 'English'},
        {id: 'hr', title: 'Croatian'},
      ],
      defaultLanguages: ['en'],
      documentTypes: ['siteSettings'],
    }),
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Site Settings')
              .id('siteSettings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
            S.divider(),
            ...S.documentTypeListItems().filter(
              (listItem) => {
                const id = listItem.getId()
                return id ? !singletonTypes.has(id) : true
              }
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  },

  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({action}) => action && singletonActions.has(action))
        : input,
  },
})
