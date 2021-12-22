import { compare } from 'bcrypt'
import { prisma } from '../../../database/prisma-client'
import { sign } from 'jsonwebtoken'

interface IAuthenticateClient {
  username: string,
  password: string
}

export class AuthenticateClientUseCase {
  async execute ({ username, password }: IAuthenticateClient) {
    const client = await prisma.clients.findFirst({ where: { username } })

    if (!client) {
      throw new Error('Username or password invalid')
    }

    const passwordMatch = await compare(password, client.password)

    if (!passwordMatch) {
      throw new Error('Username or password invalid')
    }

    const token = sign({ username }, '1f717732a21bf6574c795c60e6c6f0eb', {
      subject: client.id,
      expiresIn: '1d'
    })

    return token
  }
}
