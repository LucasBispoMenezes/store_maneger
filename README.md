# Boas-vindas ao  Projeto Store Manager!
-----
Esse projeto foi  minha primeira API utilizando a arquitetura MSC (model-service-controller)!

A API a ser construída é um sistema de gerenciamento de vendas no formato dropshipping em que será possível criar, visualizar, deletar e atualizar produtos e vendas. Você deverá utilizar o banco de dados MySQL para a gestão de dados. Além disso, a API deve ser RESTful.

# Stacks utilizadas
-------
nesse projeto utilizei

- Docker
- Node.Js
- Express
- Arquitetura MSC
- Mysql
- mocha, chai, sinon

## Como rodar com docker 


------------

Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior. Veja aqui ou na documentação como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0 `por `1.29.2`.

- Rode os serviços node e db com o comando docker-compose up -d.

- Lembre-se de parar o mysql se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queria fazer uso da aplicação em containers;
- Esses serviços irão inicializar um container chamado store_manager e outro chamado `store_manager_db`;
- A partir daqui você pode rodar o container store_manager via CLI ou abri-lo no VS Code.

Use o comando `docker exec -it store_manager bash`.

- Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.
- Instale as dependências [Caso existam] com `npm install`

- Atenção: Caso opte por utilizar o Docker, TODOS os comandos disponíveis no `package.json` (`npm start, npm test, npm run dev`, ...) devem ser executados DENTRO do container, ou seja, no terminal que aparece após a execução do comando docker exec citado acima.

-  Atenção: O git dentro do container não vem configurado com suas credenciais. Ou faça os commits fora do container, ou configure as suas credenciais do git dentro do container.

- Atenção: Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

-  Atenção: Se você se deparar com o erro abaixo, quer dizer que sua aplicação já esta utilizando a porta 3000, seja com outro processo do Node.js (que você pode parar com o comando `killall node`) ou algum container! Neste caso você pode parar o container com o comando `docker stop containerName.`

##  Como rodar sem docker

 Instale as dependências [Caso existam] com `npm install`

-  Atenção: Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

- Atenção: Não esqueça de renomear/configurar o arquivo `.env.example` para os testes locais funcionarem.

-  Atenção: Para rodar o projeto desta forma, obrigatoriamente você deve ter o`Node.js` instalado em seu computador.

- Atenção: A versão do `Node.js` e `NPM` a ser utilizada é `"node": ">=16.0.0"` e `"npm": ">=7.0.0"`, como descrito a chave `engines` no arquivo `package.json`. Idealmente deve-se utilizar o Node.js na `versão 16.14`, a versão na que esse projeto foi testado.

# EndPoints da API

### pegar todos os produtos
`Metodo get`
- O endpoint para listar produtos é acessível através do caminho `/products` e `/products/:id`

- Através do caminho `products` todos os produtos são retornados;

- Através do caminho `products/:id` apenas o produto com o id presente na URL será retornado;

### criar produtos no db
`Metodo post`
- O endpoint para criar um  produtos é  através do caminho `products`
-  deve ser enviado atraves do body um objeto com a chave `name`

```javascript
  {
    "name": "ProdutoX"
  }
```
- Se o produto for criado com sucesso o resultado retornado deverá ser conforme exibido abaixo, com um status http 201:

### criar uma venda no db
`Metodo post`
- O endpoint é  acessível através do caminho `/sales`
- O corpo da requisição deverá seguir o formato abaixo:
```javascript
  [
    {
      "productId": 1,
      "quantity":1
    },
    {
      "productId": 2,
      "quantity":5
    }
	...
  ]
```
  - Se a venda for criada com sucesso o resultado retornado deverá ser conforme exibido abaixo, com um status http 201:

### listar Todas as vendas
`Metodo get`
- O endpoint para listar vendas é acessível através do caminho `/sales` e `/sales/:id`;
-  Através do caminho` /sales`, todas as vendas são retornadas;
- Através do caminho `/sales/:id`, apenas a venda com o id presente na URL deve ser retornada;

### atualizar um produto
`Metodo put`
- O endpoint deve será através do caminho `/products/:id`;
- Apenas o produto com o id presente na URL será atualizado;
- O corpo da requisição deverá seguir o formato abaixo:
```
  {
    "name": "Martelo do Batman"
  }
```

### deletar um produto
`Metodo delete`
- O endpoint deve será através do caminho `/products/:id`;
- Apenas o produto com o id presente na URL será deletado;

`http://localhost/product/1`

###deletar uma venda
- O endpoint deve ser acessível através do caminho `/sales/:id`;
- Apenas a venda com o id presente na URL será deletado;

`http://localhost/sales/1`


