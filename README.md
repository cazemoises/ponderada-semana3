# Projeto de Aplicação Web Integrada com Banco de Dados

Este projeto está relacionado à atividade ponderada "Elaboração de aplicação web integrada a um banco de dados". Seus componentes e recursos serão descritos abaixo.

## Infraestrutura

### Frontend (EC2)

O frontend é desenvolvido em ReactJS e oferece uma interface de usuário intuitiva para interagir com a aplicação. Os principais recursos incluem:

- **Login e Cadastro:** Os usuários podem realizar login com suas credenciais ou criar uma nova conta.

- **Gerenciamento de Perfil:** Os usuários têm a capacidade de visualizar e editar suas informações pessoais, incluindo nome, sobrenome, idade e data de nascimento.

- **Cadastro de Endereço:** Além dos detalhes pessoais, os usuários podem cadastrar e atualizar seus endereços, incluindo estado, cidade, rua e número.

- **Integração com Backend:** O frontend se conecta ao backend por meio de chamadas de API. Ele envia solicitações para buscar, atualizar e enviar dados para o servidor.



### Backend (EC2)


O backend é construído usando Node.js e Express.js, oferecendo recursos essenciais para a funcionalidade da aplicação:

- **Rotas API:** O backend implementa rotas para lidar com as operações CRUD (criar, ler, atualizar, excluir) de usuários e endereços. Isso inclui roteamento para login, cadastro, busca e atualização de informações.

- **Gerenciamento de Banco de Dados:** O backend se comunica com o banco de dados PostgreSQL hospedado no RDS. Ele executa consultas SQL usando a ORM sequelize com alguns conceitos como de transactions para buscar e persistir informações de usuários e endereços.

- **Respostas JSON:** Todas as respostas do backend são formatadas em JSON, permitindo que o frontend processe e exiba os dados de forma eficiente e compacta.

### Banco de Dados (RDS)

O banco de dados PostgreSQL armazena informações dos usuários e endereços. Ele é hospedado em um RDS da AWS. Existem duas tabelas principais: `user` para armazenar detalhes dos usuários e `address` para armazenar endereços associados aos usuários.

## Como Executar Localmente

### Pré-requisitos

- Node.js e npm instalados.

### Frontend

1. Clone este repositório.
2. Navegue até o diretório `frontend`.
3. Execute `npm install` para instalar as dependências.
4. Configure as variáveis de ambiente do frontend, incluindo a URL da API do backend.
5. Execute `npm start` para iniciar o servidor de desenvolvimento.

### Backend

1. Navegue até o diretório `backend`.
2. Execute `npm install` para instalar as dependências.
3. Configure as variáveis de ambiente do backend, incluindo as credenciais do banco de dados.
4. Execute `npm start` para iniciar o servidor backend.

### Banco de Dados

Nesta seção, você aprenderá a configurar uma conexão local com o banco de dados PostgreSQL e executar o script SQL fornecido para criar as entidades necessárias.

#### Configurando a Conexão Local

1. Certifique-se de ter o PostgreSQL instalado em seu sistema. Caso ainda não tenha instalado, você pode baixá-lo e instalá-lo a partir do [site oficial](https://www.postgresql.org/download/).

2. Após a instalação, abra o terminal ou prompt de comando e inicie o servidor do PostgreSQL.

3. Agora, você precisa criar um banco de dados vazio para o projeto. No terminal, execute o seguinte comando:

   ```bash
   createdb ponderada

#### Executando o Script SQL

1. No diretório do projeto, você encontrará a pasta database_scripts.

2. Dentro da pasta database_scripts, você encontrará os scripts SQL necessários para criar as tabelas user e address.

3. Abra o arquivo SQL correspondente (por exemplo, create_user_table.sql) em um editor de texto.

4. Copie o conteúdo do script SQL.

5. Abra uma ferramenta de administração do PostgreSQL, como o pgAdmin, e conecte-se ao banco de dados que você criou anteriormente.

6. Crie uma nova consulta SQL na ferramenta de administração e cole o script SQL copiado.

7. Execute a consulta SQL. Isso criará as tabelas user e address no banco de dados local.

## Pronto para Começar!
Você concluiu com sucesso a configuração do projeto de aplicação web integrada com banco de dados! Agora que todos os componentes estão configurados e em execução, você está pronto para começar a explorar e interagir com a aplicação.

Você pode conferir um vídeo da aplicação rodando [nesse link](https://drive.google.com/file/d/1e0dB2_IbVBFVIdOGzBsFBAhMo4nhNDvn/view?usp=sharing).