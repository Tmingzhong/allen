/*
 * @Author: tang.haoming
 * @Date: 2024-10-24 10:07:05
 * @LastEditors: tang.haoming
 * @LastEditTime: 2024-11-10 19:41:33
 * @FilePath: /allen/src/Footer/config.ts
 * @Description:
 */
import type { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  slug: 'footer',
  label: '信息配置',
  access: {
    read: () => true,
    readDrafts: () => true,
    readVersions: () => true,
    update: () => true,
  },
  fields: [
    {
      name: 'address',
      type: 'text',
      label: '联系地址',
    },
    // {
    //   name: 'phone',
    //   type: 'text',
    //   label: '电话',
    // },
    {
      name: 'phoneNmuber',
      type: 'text',
      label: '电话',
    },
  ],
}
