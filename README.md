# SGHSS – Backend do Sistema de Gestão Hospitalar (Módulo de Agendamentos)

Este projeto implementa o backend do **módulo de Agendamento de Consultas** do SGHSS (Sistema de Gestão Hospitalar e Serviços de Saúde).

O sistema permite:

- Cadastro e gerenciamento de **pacientes**
- Cadastro e gerenciamento de **profissionais de saúde**
- **Agendamento**, **listagem** e **cancelamento** de consultas
- Autenticação com **JWT**
- Persistência em **PostgreSQL**

---

## 🚀 Tecnologias Utilizadas

- Node.js + Express  
- Sequelize ORM  
- PostgreSQL (via Docker ou instalação local)  
- JSON Web Token (JWT)  
- bcryptjs  
- dotenv  

---

## ⚙️ Como Rodar o Projeto

### 1️⃣ Instalar dependências
```bash
npm install

2️⃣ Criar o arquivo .env

Crie o arquivo na raiz do projeto:

touch .env


Conteúdo sugerido:

PORT=3000

DB_HOST=127.0.0.1
DB_PORT=5432
DB_NAME=sghss
DB_USER=sghss
DB_PASS=sghss

JWT_SECRET=MinhaChaveSecreta
JWT_EXPIRES_IN=8h


3️⃣ Subir o banco PostgreSQL (Docker)
docker compose up -d


Ou:

docker run --name sghss \
  -e POSTGRES_USER=sghss \
  -e POSTGRES_PASSWORD=sghss \
  -e POSTGRES_DB=sghss \
  -p 5432:5432 -d postgres:16

4️⃣ Rodar o servidor
npm run dev


A API estará disponível em:

http://localhost:3000

🔐 Criar Usuário Inicial

Caso o projeto não possua rota de registro, crie um usuário diretamente no banco:

INSERT INTO users (email, password, role)
VALUES (
  'admin@example.com',
  '$2a$10$4HB6t6rGUeA1rXsxCTH1OOlQF2H5oKnOosc.2XqOMc6t9wLz6rgEK',
  'ADMIN'
);


A senha desse hash é: 123456

🔑 Autenticação
1. Fazer login
POST /auth/login


Body:

{
  "email": "admin@example.com",
  "password": "123456"
}


Resposta esperada:

{
  "token": "..."
}

2. Usar o token nas demais rotas

Headers:

Authorization: Bearer SEU_TOKEN_AQUI

📌 Endpoints Principais
👥 Pacientes
GET    /patients
GET    /patients/:id
POST   /patients
PATCH  /patients/:id
DELETE /patients/:id

🩺 Profissionais
GET    /professionals
GET    /professionals/:id
POST   /professionals
PATCH  /professionals/:id
DELETE /professionals/:id

📅 Consultas (Appointments)
POST   /appointments
GET    /appointments
GET    /appointments/:id
PATCH  /appointments/:id/cancel

🧪 Como Testar a API (Fluxo recomendado)

Fazer login → obter token JWT

Criar paciente

Criar profissional

Criar agendamento

Listar agendamentos

Cancelar agendamento

Testar casos de erro:

Sem token → 401 Unauthorized

CPF duplicado → 400 Bad Request

IDs inexistentes → 400/404

🗂️ Estrutura do Projeto
src/
├── config/
├── controllers/
├── middlewares/
├── models/
├── routes/
├── services/
├── app.js
└── server.js

📄 Evidências

As evidências completas (prints das requisições funcionando) estão incluídas no PDF do trabalho entregue.

👤 Autor

Jonathan Novack
GitHub: https://github.com/jonovackk
