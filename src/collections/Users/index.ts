/*
 * @Author: tang.haoming
 * @Date: 2024-10-26 04:20:58
 * @LastEditors: tang.haoming
 * @LastEditTime: 2024-10-28 21:03:55
 * @FilePath: /allen/src/collections/Users/index.ts
 * @Description:
 */
import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'

const Users: CollectionConfig = {
  slug: 'users',
  labels: {
    plural: '用户管理',
    singular: '用户管理',
  },

  admin: {
    defaultColumns: ['name', 'email'],
    useAsTitle: 'name',
  },
  auth: true,
  fields: [
    {
      name: 'name',
      type: 'text',
    },
  ],
  timestamps: true,
}

export default Users
