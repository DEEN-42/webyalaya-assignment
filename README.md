# 📝 Notes App with AI Summary# 📝 Notes App with AI Summary



A full-stack application that allows users to create notes and generate AI-powered summaries. Built with NestJS (backend), Next.js (frontend), and Docker for easy deployment.A full-stack application that allows users to create notes and generate AI-powered summaries. Built with NestJS (backend), Next.js (frontend), and Docker for easy deployment.



## 🎯 Project Overview## 🎯 Project Overview



This project was developed as part of an FSD (Full Stack Development) Intern Assignment. It demonstrates:This project was developed as part of an FSD (Full Stack Development) Intern Assignment. It demonstrates:



- **Backend API Development** with NestJS- **Backend API Development** with NestJS

- **Frontend Development** with Next.js and React- **Frontend Development** with Next.js and React

- **AI Integration** with a simple summarization service- **AI Integration** with a simple summarization service

- **Containerization** with Docker and Docker Compose- **Containerization** with Docker and Docker Compose

- **RESTful API Design** following best practices- **RESTful API Design** following best practices



## ✨ Features## ✨ Features



- ✅ Create and store notes with title and content- ✅ Create and store notes with title and content

- ✅ View all created notes in a responsive list- ✅ View all created notes in a responsive list

- ✅ Generate AI summaries for any note with one click- ✅ Generate AI summaries for any note with one click

- ✅ In-memory data storage (no database setup required)- ✅ In-memory data storage (no database setup required)

- ✅ Fully containerized with Docker- ✅ Fully containerized with Docker

- ✅ CORS-enabled for seamless frontend-backend communication- ✅ CORS-enabled for seamless frontend-backend communication

- ✅ Beautiful, modern UI with gradient backgrounds- ✅ Beautiful, modern UI with gradient backgrounds



## 🏗️ Architecture## 🏗️ Architecture



### Backend (NestJS)### Backend (NestJS)



- **Framework**: NestJS with TypeScript- **Framework**: NestJS with TypeScript

- **Port**: 4000- **Port**: 4000

- **Endpoints**:- **Endpoints**:

  - `POST /notes` - Create a new note  - `POST /notes` - Create a new note

  - `GET /notes` - Retrieve all notes  - `GET /notes` - Retrieve all notes

  - `POST /ai-summary` - Generate AI summary for text  - `POST /ai-summary` - Generate AI summary for text



### Frontend (Next.js)### Frontend (Next.js)



- **Framework**: Next.js 14 with React 18 and TypeScript- **Framework**: Next.js 14 with React 18 and TypeScript

- **Port**: 3000- **Port**: 3000

- **Features**: App Router, Client Components, CSS Modules- **Features**: App Router, Client Components, CSS Modules



### Docker### Docker



- Separate Dockerfiles for frontend and backend- Separate Dockerfiles for frontend and backend

- Multi-stage builds for optimized image sizes- Multi-stage builds for optimized image sizes

- Docker Compose for orchestration- Docker Compose for orchestration

- Health checks for service reliability- Health checks for service reliability



## 🤖 AI Prompting Approach## 🤖 AI Prompting Approach



### Summarization Strategy### Summarization Strategy



The AI summary feature uses a **rule-based approach** that simulates intelligent summarization:The AI summary feature uses a **rule-based approach** that simulates intelligent summarization:



#### Algorithm:#### Algorithm:



1. **Extract Key Sentences**: Identifies the first and last sentences to capture introduction and conclusion1. **Extract Key Sentences**: Identifies the first and last sentences to capture introduction and conclusion

2. **Keyword Detection**: Looks for sentences containing important indicator words:2. **Keyword Detection**: Looks for sentences containing important indicator words:

   - "important", "key", "main", "significant", "crucial", "essential", "note", "remember"   - "important", "key", "main", "significant", "crucial", "essential", "note", "remember"

3. **Smart Combination**: Combines the most relevant sentences into a coherent summary3. **Smart Combination**: Combines the most relevant sentences into a coherent summary

4. **Length Optimization**: Provides both original and summary character counts4. **Length Optimization**: Provides both original and summary character counts



#### Production-Ready Prompt (for real AI integration):#### Production-Ready Prompt (for real AI integration):



``````

Prompt Template for OpenAI/Claude:Prompt Template for OpenAI/Claude:

"Summarize the following text in 2-3 concise sentences, capturing the main points and key insights: {text}""Summarize the following text in 2-3 concise sentences, capturing the main points and key insights: {text}"

``````



For production use, replace the `extractSummary()` method in `backend/src/ai/ai.service.ts` with calls to:For production use, replace the `extractSummary()` method in `backend/src/ai/ai.service.ts` with calls to:



- **OpenAI GPT-4** or GPT-3.5-turbo- **OpenAI GPT-4** or GPT-3.5-turbo

- **Anthropic Claude**- **Anthropic Claude**

- **Google PaLM**- **Google PaLM**

- **Hugging Face Transformers**- **Hugging Face Transformers**



## 📋 Prerequisites## 📋 Prerequisites



Before you begin, ensure you have the following installed:Before you begin, ensure you have the following installed:



- **Node.js** (v18 or higher)- **Node.js** (v18 or higher)

- **npm** (v9 or higher)- **npm** (v9 or higher)

- **Docker** (v20 or higher)- **Docker** (v20 or higher)

- **Docker Compose** (v2 or higher)- **Docker Compose** (v2 or higher)



## 🚀 Quick Start## 🚀 Quick Start



### Option 1: Local Development (Recommended for Windows)### Option 1: Local Development (Recommended for Windows)



**You'll need two terminal windows:****You'll need two terminal windows:**



#### Backend Setup#### Backend Setup



1. **Navigate to backend directory**1. **Navigate to backend directory**



   ```bash   ```bash

   cd backend   cd backend

   ```   ```



2. **Install dependencies**2. **Install dependencies**



   ```bash   ```bash

   npm install   npm install

   ```   ```



3. **Run in development mode**3. **Run in development mode**



   ```bash   ```bash

   npm run start:dev   npm run start:dev

   ```   ```



4. **Backend will be available at**: http://localhost:40004. **Backend will be available at**: http://localhost:4000



#### Frontend Setup#### Frontend Setup



1. **Navigate to frontend directory** (in a new terminal)1. **Navigate to frontend directory** (in a new terminal)



   ```bash   ```bash

   cd frontend   cd frontend

   ```   ```



2. **Install dependencies**2. **Install dependencies**



   ```bash   ```bash

   npm install   npm install

   ```   ```



3. **Run in development mode**3. **Run in development mode**



   ```bash   ```bash

   npm run dev   npm run dev

   ```   ```



4. **Frontend will be available at**: http://localhost:30004. **Frontend will be available at**: http://localhost:3000



## 📁 Project Structure## 📁 Project Structure



``````

webyalaya/webyalaya/

├── backend/                    # NestJS Backend├── backend/                    # NestJS Backend

│   ├── src/│   ├── src/

│   │   ├── ai/                # AI Summary Module│   │   ├── ai/                # AI Summary Module

│   │   │   ├── ai.controller.ts│   │   │   ├── ai.controller.ts

│   │   │   ├── ai.service.ts│   │   │   ├── ai.service.ts

│   │   │   └── ai.module.ts│   │   │   └── ai.module.ts

│   │   ├── notes/             # Notes Module│   │   ├── notes/             # Notes Module

│   │   │   ├── notes.controller.ts│   │   │   ├── notes.controller.ts

│   │   │   ├── notes.service.ts│   │   │   ├── notes.service.ts

│   │   │   └── notes.module.ts│   │   │   └── notes.module.ts

│   │   ├── types/             # TypeScript Interfaces│   │   ├── types/             # TypeScript Interfaces

│   │   │   └── note.interface.ts│   │   │   └── note.interface.ts

│   │   ├── app.module.ts      # Root Module│   │   ├── app.module.ts      # Root Module

│   │   └── main.ts            # Entry Point│   │   └── main.ts            # Entry Point

│   ├── Dockerfile             # Backend Dockerfile│   ├── Dockerfile             # Backend Dockerfile

│   ├── package.json│   ├── package.json

│   └── tsconfig.json│   └── tsconfig.json

││

├── frontend/                   # Next.js Frontend├── frontend/                   # Next.js Frontend

│   ├── app/│   ├── app/

│   │   ├── page.tsx           # Main Page Component│   │   ├── page.tsx           # Main Page Component

│   │   ├── page.module.css    # Page Styles│   │   ├── page.module.css    # Page Styles

│   │   ├── layout.tsx         # Root Layout│   │   ├── layout.tsx         # Root Layout

│   │   └── globals.css        # Global Styles│   │   └── globals.css        # Global Styles

│   ├── lib/│   ├── lib/

│   │   └── api.ts             # API Client│   │   └── api.ts             # API Client

│   ├── types/│   ├── types/

│   │   └── note.ts            # TypeScript Types│   │   └── note.ts            # TypeScript Types

│   ├── Dockerfile             # Frontend Dockerfile│   ├── Dockerfile             # Frontend Dockerfile

│   ├── next.config.js│   ├── next.config.js

│   ├── package.json│   ├── package.json

│   └── tsconfig.json│   └── tsconfig.json

││

├── docker-compose.yml          # Docker Compose Configuration├── docker-compose.yml          # Docker Compose Configuration

└── README.md                   # This file└── README.md                   # This file

``````



## 🔧 API Documentation## 🔧 API Documentation



### Base URL### Base URL

- Local: `http://localhost:4000`

- Local: `http://localhost:4000`- Docker: `http://backend:4000`

- Docker: `http://backend:4000`

### Endpoints

### Endpoints

#### 1. Create Note

#### 1. Create Note```http

POST /notes

```httpContent-Type: application/json

POST /notes

Content-Type: application/json{

  "title": "My Note Title",

{  "content": "This is the content of my note."

  "title": "My Note Title",}

  "content": "This is the content of my note."

}Response: 201 Created

{

Response: 201 Created  "id": "1",

{  "title": "My Note Title",

  "id": "1",  "content": "This is the content of my note.",

  "title": "My Note Title",  "createdAt": "2025-11-09T10:30:00.000Z"

  "content": "This is the content of my note.",}

  "createdAt": "2025-11-09T10:30:00.000Z"```

}

```#### 2. Get All Notes

```http

#### 2. Get All NotesGET /notes



```httpResponse: 200 OK

GET /notes[

  {

Response: 200 OK    "id": "1",

[    "title": "My Note Title",

  {    "content": "This is the content of my note.",

    "id": "1",    "createdAt": "2025-11-09T10:30:00.000Z"

    "title": "My Note Title",  }

    "content": "This is the content of my note.",]

    "createdAt": "2025-11-09T10:30:00.000Z"```

  }

]#### 3. Generate AI Summary

``````http

POST /ai-summary

#### 3. Generate AI SummaryContent-Type: application/json



```http{

POST /ai-summary  "text": "Long text that needs to be summarized..."

Content-Type: application/json}



{Response: 200 OK

  "text": "Long text that needs to be summarized..."{

}  "summary": "Brief summary of the text.",

  "originalLength": 250,

Response: 200 OK  "summaryLength": 45

{}

  "summary": "Brief summary of the text.",```

  "originalLength": 250,

  "summaryLength": 45## 🎨 Frontend Features

}

```- **Responsive Design**: Works on desktop, tablet, and mobile

- **Real-time Updates**: Notes list updates immediately after creation

## 🎨 Frontend Features- **Loading States**: Visual feedback during API calls

- **Error Handling**: User-friendly error messages

- **Responsive Design**: Works on desktop, tablet, and mobile- **Modern UI**: Gradient backgrounds, smooth animations, and hover effects

- **Real-time Updates**: Notes list updates immediately after creation

- **Loading States**: Visual feedback during API calls## 🐳 Docker Commands

- **Error Handling**: User-friendly error messages

- **Modern UI**: Gradient backgrounds, smooth animations, and hover effects```bash

# Build and start all services

## 🐳 Docker Commandsdocker-compose up --build



```bash# Start services (without rebuild)

# Build and start all servicesdocker-compose up

docker-compose up --build

# Start in detached mode

# Start services (without rebuild)docker-compose up -d

docker-compose up

# View logs

# Start in detached modedocker-compose logs -f

docker-compose up -d

# Stop all services

# View logsdocker-compose down

docker-compose logs -f

# Remove volumes

# Stop all servicesdocker-compose down -v

docker-compose down

# Rebuild specific service

# Remove volumesdocker-compose build backend

docker-compose down -vdocker-compose build frontend

```

# Rebuild specific service

docker-compose build backend## 🧪 Testing the Application

docker-compose build frontend

```1. **Open the frontend** at http://localhost:3000

2. **Create a note**:

## 🧪 Testing the Application   - Enter a title (e.g., "Meeting Notes")

   - Enter content (e.g., "Today we discussed the project timeline. The key points were...")

1. **Open the frontend** at http://localhost:3000   - Click "Create Note"

2. **Create a note**:3. **View the note** in the list below

   - Enter a title (e.g., "Meeting Notes")4. **Generate AI Summary**:

   - Enter content (e.g., "Today we discussed the project timeline. The key points were...")   - Click "🤖 Get AI Summary" button on any note

   - Click "Create Note"   - View the generated summary with character count

3. **View the note** in the list below

4. **Generate AI Summary**:## ⏱️ Time Breakdown

   - Click "🤖 Get AI Summary" button on any note

   - View the generated summary with character count- **Backend API Development**: ~5 hours

  - NestJS setup and configuration

## ⏱️ Time Breakdown  - API endpoints implementation

  - AI service development

- **Backend API Development**: ~5 hours  

  - NestJS setup and configuration- **Frontend Development**: ~5 hours

  - API endpoints implementation  - Next.js setup with App Router

  - AI service development  - UI/UX design and styling

  - API integration

- **Frontend Development**: ~5 hours  

  - Next.js setup with App Router- **Dockerization**: ~2 hours

  - UI/UX design and styling  - Dockerfile creation for both services

  - API integration  - Docker Compose configuration

  - Testing and optimization

- **Dockerization**: ~2 hours  

  - Dockerfile creation for both services- **Documentation & Testing**: ~2 hours

  - Docker Compose configuration  - README creation

  - Testing and optimization  - Code comments

  - End-to-end testing

- **Documentation & Testing**: ~2 hours

  - README creation**Total Estimated Time**: ~14 hours

  - Code comments

  - End-to-end testing## 🔒 Environment Variables



**Total Estimated Time**: ~14 hours### Backend

No environment variables required for basic setup.

## 🔒 Environment Variables

Optional:

### Backend- `PORT`: Server port (default: 4000)

- `NODE_ENV`: Environment mode

No environment variables required for basic setup.

### Frontend

Optional:Create `.env.local` in frontend directory:

```env

- `PORT`: Server port (default: 4000)NEXT_PUBLIC_API_URL=http://localhost:4000

- `NODE_ENV`: Environment mode```



### Frontend## 🚧 Known Limitations



Create `.env.local` in frontend directory:- **Data Persistence**: Notes are stored in-memory and will be lost on server restart

- **AI Summary**: Uses rule-based approach, not actual AI/ML

```env- **Authentication**: No user authentication implemented

NEXT_PUBLIC_API_URL=http://localhost:4000- **Validation**: Basic input validation only

```

## 🔮 Future Enhancements

## 🚧 Known Limitations

- [ ] Database integration (PostgreSQL/MongoDB)

- **Data Persistence**: Notes are stored in-memory and will be lost on server restart- [ ] Real AI integration (OpenAI GPT-4)

- **AI Summary**: Uses rule-based approach, not actual AI/ML- [ ] User authentication and authorization

- **Authentication**: No user authentication implemented- [ ] Note editing and deletion

- **Validation**: Basic input validation only- [ ] Search and filter functionality

- [ ] Rich text editor

## 🔮 Future Enhancements- [ ] Note categories/tags

- [ ] Export notes as PDF/Markdown

- [ ] Database integration (PostgreSQL/MongoDB)

- [ ] Real AI integration (OpenAI GPT-4)## 🛠️ Technologies Used

- [ ] User authentication and authorization

- [ ] Note editing and deletion### Backend

- [ ] Search and filter functionality- NestJS

- [ ] Rich text editor- TypeScript

- [ ] Note categories/tags- Node.js

- [ ] Export notes as PDF/Markdown- Express



## 🛠️ Technologies Used### Frontend

- Next.js 14

### Backend- React 18

- TypeScript

- NestJS- CSS Modules

- TypeScript

- Node.js### DevOps

- Express- Docker

- Docker Compose

### Frontend

## 📝 License

- Next.js 14

- React 18This project is created for educational purposes as part of an internship assignment.

- TypeScript

- CSS Modules## 👨‍💻 Author



### DevOpsDeveloped by Debanshu Ghosh



- Docker## 🤝 Contributing

- Docker Compose

This is an assignment project, but suggestions are welcome!

## 📝 License

## 📧 Support

This project is created for educational purposes as part of an internship assignment.

For any questions or issues, please create an issue in the repository.

## 👨‍💻 Author

---

Developed by Debanshu Ghosh

**Happy Coding! 🚀**

## 🤝 Contributing#   w e b y a l a y a - a s s i n m e n t 

 

This is an assignment project, but suggestions are welcome! 

## 📧 Support

For any questions or issues, please create an issue in the repository.

---

**Happy Coding! 🚀**
