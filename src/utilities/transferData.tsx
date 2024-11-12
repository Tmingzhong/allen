/*
 * @Author: tang.haoming
 * @Date: 2024-11-10 15:05:31
 * @LastEditors: tang.haoming
 * @LastEditTime: 2024-11-12 23:58:22
 * @FilePath: /allen/src/utilities/transferData.tsx
 * @Description:
 */

async function translateText(textArray: string[], lang) {
  const b = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/translateArray`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ textArray: textArray, to: lang }),
  })
  const res = await b.json()
  if (res?.translation) {
    console.log('666666666分段Array')
    console.log(res)

    const data = res?.translation[0].split('//')
    return data
  } else {
    return textArray
  }
}
function isEmptyString(str) {
  // 方法1: 直接检查
  if (!str || str.length === 0) {
    return true
  }
  // 方法2: 去除首尾空白字符后检查
  if (!str.trim()) {
    return true
  }
  // 如果上述条件都不满足，返回false
  return false
}
async function processData(arr, lang) {
  let originalTexts: Array<any> = []

  // 遍历数据，提取type为paragraph的text内容存到数组
  arr.forEach((item) => {
    if (item.type === 'paragraph') {
      item.children.forEach((child: any) => {
        if (child.type === 'text') {
          if (child.text) {
            if (!isEmptyString(child.text)) {
              originalTexts.push(child.text)
            } else {
              originalTexts.push('allen')
            }
          }
        }
      })
    }
  })
  if (originalTexts.length > 0) {
    const dataArray = await translateText(originalTexts, lang)
    let translatedIndex = 0
    let translatedData = JSON.parse(JSON.stringify(arr))

    translatedData.forEach((item) => {
      if (item.type === 'paragraph') {
        item.children.forEach((child) => {
          if (child.type === 'text') {
            child.text = dataArray[translatedIndex] === 'allen' ? '' : dataArray[translatedIndex]
            translatedIndex++
          }
        })
      }
    })
    return translatedData
  }

  return arr
}

export default processData
