// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Mail from '@/lib/mail'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { first_name, last_name, email, token, eventId } = req.body.payload

  Mail.sendMail({
    from: 'GPR Integrator <noreply@gprdigital.com.br>',
    to: `${first_name} ${last_name} <${email}>`,
    subject: 'Confirmacao de registro',
    html: `Ola ${first_name}, <a href="https://942tlq.sse.codesandbox.io/${eventId}?token=${token}">clique aqui</a> abaixo para realisar seu cadastro facial.`
  })
    .then((info) => {
      console.log(info.response)
    })
    .catch((err) => {
      console.error(err)
      throw new Error('Failed: ', err)
    })

  res.status(200).send('ok')
}
