import { type User } from '../model/user'
import { type UserRepository } from '../repositories/users-repository'
interface UpdateUsersUseCaseRequest {
  id: string
  data: Partial<User>
}

interface UpdateUsersUseCaseResponse {
  user: User
}
export class UpdateUserUseCase {
  constructor (private readonly UserRepository: UserRepository) {

  }

  async execute ({ id, data }: UpdateUsersUseCaseRequest): Promise<UpdateUsersUseCaseResponse> {
    const user = await this.UserRepository.update(id, data)
    return { user }
  }
}
