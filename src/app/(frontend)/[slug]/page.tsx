/*
 * @Author: tang.haoming
 * @Date: 2024-10-26 04:20:58
 * @LastEditors: tang.haoming
 * @LastEditTime: 2024-10-29 22:51:01
 * @FilePath: /allen/src/app/(frontend)/[slug]/page.tsx
 * @Description:
 */

import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'

import React, { cache } from 'react'

import PageClient from './page.client'

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Page({ params: paramsPromise }: Args) {
  const { slug = 'home' } = await paramsPromise

  const pageData: any = await queryPageBySlug(slug)
  console.log('------------pageData------------')

  return <PageClient pageData={pageData} />
}

const queryPageBySlug = cache(async (slug: string) => {
  const payload = await getPayloadHMR({ config: configPromise })

  const resultZxdt = await payload.find({
    collection: 'pages',
    limit: 4,
  })
  const resultYwgl = await payload.find({
    collection: 'pages',
    limit: slug === 'home' ? 4 : 10,
    where: {
      type: {
        equals: 'ywgl',
      },
    },
  })
  const resultJqgg = await payload.find({
    collection: 'pages',
    limit: slug === 'home' ? 4 : 10,
    where: {
      type: {
        equals: 'jqgg',
      },
    },
  })
  const resultJqzx = await payload.find({
    collection: 'pages',
    limit: slug === 'home' ? 4 : 10,
    where: {
      type: {
        equals: 'jqzx',
      },
    },
  })
  const resultJqhd = await payload.find({
    collection: 'pages',
    limit: slug === 'home' ? 4 : 10,
    where: {
      type: {
        equals: 'jqhd',
      },
    },
  })
  const resultSwhz = await payload.find({
    collection: 'pages',
    limit: slug === 'home' ? 4 : 10,
    where: {
      type: {
        equals: 'swhz',
      },
    },
  })

  const header = await payload.findGlobal({
    slug: 'header',
  })
  const footer = await payload.findGlobal({
    slug: 'footer',
  })

  return {
    resultZxdt: resultZxdt.docs || [],
    resultYwgl: resultYwgl.docs || [],
    resultJqgg: resultJqgg.docs || [],
    resultJqzx: resultJqzx.docs || [],
    resultJqhd: resultJqhd.docs || [],
    resultSwhz: resultSwhz.docs || [],
    imageList: header.images,
    address: footer.address,
    phone: footer.phone,
    slug: slug,
  }
})
