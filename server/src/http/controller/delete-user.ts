import { type FastifyReply, type FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeDeleteUserUseCase } from '../../usecases/factories/make-delete-user'

export const deleteUser = async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
  const idUserQuerySchema = z.object({
    id: z.string().uuid()
  })
  const { id } = idUserQuerySchema.parse(request.params)
  try {
    await makeDeleteUserUseCase().execute(id)
  } catch {
    return await reply.status(500).send()
  }

  return await reply.status(201).send()
}
