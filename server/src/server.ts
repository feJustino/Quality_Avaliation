import fastify from 'fastify'
import { knex } from './database'
import { env } from './env'
const server = fastify()

server.get('/hello', async () => {
  const transactions = await knex('transactions').select('*')

  return transactions
})

server
  .listen({ port: env.PORT })
  .then(() => { console.log('Running...') })
  .catch(() => { console.log('Error...') })
