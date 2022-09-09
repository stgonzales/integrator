import React, { ReactNode } from 'react'

interface MainProps {
  children: ReactNode
}
function Main({ children }: MainProps) {
  return <main className="w-full h-full col-span-3">{children}</main>
}

export default Main
