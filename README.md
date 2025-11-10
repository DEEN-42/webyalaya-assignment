# Notes App with AI Summary

A full-stack application that allows users to create notes and generate AI-powered summaries.

Built with NestJS (backend), Next.js (frontend), and Docker.

## Project Overview

This project was developed as part of an FSD (Full Stack Development) Intern Assignment.

**Key Features:**
- Backend API Development with NestJS
- Frontend Development with Next.js and React
- AI Integration with summarization service
- Containerization with Docker and Docker Compose
- RESTful API Design

## Features

- Create and store notes with title and content
- View all created notes in a responsive list
- Generate AI summaries for any note with one click
- In-memory data storage (no database setup required)
- Fully containerized with Docker
- CORS-enabled for seamless frontend-backend communication
- Beautiful, modern UI with gradient backgrounds

## Architecture

### Backend (NestJS)
- **Framework**: NestJS with TypeScript
- **Port**: 4000
- **Endpoints**:
  - POST /notes - Create a new note
  - GET /notes - Retrieve all notes
  - POST /ai-summary - Generate AI summary for text

### Frontend (Next.js)
- **Framework**: Next.js 14 with React 18 and TypeScript
- **Port**: 3000
- **Features**: App Router, Client Components, CSS Modules

### Docker
- Separate Dockerfiles for frontend and backend
- Multi-stage builds for optimized image sizes
- Docker Compose for orchestration
- Health checks for service reliability

## AI Prompting Approach

The AI summary feature uses a **rule-based approach** that simulates intelligent summarization:

**Algorithm:**
1. Extract Key Sentences - Identifies the first and last sentences
2. Keyword Detection - Looks for sentences containing important indicator words
3. Smart Combination - Combines the most relevant sentences
4. Length Optimization - Provides both original and summary character counts

**For production use**, replace the extractSummary() method in backend/src/ai/ai.service.ts with:
- OpenAI GPT-4 or GPT-3.5-turbo
- Anthropic Claude
- Google PaLM
- Hugging Face Transformers

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Docker (v20 or higher)
- Docker Compose (v2 or higher)

## Quick Start

### Local Development (Recommended for Windows)

**Backend Setup:**

1. Navigate to backend directory
   ```
   cd backend
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Run in development mode
   ```
   npm run start:dev
   ```

4. Backend will be available at: http://localhost:4000

**Frontend Setup:**

1. Navigate to frontend directory (in a new terminal)
   ```
   cd frontend
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Run in development mode
   ```
   npm run dev
   ```

4. Frontend will be available at: http://localhost:3000

## Project Structure

```
webyalaya/
 backend/                    # NestJS Backend
    src/
       ai/                # AI Summary Module
       notes/             # Notes Module
       types/             # TypeScript Interfaces
       app.module.ts      # Root Module
       main.ts            # Entry Point
    Dockerfile
    package.json
    tsconfig.json

 frontend/                   # Next.js Frontend
    app/
       page.tsx           # Main Page Component
       page.module.css    # Page Styles
       layout.tsx
       globals.css
    lib/
       api.ts             # API Client
    types/
       note.ts
    Dockerfile
    next.config.js
    package.json
    tsconfig.json

 docker-compose.yml
 README.md
```

## API Documentation

### Base URL
- Local: http://localhost:4000
- Docker: http://backend:4000

### Endpoints

**1. Create Note**
```http
POST /notes
Content-Type: application/json

{
  "title": "My Note Title",
  "content": "This is the content of my note."
}
```

**2. Get All Notes**
```http
GET /notes
```

**3. Generate AI Summary**
```http
POST /ai-summary
Content-Type: application/json

{
  "text": "Long text that needs to be summarized..."
}
```

## Frontend Features

- Responsive Design - Works on desktop, tablet, and mobile
- Real-time Updates - Notes list updates immediately after creation
- Loading States - Visual feedback during API calls
- Error Handling - User-friendly error messages
- Modern UI - Gradient backgrounds, smooth animations, and hover effects

## Docker Commands

```bash
# Build and start all services
docker compose up --build

# Start services (without rebuild)
docker compose up

# Start in detached mode
docker compose up -d

# View logs
docker compose logs -f

# Stop all services
docker compose down

# Remove volumes
docker compose down -v
```

## Testing the Application

1. Open the frontend at http://localhost:3000
2. Create a note:
   - Enter a title (e.g., "Meeting Notes")
   - Enter content (e.g., "Today we discussed the project timeline...")
   - Click "Create Note"
3. View the note in the list below
4. Generate AI Summary:
   - Click the "Get AI Summary" button on any note
   - View the generated summary with character count

## Time Breakdown

- Backend API Development: ~5 hours
- Frontend Development: ~5 hours
- Dockerization: ~2 hours
- Documentation & Testing: ~2 hours

**Total Estimated Time**: ~14 hours

## Environment Variables

### Backend
No environment variables required for basic setup.

Optional:
- PORT: Server port (default: 4000)
- NODE_ENV: Environment mode

### Frontend
Create .env.local in frontend directory:
```
NEXT_PUBLIC_API_URL=http://localhost:4000
```

## Known Limitations

- Data Persistence: Notes are stored in-memory and will be lost on server restart
- AI Summary: Uses rule-based approach, not actual AI/ML
- Authentication: No user authentication implemented
- Validation: Basic input validation only

## Future Enhancements

- [ ] Database integration (PostgreSQL/MongoDB)
- [ ] Real AI integration (OpenAI GPT-4)
- [ ] User authentication and authorization
- [ ] Note editing and deletion
- [ ] Search and filter functionality
- [ ] Rich text editor
- [ ] Note categories/tags
- [ ] Export notes as PDF/Markdown

## Technologies Used

**Backend:**
- NestJS
- TypeScript
- Node.js
- Express

**Frontend:**
- Next.js 14
- React 18
- TypeScript
- CSS Modules

**DevOps:**
- Docker
- Docker Compose

## License

This project is created for educational purposes as part of an internship assignment.

## Author

Developed by Debanshu Ghosh

## Contributing

This is an assignment project, but suggestions are welcome!

## Support

For any questions or issues, please create an issue in the repository.

---

**Happy Coding!**
