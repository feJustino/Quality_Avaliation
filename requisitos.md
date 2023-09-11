# Requisitos Funcionais da Aplicação

1. **Cadastro de Clientes**
   - A aplicação deve permitir o cadastro de clientes com os seguintes campos obrigatórios:
     - ID (bigint)
     - idUsuario (bigint)
     - DataHoraCadastro (datetime)
     - Codigo (varchar(15))
     - Nome (varchar(150))
     - CPF_CNPJ (varchar(20))
     - CEP (integer)
     - Logradouro (varchar(100))
     - Endereco (varchar(120))
     - Numero (varchar(20))
     - Bairro (varchar(50))
     - Cidade (varchar(60))
     - UF (varchar(02))
     - Complemento (varchar(150))
     - Fone (varchar(15))
     - LimiteCredito (float)
     - Validade (date)

2. **Operações CRUD**
   - A aplicação deve permitir as seguintes operações CRUD (Inclusão, Alteração e Deleção) para os registros de clientes.

3. **Pesquisa e Filtro**
   - Deve ser possível pesquisar e filtrar os registros de clientes com base nos seguintes campos:
     - Codigo
     - Nome
     - Cidade
     - CEP

4. **Consulta Automática de Endereço via API ViaCep**
   - Ao preencher o campo CEP durante o cadastro ou edição de um cliente, a aplicação deve consultar a API gratuita ViaCep (viacep.com.br/ws/CEP/json/) para obter informações sobre o endereço correspondente.
   - Os campos de endereço (Logradouro, Bairro, Cidade, UF e Complemento) devem ser automaticamente preenchidos com os dados obtidos da consulta.

5. **Integração com API ViaCep**
   - A aplicação deve ser capaz de se integrar com a API ViaCep para buscar informações atualizadas de endereço sempre que um CEP válido for inserido ou editado.

6. **Validações de Dados**
   - A aplicação deve realizar validações de dados para garantir que os campos obrigatórios sejam preenchidos corretamente.
   - Deve haver validações específicas para CPF_CNPJ, CEP, e outros campos, conforme necessário.

7. **Gerenciamento de Limite de Crédito e Validade**
   - A aplicação deve permitir o gerenciamento do limite de crédito e data de validade associados a cada cliente.

8. **Segurança de Dados**
   - A aplicação deve implementar medidas de segurança para proteger os dados dos clientes, incluindo o armazenamento seguro de informações sensíveis, como CPF_CNPJ.

9. **Logs de Atividade**
   - A aplicação deve manter logs de atividade para rastrear todas as operações de CRUD realizadas nos registros de clientes, incluindo informações sobre quem realizou a ação e quando.

10. **Interface de Usuário**
    - Deve haver uma interface de usuário amigável para a realização de operações CRUD e pesquisa/filtro de clientes.
    - A interface de usuário pode ser desenvolvida usando Vue.js ou uma tecnologia similar para o frontend.

11. **Backend em Node.js**
    - O backend da aplicação deve ser desenvolvido em Node.js para fornecer a API necessária para o frontend.
