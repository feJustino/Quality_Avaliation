import { KnexUsersRepository } from '../../repositories/knex-user-repository'
import { CreateUserUseCase } from '../create-user'

export function makeCreateUserUseCase (): CreateUserUseCase {
  const usersRepository = new KnexUsersRepository()
  const useCase = new CreateUserUseCase(usersRepository)
  return useCase
}
