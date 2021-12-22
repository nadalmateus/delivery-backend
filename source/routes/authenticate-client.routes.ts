import { Router } from 'express'
import { AuthenticateClientController } from '../modules/account/authenticate-client/authenticate-client.controller'

const authenticateClientRoutes = Router()

const authenticateClientController = new AuthenticateClientController()

authenticateClientRoutes.post('/', authenticateClientController.handle)

export { authenticateClientRoutes }
