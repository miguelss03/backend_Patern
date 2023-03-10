# - Criar usuários
# - listagem de usuários
# - edição de usuários
# - remoção de usuários

-> Metodos HTTP => GET, POST, PATH, PUT, DELETE.

# GET => buscar um recurso do backend
# POST => criar um recurso do backend
# PUT => atualizar um recurso do backend
# PATH => Atualizar uma informação expecífica de um recurso do backend;
# DELETE => Deletar um recurso do backend;


# Streams no NODE.JS 

# Buffer

- O buffer é uma representação de um espaço na memorio do pc, usados para transitar dados de uma maneira muito rapida
- São dados tratados naquele instantes, e logo em seguida removidos
-

# Middlewares 

- Ele é uma função que intercepta as "req, res" da nossa aplicação
- com isso ele filtra a response do Content-type e transforma as informações em JSON

# Banco de dados

///Referencia: src/database.js
--> Um banco de dados baseado em arquivos fisicos
--> O banco de dados é salvo em formato JSON e mantem a sua camada de persistencia fisica
-->  iniciando automaticamente assim que se inicia a aplicação

# Rotas da aplicação

--> Foi separado as rotas da aplicação na sua pastas src/routes.js
--> É utilizado uma unica verificação da condicional da chamada das rotas

cliente faz a reqsição no servidor ---> servidor verifica se a req é correta comparando o 'method', 'path' e o 'url' que existe no servidor








