# SGHSS – Backend do Sistema de Gestão Hospitalar de Serviços de Saúde  
### Módulo de Agendamento de Consultas

Este projeto implementa o **backend** do módulo de **Agendamento de Consultas** do SGHSS.  
O objetivo é permitir o cadastro de pacientes, profissionais de saúde e o gerenciamento de consultas, seguindo os requisitos da disciplina, utilizando arquitetura REST e banco relacional.

---

## 🚀 Tecnologias Utilizadas

- **Node.js** + **Express**
- **Sequelize ORM**
- **PostgreSQL** (via Docker ou instalação local)
- **JSON Web Token (JWT)** – autenticação
- **bcryptjs** – criptografia de senha
- **dotenv** – variáveis de ambiente

---

## 📦 Como Rodar o Projeto

### 1️⃣ Instalar dependências
```bash
npm install
2️⃣ Criar um arquivo .env
Exemplo de configuração usando PostgreSQL:

env
Copiar código
PORT=3000
DB_HOST=127.0.0.1
DB_PORT=5432
DB_NAME=sghss
DB_USER=sghss
DB_PASS=sghss

JWT_SECRET=MinhaChaveSecreta
JWT_EXPIRES_IN=8h
3️⃣ Subir o banco PostgreSQL (com Docker)
Se quiser usar Docker, basta executar:

bash
Copiar código
docker compose up -d
Isso sobe um container com PostgreSQL disponível em localhost:5432.

4️⃣ Rodar o servidor
bash
Copiar código
npm run dev
A API estará acessível em:

arduino
Copiar código
http://localhost:3000
Para testar a saúde do servidor:

bash
Copiar código
GET http://localhost:3000/api/health
🧑‍⚕️ Funcionalidades Implementadas
🔹 Autenticação
Cadastro de usuários (paciente e profissional)

Login com geração de token JWT

Proteção de rotas com middleware

🔹 Pacientes
Cadastro

Atualização

Listagem

Exclusão

🔹 Profissionais
Cadastro

Atualização

Listagem

Exclusão

🔹 Consultas (Appointments)
Criar consulta

Listar consultas (com filtros)

Detalhar consulta

Cancelar consulta

📌 Endpoints Principais
Autenticação
swift
Copiar código
POST /api/auth/register/patient
POST /api/auth/register/professional
POST /api/auth/login
Pacientes
bash
Copiar código
GET    /api/patients
GET    /api/patients/:id
PATCH  /api/patients/:id
DELETE /api/patients/:id
Profissionais
bash
Copiar código
GET    /api/professionals
GET    /api/professionals/:id
PATCH  /api/professionals/:id
DELETE /api/professionals/:id
Consultas
bash
Copiar código
POST   /api/appointments
GET    /api/appointments
GET    /api/appointments/:id
PATCH  /api/appointments/:id/cancel
🗂️ Organização do Código
O projeto segue arquitetura em camadas:

bash
Copiar código
src/
├── config/        # Configuração do banco (Sequelize)
├── controllers/   # Lida com a entrada e saída HTTP
├── middlewares/   # Autenticação JWT
├── models/        # Entidades do sistema (ORM)
├── routes/        # Endpoints da API
├── services/      # Regras de negócio
├── app.js
└── server.js
🧪 Evidências de Funcionamento
As evidências (prints das requisições funcionando) estão incluídas no PDF do trabalho:

Cadastro de pacientes e profissionais

Login com geração de token

Listagem de entidades

Criação e cancelamento de consultas

Retorno de erro em validações


👤 Autor
Jonathan Novack
GitHub: https://github.com/jonovackk
