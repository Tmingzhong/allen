/*
 * @Author: tang.haoming
 * @Date: 2024-10-26 04:20:58
 * @LastEditors: tang.haoming
 * @LastEditTime: 2024-11-10 20:35:18
 * @FilePath: /allen/src/hooks/populatePublishedAt.ts
 * @Description:
 */
import type { CollectionBeforeChangeHook } from 'payload'

export const populatePublishedAt: CollectionBeforeChangeHook = ({ data, operation, req }) => {
  if (operation === 'create' || operation === 'update') {
    if (req.data && !req.data.publishedAt) {
      const now = new Date()
      return {
        ...data,
        publishedAt: now,
        slug: Date.now(),
      }
    }
  }

  return data
}

export const populateMediaAlt: CollectionBeforeChangeHook = ({ data, operation, req }) => {
  if (operation === 'create' || operation === 'update') {
    if (req.data && !req.data.publishedAt) {
      const now = new Date()
      const timestamp = now.getTime()

      return {
        ...data,
        alt: timestamp,
      }
    }
  }

  return data
}
