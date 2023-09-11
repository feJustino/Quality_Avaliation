
import { ValidationComposite } from '../../composites/validation-composite'
import { ValidationBuilder as Builder } from '../../builders/validation-builder'

export const makeUserValidation = (): ValidationComposite => ValidationComposite.build([
  ...Builder.field('Codigo').required().build(),
  ...Builder.field('Nome').required().build(),
  ...Builder.field('CPF_CNPJ').required().build(),
  ...Builder.field('CEP').required().build(),
  ...Builder.field('Logradouro').required().build(),
  ...Builder.field('Endereco').required().build(),
  ...Builder.field('Numero').required().build(),
  ...Builder.field('Bairro').required().build(),
  ...Builder.field('Cidade').required().build(),
  ...Builder.field('UF').required().build(),
  ...Builder.field('Complemento').required().build(),
  ...Builder.field('Fone').required().build(),
  ...Builder.field('LimiteCredito').required().build(),
  ...Builder.field('Validade').required().build(),
])
