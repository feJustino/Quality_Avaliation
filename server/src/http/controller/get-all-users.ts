import { type FastifyReply, type FastifyRequest } from 'fastify'
import { type User } from '../../model/user'
import { makeGetAllUsersUseCase } from '../../usecases/factories/make-get-all-users'

export const getAllUsers = async (request: FastifyRequest, reply: FastifyReply): Promise<User> => {
  try {
    const user = await makeGetAllUsersUseCase().execute()
    return await reply.status(200).send(user)
  } catch {
    return await reply.status(500).send()
  }
}
