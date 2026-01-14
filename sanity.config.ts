'use client'

/**
 * This configuration is used for the Sanity Studio
 * mounted at `/src/app/sanity/[[...tool]]/page.tsx`
 */

import {defineConfig} from 'sanity'
import {visionTool} from '@sanity/vision'
import {structureTool} from 'sanity/structure'

// Environment config
import {apiVersion, dataset, projectId} from './src/sanity/env'

// ✅ FIXED IMPORTS
import {schemaTypes} from './src/sanity/schemaTypes'
import {structure} from './src/sanity/structure'

export default defineConfig({
  basePath: '/sanity',
  projectId,
  dataset,
  apiVersion,

  // ✅ FIXED SCHEMA SHAPE
  schema: {
    types: schemaTypes,
  },

  plugins: [
    structureTool({structure}),
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
