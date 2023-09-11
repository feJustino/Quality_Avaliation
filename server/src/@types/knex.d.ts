// eslint-disable-next-line
import { Knex } from 'knex'
import { type User } from '../model/user'

declare module 'knex/types/tables' {
  export interface Tables {
    users: User
  }
}
