# Sistema de Gerenciamento de Vagas e Candidaturas

## Descrição do Projeto

Este projeto é um sistema de gerenciamento de vagas e candidaturas desenvolvido com tecnologias modernas para fornecer uma plataforma robusta e segura. Ele permite que os usuários gerenciem suas contas, publiquem vagas, candidatem-se a empregos e visualizem o status de suas aplicações.

---

## Tecnologias Utilizadas

### Backend
- **Linguagem:** Java 17
- **Framework:** Spring Boot
- **Segurança:** Spring Security, JWT, Auth0

### Frontend
- **Framework:** Angular 15
- **Estilo:** Bootstrap (Responsivo para mobile)
- **Guards:** Implementação para autenticação e proteção de rotas

---

## Funcionalidades Principais

### Backend
1. **Gerenciamento de Usuários**
   - Registro de novos usuários.
   - Login com geração de token JWT.
   - Validação de tokens.

2. **Gerenciamento de Vagas**
   - Criar, atualizar, listar e desativar vagas.
   - Listar vagas ativas e buscar por ID.

3. **Gerenciamento de Candidaturas**
   - Criar, atualizar e deletar candidaturas.
   - Listar candidaturas por usuário ou vaga.

4. **Autenticação e Autorização**
   - Proteção de endpoints com Spring Security.
   - Geração e validação de tokens JWT.

### Frontend
1. **Interface Responsiva**
   - Desenvolvida com Bootstrap para garantir compatibilidade com diferentes dispositivos.
2. **Guards para Autenticação**
   - Proteção de rotas e controle de acesso baseados no papel do usuário (e.g., administrador ou usuário comum).

---

## Endpoints da API

### Autenticação
- **Login**
  ```
  POST /auth/login
  Body:
  {
      "login": "seu_login",
      "password": "sua_senha"
  }
  ```
- **Registro**
  ```
  POST /auth/register
  Body:
  {
      "login": "seu_login",
      "password": "sua_senha",
      "role": "user"
  }

  {
      "login": "seu_login",
      "password": "sua_senha",
      "role": "admin"
  }
  ```
- **Validação de Token**
  ```
  POST /auth/token
  Body:
  {
      "token": "seu_token"
  }
  ```

### Vagas
- **Criar Vaga**
  ```
  POST /jobs
  Body:
  {
      "title": "Desenvolvedor Backend",
      "description": "Trabalhar com Java",
      "requirements": "Experiência com APIs REST, Docker.",
      "isActive": true,
      "createdBy": 1
  }
  ```
- **Atualizar Vaga**
  ```
  PUT /jobs/{id}
  ```
- **Deletar Vaga**
  ```
  DELETE /jobs/{id}
  ```
- **Listar Vagas**
  ```
  GET /jobs
  ```

### Candidaturas
- **Criar Candidatura**
  ```
  POST /applications
  Body:
  {
      "userId": "1",
      "jobId": "1",
      "applicationDate": "2024-12-20T10:00:00",
      "status": "Pending"
  }
  ```
- **Atualizar Candidatura**
  ```
  PUT /applications/
  Body:
  {   "id": "1", 
      "userId": "1",
      "jobId": "1",
      "applicationDate": "2024-12-20T10:00:00",
      "status": "Pending"
  }
  ```
- **Deletar Candidatura**
  ```
  DELETE /applications/{appId}
  ```
- **Listar Candidaturas de um Usuário**
  ```
  GET /applications/user/{userId}
  ```

---

## Configuração e Execução

### Backend
1. Clone o repositório:
   ```
   git clone https://github.com/LucasSalu/spring-angular-auth
   ```
2. Navegue para o diretório do backend e configure o arquivo `application.properties` com as credenciais do banco de dados.
3. Compile e execute o projeto:
   ```
   mvn spring-boot:run
   ```

### Frontend
1. Navegue até o diretório do frontend:
   ```
   cd frontend
   ```
2. Instale as dependências:
   ```
   npm install
   ```
3. Execute o projeto:
   ```
   ng serve
   ```

---

## Postgres Docker

1. Certifique-se de ter o Docker e o Docker Compose instalados na máquina.
2. Navegue até o diretório onde o arquivo `docker-compose.yml` está localizado:
   ```bash
   cd docker-compose
   ```
3. Execute o seguinte comando para subir os containers:
   ```bash
   docker-compose up -d
   ```
4. Verifique se os containers estão em execução:
   ```bash
   docker ps
   ```


   # Configuração do Frontend Angular

Este projeto utiliza Angular 15 como framework para o frontend, e o Bootstrap para estilização.

## Requisitos

Certifique-se de ter as seguintes ferramentas instaladas:
- **Node.js** (v16 ou superior)
- **Angular CLI** (v15 ou superior)

## Passos para Configuração e Execução

1. Navegue até o diretório do projeto frontend:
   ```bash
   cd auth-project
   ```

2. Instale as dependências do projeto:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   ng serve
   ```

4. Acesse a aplicação no navegador em:
   ```
   http://localhost:4200
   ```

## Estrutura do Projeto

### Backend
- **Controllers:** Gerenciam as requisições HTTP.
- **Services:** Contêm a lógica de negócios.
- **Repositories:** Lidam com a persistência de dados.

### Frontend
- **Modules:** Organizam funcionalidades em módulos reutilizáveis.
- **Components:** Implementam a interface de usuário.
- **Guards:** Protegem rotas.

---

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

---

