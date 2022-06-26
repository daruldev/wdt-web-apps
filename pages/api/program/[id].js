import { NextApiRequest, NextApiResponse } from 'next'
import { data } from './data'

export default function getProgramByID(req, res) {
  res.status(200).json({
    'status' : 'success',
    'data' : data.filter((o)=>o.id === parseInt(req.query.id))[0] ?? null,
  })
}
