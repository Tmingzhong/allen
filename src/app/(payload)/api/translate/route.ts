/*
 * @Author: tang.haoming
 * @Date: 2024-11-10 11:28:05
 * @LastEditors: tang.haoming
 * @LastEditTime: 2024-11-12 00:05:13
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

import * as CryptoJS from 'crypto-js'

function truncate(q) {
  var len = q.length
  if (len <= 20) return q
  return q.substring(0, 10) + len + q.substring(len - 10, len)
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const text = searchParams.get('text')
  const to = searchParams.get('to')

  console.log(text)
  console.log(to)

  const salt = new Date().getTime()
  const appid = `${process.env.NEXT_PUBLIC_APP_ID}`
  const key = `${process.env.NEXT_PUBLIC_APP_KEY}`
  const curtime = Math.round(new Date().getTime() / 1000)

  const str1 = appid + truncate(text) + salt + curtime + key

  const sign = CryptoJS.SHA256(str1).toString(CryptoJS.enc.Hex)
  const res = await fetch(
    `https://openapi.youdao.com/api?q=${text}&from=auto&to=${to}&appKey=${appid}&salt=${salt}&sign=${sign}&signType=v3&curtime=${curtime}`,
  )
  const responseData = await res.json()
  console.log('8888888responseDataresponseData')
  console.log(responseData)
  return Response.json({ ...responseData })
}
