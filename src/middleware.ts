/*
 * @Author: tang.haoming
 * @Date: 2024-11-03 13:45:59
 * @LastEditors: tang.haoming
 * @LastEditTime: 2024-11-09 21:47:25
 * @FilePath: /allen/src/middleware.ts
 * @Description:
 */
/*
 * @Author: tang.haoming
 * @Date: 2024-11-03 13:26:17
 * @LastEditors: tang.haoming
 * @LastEditTime: 2024-11-03 13:42:33
 * @FilePath: /allen/middleware.ts
 * @Description:
 */
import { NextRequest, NextResponse } from 'next/server'

const NEXT_PUBLIC_LOCALES = ['en', 'zh', 'ko'] // 语言列表
const DEFAULT_LOCALE = 'zh' // 默认语言

const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl
  console.log('--------pathname------')
  console.log(pathname)

  // 如果没有带语言
  if (
    NEXT_PUBLIC_LOCALES.every((v) => !pathname.startsWith(`/${v}`)) &&
    pathname.indexOf('api') === -1 &&
    pathname.indexOf('admin') === -1
  ) {
    console.log('进这里来了？')
    // 重写

    if (pathname === '/') {
      return NextResponse.redirect(new URL(`/${DEFAULT_LOCALE}/home`, request.url))
    } else {
      return NextResponse.redirect(new URL(`/${DEFAULT_LOCALE}${pathname}`, request.url))
    }

    // 如需要重定向, 可使用 NextResponse.redirect
  }
  // 这里是选择语言的时候 过来的/zh /en /ko,所以在选择的时候保存
  if (
    (pathname === '/en' || pathname === '/zh' || pathname === '/ko') &&
    pathname.indexOf('api') === -1 &&
    pathname.indexOf('admin') === -1
  ) {
    console.log('进来了吗。。。。。')
    console.log(pathname.slice(1))

    return NextResponse.redirect(new URL(`${pathname}/home`, request.url))
  }
  // if (
  //   (pathname === '/en/home' || pathname === '/zh/home' || pathname === '/ko/home') &&
  //   pathname.indexOf('api') === -1 &&
  //   pathname.indexOf('admin') === -1
  // ) {
  //   console.log('进来了吗。。。。。123123')
  //   console.log(request.url)

  //   return NextResponse.redirect(request.url)
  // }
}

export const config = {
  // 中间件匹配规则
  matcher: ['/', '/(en-US|zh-CN|zh|ko-KR|ja-JP)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
}

// 导出中间件
export default middleware
