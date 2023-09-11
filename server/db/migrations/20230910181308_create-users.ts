import { type Knex } from 'knex'

export async function up (knex: Knex): Promise<void> {
  await knex.schema.createTable('users', (table) => {
    table.uuid('ID').notNullable().primary().unique()
    table.uuid('idUsuario').notNullable().index().unique()
    table.timestamp('DataHoraCadastro').defaultTo(knex.fn.now()).notNullable()
    table.string('Codigo', 15).notNullable()
    table.string('Nome', 150).notNullable()
    table.string('CPF_CNPJ', 20).notNullable()
    table.integer('CEP').notNullable()
    table.string('Logradouro', 100).notNullable()
    table.string('Endereco', 120).notNullable()
    table.string('Numero', 20).notNullable()
    table.string('Bairro', 50).notNullable()
    table.string('Cidade', 60).notNullable()
    table.string('UF', 2).notNullable()
    table.string('Complemento', 150).notNullable()
    table.string('Fone', 15).notNullable()
    table.float('LimiteCredito').notNullable()
    table.date('Validade').notNullable()
  })
}

export async function down (knex: Knex): Promise<void> {
  await knex.schema.dropTable('users')
}
