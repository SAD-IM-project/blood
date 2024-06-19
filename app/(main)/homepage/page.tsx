import React from 'react'
import Rankingchart from '@/components/Rankingchart'
import News from '@/components/News'
import Info from '@/components/Info'

export default function page() {
  return (
    <div className='m-1 flex flex-col items-center w-5/6 right-0 absolute'>
    <Rankingchart />
    <News />
    <Info />
    
    </div>
  )
}
