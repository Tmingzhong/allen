/*
 * @Author: tang.haoming
 * @Date: 2024-10-24 10:07:05
 * @LastEditors: tang.haoming
 * @LastEditTime: 2024-11-10 19:41:42
 * @FilePath: /allen/src/Header/config.ts
 * @Description:
 */
import type { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
  slug: 'header',
  label: '宣传轮播图',
  access: {
    read: () => true,
    readDrafts: () => true,
    readVersions: () => true,
    update: () => true,
  },
  fields: [
    {
      name: 'images',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: '图片',
        },
      ],
      maxRows: 6,
    },
  ],
}
