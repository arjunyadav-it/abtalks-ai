# ABTalks AI 🤖

> A conversation-first learning and AI platform built with React, Vite, Node.js, Express and Google Gemini.

ABTalks AI combines meaningful AI conversations with a student-focused daily building challenge.

The platform allows users to explore conversations, interact with ABTalks AI, track their learning progress, and complete daily challenges while building proof of work.

---

## ✨ Features

### 🤖 ABTalks AI

- AI-powered conversations using Google Gemini
- Natural language questions
- Conversational and thoughtful responses
- Conversation history during a session
- Follow-up questions using previous context
- Enter to send a question
- Shift + Enter for a new line
- Loading and error states
- Clear conversation option

### 📚 Conversation Library

- Explore different conversations
- Search guests and topics
- Filter conversations by category
- Save conversations
- Conversation cards with duration and category
- Responsive conversation grid

### 🎯 Student Dashboard

- Daily learning streak
- Challenge progress tracking
- Today's task
- GitHub commit tracking
- LinkedIn post tracking
- Achievement section
- AI assistance section

### 🚀 Daily Challenge

- Day-based learning challenge
- Task description and goals
- What-to-build checklist
- Proof of work section
- GitHub commit link
- LinkedIn post link
- Streak continuation section

### 📱 Responsive Design

- Mobile-first interface
- Responsive layouts
- Optimized for 390px mobile screens
- Desktop-friendly UI
- Responsive cards and buttons

### 🎨 UI / UX

- Clean modern interface
- Dark theme
- Smooth hover effects
- Card animations
- Loading animations
- Responsive navigation
- Smooth scrolling
- Accessible interactive elements

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- JavaScript
- HTML5
- CSS3
- React Router
- Lucide React

### Backend

- Node.js
- Express.js
- CORS
- Environment Variables

### AI

- Google Gemini API
- `@google/genai`

### Deployment

- Vercel
- GitHub

---

## 🗺️ Routes

| Route | Purpose |
|---|---|
| `/` | Landing / Home page |
| `/explore` | Conversation library |
| `/dashboard` | Student dashboard |
| `/day/12` | Daily challenge |
| `/talk/12` | ABTalks AI conversation |

---

## 📂 Project Structure

```text
abtalks-ai/
│
├── api/
│   └── index.js
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Explore.jsx
│   │   ├── Talk.jsx
│   │   ├── Dashboard.jsx
│   │   └── Day.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .env
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── server.js
├── vercel.json
└── README.md