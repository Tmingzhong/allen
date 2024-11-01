/*
 * @Author: tang.haoming
 * @Date: 2024-11-01 22:59:39
 * @LastEditors: tang.haoming
 * @LastEditTime: 2024-11-01 23:13:48
 * @FilePath: /allen/src/app/(payload)/api/myRouter/route.ts
 * @Description:
 */
import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url)
  const type = searchParams.get('type')
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
