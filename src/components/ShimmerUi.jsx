import React from 'react'

const ShimmerUi = () => {
    return Array(15).fill(0).map(()=>
    <div className="bg-white m-2 p-2 shadow-lg relative w-[250px] h-[300px]">
   <div className="w-52 h-64 bg-gray-300" />
  </div>
  )
}

export default ShimmerUi