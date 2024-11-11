/*
 * @Author: tang.haoming
 * @Date: 2024-10-24 10:07:05
 * @LastEditors: tang.haoming
 * @LastEditTime: 2024-11-11 21:21:58
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
      labels: {
        plural: '图片',
        singular: '图片',
      },
      label: '首页图片',
      type: 'array',
      fields: [
        {
          name: 'imageUrl',
          type: 'text',
          required: true,
          label: '图片路径',
        },
      ],
      maxRows: 6,
    },
  ],
}
