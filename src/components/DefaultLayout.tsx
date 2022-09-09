import { Background, Main, Frame } from '@/components'
import React, { ReactNode } from 'react'

export interface DefaultLayoutProps {
  children?: ReactNode
}

function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className="w-screen h-screen relative font-sans overflow-hidden">
      <Background />
      <div className="absolute w-full h-full top-0">
        <Main>
          <Frame>{children}</Frame>
        </Main>
        {/* <Sidebar /> */}
      </div>
    </div>
  )
}

export default DefaultLayout
