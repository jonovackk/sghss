# SGHSS – Hospital Scheduling System (Backend)

A RESTful API for managing appointments in a healthcare environment. Built with Node.js, Express, PostgreSQL, and Docker, with JWT-based authentication and full CRUD operations for patients, healthcare professionals, and consultations.

---

## Features

- Patient registration and management
- Healthcare professional registration and management
- Appointment scheduling, listing, and cancellation
- JWT authentication with role-based access
- PostgreSQL persistence via Sequelize ORM
- Docker-ready setup

---

## Tech stack

![Skills](https://skillicons.dev/icons?i=nodejs,express,postgresql,docker,js,git)

| Layer | Technology |
|-------|-----------|
| Runtime | Node.js |
| Framework | Express 5 |
| ORM | Sequelize |
| Database | PostgreSQL 16 |
| Auth | JSON Web Token (JWT) + bcryptjs |
| Dev tooling | Nodemon, dotenv |
| Infrastructure | Docker / Docker Compose |

---

## Getting started

### 1. Clone the repository

```bash
git clone https://github.com/jonovackk/sghss.git
cd sghss
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```env
PORT=3000

DB_HOST=127.0.0.1
DB_PORT=5432
DB_NAME=sghss
DB_USER=sghss
DB_PASS=sghss

JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=8h
```

### 4. Start the database (Docker)

```bash
docker compose up -d
```

Or run PostgreSQL manually:

```bash
docker run --name sghss \
  -e POSTGRES_USER=sghss \
  -e POSTGRES_PASSWORD=sghss \
  -e POSTGRES_DB=sghss \
  -p 5432:5432 -d postgres:16
```

### 5. Start the server

```bash
npm run dev
```

The API will be available at `http://localhost:3000`.

---

## Authentication

### Login

```http
POST /auth/login
Content-Type: application/json

{
  "email": "admin@example.com",
  "password": "123456"
}
```

**Response:**

```json
{
  "token": "<jwt_token>"
}
```

Use the token in all protected routes:

```http
Authorization: Bearer <jwt_token>
```

---

## API endpoints

### Patients

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/patients` | List all patients |
| GET | `/patients/:id` | Get patient by ID |
| POST | `/patients` | Create patient |
| PATCH | `/patients/:id` | Update patient |
| DELETE | `/patients/:id` | Delete patient |

### Healthcare professionals

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/professionals` | List all professionals |
| GET | `/professionals/:id` | Get professional by ID |
| POST | `/professionals` | Create professional |
| PATCH | `/professionals/:id` | Update professional |
| DELETE | `/professionals/:id` | Delete professional |

### Appointments

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/appointments` | Create appointment |
| GET | `/appointments` | List all appointments |
| GET | `/appointments/:id` | Get appointment by ID |
| PATCH | `/appointments/:id/cancel` | Cancel appointment |

---

## Project structure

```
src/
├── config/         # Database connection
├── controllers/    # Request handlers
├── middlewares/    # Auth middleware
├── models/         # Sequelize models
├── routes/         # Route definitions
├── services/       # Business logic
├── app.js
└── server.js
```

---

## Error handling

| Scenario | HTTP Status |
|----------|-------------|
| Missing or invalid token | 401 Unauthorized |
| Duplicate CPF | 400 Bad Request |
| Resource not found | 404 Not Found |
| Validation errors | 400 Bad Request |

---

## Author

**Jonathan Novack**
[github.com/jonovackk](https://github.com/jonovackk)
