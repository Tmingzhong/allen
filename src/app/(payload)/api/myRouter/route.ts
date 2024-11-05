/*
 * @Author: tang.haoming
 * @Date: 2024-11-01 22:59:39
 * @LastEditors: tang.haoming
 * @LastEditTime: 2024-11-05 22:25:31
 * @FilePath: /allen/src/app/(payload)/api/myRouter/route.ts
 * @Description:
 */
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { getPayloadHMR } from '@payloadcms/next/utilities'

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url)
  const type = searchParams.get('type')
  const lang = searchParams.get('lang')
  console.log('12312313123123123')
  console.log(type, lang)
  // const payload = await getPayloadHMR({ config: configPromise })

  const payload = await getPayload({
    config: configPromise,
  })

  const result = await payload.find({
    collection: lang === 'zh' ? 'pages' : lang === 'en' ? 'enPages' : 'koPages',
    where: {
      type: {
        equals: type,
      },
    },
  })

  return Response.json(result)
}
