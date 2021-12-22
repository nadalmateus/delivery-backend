import { Router } from 'express'
import { clientRoutes } from './clients.routes'

const indexRoutes = Router()

indexRoutes.use('/clients/', clientRoutes)

export { indexRoutes }
