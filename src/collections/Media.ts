/*
 * @Author: tang.haoming
 * @Date: 2024-10-26 04:20:58
 * @LastEditors: tang.haoming
 * @LastEditTime: 2024-11-10 20:39:33
 * @FilePath: /allen/src/collections/Media.ts
 * @Description:
 */
import type { CollectionConfig } from 'payload'

import path from 'path'
import { fileURLToPath } from 'url'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import { populateMediaAlt } from '@/hooks/populatePublishedAt'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export const Media: CollectionConfig = {
  slug: 'media',
  labels: {
    plural: '图片素材',
    singular: '图片素材',
  },
  access: {
    create: anyone,
    delete: anyone,
    read: anyone,
    update: anyone,
  },

  fields: [
    {
      name: 'alt',
      type: 'text',
    },
  ],
  hooks: {
    beforeChange: [populateMediaAlt],
  },
  upload: {
    // Upload to the public/media directory in Next.js making them publicly accessible even outside of Payload
    staticDir: path.resolve(dirname, '../media'),
  },
}
