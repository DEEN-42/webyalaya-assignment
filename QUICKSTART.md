# Notes App - Quick Setup Guide

## 🎯 For Quick Testing

### Using Docker (Easiest):
```bash
docker-compose up --build
```
Then open http://localhost:3000

### Local Development:

**Terminal 1 (Backend):**
```bash
cd backend
npm install
npm run start:dev
```

**Terminal 2 (Frontend):**
```bash
cd frontend
npm install
npm run dev
```

## 📝 Assignment Requirements Checklist

### Backend (NestJS) ✅
- ✅ POST /notes - Create a note
- ✅ GET /notes - List all notes
- ✅ POST /ai-summary - Generate AI summary
- ✅ In-memory data store (no database)

### Frontend (Next.js) ✅
- ✅ Form to add notes
- ✅ List of notes displayed
- ✅ AI summary button for each note
- ✅ Summary displayed inline
- ✅ Basic styling

### AI Prompting ✅
- ✅ Simple summarization logic
- ✅ Explanation in README

### Docker ✅
- ✅ Backend Dockerfile
- ✅ Frontend Dockerfile
- ✅ docker-compose.yml
- ✅ Both run as separate containers

## 🚀 Quick Test Steps

1. Start the app with `docker-compose up --build`
2. Go to http://localhost:3000
3. Create a note with title and content
4. Click "Get AI Summary" button
5. See the summary appear below the note

Done! 🎉
