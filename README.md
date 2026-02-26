# Manora - Secure Notes Management System

## Tech Stack
- Node.js
- Express.js
- MySQL
- React
- JWT Authentication
- bcrypt password hashing

## Features
- User Registration (hashed passwords)
- User Login (JWT token)
- Protected Notes Routes
- Full CRUD Operations
- Modular Backend Architecture

## API Endpoints

### Auth
POST /api/auth/register  
POST /api/auth/login  

### Notes (Protected)
GET /api/notes/:userId  
POST /api/notes  
PUT /api/notes/:id  
DELETE /api/notes/:id  

## Security
- Password hashing with bcrypt
- JWT authentication
- Protected routes