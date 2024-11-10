import MD5 from "@/utilities/md5"

async function translateText(text:string,lang) {
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
    const b = await fetch('http://localhost:3000/api/myRouter', {
      method: 'POST',
      body: JSON.stringify({ body }),
    })
    const res = await b.json()
    if (res?.trans_result) {
      console.log('666666666')
      console.log(res?.trans_result[0].dst)
      const data = res?.trans_result[0].dst
      return data
    }else{
      return text
    }
  }
  async function processData(arr,lang) {
    for (let item of arr) {
        if (item.type === 'paragraph') {
            if (item.children && item.children.length > 0) {
                for (let child of item.children) {
                    if (child.type === 'text') {
                        child.text = await translateText(child.text,lang);
                    }
                }
            }
        }
        if (item.children && item.children.length > 0) {
            item.children = await processData(item.children,lang);
        }
    }
    return arr;
  }

  export default processData