/*
 * @Author: tang.haoming
 * @Date: 2024-11-01 22:59:39
 * @LastEditors: tang.haoming
 * @LastEditTime: 2024-11-09 17:34:16
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
    collection: 'pages',
    where: {
      type: {
        equals: type,
      },
    },
  })

  return Response.json(result)
}

export async function POST(request: Request) {
  console.log('进不来了吗---------》')
  const { body } = await request.json()
  console.log('77777777777')
  console.log(body)
  console.log('77777777777')

  const res = await fetch(
    `https://fanyi-api.baidu.com/api/trans/vip/translate?q=${body.q}&from=${body.from}&to=${body.to}&appid=${body.appid}&salt=${body.salt}&sign=${body.sign}`,
  )
  const responseData = await res.json()
  console.log('7777777responseDataresponseData')
  console.log(responseData)
  return Response.json({ ...responseData })
}
