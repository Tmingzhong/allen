/*
 * @Author: tang.haoming
 * @Date: 2024-10-15 22:05:32
 * @LastEditors: tang.haoming
 * @LastEditTime: 2024-10-30 23:37:12
 * @FilePath: /allen/src/app/(frontend)/[...slug]/page.client.tsx
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
import { useRouter } from 'next/navigation'
import background from '../../../../public/background.jpg'

const { Header, Content, Footer } = Layout
import '../globals.css'
import CardTable from './cardTable'
import RichText from '@/components/RichText'
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
function Page(props: {
  pageData: {
    // page: IPage
    resultZxdt: IPage
    resultYwgl: IPage
    resultJqgg: IPage
    resultJqzx: IPage
    resultJqhd: IPage
    resultSwhz: IPage
    imageList: Array<IImage>
    address?: string
    phone?: string
    slug: string[]
    detailContent: any
  }
}) {
  const { pageData } = props
  console.log(pageData)
  console.log('detailData------>', pageData.detailContent)
  const isDetails = pageData.slug[0] === 'details'
  const isList = pageData.slug[0] === 'list'
  const isHome = pageData.slug[0] === 'home'

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [current, setCurrent] = useState('home')
  const router = useRouter()

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
      children: <CardTable isList={isList} page={pageData.resultZxdt} type={'zxdt'} />,
    },
    {
      key: '2',
      label: '游玩攻略',
      children: <CardTable isList={isList} page={pageData.resultYwgl} type={'ywgl'} />,
    },
    {
      key: '3',
      label: '景区公告',
      children: <CardTable isList={isList} page={pageData.resultJqgg} type={'jqgg'} />,
    },
    {
      key: '4',
      label: '景区资讯',
      children: <CardTable isList={isList} page={pageData.resultJqzx} type={'jqzx'} />,
    },
    {
      key: '5',
      label: '景区活动',
      children: <CardTable isList={isList} page={pageData.resultJqhd} type={'jqhd'} />,
    },
    {
      key: '6',
      label: '商务合作',
      children: <CardTable isList={isList} page={pageData.resultSwhz} type={'swhz'} />,
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
              color: '#4B4A48',
            }}
            selectedKeys={[current]}
            color="4B4A48"
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
        {isHome ? (
          <SwiperCompnent imageList={pageData.imageList} />
        ) : (
          <Image
            className=" w-full h-[500px] object-cover"
            alt={'background image'}
            src={background}
          />
        )}

        {isDetails ? (
          <div className=" mx-[12%] px-[8%] pb-[50px] my-10 p-4 bg-white min-w-96">
            <div className='flex flex-col '>
              <p className='pt-[50px]  pb-[20px] text-center text-[24px] font-bold'>
                {pageData.detailContent.title}
              </p>
              <div className='flex justify-around text-[#555555]'>
                <p>{`文章来源：${pageData.detailContent.source?pageData.detailContent.source:'未知'}`}</p>
                <p>{`作者：${pageData.detailContent.authar?pageData.detailContent.authar:'未知'}`}</p>
                <p>{`发布时间：${pageData.detailContent.publishedAt?pageData.detailContent.publishedAt.slice(0, 10) :'未知'}`}</p>
          

              </div>
              <div  className='mt-8 mx-4 bg-red-100 p-4 text-start text-[#555555]'>
              {`文章摘要：${pageData.detailContent.subTitle}`}
              </div>
            </div>
            <RichText className='mt-[50px] px-[8%] text-[#555555]' content={pageData.detailContent.content} enableGutter={false} />
          </div>
        ) : (
          <div className=" mx-40 my-10 p-4 bg-white min-w-96">
            <Tabs
              defaultActiveKey="1"
              tabBarExtraContent={<Button onClick={() => router.push('/list')}>更多</Button>}
              items={tabItems}
              onChange={onChange}
            />
          </div>
        )}
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        {`联系地址：${pageData.address}  联系电话：${pageData.phone}  `}
      </Footer>
    </Layout>
  )
}

export default Page