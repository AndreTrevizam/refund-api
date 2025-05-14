# Refund API

API para gerenciamento de solicitações de reembolso. Este projeto foi desenvolvido utilizando Node.js, Express, Prisma e TypeScript.

## Funcionalidades

- **Autenticação JWT**: Login de usuários com geração de token.
- **Gerenciamento de usuários**: Cadastro de usuários com diferentes papéis (employee, manager).
- **Solicitações de reembolso**: Criação, listagem e detalhamento de solicitações de reembolso.
- **Upload de arquivos**: Upload de comprovantes de reembolso com validação de tamanho e formato.
- **Autorização baseada em papéis**: Controle de acesso para diferentes endpoints.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework para construção de APIs.
- **TypeScript**: Superset do JavaScript com tipagem estática.
- **Prisma**: ORM para manipulação do banco de dados.
- **SQLite**: Banco de dados utilizado no ambiente de desenvolvimento.
- **Zod**: Validação de dados.
- **Multer**: Manipulação de uploads de arquivos.
- **JWT**: Autenticação baseada em tokens.

## Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/refund-api.git
   cd refund-api

2. Instale as dependências:

   ```bash
   npm install

3. Execute as migrações:

   ```bash
   npx prisma migrate dev

4. Inicie o servidor:

   ```bash
   npm run dev

## Endpoints
Rotas Públicas
- POST /users: Cadastro de usuários.
- POST /sessions: Login de usuários.
Rotas Privadas (Requer autenticação)
- POST /refunds: Criação de solicitações de reembolso.
- GET /refunds: Listagem de solicitações de reembolso.
- GET /refunds/:id: Detalhamento de uma solicitação de reembolso.
- POST /uploads: Upload de arquivos.

## Configuração de Uploads
Os arquivos enviados são armazenados na pasta tmp/uploads. O tamanho máximo permitido é de 3 MB, e os formatos aceitos são jpeg, jpg e png.

----
Feito com ❤️ por André Trevizam.