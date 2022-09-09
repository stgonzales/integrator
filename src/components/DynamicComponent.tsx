import React, { lazy, useContext, useEffect, useState } from 'react'
import { AppContext } from '../contexts/AppContext'

const importView = (component: string) =>
  lazy(() => import(`./${component}`).catch(() => import('./Erro')))

function DynamicComponent() {
  const { currentStep, steps } = useContext(AppContext)
  const [component, setComponent] = useState<JSX.Element>()

  useEffect(() => {
    async function loadViews() {
      const componentToRender = async (component: string) => {
        const View = await importView(component)
        return <View />
      }

      const view = await componentToRender(steps[currentStep].content.component)
      setComponent(view)
    }

    loadViews()
  }, [currentStep])

  return <React.Suspense fallback="Loading...">{component}</React.Suspense>
}

export default DynamicComponent
