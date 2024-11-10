/*
 * @Author: tang.haoming
 * @Date: 2024-11-10 11:28:05
 * @LastEditors: tang.haoming
 * @LastEditTime: 2024-11-10 11:32:51
 * @FilePath: /allen/src/app/(payload)/api/translate/route.ts
 * @Description:
 */
/*
 * @Author: tang.haoming
 * @Date: 2024-11-01 22:59:39
 * @LastEditors: tang.haoming
 * @LastEditTime: 2024-11-09 17:34:16
 * @FilePath: /allen/src/app/(payload)/api/myRouter/route.ts
 * @Description:
 */

import MD5 from '@/utilities/md5'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const text = searchParams.get('text')
  const to = searchParams.get('to')

  const salt = new Date().getTime()
  const appid = '20241107002197187'
  const key = 'HZZUBYlyhISVuJwsoCbP'
  const a = appid + text + salt + key
  const sign = MD5(a)

  const res = await fetch(
    `https://fanyi-api.baidu.com/api/trans/vip/translate?q=${text}&from=auto&to=${to}&appid=${appid}&salt=${salt}&sign=${sign}`,
  )
  const responseData = await res.json()
  console.log('8888888responseDataresponseData')
  console.log(responseData)
  return Response.json({ ...responseData })
}
