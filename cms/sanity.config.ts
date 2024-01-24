import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'ecomm-full-shell',

  projectId: process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID as string,
  dataset: process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET as string,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
