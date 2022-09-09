import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../contexts/AppContext'

function Heading() {
  const { content } = useContext(AppContext)
  const [title] = useState(content.heading.title)
  const [subtitle] = useState(content.heading.subtitle)

  return (
    <div
      id="heading"
      className="w-full flex flex-col justify-center items-center"
    >
      <h1 className="text-[42px] md:text-[52px] leading-[50px] md:leading-[60px] font-semibold text-[#153D8A]">
        {title}
      </h1>
      <h4 className="text-[18px] md:text-[34px]  leading-[26px] md:leading-[42px] font-medium text-center text-[#3F3F3F]">
        {subtitle}
        {/* <span className="text-[#153D8A]"> GPRDigital</span>. */}
      </h4>
    </div>
  )
}

export default Heading
