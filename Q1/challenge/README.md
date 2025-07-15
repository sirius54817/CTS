# Secure Company Portal

This project is a simple secure company portal with both a modern GraphQL API and a legacy REST API. It consists of a Node.js/Express backend and a vanilla JavaScript/HTML frontend.

## Directory Structure

```
Q1/challenge/
├── backend/   # Node.js backend (Express, GraphQL, REST)
└── frontend/  # Static frontend (HTML, JS, CSS)
```

## Backend
- **Location:** `backend/`
- **Stack:** Node.js, Express, GraphQL, REST
- **Main file:** `server.js`
- **APIs:**
  - `/graphql` — Secure GraphQL API (recommended)
  - `/api/v1` — Legacy REST API (for reference)
- **Start:**
  ```bash
  cd backend
  npm install
  npm start
  ```
- **Port:** 3000

## Frontend
- **Location:** `frontend/`
- **Stack:** HTML, JavaScript, CSS
- **Main file:** `index.html`
- **How it works:**
  - Fetches user data from the backend GraphQL API and displays it.
  - To run, simply open `index.html` in your browser (after starting the backend).

## How to Run
1. **Start the backend:**
   ```bash
   cd Q1/challenge/backend
   npm install
   npm start
   ```
2. **Open the frontend:**
   - Open `Q1/challenge/frontend/index.html` in your browser.

## API Usage
### GraphQL Endpoint
- **URL:** `http://localhost:3000/graphql`
- **Example Query:**
  ```graphql
  query {
    users {
      id
      username
      email
      role
    }
  }
  ```

### REST Endpoint (Legacy)
- **URL:** `http://localhost:3000/api/v1/users`

## Notes
- CORS is enabled for local development.
- The GraphQL API is recommended for secure access.

## License
This project is licensed under the ISC License. 