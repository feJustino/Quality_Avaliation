import fastify from 'fastify'
import { usersRoutes } from './http/routes/users'
const server = fastify()

server.addHook('preHandler', (req, res, done) => {
  void res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  void res.header('Access-Control-Allow-Methods', 'POST')
  void res.header('Access-Control-Allow-Methods', 'GET')
  void res.header('Access-Control-Allow-Methods', 'PUT')
  void res.header('Access-Control-Allow-Methods', 'DELETE')
  void res.header('Access-Control-Allow-Headers', '*')

  const isPreflight = /options/i.test(req.method)
  if (isPreflight) {
    return res.send()
  }

  done()
})

void server.register(usersRoutes, {
  prefix: '/users'
})

server
  .listen({
    port: 3333,
    path: '*'
  })
  .then(() => { console.log('Running...') })
  .catch(() => { console.log('Error...') })
