import React from 'react'

export default function Rankingchart() {
  return (
    <div className=" text-left my-12 w-5/6">
        {/* build a white line */}
      <div className="text-2xl font-bold mb-2">
        血液排名
      </div>
      <div className="w-full h-0.5 bg-fuchsia-50 mx-auto mb-5"></div>
      
    
      <div className="flex justify-center">
        <img src="https://excelprof.com/wp-content/uploads/2021/09/image-3.png" alt="Ranking Chart" className=" max-w-full h-96" />
      </div>
    </div>
  )
}
