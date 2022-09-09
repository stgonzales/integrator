import React, { createContext, ReactNode, useEffect, useState } from 'react'

export type State = 'loading' | 'error'

export type AppContextProps = {
  children: ReactNode
}

export type ContentType = {
  component: string
  heading: {
    title: string
    subtitle: string
  }
  body: {
    description: string
  }
}

export type AppContextType = {
  content: ContentType
  setContent: (content: Partial<ContentType>) => void
}

const initialValue: AppContextType = {
  content: {
    component: '',
    heading: {
      title: '',
      subtitle: ''
    },
    body: {
      description: ''
    }
  },
  setContent: () => {}
  // states: {
  //   loading: {
  //     heading: {
  //       title: 'Aguarde...',
  //       subtitle: ''
  //     },
  //     content: {
  //       component: 'Loading'
  //     }
  //   },
  //   error: {
  //     heading: {
  //       title: 'Oops...',
  //       subtitle:
  //         'Nao localizamos seu registro no evento ou voce ja registrou sua foto!'
  //     },
  //     content: {
  //       component: 'Erro'
  //     }
  //   }
  // },
  // content: {
  //   landing: {
  //     heading: {
  //       title: 'Bem-vindo',
  //       subtitle: 'ao servico de integracao de eventos da GPRDigital'
  //     },
  //     body: {
  //       component: 'Event',
  //       next: 'selfie'
  //     }
  //   },
  //   selfie: {
  //     heading: {
  //       title: 'Hora da Selfie!',
  //       subtitle: 'escolha abaixo uma das opcoes para registrar sua selfie.'
  //     },
  //     body: {
  //       component: 'Upload',
  //       next: 'finishup'
  //     }
  //   },
  //   finishup: {
  //     heading: {
  //       title: 'Tudo pronto...',
  //       subtitle: 'basta clicar em enviar para finalizar.'
  //     },
  //     body: {
  //       component: 'FinishUp'
  //     }
  //   },
  //   done: {
  //     heading: {
  //       title: 'Obrigado!',
  //       subtitle: 'sua foto esta salva e pronta para ser utilizada na entrada do evento.'
  //     },
  //     body: {
  //       component: 'Completed'
  //     }
  //   }
  // },
}

export const AppContext = createContext<AppContextType>(initialValue)

export const AppContextProvider = ({ children }: AppContextProps) => {
  const [content, setContent] = useState(initialValue.content)

  return (
    <AppContext.Provider value={{ content, setContent }}>
      {children}
    </AppContext.Provider>
  )
}
