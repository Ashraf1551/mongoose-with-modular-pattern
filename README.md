# Mongoose Modular Pattern

A simple task management REST API built with Node.js, Express, MongoDB, and Mongoose using a modular project structure.

## Features

- Create, read, update, and delete tasks
- MongoDB connection with Mongoose
- Environment-based configuration

## Getting Started

```bash
git clone <your-github-repository-url>
cd mongoose-with-modular-pattern
npm install
```

Create a `.env` file in the project root:

```env
PORT=3000
URI=your_mongodb_connection_string
```

Start the development server:

```bash
npm run dev
```

## API Routes

All task routes use the `/api/task` base path:

| Method | Route           | Description      |
| ------ | --------------- | ---------------- |
| POST   | `/api/task`     | Create a task    |
| GET    | `/api/task`     | Get all tasks    |
| GET    | `/api/task/:id` | Get a task by ID |
| PATCH  | `/api/task/:id` | Update a task    |
| DELETE | `/api/task/:id` | Delete a task    |
