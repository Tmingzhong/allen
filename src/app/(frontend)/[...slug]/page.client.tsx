/*
 * @Author: tang.haoming
 * @Date: 2024-10-15 22:05:32
 * @LastEditors: tang.haoming
 * @LastEditTime: 2024-11-07 23:26:24
 * @FilePath: /allen/src/app/(frontend)/[...slug]/page.client.tsx
 * @Description:
 */
'use client'

import React, { useEffect, useState } from 'react'
import SwiperCompnent from './swiperCompnent'
import { Breadcrumb, Layout, Menu, theme, Select, Button } from 'antd'
import { Tabs } from 'antd'
import type { TabsProps } from 'antd'
import Image from 'next/image'
import logo from '../../../../public/logo.png'
import { useRouter } from 'next/navigation'
import background from '../../../../public/bg1.jpg'

const { Header, Content, Footer } = Layout
import '../globals.css'
import CardTable from './cardTable'
import RichText from '@/components/RichText'

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
    resultZxdt: IPage[]
    resultYwgl: IPage
    resultJqgg: IPage
    resultJqzx: IPage
    resultJqhd: IPage
    resultSwhz: IPage
    imageList: Array<IImage>
    address?: string
    phone?: string
    slug: string[]
    detailContent: any,
    dict
  }
}) {

  
  const { pageData } = props

  const {dict} = pageData

  console.log(pageData)
  console.log('detailData------>', pageData.detailContent)
  const isDetails = pageData.slug[1] === 'details'
  const isList = pageData.slug[1] === 'list'
  const isHome = pageData.slug[1] === 'home'
  const lang = pageData.slug[0]
  console.log(isDetails,isList,isHome)

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [current, setCurrent] = useState('home')
  const [activeKey, setActiveKey] = useState('zxdt')
  const [langValue, setLangValue] = useState(lang)

  

  
  const router = useRouter()
  useEffect(()=>{
    if(pageData.slug[1] === 'list'&&!pageData.slug[2]){
      setActiveKey('jqzx')
      setCurrent('jqzx')
    }

    if(pageData.slug[1] === 'list'&&pageData.slug[2]){
      setCurrent(pageData.slug[2])
      setActiveKey(pageData.slug[2])
    }
    if(pageData.slug[1] === 'details'){
      setCurrent(pageData.detailContent.type)
    }
  },[pageData?.detailContent?.type, pageData.slug])

  const onClick = (e) => {
   
    console.log('click ', e)
    setCurrent(e.key)
    if(e.key==='home'){
      router.push(`/`)

    }else{
      router.push(`/${lang}/list/${e.key}`)

    }
  }
  // 改语言
  const handleChange = (value: string) => {
    setLangValue(value)
    router.push(`/${value}`)
  }
  const onChange = (key: string) => {
    setActiveKey(key)
  }
  const tabItems: TabsProps['items'] = [
    {
      key: 'zxdt',
      label: dict.zxdt,
      children: <CardTable more={dict.more} lang={lang} isList={isList} page={pageData.resultZxdt} type={'zxdt'} />,
    },
    {
      key: 'jqzx',
      label: dict.jqzx,
      children: <CardTable more={dict.more} lang={lang} isList={isList} page={pageData.resultJqzx} type={'jqzx'} />,
    },
    {
      key: 'ywgl',
      label: dict.ywgl,
      children: <CardTable more={dict.more} lang={lang} isList={isList} page={pageData.resultYwgl} type={'ywgl'} />,
    },
    {
      key: 'jqgg',
      label: dict.jqgg,
      children: <CardTable more={dict.more} lang={lang} isList={isList} page={pageData.resultJqgg} type={'jqgg'} />,
    },

    {
      key: 'jqhd',
      label: dict.jqgg,
      children: <CardTable more={dict.more} lang={lang} isList={isList} page={pageData.resultJqhd} type={'jqhd'} />,
    },
    {
      key: 'swhz',
      label: dict.jqgg,
      children: <CardTable more={dict.more} lang={lang} isList={isList} page={pageData.resultSwhz} type={'swhz'} />,
    },
  ]
  const tabItems2: TabsProps['items'] = [

    {
      key: 'jqzx',
      label: dict.jqzx,
      children: <CardTable more={dict.more} lang={lang} isList={isList} page={pageData.resultJqzx} type={'jqzx'} />,
    },
    {
      key: 'ywgl',
      label: dict.ywgl,
      children: <CardTable more={dict.more} lang={lang} isList={isList} page={pageData.resultYwgl} type={'ywgl'} />,
    },
    {
      key: 'jqgg',
      label:dict.jqgg,
      children: <CardTable more={dict.more} lang={lang} isList={isList} page={pageData.resultJqgg} type={'jqgg'} />,
    },

    {
      key: 'jqhd',
      label: dict.jqhd,
      children: <CardTable more={dict.more} lang={lang} isList={isList} page={pageData.resultJqhd} type={'jqhd'} />,
    },
    {
      key: 'swhz',
      label: dict.swhz,
      children: <CardTable more={dict.more} lang={lang} isList={isList} page={pageData.resultSwhz} type={'swhz'} />,
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

        <div className="flex flex-auto">
          <Menu
            onClick={onClick}
            style={{
              display:'flex',
              flex: '1 1 auto',
              justifyContent: 'end',
              backgroundColor: '#f7f7f7',
              alignItems: 'center',
              fontWeight: 'bold',
              border: 0,
              color: '#4B4A48',
            }}
            selectedKeys={[current]}
            color="4B4A48"
            mode="horizontal"
            items={[
              {
                label: dict.home,
                key: 'home',
              },
              {
                label: dict.jqzx,
                key: 'jqzx',
                children: [
                  { label:  dict.jqzx, key: 'jqzx' },
                  { label:  dict.jqhd, key: 'jqhd' },
                  { label:  dict.ywgl, key: 'ywgl' },
                  { label: dict.jqgg, key: 'jqgg' },
                ],
              },
              {
                label: dict.swhz,
                key: 'swhz',
              },
            ]}
          />
          <div className="flex justify-center bg-[#f7f7f7] items-center ">
            <Select
              defaultValue={langValue}
              style={{ width: 100 }}
              onChange={handleChange}
              options={[
                { value: 'zh', label: '中文' },
                { value: 'en', label: 'English' },
                { value: 'ko', label: '한국어' },
              ]}
            />
          </div>
        </div>
      </Header>

      <Content className="flex flex-auto flex-col  bg-[#f7f7f7] w-full h-full ">
        {isHome ? (
          <SwiperCompnent lang={lang} imageList={pageData.imageList} slug={pageData?.resultZxdt[0]?.slug} title={pageData?.resultZxdt[0]?.title}/>
        ) : (
          <Image
            className=" w-full h-[500px] object-cover	"
            alt={'background image'}
            src={background}
          />
        )}

        {isDetails ? (
          <div className=" mx-[12%] px-[8%] pb-[50px] my-10 p-4 bg-white min-w-96">
            <div className="flex flex-col ">
              <p className="pt-[50px]  pb-[20px] text-center text-[24px] font-bold">
                {pageData.detailContent.title}
              </p>
              <div className="flex justify-around text-[#555555]">
                <p>{`${dict.source}：${pageData.detailContent.source ? pageData.detailContent.source : '未知'}`}</p>
                <p>{`${dict.author}：${pageData.detailContent.authar ? pageData.detailContent.authar : '未知'}`}</p>
                <p>{`${dict.pubdate}：${pageData.detailContent.publishedAt ? pageData.detailContent.publishedAt.slice(0, 10) : '未知'}`}</p>
              </div>
              <div className="mt-8 mx-4 bg-red-100 p-4 text-start text-[#555555]">
                {`${dict.summary}：${pageData.detailContent.subTitle}`}
              </div>
            </div>
            <RichText
              className="mt-[50px] px-[8%] text-[#555555]"
              content={pageData.detailContent.content}
              enableGutter={false}
            />
          </div>
        ) : (
          <div className=" mx-40 my-10 p-4 bg-white min-w-96">
            <Tabs
              activeKey={activeKey}
              tabBarExtraContent={!isList? <Button onClick={() => router.push(`/${lang}/list`)}>{`${dict.more}`}</Button>:null}
              items={isList?tabItems2:tabItems}
              onChange={onChange}
            />
          </div>
        )}
      </Content>
      <Footer style={{ textAlign: 'center', backgroundColor: 'black', color: '#999' }}>
        <span> {`${dict.address}：${pageData.address}`}</span>
        <span  className='ml-8'> {`${dict.phone}：${pageData.phone}`}</span>
      </Footer>
    </Layout>
  )
}

export default Page
