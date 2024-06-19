"use client"
import React from 'react'
import newsimage from '@/public/app_images/6009650.jpg'

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
import { useState } from 'react'
export default function News() {
 const [news, setNews] = useState([{title: "新冠疫苗接種", content: "新冠疫苗接種已經開始，請大家踴躍接種，保護自己，保護他人。", link: "https://www.cdc.gov.tw/"},
    {title: "新冠疫苗接種2", content: "新冠疫苗接種已經開始，請大家踴躍接種，保護自己，保護他人。", link: "https://www.cdc.gov.tw/"},
    {title: "新冠疫苗接種3", content: "新冠疫苗接種已經開始，請大家踴躍接種，保護自己，保護他人。", link: "https://www.cdc.gov.tw/"}
 ])
  return (
    <div className=" text-left my-8 w-5/6">
    {/* build a white line */}
    <div className="text-2xl font-bold mb-2">
        最新訊息
    </div>
    <div className="w-full h-0.5 bg-fuchsia-50 mx-auto mb-5"></div>
    

    <div className="flex justify-center">
        <img src={newsimage.src} alt="news image" className=" max-w-full h-96" />
    </div>
    <div className='mt-4'></div>
        
    {news.map((item, index) => (
        <div className=" mt-2 text-pretty">
        <HoverCard key={index}>
          <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
            <HoverCardTrigger className="hover-card-trigger">
              {item.title}
            </HoverCardTrigger>
          </a>
          <HoverCardContent className="hover-card-content">
            {item.content}
          </HoverCardContent>
        </HoverCard>
        </div>
      ))}
    
    


    </div>
  )
}
