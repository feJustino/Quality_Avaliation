import { knex } from '../database'
import { type User } from '../model/user'
import { type UserRepository } from './users-repository'

export class KnexUsersRepository implements UserRepository {
  async create (data: User): Promise<void> {
    await knex('users')
      .insert(data)
  }

  async get (id: string): Promise<User> {
    const userData = await knex('users')
      .first('*')
      .where('ID', id)
    return userData
  }

  async delete (id: string): Promise<void> {
    await knex('users')
      .delete()
      .where('ID', id)
  }

  async update (id: string, newData: Partial<User>): Promise<User> {
    return await knex('users')
      .update(newData)
      .select('*')
      .where('ID', id)
  }

  async getAll (): Promise<User[]> {
    return await knex('users')
      .select('*')
  }
}
