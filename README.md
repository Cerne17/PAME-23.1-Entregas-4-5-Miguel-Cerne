Projeto de uma API para alimentar um site de gerenciamento
de estoque de uma sorveteria.

----------------------------------------------------------------

TECNOLOGIAS UTILIZADAS E SUAS INSTALAÇÕES:

  Para esse projeto, utilizamos o NestJs, uma ferramenta
  para criação da nossa REST API. Instalação:
    
    npm install -g nestjs/cli
  
  Instanciação do Projeto:

    nest new project-name
  
  Além do nest em si, utilizamos o TypeOrm para facilitar
  o processo de relacionamento de entidades. Instalação:

    npm install typeorm @nestjs/typeorm
  
  Utilizamos também, o módulo 'class-validator' para ajudar
  na validação de dados passados pelo cliente para nossa
  base de dados, evitando erros de compatibilidade que 
  poderiam quebrar nossa API. Instalação:

    npm install class-validator
  
  Por fim, nossa API será da forma sqlite3, por sua simplicidade
  e poder na hora de alavancar projetos em um curto
  período de tempo. Instalação:

    npm install sqlite3 --save

  Como linter e formatter, utilizamos os padrões do nestjs:
  eslint e prettier

  Para melhorar a segurança do sistema, utilizamos o protocolo 
  JWT para não precisar salvar senhas no banco de dados em si.
  Para criptografar a senha e gerar salts dinâmicamente,
  utilizamos o bcrypt. Suas instalações básicas são feitas como
  segue:

    npm install bcrypt
    npm install --save @nestjs/passport passport-local
    npm install --save-dev @types/passport-local

----------------------------------------------------------------

MELHORIAS PARA O CÓDIGO:

  Possíveis melhorias do código:

    1. Fazer ingredientes iguais serem atualizados em uma mesma
    linha da tabela. Atualmente, o fronter deve fazer muitas 
    checagens manualmente e utilizar o método de findAll, o que
    puxa muito processamento da API.

    2. Checagens de pedidos. Manter o rastreio de pedidos a serem
    feitos é uma ótima ideia para melhorar a produtividade e 
    facilitar mais o uso dos funcionários. 

----------------------------------------------------------------