/*
 * @Author: tang.haoming
 * @Date: 2024-10-26 04:20:58
 * @LastEditors: tang.haoming
 * @LastEditTime: 2024-11-10 16:29:13
 * @FilePath: /allen/src/app/(frontend)/[...slug]/page.tsx
 * @Description:
 */

import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'

import React, { cache } from 'react'

import PageClient from './page.client'
import { getDictionary } from '@/dictionaries'
import MD5 from '@/utilities/md5'

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
    const zxdt = await processData(resultZxdt.docs, slug[0])
    const ywgl = await processData(resultYwgl.docs, slug[0])
    const jqgg = await processData(resultJqgg.docs, slug[0])
    const jqzx = await processData(resultJqzx.docs, slug[0])
    const jqhd = await processData(resultJqhd.docs, slug[0])
    const swhz = await processData(resultSwhz.docs, slug[0])
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
async function translateText(text: string, lang) {
  // 模拟翻译结果，实际应用中需要调用百度翻译 API 获取真实翻译结果
  const salt = new Date().getTime()
  const appid = '20241107002197187'
  const key = 'HZZUBYlyhISVuJwsoCbP'
  const a = appid + text + salt + key
  const body = {
    q: text,
    from: 'auto',
    to: lang === 'ko' ? 'kor' : lang,
    appid: appid,
    salt: salt,
    sign: MD5(a),
  }
  const b = await fetch('http://localhost:3000/api/myRouter', {
    method: 'POST',
    body: JSON.stringify({ body }),
  })
  const res = await b.json()
  if (res?.trans_result) {
    console.log('666666666')
    console.log(res?.trans_result[0].dst)
    const data = res?.trans_result[0].dst
    return data
  } else {
    return text
  }
}
async function processData(arr, lang) {
  if (arr && lang != 'zh') {
    for (let item of arr) {
      if (item.title) {
        item.title = await translateText(item.title, lang)
      }
      if (item.subTitle) {
        item.subTitle = await translateText(item.title, lang)
      }
    }
  }
  return arr
}
