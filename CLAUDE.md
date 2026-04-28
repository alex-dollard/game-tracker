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


# Claude Instructions for This Project

## Who I Am
- First class CS degree, University of York (2025)
- Strong Python and Java background (years of experience)
- Familiar with networking, Linux, command line, PowerShell
- Cybersecurity background — ethical hacking, cryptography, network security modules, TryHackMe offensive security courses, web app pentesting
- Beginner to web development and this stack specifically, but not a beginner to programming

## How to Work With Me
- Treat me as an experienced programmer learning a new stack, not as a complete beginner
- Skip explanations of fundamental programming concepts (loops, functions, variables, conditionals)
- Do explain web-specific concepts, JavaScript/TypeScript quirks, and how the stack pieces connect
- Explain every new library, method, or tool we use — what it is, why we use it, what problem it solves
- Explain syntax differences between TypeScript and languages I know (Python, Java) where relevant
- When introducing new concepts, go deep rather than surface level — I prefer to understand things properly
- Draw on my security background where relevant — I understand HTTP, CORS, SQL injection, auth attacks etc
- Don't overwhelm with everything at once but don't dumb things down either
- I will type out code myself rather than copy pasting — this is intentional for learning

## How I Like to Work
- Explain what we're about to do and why before asking me to write code
- Break things into clear steps
- When I encounter errors, help me understand what the error means before jumping to the fix
- Encourage me to diagnose problems myself first (check the console, check the network tab etc)
- Commit to GitHub regularly whenever something works
- Keep the PROJECT.md updated as we go

## Project Goal
Building a full stack game tracking web app as a portfolio piece for job applications. The goal is both to learn the stack properly and to have something deployed and explainable in interviews. Every decision we make should be something I can explain and defend in an interview.

## Interview Awareness
- Occasionally flag when something we're doing is particularly relevant to interviews
- Help me understand not just how to build things but why we build them this way
- The security angle is a differentiator — help me connect backend security concepts to my existing knowledge

## Current State of the Project
Last completed: Phase 1 — Foundation
Next up: Phase 2 — Database & Auth

## How to Run the Project
Always need two terminals running simultaneously:

### Terminal 1 — Frontend
```bash
cd client
npm run dev
# Runs on http://localhost:5173
```

### Terminal 2 — Backend
```bash
cd server
npm run dev
# Runs on http://localhost:5000
```

### To verify everything is working
- Frontend: http://localhost:5173 should show the Game Tracker page
- Backend: http://localhost:5000/api/health should return {"status":"ok","message":"Server is running"}
- Frontend should display "Server is running" if both are running correctly

## Concepts Already Explained
Don't re-explain these from scratch, I understand them:
- What React components, useState, useEffect, and JSX are
- What Express, middleware, and routes are
- What npm, npx, nodemon, ts-node, and Vite are
- What package.json and tsconfig.json are and what they do
- How fetch and Promises work
- How Git add, commit, and push work
- Why node_modules is gitignored
- What CORS is and why it exists
- The difference between dev and production scripts

## Decisions Already Made
- Using Vite not Create React App (CRA is deprecated)
- TypeScript on both frontend and backend
- Server runs on port 5000, client on port 5173
- Conventional Commits format for git messages (feat:, chore:, docs: etc)
- Building auth manually with JWT + bcrypt rather than using an auth library

## File Structure So Far
game-tracker/
├── client/                  ← React + TypeScript (Vite)
│   ├── src/
│   │   ├── App.tsx          ← Root component, currently fetches /api/health
│   │   └── main.tsx         ← Entry point, renders App into the DOM
│   └── package.json
├── server/                  ← Express + TypeScript
│   ├── src/
│   │   └── index.ts         ← Entry point, health check route
│   ├── tsconfig.json
│   └── package.json
├── .gitignore
├── CLAUDE.md
└── README.md

## Things to Cover in Phase 2
- PostgreSQL installation and setup
- Prisma ORM — schema definition, migrations, client
- User model — id, username, email, password (hashed)
- POST /api/auth/register endpoint
- POST /api/auth/login endpoint
- JWT generation and verification
- Auth middleware to protect routes
- Connecting it all to the frontend with a basic login form