/*
 * @Author: tang.haoming
 * @Date: 2024-10-26 04:20:58
 * @LastEditors: tang.haoming
 * @LastEditTime: 2024-10-26 21:43:08
 * @FilePath: /allen/src/app/(frontend)/layout.tsx
 * @Description: 
 */
import type { Metadata } from 'next'

import { cn } from 'src/utilities/cn'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import React from 'react'

import { AdminBar } from '@/components/AdminBar'
import { Footer } from '@/Footer/Component'
import { Header } from '@/Header/Component'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'

import { draftMode } from 'next/headers'
import { AntdRegistry } from '@ant-design/nextjs-registry';

import './globals.css'

export default async function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html className={cn(GeistSans.variable, GeistMono.variable)} lang="en" suppressHydrationWarning>

      <body>
        <Providers>

          <AntdRegistry>{children}</AntdRegistry>

        </Providers>
      </body>
    </html>
  )
}

