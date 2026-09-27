# Student Management REST API

A production-ready Student Management REST API built using **Node.js** and **Express.js**. This API provides complete CRUD (Create, Read, Update, Delete) operations using an in-memory dataset, custom request logging middleware, request validation, 404 route handling, and centralized error handling.

---

## Project Structure

```text
├── data/
│   └── students.js           # Initial in-memory array of student records
├── middleware/
│   └── logger.js             # Custom middleware logging HTTP method, URL, and timestamp
├── routes/
│   └── studentRoutes.js      # Express Router handling student CRUD endpoints
├── app.js                    # Main application entry point & Express server setup
├── test-api.js               # Automated integration verification test suite
├── package.json              # Project configuration and dependencies
└── README.md                 # API documentation and usage guide
```

---

## Getting Started

### 1. Prerequisites
- **Node.js**: v18+ (tested on v24.x)
- **npm**: v9+

### 2. Installation
Dependencies are already configured. If needed, install dependencies:
```bash
npm install
```

### 3. Running the Server

#### Production / Standard Start:
```bash
npm start
```
Starts the server on `http://localhost:3000`.

#### Development Start (Watch Mode):
```bash
npm run dev
```

#### Run Automated Test Suite:
```bash
node test-api.js
```

---

## API Endpoints & Specification

Base URL: `http://localhost:3000`

### 1. Root & Discovery
- **`GET /`**
  - **Description**: Returns API status and overview of endpoints.
  - **Status Code**: `200 OK`

---

### 2. Student CRUD Endpoints

#### 1. Retrieve All Students
- **Endpoint**: `GET /students`
- **Status Code**: `200 OK`
- **Response**:
```json
{
  "success": true,
  "count": 4,
  "data": [
    {
      "id": 1,
      "name": "Alex Johnson",
      "course": "Computer Science",
      "email": "alex.johnson@example.com"
    },
    ...
  ]
}
```

#### 2. Retrieve Student by ID
- **Endpoint**: `GET /students/:id`
- **Status Code**: `200 OK` or `404 Not Found`
- **Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Alex Johnson",
    "course": "Computer Science",
    "email": "alex.johnson@example.com"
  }
}
```
- **Response (404 Not Found)**:
```json
{
  "success": false,
  "message": "Student with ID 999 not found."
}
```

#### 3. Create a New Student
- **Endpoint**: `POST /students`
- **Headers**: `Content-Type: application/json`
- **Body**:
```json
{
  "name": "Lucas Scott",
  "course": "Cybersecurity",
  "email": "lucas@example.com"
}
```
- **Validation**: `name` and `course` are required non-empty string fields.
- **Status Code**: `201 Created` or `400 Bad Request`
- **Response (201 Created)**:
```json
{
  "success": true,
  "message": "Student registered successfully.",
  "data": {
    "id": 5,
    "name": "Lucas Scott",
    "course": "Cybersecurity",
    "email": "lucas@example.com"
  }
}
```

#### 4. Update an Existing Student
- **Endpoint**: `PUT /students/:id`
- **Headers**: `Content-Type: application/json`
- **Body**:
```json
{
  "course": "Cloud Architecture"
}
```
- **Status Code**: `200 OK` or `404 Not Found`
- **Response (200 OK)**:
```json
{
  "success": true,
  "message": "Student with ID 1 updated successfully.",
  "data": {
    "id": 1,
    "name": "Alex Johnson",
    "course": "Cloud Architecture",
    "email": "alex.johnson@example.com"
  }
}
```

#### 5. Delete a Student
- **Endpoint**: `DELETE /students/:id`
- **Status Code**: `200 OK` or `404 Not Found`
- **Response (200 OK)**:
```json
{
  "success": true,
  "message": "Student with ID 1 deleted successfully.",
  "data": {
    "id": 1,
    "name": "Alex Johnson",
    "course": "Cloud Architecture",
    "email": "alex.johnson@example.com"
  }
}
```

---

## Middlewares & Error Handling

1. **Custom Request Logger (`middleware/logger.js`)**:
   Logs each request's timestamp (ISO format), HTTP method, and original URL. Example:
   ```text
   [2026-09-25T06:55:24.857Z] GET /students
   ```
2. **404 Route Handling**:
   Catches any requests to unregistered routes and returns:
   ```json
   {
     "success": false,
     "message": "Resource not found: GET /unregistered-route"
   }
   ```
3. **Global Error Handling**:
   Catches server errors and malformed JSON payloads gracefully, preventing unhandled process crashes.
