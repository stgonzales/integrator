import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import { DynamicComponent, Loading } from '@/components'

function Content(): JSX.Element {
  const { loading } = useContext(AppContext)

  return (
    <div
      id="content"
      className="mx-auto mt-5 h-full flex flex-col gap-8 items-center"
    >
      {loading ? <Loading /> : <DynamicComponent />}
    </div>
  )
}

export default Content
