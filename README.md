# Re:City – AI-Powered Urban Simulator

Re:City is a minimal demo showing a FastAPI backend and a simple React
frontend.  The repository currently only contains the backend code, but the
Docker and helper scripts are prepared for a future frontend directory.
You can run the backend API on its own or together with a frontend once it
exists.

## Docker Setup

1. Install Docker and Docker Compose.
2. Run the stack with:

```bash
./run.sh
```

The script builds the Docker images and starts the containers. If a
`frontend/Dockerfile` is not present it will start only the backend service.
The API becomes available at `http://localhost:8000`.

## Local Development

### Backend
1. Create a virtual environment and activate it:
   ```bash
   python3 -m venv .venv
   source .venv/bin/activate
   ```
2. Install dependencies:
   ```bash
   pip install -r backend/requirements.txt
   ```
3. Start the API:
   ```bash
   uvicorn backend.app.main:app --reload
   ```

### Frontend
1. Install npm packages:
   ```bash
   cd frontend
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
   It will run on `http://localhost:5173` and expects the backend at
   `http://localhost:8000`.

### Offline Setup
If you need to install Python packages without internet access, download the
wheel files ahead of time on another machine using

```bash
pip download -r backend/requirements.txt -d packages
```

Copy the `packages/` directory to the target machine and install with:

```bash
pip install --no-index --find-links packages -r backend/requirements.txt
```

## Deployment

- **Backend**: Build the image from `backend/` and deploy to a container host
  such as Render. Expose port `8000`.
- **Frontend**: Deploy the frontend image to Vercel or a similar static hosting
  service. Expose port `5173` or your chosen port.
- You can also deploy the entire Docker Compose stack on any platform that
  supports it.
