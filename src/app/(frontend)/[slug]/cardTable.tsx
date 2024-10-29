/*
 * @Author: tang.haoming
 * @Date: 2024-10-27 16:41:51
 * @LastEditors: tang.haoming
 * @LastEditTime: 2024-10-29 23:16:34
 * @FilePath: /allen/src/app/(frontend)/[slug]/cardTable.tsx
 * @Description:
 */
'use client'
import { Card, Button, List, Skeleton } from 'antd'
import React, { useEffect, useState } from 'react'

const CardTable = (props: any) => {
  const { page } = props
  console.log('123123123123123123123')
  console.log(page)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<any>(page)
  const [list, setList] = useState<any>(page)

  const onLoadMore = () => {
    setLoading(true)

    fetch('/api/pages')
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        const newData = data.concat(res.docs)
        setData(newData)
        setList(newData)
        setLoading(false)
        // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
        // In real scene, you can using public method of react-virtualized:
        // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
        // window.dispatchEvent(new Event('resize'))
      })
  }
  const loadMore = !loading ? (
    <div
      style={{
        display: 'flex',
        flexBasis: '100%',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 12,
        height: 32,
        lineHeight: '32px',
      }}
    >
      <Button onClick={onLoadMore}>loading more</Button>
    </div>
  ) : null
  return (
    <div className="flex felx-row flex-wrap gap-[10px] ">
      {/* <List
        className="item"
        loading={initLoading}
        itemLayout="vertical"
        loadMore={loadMore}
        dataSource={page}
        renderItem={(item: any) => (
          <div key={item.id} className="item  ">
            <Card hoverable className=" w-full h-[220px] ">
              <div className="flex flex-row overflow-hidden bg-[#f7f7f7]">
                <img
                  className="imgStyle"
                  src={`${process.env.NEXT_PUBLIC_SERVER_URL}/${item.image.url}`}
                  alt={item.image.alt}
                />
                <div className="flex flex-col overflow-hidden ml-2 ">
                  <p className="font-bold truncate text-[#4B4A48]">{item.title}</p>
                  <p className="mb-4 pb-4 text-[14px] border-b border-[#C6C6C6] text-[#7D7D7D]">
                    {item.createdAt ? item.createdAt.slice(0, 10) : ''}
                  </p>
                  <p className="line-clamp-3 text-[#7D7D7D] text-[14px]	  whitespace-normal text-ellipsis overflow-hidden   ">
                    {item.subTitle}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        )}
      /> */}

      {list.map((item) => (
        <div key={item.id} className="item  ">
          <Card hoverable className=" w-full h-[220px] ">
            <div className="flex flex-row overflow-hidden bg-[#f7f7f7]">
              <img
                className="imgStyle"
                src={`${process.env.NEXT_PUBLIC_SERVER_URL}/${item.image.url}`}
                alt={item.image.alt}
              />
              <div className="flex flex-col overflow-hidden ml-2 ">
                <p className="font-bold truncate text-[#4B4A48]">{item.title}</p>
                <p className="mb-4 pb-4 text-[14px] border-b border-[#C6C6C6] text-[#7D7D7D]">
                  {item.createdAt ? item.createdAt.slice(0, 10) : ''}
                </p>
                <p className="line-clamp-3 text-[#7D7D7D] text-[14px]	  whitespace-normal text-ellipsis overflow-hidden   ">
                  {item.subTitle}
                </p>
              </div>
            </div>
          </Card>
        </div>
      ))}
      {loadMore}
    </div>
  )
}
export default CardTable
