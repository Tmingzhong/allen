/*
 * @Author: tang.haoming
 * @Date: 2024-10-15 22:05:32
 * @LastEditors: tang.haoming
 * @LastEditTime: 2024-10-27 20:47:07
 * @FilePath: /allen/src/app/(frontend)/[slug]/page.client.tsx
 * @Description:
 */
'use client'

import React, { useState } from 'react'
import SwiperCompnent from './swiperCompnent'
import { Breadcrumb, Layout, Menu, theme, Select, Button } from 'antd'
import { Tabs } from 'antd'
import type { TabsProps } from 'antd'
import Image from 'next/image'
import logo from '../../../../public/logo.png'

const { Header, Content, Footer } = Layout
import '../globals.css'
import CardTable from './cardTable'
const items = [
  {
    label: '首页',
    key: 'home',
  },
  {
    label: '景区公告',
    key: 'app',
  },
  {
    label: '景区活动',
    key: 'huodong',
  },
]

export interface IImage {
  url: string
  alt: string
}
interface IPage {
  id: number
  title: string
  content: { root: any }
  publishedAt: string
  authar: string
  source: string
  slug: string
  updatedAt: string
  createdAt: string
  _status: string
}
function page(props: {
  pageData: {
    page: IPage
    imageList: Array<IImage>
    address?: string
    phone?: string
    logo?: string
  }
}) {
  const { pageData } = props
  console.log(pageData)
  console.log(`${process.env.NEXT_PUBLIC_SERVER_URL}/${pageData.logo}`)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [current, setCurrent] = useState('home')

  const onClick = (e) => {
    console.log('click ', e)
    setCurrent(e.key)
  }
  const handleChange = (value: string) => {
    console.log(`selected ${value}`)
  }
  const onChange = (key: string) => {
    console.log(key)
  }
  const tabItems: TabsProps['items'] = [
    {
      key: '1',
      label: '最新动态',
      children: <CardTable page={pageData.page} />,
    },
    {
      key: '2',
      label: '游玩攻略',
      children: 'Content of Tab Pane 2',
    },
    {
      key: '3',
      label: '景区公告',
      children: 'Content of Tab Pane 3',
    },
    {
      key: '4',
      label: '景区资讯',
      children: 'Content of Tab Pane 3',
    },
    {
      key: '5',
      label: '景区活动',
      children: 'Content of Tab Pane 3',
    },
    {
      key: '6',
      label: '商务合作',
      children: 'Content of Tab Pane 3',
    },
  ]
  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#f7f7f7',
        }}
      >
        <Image
          width={50}
          height={50}
          src={logo}
          alt="Logo"
          // className="w-full h-full object-contain"
        />

        <div className="flex ">
          <Menu
            onClick={onClick}
            style={{
              justifyContent: 'flex-end',
              backgroundColor: '#f7f7f7',
              alignItems: 'center',
              fontWeight: 'bold',
              border: 0,
            }}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
          />
          <div className="flex justify-center bg-[#f7f7f7] items-center ">
            <Select
              defaultValue="cn"
              style={{ width: 100 }}
              onChange={handleChange}
              options={[
                { value: 'cn', label: '中文' },
                { value: 'en', label: '英文' },
                { value: 'Yiminghe', label: 'yiminghe' },
              ]}
            />
          </div>
        </div>
      </Header>

      <Content className="flex flex-auto flex-col  bg-[#f7f7f7] w-full h-full ">
        <SwiperCompnent imageList={pageData.imageList} />
        <div className=" mx-10 my-10 p-4 bg-white">
          <Tabs
            defaultActiveKey="1"
            tabBarExtraContent={<Button>更多</Button>}
            items={tabItems}
            onChange={onChange}
          />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        {`联系地址：${pageData.address}  联系电话：${pageData.phone}  `}
      </Footer>
    </Layout>
  )
}

export default page
