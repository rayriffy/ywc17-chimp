import React, { useEffect, useState } from 'react'

interface IPayload {
  navbarItems: {
    label: string
    href: string
  }[]
  duration: string
  detail: string
  condition: string
}

const defaultPayload: IPayload = {
  navbarItems: [],
  duration: null,
  detail: null,
  condition: null,
}

export const Payload = React.createContext<IPayload>(defaultPayload)

const Context: React.FC = props => {
  const {children} = props

  const [payload, setPayload] = useState<IPayload>(defaultPayload)

  useEffect(() => {
    fetch('https://panjs.com/ywc.json')
      .then(raw => raw.json())
      .then(res => {
        setPayload(res)
      })
  }, [])

  return (
    <Payload.Provider value={payload}>
      {children}
    </Payload.Provider>
  )
}

export default Context
