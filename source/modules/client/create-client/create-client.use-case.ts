import { hash } from 'bcrypt'
import { prisma } from '../../../database/prisma-client'

interface ICreateClient {
  username: string,
  password: string
}

export class CreateClientUseCase {
  async execute ({ username, password }: ICreateClient) {
    const verifyIfClientAlreadyExits = await prisma.clients.findFirst({ where: { username } })

    if (verifyIfClientAlreadyExits) {
      throw new Error('Client already exists')
    }

    const hashPassword = await hash(password, 12)

    const saveClient = await prisma.clients.create({
      data: {
        username,
        password: hashPassword
      }
    })

    return saveClient
  }
}
