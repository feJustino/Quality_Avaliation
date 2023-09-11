# Projeto de Exemplo: Gerenciamento de Usuários

Este projeto de exemplo demonstra uma aplicação web simples para gerenciamento de usuários. A aplicação permite listar, criar, editar e excluir usuários de uma base de dados. Vamos destacar as principais tecnologias utilizadas no projeto:

## Tecnologias Utilizadas

- **React**: O frontend da aplicação é desenvolvido em React, uma biblioteca JavaScript para criar interfaces de usuário interativas e dinâmicas.

- **Fastify**: O backend da aplicação é construído com o Fastify, um framework web rápido e eficiente para Node.js, conhecido por seu desempenho e baixo consumo de recursos.

- **Knex.js**: O Knex.js é usado para interagir com o banco de dados. É um query builder que permite escrever consultas SQL de forma programática e compatível com várias bases de dados.

- **Docker**: O Docker é utilizado para empacotar e executar a aplicação em contêineres, facilitando a implantação e garantindo a consistência do ambiente.

- **Node.js**: É necessário ter o Node.js instalado para executar o projeto. O Node.js é a plataforma de tempo de execução JavaScript que permite executar código JavaScript no servidor.

## Como Rodar o Aplicativo Localmente

Para executar o aplicativo localmente, siga estas etapas:

1. **Pré-requisitos**:
   - Certifique-se de ter o Docker instalado no seu ambiente. Você pode baixá-lo em [https://www.docker.com/get-started](https://www.docker.com/get-started).
   - Certifique-se de ter o Node.js instalado no seu ambiente. Você pode baixá-lo em [https://nodejs.org/](https://nodejs.org/).

2. **Clonar o Repositório**:
   - Clone o repositório do projeto para o seu computador.

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio/Quality_avaliation

## Instalação de Dependências

1. **Frontend**:
   - Navegue até a pasta do projeto do frontend (`app`) usando o terminal:
     ```bash
     cd client
     ```
   - Instale as dependências usando o npm ou yarn:
     ```bash
     npm install
     ```

2. **Backend**:
   - Navegue até a pasta do projeto do backend (`server`) usando o terminal:
     ```bash
     cd server
     ```
   - Instale as dependências usando o npm ou yarn:
     ```bash
     npm install
     ```

## Execução do Aplicativo

- Na pasta raiz do projeto utilize o script :
  ```bash
  npm run start-app