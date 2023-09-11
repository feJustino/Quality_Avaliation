import fastify from 'fastify'
import { usersRoutes } from './http/routes/users'
const server = fastify()

void server.register(usersRoutes, {
  prefix: '/users'
})

server
  .listen({
    port: 3333,
    host: '0.0.0.0'
  })
  .then(() => { console.log('Running...') })
  .catch(() => { console.log('Error...') })
