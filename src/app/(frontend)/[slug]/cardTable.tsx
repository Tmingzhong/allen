/*
 * @Author: tang.haoming
 * @Date: 2024-10-27 16:41:51
 * @LastEditors: tang.haoming
 * @LastEditTime: 2024-10-27 21:08:17
 * @FilePath: /allen/src/app/(frontend)/[slug]/cardTable.tsx
 * @Description:
 */
'use client'
import { Card } from 'antd'
import Image from 'next/image'

const CardTable = (props: any) => {
  const { page } = props
  console.log('123123123123123123123')

  page.map((item) => {
    console.log(`${process.env.NEXT_PUBLIC_SERVER_URL}/${item.image.url}`)
  })
  return (
    <div className="flex felx-row flex-wrap">
      {page.map((item) => (
        <Card key={item.id} hoverable style={{ width: '50%' }}>
          <div className="flex flex-row">
            <img
              width={240}
              height={170}
              src={`${process.env.NEXT_PUBLIC_SERVER_URL}/${item.image.url}`}
              alt={item.image.alt}
            />
            <div className="flex flex-col overflow-hidden ml-2">
              <p className="font-bold truncate">{item.title}</p>
              <p className="mb-4 pb-4 border-b">2021-12-04</p>
              <div className="flex flex-auto bg-red-400">
                <p className="font-bold text-ellipsis overflow-hidden ">{item.subTitle}</p>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
export default CardTable
