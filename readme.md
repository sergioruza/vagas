# <h1 align="center">💾 CRUD 💾</h1>

## Inicialização
Para executar o projeto, utilize as ferramentas descritas na sessão *Ferramentas*.

## Ferramentas
* Node - software de código aberto que permite a execução de códigos JavaScript fora de um navegador web.
```bash

# Faça o clone
$ git clone git@github.com:sergioruza/vagas.git

# Acesse a pasta
$ cd vagas

# Instale as dependências local
$ npm install

# Inicie o projeto
$ npm run dev
# [nodemon] starting `node server.js`
# Express server listening on port 3000
```
# CRUD

## Introdução

Este projeto possui o objetivo principal de melhorar e corrigir bugs no código;

### Descrição do ambiente técnico

O sistema é composto de Linguagem, frameworks e bibliotecas principais:  
[![JavaScript][JavaScript]][JavaScript-url]
[![Node.js-card][Node.js-card]][Node.js-url]
[![EXPRESS][EXPRESS]][EXPRESS-url]
[![Mocha][Mocha]][Mocha-url]
[![jsonwebtokens][jsonwebtokens]][jsonwebtokens-url]
[![nodemon][nodemon]][nodemon-url]

### Requisitos Funcionais
Respeitando a proposta, o sistema deverá atender os seguintes requisitos:

* **RF1** - Realizar requests a um banco de dados simulado;
* **RF2** - Rotas:   
                   * GET /user?name=[nome]: Este endpoint permite realizar a busca no banco de dados para recuperar informações sobre uma pessoa específica; 
                   * GET /users: Este endpoint realiza uma busca no banco de dados e retorna informações de todos os usuários cadastrados;  
                   * POST /users: Utilize este endpoint para cadastrar ou criar um novo registro no banco de dados;  
                   * DELETE /users?name=[nome]: Ao utilizar esse endpoint, é possível buscar um usuário pelo nome e removê-lo do banco de dados;  
                   * PUT /users?id=[id]: Este endpoint permite buscar um usuário pelo ID e atualizar suas informações de acordo com o conteúdo fornecido no corpo da requisição;  
                   * GET /users/access?name=[nome]: Com este endpoint, é possível buscar um usuário pelo ID e obter informações sobre quantas vezes o registro foi acessado;                    


[JavaScript]: https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=node.js&logoColor=black
[JavaScript-url]: https://www.javascript.com

[Node.js-card]: https://img.shields.io/badge/-Node.js-80BC02?style=for-the-badge&logo=node.js&logoColor=black
[Node.js-url]: https://nodejs.org/en

[Mocha]: https://img.shields.io/badge/MOCHA-6D4A31?style=for-the-badge&logo=mocha&logoColor=white
[Mocha-url]: https://mochajs.org

[EXPRESS]: https://img.shields.io/badge/Express-FFFFFF?style=for-the-badge&logo=express&logoColor=black
[EXPRESS-url]: https://expressjs.com

[jsonwebtokens]: https://img.shields.io/badge/-jsonwebtokens-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=black
[jsonwebtokens-url]: https://jwt.io/

[nodemon]: https://img.shields.io/badge/-nodemon-76D04B?style=for-the-badge&logo=nodemon&logoColor=black
[nodemon-url]: https://nodemon.io/