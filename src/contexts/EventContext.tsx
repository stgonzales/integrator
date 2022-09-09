import React, { createContext, ReactNode, useState } from 'react'

export type EventContextProps = {
  children: ReactNode
}

export type Event = {
  id: number
    start_date: Date | undefined
    end_date: Date | undefined
    name: string
    detail: string
    private_event: boolean
    published: boolean
    cancelled: boolean
    image: string
    url: string
    address: {
      name: string
      address: string
      address_num: string
      address_alt: string
      neighborhood: string
      city: string
      state: string
      zip_code: string
      country: string
    }
    host: {
      name: string
      description: string
    }
}

export type EventContextType = {
  event: Event
  handleEvent: (event: Event) => void
}

const initialValue: EventContextType | undefined = {
  event: {
    id: 0,
    start_date: undefined,
    end_date: undefined,
    name: '',
    detail: '',
    private_event: false,
    published: false,
    cancelled: false,
    image: '',
    url: '',
    address: {
      name: '',
      address: '',
      address_num: '',
      address_alt: '',
      neighborhood: '',
      city: '',
      state: '',
      zip_code: '',
      country: ''
    },
    host: {
      name: '',
      description: ''
    }
  },
  handleEvent: () => {}
}

export const EventContext = createContext<EventContextType>(initialValue)

export const EventContextProvider = ({ children }: EventContextProps) => {
  const [event, setEvent] = useState<Event>(initialValue.event)

  const handleEvent = (event: Event) => {
    setEvent(event)
  }

  return (
    <EventContext.Provider value={{ event, handleEvent }}>{children}</EventContext.Provider>
  )
}
