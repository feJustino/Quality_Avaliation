import { type User } from '../model/user'
import { type UserRepository } from '../repositories/users-repository'

interface GetUsersUseCaseRequest {
  id: string
}

interface GetUsersUseCaseResponse {
  user: User
}

export class GetUserUseCase {
  constructor (private readonly UserRepository: UserRepository) {}

  async execute ({ id }: GetUsersUseCaseRequest): Promise<GetUsersUseCaseResponse> {
    const user = await this.UserRepository.get(id)

    if (user == null) {
      throw new Error('Usuario Inexistente')
    }

    return {
      user
    }
  }
}
