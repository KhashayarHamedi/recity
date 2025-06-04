# ReCity

This project provides a small FastAPI backend and a Vite/React frontend for experimenting with city simulation data.

## Backend

1. Install dependencies:
   ```bash
   python3 -m pip install -r backend/requirements.txt
   ```
2. Start the API server:
   ```bash
   uvicorn backend.app.main:app --reload
   ```
   The backend runs on <http://localhost:8000> by default.

## Frontend

1. Install dependencies (requires Node.js and npm):
   ```bash
   cd frontend
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
   Vite will start the frontend on <http://localhost:5173>.

The frontend fetches simulation data from the backend's `/simulate` endpoint and displays it using Tailwind styles.
