import { type UUID } from 'node:crypto'

export interface User {
  ID: UUID
  idUsuario: UUID
  Codigo: string
  Nome: string
  CPF_CNPJ: string
  CEP: number
  Logradouro: string
  Endereco: string
  Numero: string
  Bairro: string
  Cidade: string
  UF: string
  Complemento: string
  Fone: string
  LimiteCredito: number
  Validade: Date
}

export type UserRequest = Omit<User, 'ID' | 'idUsuario'>
