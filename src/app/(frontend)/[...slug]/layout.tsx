/*
 * @Author: tang.haoming
 * @Date: 2024-11-03 17:49:28
 * @LastEditors: tang.haoming
 * @LastEditTime: 2024-11-03 18:59:11
 * @FilePath: /allen/src/app/(frontend)/[...slug]/layout.tsx
 * @Description: 
 */

import { getDictionary } from '@/dictionaries';

import { ReactNode } from "react";
export async function generateMetadata({ params }) {
    const {slug} = await params;
    console.log('123123123--->',slug)
    const dict = await getDictionary(slug&&slug.length>0?slug[0]:'zh'); // en

    return {
      title: dict.title,
      description:dict.description
    }
  }

export default function pageLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
