# Backend Top-v23 - Make It Real 💻

Main base of the services used within the Make It Real platforms

- Built with Node.js and Express
- Typescript
- Prisma ORM
- REST API

## Prerequisites

- [Git](https://git-scm.com/downloads)
- [Node.js and npm](https://nodejs.org) Node >= 18.15 LTS, npm >= 9.5.x - Install with Volta.sh

## Express Router and Routes

| Route            | HTTP Verb | Route Middleware | Description           |
| ---------------- | --------- | ---------------- | --------------------- |
| /api/healthcheck | GET       |                  | Show a simple message |
| /api/users       | GET       |                  | Get list of users     |
| /api/users       | POST      |                  | Creates a new users   |
| /api/users/:id   | GET       |                  | Get a single users    |
| /api/users/:id   | DELETE    |                  | Deletes a user        |

## Usage

The use of endpoints is very simple, previously you could see a table of endpoints that you can call, if you need to create a note or log in, here we have some examples.

### Authentication **user** `/auth/local/login`

Request Body:

```json
{
  "email": "jd@test.com",
  "password": "1234"
}
```

Response:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNyaXN0aWFuLm1vcmVub0BtYWtlaXRyZWFsLmNhbXAiLCJpYXQiOjE2NjEyMDgwODJ9.kPdMoVUEnyX36vi606Mc1C66yWLKKAB37GLbF0gzhBo",
  "profile": {
    "id": "62fd77a4d25acc4a4e5df3d1",
    "firstName": "JHON",
    "lastName": "Doe",
    "email": "jd@test.com"
  }
}
```

### Basic example **Create User** `/api/users`

Request Body:

```json
{
  "name": "jhon doe",
  "email": "jd@test.com",
  "password": "123456"
}
```

Response:

```json
{
  "name": "jhon doe",
  "email": "jd@test.com",
  "role": "USER"
}
```

### Developing

1. Clone the repository

2. Run `npm install` to install server dependencies.

3. Configure the env running `cp .env.example .env`

4. Update `.env` with the required info

5. Run the migrations: `prisma migrate dev`

6. Run `npm run dev` to start the development server.

## License

[MIT](LICENSE)
