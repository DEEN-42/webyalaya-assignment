# Quick Setup and Run Script for Notes App

## Instructions:

### Method 1: Using the Startup Script (Easiest)
1. Open PowerShell in the project folder
2. Run: `.\start-app.ps1`
3. Two windows will open - one for backend, one for frontend
4. Wait for both to start (about 1-2 minutes)
5. Open http://localhost:3000 in your browser

### Method 2: Manual Setup (2 Terminal Windows)

**Terminal 1 - Backend:**
```powershell
cd backend
npm install
npm run start:dev
```

**Terminal 2 - Frontend:**
```powershell
cd frontend
npm install
npm run dev
```

Then open http://localhost:3000

## Troubleshooting

**If you get a script execution error:**
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

**To stop the servers:**
- Press `Ctrl+C` in each terminal window

## After First Run

Once dependencies are installed, you only need to run:
- Backend: `npm run start:dev`
- Frontend: `npm run dev`

## Docker (Optional - If You Have Docker Installed)

If you install Docker Desktop later, you can use:
```powershell
docker compose up --build
```

Note: Modern Docker uses `docker compose` (not `docker-compose`)
