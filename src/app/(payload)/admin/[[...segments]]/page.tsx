/*
 * @Author: tang.haoming
 * @Date: 2024-11-12 20:52:35
 * @LastEditors: tang.haoming
 * @LastEditTime: 2024-11-12 21:08:37
 * @FilePath: /allen/src/app/(payload)/admin/[[...segments]]/page.tsx
 * @Description:
 */
/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import type { Metadata } from 'next'

import config from '@payload-config'
import { RootPage, generatePageMetadata } from '@payloadcms/next/views'
import { importMap } from '../importMap'

type Args = {
  params: Promise<{
    segments: string[]
  }>
  searchParams: Promise<{
    [key: string]: string | string[]
  }>
}

export function generateMetadata({ params }) {
  return {
    title: '管理后台',
    description: '矮寨大桥管理后台',
  }
}

const Page = ({ params, searchParams }: Args) =>
  RootPage({ config, params, searchParams, importMap })

export default Page
