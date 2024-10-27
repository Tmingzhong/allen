/*
 * @Author: tang.haoming
 * @Date: 2024-10-26 21:55:14
 * @LastEditors: tang.haoming
 * @LastEditTime: 2024-10-27 20:04:51
 * @FilePath: /allen/src/app/(frontend)/[slug]/swiperCompnent.tsx
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
export interface IStepProgress {
  imageList: Array<IImage>
}
const swiperCompnent = (props: IStepProgress) => {
  const { imageList } = props
  console.log(imageList)
  console.log('process.env.NEXT_PUBLIC_SERVER_URLprocess.env.NEXT_PUBLIC_SERVER_URL')
  console.log(process.env.NEXT_PUBLIC_SERVER_URL)
  {
    imageList.map((item, index) => {
      console.log(`${process.env.NEXT_PUBLIC_SERVER_URL}/${item.image.url}`)
    })
  }
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
        {imageList.map((item, index) => {
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
        <Image src={arrowDwon} alt={''} />
      </div>

      <div className="notice-line z-50 flex items-center p-4 justify-around">
        <div>
          <SoundOutlined
            style={{
              color: 'white',
              paddingRight: '8px',
            }}
          />
          <a href="">最新动态：八万多元金饰遗落民宿 暖心店主完璧归赵</a>
        </div>
        {/* <SlideNextButton /> */}
      </div>
    </div>
  )
}
export default swiperCompnent
