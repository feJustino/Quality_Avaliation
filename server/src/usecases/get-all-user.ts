import { type User } from '../model/user'
import { type UserRepository } from '../repositories/users-repository'

export class GetAllUsersUseCase {
  constructor (private readonly UserRepository: UserRepository) {

  }

  async execute (): Promise<User[]> {
    return await this.UserRepository.getAll()
  }
}
