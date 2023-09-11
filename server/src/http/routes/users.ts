import { type FastifyInstance } from 'fastify'
import { createUser } from '../controller/create-user'
import { getAllUsers } from '../controller/get-all-users'
import { updateUser } from '../controller/update-user'
import { deleteUser } from '../controller/delete-user'
import { getUser } from '../controller/get-user'

export async function usersRoutes (server: FastifyInstance): Promise<void> {
  server.get('/', getAllUsers)

  server.get('/:id', getUser)

  server.post('/', createUser)

  server.put('/:id', updateUser)

  server.delete('/:id', deleteUser)
}
