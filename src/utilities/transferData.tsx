/*
 * @Author: tang.haoming
 * @Date: 2024-11-10 15:05:31
 * @LastEditors: tang.haoming
 * @LastEditTime: 2024-11-12 00:14:08
 * @FilePath: /allen/src/utilities/transferData.tsx
 * @Description:
 */

async function translateText(text: string, lang) {
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
async function processData(arr, lang) {
  for (let item of arr) {
    if (item.type === 'paragraph') {
      if (item.children && item.children.length > 0) {
        for (let child of item.children) {
          if (child.type === 'text') {
            child.text = await translateText(child.text, lang)
          }
        }
      }
    }
    if (item.children && item.children.length > 0) {
      item.children = await processData(item.children, lang)
    }
  }
  return arr
}

export default processData
