import { useContext } from 'react'
import { EventContext } from '@/contexts/EventContext'

const Event = () => {
  const { event } = useContext(EventContext)

  return (
    <>
      <div className="w-4/5 m-auto pt-5">
        <div className="flex items-center flex-col">
          <h2 className="font-bold">Evento</h2>
          <div>
            <p>{event.name}</p>
            <p>{event.start_date}</p>
            {event.address.name === 'Local a definir' ? (
              <p>Local a definir!</p>
            ) : (
              <div className="flex space-around">
                <p>{event.address.name}</p>
                <p>{`${event.address.address}, ${event.address.num} - ${event.address.city}-${event.address.state}`}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

// "address": {
//   "name": "Loja Contempo",
//   "address": "Rua Fernandes Tourinho",
//   "address_num": "AB45ER78",
//   "address_alt": "10º Andar",
//   "neighborhood": "Funcionários",
//   "city": "Belo Horizonte",
//   "state": "MG",
//   "zip_code": "31112-000",
//   "country": "BR"
// },

export default Event
