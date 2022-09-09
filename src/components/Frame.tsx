import React, { ReactNode } from 'react'

interface FrameProps {
  children: ReactNode
}

function Frame({ children }: FrameProps) {
  return (
    <div id="frame" className="w-full h-full flex justify-center items-center">
      {/* <div className="before:w-[360px] before:sm:w-[560px] before:md:w-[730px] before:h-[660px] before:m-auto before:rounded-3xl before:border before:border-solid before:border-white before:bg-white before:opacity-60"></div> */}
      {/* <div className="before:w-[360px] before:sm:w-[560px] before:md:w-[730px] before:h-[660px] before:rounded-3xl before:border before:border-solid before:border-white before:bg-white before:opacity-60 w-[330px] sm:w-[530px] md:w-[700px] max-h-[630px] rounded-2xl bg-gray-100 px-6 md:p-12 py-5 md:p-10 flex justify-center items-center">
        {children}
      </div> */}
      <div className="sm:w-[560px] md:w-[730px] w-[360px] max-h-[630px] rounded-2xl bg-white px-6 md:p-12 py-5 md:p-10">
        {children}
      </div>
    </div>
  )
}

export default Frame
