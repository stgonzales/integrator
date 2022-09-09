// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { eventId, token } = req.query

  const data = await fetch(process.env.SYMPLA_API + '/events/' + eventId, {
    method: 'GET',
    headers: {
      s_token: token as string
    }
  })

  res.status(200).json(data.body)
}
