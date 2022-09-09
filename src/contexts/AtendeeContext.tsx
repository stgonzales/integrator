import React, { createContext, ReactNode, useContext, useState } from 'react'
import { checkDetails } from '../api'
import { AppContext } from './AppContext'

export type AtendeeContextProps = {
  children: ReactNode
}

export type AtendeeContextType = {
  atendee: AtendeeType
  handleSubmit: () => void
  handleImage: (base64: string) => void
  handleAtendeeDetails: ({
    id,
    ticketNumber,
    name,
    email,
    image
  }: Partial<AtendeeType>) => void
}

export type AtendeeType = {
  id: string
  ticketNumber: string
  name: string
  email: string
  image: string
}

const initialValue = {
  atendee: {
    id: '',
    ticketNumber: '',
    name: '',
    email: '',
    image: ''
  },
  handleSubmit: () => {},
  handleImage: () => {},
  handleAtendeeDetails: () => {}
}

export const AtendeeContext = createContext<AtendeeContextType>(initialValue)

export const AtendeeContextProvider = ({ children }: AtendeeContextProps) => {
  const { updateView, currentStep, steps } = useContext(AppContext)
  const [atendee, setAtendee] = useState(initialValue.atendee)

  // const handleAtendeeDetails = async ({
  //   ticketNumber = atendee.ticketNumber,
  //   email = atendee.email
  // }: Partial<AtendeeType>) => {
  //   updateView('loading')

  //   const newAtendeeDetails = atendee

  //   const resposne = await checkDetails({ ticket_number: ticketNumber, email })

  //   if (resposne.data.length <= 0 || resposne.status !== 200)
  //     updateView('error')

  //   const { id, nome } = resposne.data[0]

  //   newAtendeeDetails.id = id
  //   newAtendeeDetails.name = nome

  //   setAtendee(newAtendeeDetails)

  //   updateView('selfie')
  // }

  // const handleImage = (base64: string) => {
  //   updateView('loading')

  //   const newAtendeeDetails = atendee

  //   newAtendeeDetails.image = base64

  //   setAtendee(newAtendeeDetails)
  //   updateView('finishup')
  // }

  // const handleSubmit = () => {
  //   updateView('loading')

  //   console.log(atendee)
  //   setTimeout(() => {
  //     updateView('done')
  //   }, 2000)
  // }

  return (
    <AtendeeContext.Provider
      value={{ atendee, handleAtendeeDetails, handleSubmit, handleImage }}
    >
      {children}
    </AtendeeContext.Provider>
  )
}
