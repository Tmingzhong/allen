import MD5 from './md5'

/*
 * @Author: tang.haoming
 * @Date: 2024-11-10 18:01:24
 * @LastEditors: tang.haoming
 * @LastEditTime: 2024-11-11 21:12:24
 * @FilePath: /allen/src/utilities/translateListData.ts
 * @Description:
 */
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
  const b = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/myRouter`, {
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
async function translateListData(arr, lang) {
  if (arr && lang != 'zh') {
    for (let item of arr) {
      if (item._status === 'published') {
        if (item.title) {
          item.title = await translateText(item.title, lang)
        }
        if (item.subTitle) {
          item.subTitle = await translateText(item.title, lang)
        }
      }
    }
  }
  return arr
}

export default translateListData
