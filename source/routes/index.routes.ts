import { Router } from 'express'
import { authenticateClientRoutes } from './authenticate-client.routes'
import { clientRoutes } from './clients.routes'

const indexRoutes = Router()

indexRoutes.use('/clients/', clientRoutes)
indexRoutes.use('/authenticate', authenticateClientRoutes)

export { indexRoutes }
