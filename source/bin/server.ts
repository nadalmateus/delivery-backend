import express from 'express'
import { indexRoutes } from '../routes/index.routes'

const server = express()

server.use(express.json())
server.use(indexRoutes)

const port = 3333
server.listen(port, () => console.log(`http://localhost:${port}`))
