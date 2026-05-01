# 💰 Expense Tracker

A full-stack expense tracking application that enables users to manage finances, track categorized spending, set budgets, and visualize financial data. The system follows a microservice-inspired architecture, separating core backend logic from analytics processing.

🔗 **Live Demo:** [https://expense-tracker-peach-kappa-52.vercel.app/](https://expense-tracker-peach-kappa-52.vercel.app/)

---

## 📋 Features

- **User Dashboard** — Overview of balance, income, expenses, and spending insights
- **Transaction Management** — Add and manage income/expense entries with categories
- **Budget Planning** — Define budgets for each category
- **Budget Utilization Tracking** — Monitor spending vs budget with percentage indicators
- **Data Visualization** — Interactive category-wise expense charts using Recharts
- **Category Management** — Color-coded categories for better organization
- **Search & Filtering** — Filter transactions by type, keyword, and date range
- **Responsive UI** — Works across desktop and mobile devices
- **Authentication** — JWT-based login with HTTP-only cookies
- **Demo Mode** — Instant access using mock data without backend dependency
- **Analytics Service Integration** — External Python service for analytics with automatic fallback

---

## 🏗️ Architecture

```
Frontend (Vite + React)
        ↓
Express Backend (Node.js)
        ↓
Python Analytics Service (FastAPI)
```

- The **Express backend** handles authentication, database operations, and API responses
- The **Python service** processes analytics and computations
- A **fallback mechanism** ensures the system remains functional if the Python service is unavailable

---

## 🚀 Live Deployment

| Service    | Platform | URL                                        |
|------------|----------|-------------------------------------------|
| Frontend   | Vercel   | https://expense-tracker-peach-kappa-52.vercel.app/ |
| Backend    | Render   | Configured via environment variables     |
| Analytics  | Render   | Configured via environment variables     |

---

## 🛠️ Tech Stack

### Backend
- Node.js + Express.js
- MongoDB + Mongoose
- JWT Authentication + cookie-parser
- Axios

### Frontend
- React 19
- Vite 7
- React Router DOM
- Tailwind CSS
- Recharts
- Day.js

### Analytics Service
- Python (FastAPI)
- Designed for scalable analytics and future extensions

---

## 📁 Project Structure

```
Expense Tracker/
├── Backend/          # Express.js API server
├── Frontend /        # React + Vite application
└── analysic-service/ # Python FastAPI service
```

---

## 🌐 API Endpoints

| Method | Endpoint           | Description                          |
|--------|--------------------|--------------------------------------|
| POST   | `/api/login`       | Authenticate user                   |
| GET    | `/api/initaldata`  | Fetch user data + analytics         |
| POST   | `/api/transaction` | Add transaction                     |
| POST   | `/api/update`      | Update user settings and budgets    |

---

## 📊 Data Models

### User
```json
{
  "username": String,
  "balance": Number,
  "password": String
}
```

### Category
```json
{
  "title": String,
  "colour": String,
  "budgeted": Number,
  "userId": ObjectId
}
```

### Transaction
```json
{
  "title": String,
  "type": String,
  "amount": Number,
  "category": String,
  "desc": String,
  "createdAt": String,
  "userId": ObjectId
}
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js v18+
- pnpm
- MongoDB

### Backend Setup

```bash
cd Backend
pnpm install
```

Create `.env`:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
CLIENT_URL=http://localhost:5173
JWT_SECRET=your_secret
DEMO_USERNAME=demo
DEMO_PASSWORD=demo123
PYTHON_SERVICE_URL=http://127.0.0.1:8000
NODE_ENV=development
```

Run backend:

```bash
pnpm dev
```

### Frontend Setup

```bash
cd "Frontend "
pnpm install
```

Create `.env.local`:

```env
VITE_API=http://localhost:5000/api
VITE_DEMO_USERNAME=demo
VITE_DEMO_PASSWORD=demo123
```

Run frontend:

```bash
pnpm dev
```

---

## 📊 Analytics Flow

1. Backend sends transactions and categories to Python service
2. Python computes:
   - total balance
   - income and expense totals
   - category-wise aggregation
   - budget utilization percentages
3. If the service fails or times out, a fallback JavaScript function performs the same calculations

---

## 🔐 Authentication Flow

1. User logs in
2. Backend validates credentials and issues JWT cookie
3. Frontend fetches initial data
4. Global state is populated via React Context

---

## 📦 Deployment Notes

- Frontend deployed on Vercel
- Backend and Python service deployed on Render
- Environment variables must be configured correctly
- CORS must allow frontend origin
- Cookies should be secure in production

---

## 💡 Motivation

This project evolved from a basic expense tracker into a more scalable system with separated concerns. By introducing a Python-based analytics service, the architecture supports future enhancements such as predictive analytics and advanced financial insights.

---

## 🧠 Key Highlights

- Microservice-style architecture
- Resilient fallback system
- Real-world deployment
- Clean separation of concerns
- Scalable design for future analytics