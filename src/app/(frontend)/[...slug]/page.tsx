/*
 * @Author: tang.haoming
 * @Date: 2024-10-26 04:20:58
 * @LastEditors: tang.haoming
 * @LastEditTime: 2024-11-10 18:02:29
 * @FilePath: /allen/src/app/(frontend)/[...slug]/page.tsx
 * @Description:
 */

import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'

import React, { cache } from 'react'

import PageClient from './page.client'
import { getDictionary } from '@/dictionaries'
import translateListData from '@/utilities/translateListData'

type Args = {
  params: Promise<{
    slug?: string[]
  }>
}

export default async function Page({ params: paramsPromise }: Args) {
  const a = await paramsPromise
  console.log('123123123')
  console.log(a)
  const { slug = ['zh', 'home'] } = await paramsPromise
  // eslint-disable-next-line react-hooks/rules-of-hooks

  const pageData: any = await queryPageBySlug(slug)
  return <PageClient pageData={pageData} />
}

const queryPageBySlug = cache(async (slug: string[]) => {
  const payload = await getPayloadHMR({ config: configPromise })

  // const collection = slug[0] === 'zh' ? 'pages' : slug[0] === 'en' ? 'enPages' : 'koPages'

  const resultZxdt = await payload.find({
    collection: 'pages',
    limit: 4,
  })
  const resultYwgl = await payload.find({
    collection: 'pages',
    limit: slug[1] === 'home' ? 4 : 6,
    where: {
      type: {
        equals: 'ywgl',
      },
    },
  })
  const resultJqgg = await payload.find({
    collection: 'pages',
    limit: slug[1] === 'home' ? 4 : 6,
    where: {
      type: {
        equals: 'jqgg',
      },
    },
  })
  const resultJqzx = await payload.find({
    collection: 'pages',
    limit: slug[1] === 'home' ? 4 : 6,
    where: {
      type: {
        equals: 'jqzx',
      },
    },
  })
  const resultJqhd = await payload.find({
    collection: 'pages',
    limit: slug[1] === 'home' ? 4 : 6,
    where: {
      type: {
        equals: 'jqhd',
      },
    },
  })
  const resultSwhz = await payload.find({
    collection: 'pages',
    limit: slug[1] === 'home' ? 4 : 6,
    where: {
      type: {
        equals: 'swhz',
      },
    },
  })

  const resultDetails = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: slug[2],
      },
    },
  })

  const header = await payload.findGlobal({
    slug: 'header',
  })
  const footer = await payload.findGlobal({
    slug: 'footer',
  })
  const dict = await getDictionary(slug && slug.length > 0 ? slug[0] : 'zh') // en

  if (slug[1] != 'details') {
    const zxdt = await translateListData(resultZxdt.docs, slug[0])
    const ywgl = await translateListData(resultYwgl.docs, slug[0])
    const jqgg = await translateListData(resultJqgg.docs, slug[0])
    const jqzx = await translateListData(resultJqzx.docs, slug[0])
    const jqhd = await translateListData(resultJqhd.docs, slug[0])
    const swhz = await translateListData(resultSwhz.docs, slug[0])
    return {
      resultZxdt: zxdt || [],
      resultYwgl: ywgl || [],
      resultJqgg: jqgg || [],
      resultJqzx: jqzx || [],
      resultJqhd: jqhd || [],
      resultSwhz: swhz || [],
      imageList: header.images,
      address: footer.address,
      phone: footer.phone,
      slug: slug,
      detailContent: resultDetails.docs[0],
      content: resultDetails.docs[0]?.content?.root?.children,
      dict,
    }
  } else {
    return {
      resultZxdt: [],
      resultYwgl: [],
      resultJqgg: [],
      resultJqzx: [],
      resultJqhd: [],
      resultSwhz: [],
      imageList: header.images,
      address: footer.address,
      phone: footer.phone,
      slug: slug,
      detailContent: resultDetails.docs[0],
      content: resultDetails.docs[0]?.content?.root?.children,
      dict,
    }
  }
})
