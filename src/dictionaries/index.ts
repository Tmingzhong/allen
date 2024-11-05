/*
 * @Author: tang.haoming
 * @Date: 2024-11-03 13:05:36
 * @LastEditors: tang.haoming
 * @LastEditTime: 2024-11-05 22:14:30
 * @FilePath: /allen/src/dictionaries/index.ts
 * @Description:
 */
const dictionaries = {
  en: () => import('./en.json').then((module) => module.default),
  ko: () => import('./ko.json').then((module) => module.default),
  zh: () => import('./zh.json').then((module) => module.default),
} as Record<string, () => Promise<Record<string, string>>>

export const getDictionary = async (locale: string) => dictionaries[locale]()
