/*
 * @Author: tang.haoming
 * @Date: 2024-11-12 22:57:33
 * @LastEditors: tang.haoming
 * @LastEditTime: 2024-11-12 23:55:55
 * @FilePath: /allen/src/app/(payload)/api/translateArray/route.ts
 * @Description:
 */
import * as CryptoJS from 'crypto-js'

function truncate(q) {
  var len = q.length
  if (len <= 20) return q
  return q.substring(0, 10) + len + q.substring(len - 10, len)
}

export async function POST(request: Request) {
  const { textArray, to } = await request.json()

  console.log(textArray)
  console.log(to)

  const adsf = textArray.join('//')

  const salt = new Date().getTime()
  const appid = `${process.env.NEXT_PUBLIC_APP_ID}`
  const key = `${process.env.NEXT_PUBLIC_APP_KEY}`
  const curtime = Math.round(new Date().getTime() / 1000)

  const str1 = appid + truncate(adsf) + salt + curtime + key

  const sign = CryptoJS.SHA256(str1).toString(CryptoJS.enc.Hex)
  const res = await fetch(
    `https://openapi.youdao.com/api?q=${adsf}&from=auto&to=${to}&appKey=${appid}&salt=${salt}&sign=${sign}&signType=v3&curtime=${curtime}`,
  )
  const responseData = await res.json()
  console.log('99999999ArrayresponseDataresponseData')
  console.log(responseData)
  return Response.json({ ...responseData })
}
