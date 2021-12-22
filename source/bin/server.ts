import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import { indexRoutes } from '../routes/index.routes'

const server = express()

server.use(express.json())
server.use(indexRoutes)
server.use((err: Error, request: Request, response: Response, nextFunction: NextFunction) => {
  if (err instanceof Error) {
    return response.status(400).json({ message: err.message })
  }
  return response.status(500).json({ status: 'error', message: 'Internal Server Error' })
})

const port = 3333
server.listen(port, () => console.log(`http://localhost:${port}`))
