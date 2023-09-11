import { KnexUsersRepository } from '../../repositories/knex-user-repository'
import { DeleteUserUseCase } from '../delete-user'

export function makeDeleteUserUseCase (): DeleteUserUseCase {
  const usersRepository = new KnexUsersRepository()
  const useCase = new DeleteUserUseCase(usersRepository)
  return useCase
}
