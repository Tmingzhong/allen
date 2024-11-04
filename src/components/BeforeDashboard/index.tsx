/*
 * @Author: tang.haoming
 * @Date: 2024-10-26 04:20:58
 * @LastEditors: tang.haoming
 * @LastEditTime: 2024-11-04 22:22:58
 * @FilePath: /allen/src/components/BeforeDashboard/index.tsx
 * @Description: 
 */
import { Banner } from '@payloadcms/ui/elements/Banner'
import React from 'react'

import { SeedButton } from './SeedButton'
import './index.scss'

const baseClass = 'before-dashboard'

const BeforeDashboard: React.FC = () => {
  return (
    <div className={baseClass}>
      <Banner className={`${baseClass}__banner`} type="success">
        <h4>后台使用说明：</h4>
      </Banner>

      <ul className={`${baseClass}__instructions`}>

        <li>
          {/* <SeedButton /> */}
          <strong>  {'新闻上传按语言上传，图片上传一次就行了，上传了直接选就行了，就是内容要人工翻译一下贴上去就行了'}</strong>
        </li>
        <li>
        <strong>  轮播宣传图就是首页轮播的图片，最多6张。</strong>
        </li>
        <li>
         <strong>  信息配置只有地址跟电话号码</strong>
        </li>
        <li>
        <strong> 用户管理可以不用管，用第一次注册的帐号就行了</strong>
        </li>
      </ul>

    </div>
  )
}

export default BeforeDashboard
