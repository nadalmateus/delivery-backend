import { Router } from 'express'
import { CreateClientController } from '../modules/client/create-client/create-client.controller'

const clientRoutes = Router()

const createClientController = new CreateClientController()

clientRoutes.post('/', createClientController.handle)

export { clientRoutes }
