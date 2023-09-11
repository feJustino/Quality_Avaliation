import { type FastifyReply, type FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeCreateUserUseCase } from '../../usecases/factories/make-create-user'

export const createUser = async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
  void reply.header('Access-Control-Allow-Origin', '*')
  void reply.header('Access-Control-Allow-Methods', 'POST')
  const createUserBodySchema = z.object({
    Codigo: z.string().max(15),
    Nome: z.string().max(150),
    CPF_CNPJ: z.string().max(20),
    CEP: z.number().int(),
    Logradouro: z.string().max(100),
    Endereco: z.string().max(120),
    Numero: z.string().max(20),
    Bairro: z.string().max(50),
    Cidade: z.string().max(60),
    UF: z.string().max(2),
    Complemento: z.string().max(150),
    Fone: z.string().max(15),
    LimiteCredito: z.number(),
    Validade: z.coerce.date()
  })
  const body = createUserBodySchema.parse(request.body)
  try {
    await makeCreateUserUseCase().execute(body)
  } catch {
    return await reply.status(500).send()
  }

  return await reply.status(201).send()
}
