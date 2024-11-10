/*
 * @Author: tang.haoming
 * @Date: 2024-10-26 04:20:58
 * @LastEditors: tang.haoming
 * @LastEditTime: 2024-11-10 21:09:29
 * @FilePath: /allen/src/components/Media/ImageMedia/index.tsx
 * @Description: 
 */
'use client'

import type { StaticImageData } from 'next/image'

import { cn } from 'src/utilities/cn'
import NextImage from 'next/image'
import React from 'react'

import type { Props as MediaProps } from '../types'

import cssVariables from '@/cssVariables'

const { breakpoints } = cssVariables

export const ImageMedia: React.FC<MediaProps> = (props) => {
  const {
    alt: altFromProps,
    fill,
    imgClassName,
    onClick,
    onLoad: onLoadFromProps,
    priority,
    resource,
    size: sizeFromProps,
    src: srcFromProps,
  } = props

  const [isLoading, setIsLoading] = React.useState(true)

  let width: number | undefined
  let height: number | undefined
  let alt = altFromProps
  let src: StaticImageData | string = srcFromProps || ''

  if (!src && resource && typeof resource === 'object') {
    const {
      alt: altFromResource,
      filename: fullFilename,
      height: fullHeight,
      url,
      width: fullWidth,
    } = resource
    const date = new Date();
    const timestamp = date.getTime();
    width = fullWidth!
    height = fullHeight!
    alt = altFromResource?altFromResource:timestamp+''

    src = `${process.env.NEXT_PUBLIC_SERVER_URL}${url}`
  }

  // NOTE: this is used by the browser to determine which image to download at different screen sizes
  const sizes = sizeFromProps
    ? sizeFromProps
    : Object.entries(breakpoints)
        .map(([, value]) => `(max-width: ${value}px) ${value}px`)
        .join(', ')

  return (
    <NextImage
      alt={alt || ''}
      className={cn(imgClassName)}
      fill={fill}
      height={!fill ? height : undefined}
      onClick={onClick}
      onLoad={() => {
        setIsLoading(false)
        if (typeof onLoadFromProps === 'function') {
          onLoadFromProps()
        }
      }}
      priority={priority}
      quality={90}
      sizes={sizes}
      src={src}
      width={!fill ? width : undefined}
    />
  )
}
