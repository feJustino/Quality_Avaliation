import 'dotenv/config'
import { knex as setupKnex, type Knex } from 'knex'

export const config: Knex.Config = {
  client: 'mysql',
  connection: {
    host: 'localhost',
    port: 3306,
    user: 'myuser',
    password: 'mysecretpassword',
    database: 'mydatabase'
  },
  migrations: {
    extension: 'ts',
    directory: './db/migrations'
  }
}

export const knex = setupKnex(config)
