## 🔐 JWT Auth API (Express + TypeScript)

A simple, modern backend starter using Express, TypeScript, Zod, and JWT authentication.

## 🚀 Features

✅ Built with TypeScript

✅ Input validation with Zod

✅ Authentication with JWT

✅ Password hashing using bcryptjs

✅ Environment config with dotenv

✅ Database ready (Prisma integration)

✅ Hot-reload with nodemon



## ⚙️ Setup
1. Install dependencies
npm install

2. Add .env
APP_HOST=localhost/n
APP_PORT=3000/n
AUTH_SECRET=your_jwt_secret/n
AUTH_SECRET_EXPIRES_IN=15m/n
DATABASE_URL="your_database_connection_url"

4. Run in dev mode
npm run dev

5. Build for production
npm run build

6. Start production build
npm start

🧠 Example Routes
Method	Endpoint	Description	Auth Required
POST	/api/auth/register	Create a new user	❌
POST	/api/auth/login	Login and get token	❌
GET	/api/notes/my-data	Get user profile	✅

## 🧰 Tech Stack

Express — Web framework

TypeScript — Static typing

Zod — Validation

JWT — Authentication

Prisma — Database ORM

bcryptjs — Password hashing

## Scripts
Command	Description
- npm run dev	Run in development mode (hot reload)
- npm run build	Compile TypeScript to JavaScript
- npm start	Run compiled project
