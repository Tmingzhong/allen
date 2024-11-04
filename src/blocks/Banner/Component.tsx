/*
 * @Author: tang.haoming
 * @Date: 2024-11-04 20:38:59
 * @LastEditors: tang.haoming
 * @LastEditTime: 2024-11-04 20:40:47
 * @FilePath: /allen/src/blocks/Banner/Component.tsx
 * @Description: 
 */

import { cn } from 'src/utilities/cn'
import React from 'react'
import RichText from '@/components/RichText'

type Props = {
  className?: string
} & any

export const BannerBlock: React.FC<Props> = ({ className, content, style }) => {
  return (
    <div className={cn('mx-auto my-8 w-full', className)}>
      <div
        className={cn('border py-3 px-6 flex items-center rounded', {
          'border-border bg-card': style === 'info',
          'border-error bg-error/30': style === 'error',
          'border-success bg-success/30': style === 'success',
          'border-warning bg-warning/30': style === 'warning',
        })}
      >
        <RichText content={content} enableGutter={false} enableProse={false} />
      </div>
    </div>
  )
}
