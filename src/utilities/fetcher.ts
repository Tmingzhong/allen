/*
 * @Author: tang.haoming
 * @Date: 2024-11-10 11:00:36
 * @LastEditors: tang.haoming
 * @LastEditTime: 2024-11-10 11:33:16
 * @FilePath: /allen/src/app/(frontend)/[...slug]/fetcher.ts
 * @Description:
 */

const fetcher = (url) => fetch(url).then((r) => r.json())

export default fetcher
