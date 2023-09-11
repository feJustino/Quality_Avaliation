import { type UserRepository } from '../repositories/users-repository'

export class DeleteUserUseCase {
  constructor (private readonly UserRepository: UserRepository) {

  }

  async execute (id: string): Promise<void> {
    await this.UserRepository.delete(id)
  }
}
