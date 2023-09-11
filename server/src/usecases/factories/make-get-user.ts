import { KnexUsersRepository } from '../../repositories/knex-user-repository'
import { GetUserUseCase } from '../get-user'

export function makeGetUserUseCase (): GetUserUseCase {
  const usersRepository = new KnexUsersRepository()
  const useCase = new GetUserUseCase(usersRepository)
  return useCase
}
