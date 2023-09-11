import { KnexUsersRepository } from '../../repositories/knex-user-repository'
import { GetAllUsersUseCase } from '../get-all-user'

export function makeGetAllUsersUseCase (): GetAllUsersUseCase {
  const usersRepository = new KnexUsersRepository()
  const useCase = new GetAllUsersUseCase(usersRepository)
  return useCase
}
