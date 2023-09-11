import { randomUUID } from 'node:crypto'
import { type UserRequest } from '../model/user'
import { type UserRepository } from '../repositories/users-repository'

export class CreateUserUseCase {
  constructor (private readonly UserRepository: UserRepository) {

  }

  async execute (body: UserRequest): Promise<void> {
    await this.UserRepository.create({
      ID: randomUUID(),
      idUsuario: randomUUID(),
      ...body
    })
  }
}
