/*
 * @Author: tang.haoming
 * @Date: 2024-10-26 04:20:58
 * @LastEditors: tang.haoming
 * @LastEditTime: 2024-11-10 11:14:25
 * @FilePath: /allen/src/app/(frontend)/layout.tsx
 * @Description:
 */

import { cn } from 'src/utilities/cn'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import React from 'react'

import { Providers } from '@/providers'

import { AntdRegistry } from '@ant-design/nextjs-registry'

import './globals.css'
export  function generateMetadata({ params }) {

  return {
    title: '矮寨大桥',
    description:'矮寨大桥旅游网站'
  }
}

export default  function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={cn(GeistSans.variable, GeistMono.variable)} lang="en" suppressHydrationWarning>
      <head>
        <meta name="robots" content="noindex,nofollow" />
      </head>
      <body>
        <Providers>
          <AntdRegistry>{children}</AntdRegistry>
        </Providers>
      </body>
    </html>
  )
}
