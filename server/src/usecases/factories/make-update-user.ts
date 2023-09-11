import { KnexUsersRepository } from '../../repositories/knex-user-repository'
import { UpdateUserUseCase } from '../update-user'

export function makeUpdateUserUseCase (): UpdateUserUseCase {
  const usersRepository = new KnexUsersRepository()
  const useCase = new UpdateUserUseCase(usersRepository)
  return useCase
}
