Here's the updated PROJECT.md with everything from Phase 2 incorporated:
markdown# Game Tracker — Project Document

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
- **Database:** PostgreSQL + Prisma 6
- **Auth:** JWT + bcrypt
- **AI Integration:** Anthropic API (coming in Phase 5)
- **Deployment:** Vercel (frontend) + Railway (backend + DB)

## Project Structure
game-tracker/
├── client/                  ← React + TypeScript (Vite)
│   ├── src/
│   │   ├── App.tsx          ← Root component, currently fetches /api/health
│   │   └── main.tsx         ← Entry point, renders App into the DOM
│   └── package.json
├── server/                  ← Express + TypeScript
│   ├── prisma/
│   │   ├── schema.prisma    ← Database schema definition
│   │   └── migrations/      ← Versioned SQL migrations (committed to git)
│   ├── src/
│   │   ├── index.ts         ← Entry point, mounts routes
│   │   ├── routes/
│   │   │   └── auth.ts      ← POST /api/auth/register, POST /api/auth/login
│   │   ├── middleware/
│   │   │   └── auth.ts      ← authenticateToken middleware, AuthRequest interface
│   │   └── lib/
│   │       └── prisma.ts    ← Singleton PrismaClient instance
│   ├── tsconfig.json
│   └── package.json
├── docker-compose.yml       ← PostgreSQL container definition
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

### Phase 2 — Database & Auth ✅
- PostgreSQL running in Docker container with persistent volume
- Prisma 6 ORM configured with postgresql datasource
- User model — id, email, password, createdAt
- POST /api/auth/register — bcrypt hashes password, stores user
- POST /api/auth/login — verifies password, returns signed JWT
- Auth middleware — verifies JWT, attaches userId to request
- Bruno collection set up for API testing

### Phase 3 — Core Features 🔄 Next
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
- **Prisma 6 not 7** — Prisma 7 made breaking changes to schema format; version 6 is stable and what all tutorials/jobs use
- **Docker for local DB** — reproducible setup, good for CV, anyone cloning can spin up identically
- **Singleton PrismaClient** — one shared instance to avoid multiple connection pools

## How to Run the Project

### Prerequisites
- Docker Desktop must be running

### Terminal 1 — Database
```bash
# From project root
docker compose up -d
```

### Terminal 2 — Backend
```bash
cd server
npm run dev
# Runs on http://localhost:5000
```

### Terminal 3 — Frontend
```bash
cd client
npm run dev
# Runs on http://localhost:5173
```

### To verify everything is working
- Frontend: http://localhost:5173 should show the Game Tracker page
- Backend: http://localhost:5000/api/health should return `{"status":"ok","message":"Server is running"}`
- Database: `docker ps` should show `game-tracker-db` with status `Up`

---

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
- What an ORM is and why we use Prisma
- How bcrypt hashing works and why passwords are never stored plaintext
- How JWTs work — header.payload.signature, signing, verification, expiry
- Why error messages for login don't distinguish between wrong email vs wrong password (enumeration prevention)
- What the Bearer token authorization header format is
- What a singleton pattern is and why PrismaClient uses it
- How Express Router works and why routes are split across files
- How async/await works in TypeScript and why Node.js I/O is asynchronous
- What database migrations are and why they're version controlled
- What a unique index is and how Prisma's @unique maps to it in SQL

## Decisions Already Made
- Using Vite not Create React App (CRA is deprecated)
- TypeScript on both frontend and backend
- Server runs on port 5000, client on port 5173
- Conventional Commits format for git messages (feat:, chore:, docs: etc)
- Building auth manually with JWT + bcrypt rather than using an auth library
- Prisma 6 pinned — do not upgrade to Prisma 7
- Docker for local PostgreSQL — docker compose up -d from project root
- Bruno for API testing