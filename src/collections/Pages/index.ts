/*
 * @Author: tang.haoming
 * @Date: 2024-10-24 10:07:05
 * @LastEditors: tang.haoming
 * @LastEditTime: 2024-10-29 23:03:06
 * @FilePath: /allen/src/collections/Pages/index.ts
 * @Description:
 */
import type { CollectionConfig } from 'payload'

import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { populatePublishedAt } from '../../hooks/populatePublishedAt'

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: {
    plural: '新闻上报',
    singular: '新闻上报',
  },
  access: {
    read: () => true,
  },

  admin: {
    defaultColumns: ['title', 'type', 'updatedAt'],
    livePreview: {
      url: ({ data }) => {
        // const path = generatePreviewPath({
        //   slug: typeof data?.slug === 'string' ? data.slug : '',
        //   collection: 'pages',
        // })

        // console.log(path)

        return `${process.env.NEXT_PUBLIC_SERVER_URL}/posts/${data.slug}`
      },
    },
    useAsTitle: 'title',
  },
  fields: [
    {
      label: '标题',
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      label: '文章摘要',
      name: 'subTitle',
      type: 'text',
      required: true,
    },
    {
      label: '文章类型',
      name: 'type', // required
      type: 'select', // required
      required: true,
      options: [
        {
          label: '游玩攻略',
          value: 'ywgl',
        },
        {
          label: '景区资讯',
          value: 'jqzx',
        },
        {
          label: '景区活动',
          value: 'jqhd',
        },
        {
          label: '景区公告',
          value: 'jqgg',
        },
        {
          label: '商务合作',
          value: 'swhz',
        },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: '新闻首页展示图',
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor(),
      label: '新闻内容',
      required: true,
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
      label: '发布时间',
    },
    {
      name: 'authar',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
      label: '作者',
    },
    {
      name: 'source',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
      label: '文章来源',
    },
    {
      name: 'slug',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
      label: '文章标识（不用编辑）',
    },
  ],
  hooks: {
    beforeChange: [populatePublishedAt],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
    },
    maxPerDoc: 50,
  },
}
