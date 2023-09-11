import { type FastifyReply, type FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeUpdateUserUseCase } from '../../usecases/factories/make-update-user'

export const updateUser = async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
  const idUserQuerySchema = z.object({
    id: z.string().uuid()
  })

  const updateUserBodySchema = z.object({
    Codigo: z.string().length(15).optional(),
    Nome: z.string().length(150).optional(),
    CPF_CNPJ: z.string().length(20).optional(),
    CEP: z.number().int().optional(),
    Logradouro: z.string().length(100).optional(),
    Endereco: z.string().length(120).optional(),
    Numero: z.string().length(20).optional(),
    Bairro: z.string().length(50).optional(),
    Cidade: z.string().length(60).optional(),
    UF: z.string().length(2).optional(),
    Complemento: z.string().length(150).optional(),
    Fone: z.string().length(15).optional(),
    LimiteCredito: z.number().optional(),
    Validade: z.coerce.date().optional()
  })

  const { id } = idUserQuerySchema.parse(request.params)
  const body = updateUserBodySchema.parse(request.body)

  await makeUpdateUserUseCase().execute({ id, data: body })

  return await reply.status(201).send()
}
