import { type User } from '../model/user'

export interface UserRepository {
  create: (data: User) => Promise<void>
  update: (id: string, newData: Partial<User>) => Promise<User>
  delete: (id: string) => Promise<void>
  get: (id: string) => Promise<User | null>
  getAll: () => Promise<User[]>
}
