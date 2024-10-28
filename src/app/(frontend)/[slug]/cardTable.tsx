/*
 * @Author: tang.haoming
 * @Date: 2024-10-27 16:41:51
 * @LastEditors: tang.haoming
 * @LastEditTime: 2024-10-28 22:33:20
 * @FilePath: /allen/src/app/(frontend)/[slug]/cardTable.tsx
 * @Description:
 */
'use client'
import { Card } from 'antd'
import Image from 'next/image'

const CardTable = (props: any) => {
  const { page } = props
  console.log('123123123123123123123')
  console.log(page)

  page.map((item) => {
    console.log(`${process.env.NEXT_PUBLIC_SERVER_URL}/${item?.image?.url}`)
  })
  return (
    <div className="flex felx-row flex-wrap gap-[10px]">
      {page.map((item) => (
        <div key={item.id} className="item  ">
          <Card hoverable className=" w-full h-[220px] ">
            <div className="flex flex-row overflow-hidden bg-[#f7f7f7]">
              <img
                className="imgStyle"
                src={`${process.env.NEXT_PUBLIC_SERVER_URL}/${item.image.url}`}
                alt={item.image.alt}
              />
              <div className="flex flex-col overflow-hidden ml-2 ">
                <p className="font-bold truncate">{item.title}</p>
                <p className="mb-4 pb-4 border-b">2021-12-04</p>
                <p className="line-clamp-3	 font-bold whitespace-normal text-ellipsis overflow-hidden   ">
                  {item.subTitle}
                </p>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  )
}
export default CardTable
