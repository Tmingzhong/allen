/*
 * @Author: tang.haoming
 * @Date: 2024-10-26 21:55:14
 * @LastEditors: tang.haoming
 * @LastEditTime: 2024-11-07 23:26:47
 * @FilePath: /allen/src/app/(frontend)/[...slug]/swiperCompnent.tsx
 * @Description:
 */
'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import React, { useRef, useState } from 'react'
// Import Swiper styles
import 'swiper/css'

import Image from 'next/image'
import { SoundOutlined } from '@ant-design/icons'
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import arrowDwon from '../../../../public/arrow-dwon.png'
import { IImage } from './page.client'
import { getDictionary } from '@/dictionaries';

export interface IStepProgress {
  imageList: Array<IImage>
  slug:string
  title:string
  lang:string
}
const swiperCompnent = async (props: IStepProgress) => {
  const { imageList,title='',slug,lang='zh' } = props
  const dict = await getDictionary(lang); // en

  return (
    <div className="homePage relative ">
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        // navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {imageList.map((item:any, index) => {
          return (
            <SwiperSlide key={item.id}>
              <Image
                className="swiperImage"
                fill={true}
                alt={item.alt}
                src={`${process.env.NEXT_PUBLIC_SERVER_URL}/${item.image.url}`}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>

      <div className="ui-arrow-down">
        <Image src={arrowDwon} alt={'arrowDwon'} />
      </div>

      <div className="notice-line z-50 flex items-center p-4 justify-around">
        <div>
          <SoundOutlined
            style={{
              color: 'white',
              paddingRight: '8px',
            }}
          />
          <a href={`/details/${slug}`} >{`${dict.zxdt}:${title}`}</a>
        </div>
        {/* <SlideNextButton /> */}
      </div>
    </div>
  )
}
export default swiperCompnent
