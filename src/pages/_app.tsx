import type { AppProps } from 'next/app'
import { AppContextProvider } from '@/contexts/AppContext'
// import { AtendeeContextProvider } from '../contexts/AtendeeContext'
import { EventContextProvider } from '@/contexts/EventContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <EventContextProvider>
        {/* <AtendeeContextProvider> */}
        <Component {...pageProps} />
        {/* </AtendeeContextProvider> */}
      </EventContextProvider>
    </AppContextProvider>
  )
}

export default MyApp
