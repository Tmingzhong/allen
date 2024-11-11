import MD5 from './md5'

/*
 * @Author: tang.haoming
 * @Date: 2024-11-10 18:01:24
 * @LastEditors: tang.haoming
 * @LastEditTime: 2024-11-12 00:15:13
 * @FilePath: /allen/src/utilities/translateListData.ts
 * @Description:
 */
async function translateText(text: string, lang) {
  // 模拟翻译结果，实际应用中需要调用百度翻译 API 获取真实翻译结果
  const b = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/translate?` +
      new URLSearchParams({
        text: text,
        to: lang,
      }),
  )
  const res = await b.json()
  if (res?.translation) {
    console.log('666666666')
    console.log(res?.translation[0])
    const data = res?.translation[0]
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
          item.subTitle = await translateText(item.subTitle, lang)
        }
      }
    }
  }
  return arr
}

export default translateListData
