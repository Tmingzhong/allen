/*
 * @Author: tang.haoming
 * @Date: 2024-10-24 10:07:05
 * @LastEditors: tang.haoming
 * @LastEditTime: 2024-10-27 16:55:06
 * @FilePath: /allen/src/Footer/config.ts
 * @Description:
 */
import type { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  slug: 'footer',
  label: '信息配置',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'address',
      type: 'text',
      label: '联系地址',
    },
    {
      name: 'phone',
      type: 'number',
      label: '电话',
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      label: 'logo',
    },
  ],
}