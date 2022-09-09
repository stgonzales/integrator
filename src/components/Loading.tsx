import React from 'react'
import { FiRefreshCw } from 'react-icons/fi'

function Loading() {
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <FiRefreshCw size={100} className="animate-spin stroke-[#153D8A]" />
    </div>
  )
}

export default Loading
