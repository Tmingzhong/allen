/*
 * @Author: tang.haoming
 * @Date: 2024-10-26 04:20:58
 * @LastEditors: tang.haoming
 * @LastEditTime: 2024-10-28 21:07:03
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
  const pageData: any = await queryPageBySlug()
  console.log('------------pageData------------')

  return <PageClient pageData={pageData} />
}

const queryPageBySlug = cache(async () => {
  const payload = await getPayloadHMR({ config: configPromise })

  const result = await payload.find({
    collection: 'pages',
  })
  console.log(result)
  const result1 = await payload.findGlobal({
    slug: 'header',
  })
  const result2 = await payload.findGlobal({
    slug: 'footer',
  })
  console.log('123123123123')
  console.log(result2.logo)

  return {
    page: result.docs || [],
    imageList: result1.images,
    address: result2.address,
    phone: result2.phone,
  }
})
