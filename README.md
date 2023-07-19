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

----------------------------------------------------------------