import { type FastifyReply, type FastifyRequest } from 'fastify'
import { z } from 'zod'
import { type User } from '../../model/user'
import { makeGetUserUseCase } from '../../usecases/factories/make-get-user'

export const getUser = async (request: FastifyRequest, reply: FastifyReply): Promise<User> => {
  const idUserQuerySchema = z.object({
    id: z.string().uuid()
  })
  const { id } = idUserQuerySchema.parse(request.params)
  try {
    const { user } = await makeGetUserUseCase().execute({ id })
    return await reply.status(200).send(user)
  } catch {
    return await reply.status(500).send()
  }
}
