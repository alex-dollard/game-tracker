# Game Tracker — Project Document

## Overview
A full stack web app similar to IMDB but for games. Users can create accounts, log in, and track games they've played with details like playtime, completion status, and achievements. Additional features include a "want to play" list and review scores.

**Goal:** Build a real world deployed project to demonstrate full stack development skills for job applications.

## Developer Background
- First class CS degree, University of York (2025)
- Strong Python and Java background
- Familiar with networking, Linux, command line
- Background in cybersecurity (TryHackMe, ethical hacking, cryptography modules)
- Learning web development for the first time through this project

## Tech Stack
- **Frontend:** React + TypeScript (Vite)
- **Backend:** Node.js + Express + TypeScript
- **Database:** PostgreSQL + Prisma (coming in Phase 2)
- **Auth:** JWT + bcrypt (coming in Phase 2)
- **AI Integration:** Anthropic API (coming in Phase 5)
- **Deployment:** Vercel (frontend) + Railway (backend + DB)

## Project Structure
game-tracker/
├── client/          ← React frontend (Vite, port 5173)
├── server/          ← Express backend (port 5000)
├── .gitignore
├── PROJECT.md
└── README.md

## Phases

### Phase 1 — Foundation ✅
- Git + GitHub setup
- React + TypeScript frontend (Vite)
- Express + TypeScript backend
- Frontend successfully fetching from backend
- .gitignore configured

### Phase 2 — Database & Auth 🔄 Next
- PostgreSQL database setup
- Prisma ORM configuration
- User table
- Register and login endpoints
- JWT authentication
- Password hashing with bcrypt

### Phase 3 — Core Features
- Games browsing
- Adding games to your list
- Playtime, completion, achievements tracking

### Phase 4 — Polish & Extra Features
- Reviews and scores
- Want to play list
- Search
- UI polish

### Phase 5 — AI & Deployment
- Anthropic API integration
- Deploy frontend to Vercel
- Deploy backend + DB to Railway

## Key Decisions & Why
- **Vite over Create React App** — CRA is deprecated, Vite is faster and actively maintained
- **TypeScript throughout** — catches errors early, looks good on CV, industry standard
- **JWT auth built manually** — learning how auth works rather than hiding it behind a library
- **PostgreSQL** — relational DB, industry standard, good for interviews

## Running the Project
```bash
# Frontend (from /client)
npm run dev        # runs on http://localhost:5173

# Backend (from /server)
npm run dev        # runs on http://localhost:5000
```

## How to Start a New Chat Session
Paste the contents of this file at the start of the chat with a message like:
"We're building a game tracker app. Here's our PROJECT.md: [paste]. We just finished X and are now working on Y."