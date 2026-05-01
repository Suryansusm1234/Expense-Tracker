# 💰 Expense Tracker [Live Demo](https://expense-tracker-peach-kappa-52.vercel.app/)

A full-stack expense tracking application that helps users manage their finances, track spending by category, set budgets, and visualize their financial data with interactive charts.

## 📋 Features

- **User Dashboard** — View overall balance, financial summary, and spending breakdown at a glance
- **Transaction Management** — Add income and expenses with category tagging, descriptions, and timestamps
- **Budget Planning** — Set and update budgets for different spending categories via the settings panel
- **Budget Utilization Tracking** — Monitor actual vs budgeted spending with percentage utilization indicators
- **Data Visualization**
  - Interactive pie charts for category-wise expense distribution (Recharts)
  - Category cards with budget progress indicators
- **Category Management** — Organize transactions by color-coded categories
- **Search & Filtering** — Find transactions by keyword, type (income/expense), and date range
- **Responsive Design** — Optimized for desktop and mobile with Tailwind CSS
- **User Authentication** — JWT-based login with cookie sessions
- **Demo/Recruiter Mode** — Checkbox-based mock data mode for instant access without a backend
- **Python Analytics Service Integration** — Optional external Python service for advanced analytics with automatic JS fallback

## 🚀 Live Deployment

| Service   | Platform | URL |
|-----------|----------|-----|
| Frontend  | Vercel   | [expense-tracker-peach-kappa-52.vercel.app](https://expense-tracker-peach-kappa-52.vercel.app/) |
| Backend   | Render   | (API endpoint configured via env) |

## 🛠️ Tech Stack

### Backend
- **Node.js** + **Express.js** — REST API server (Express v5)
- **MongoDB** + **Mongoose** — NoSQL database and ODM
- **JWT** + **cookie-parser** — Authentication via HTTP-only cookies
- **CORS** — Cross-origin resource sharing
- **Axios** — HTTP client for Python analytics service communication

### Frontend
- **React 19** — UI framework with functional components and hooks
- **Vite 7** — Build tool and development server
- **React Router DOM 7** — Client-side routing
- **Axios** — HTTP client with interceptors
- **Tailwind CSS 4** — Utility-first CSS with Vite plugin
- **Recharts 3** — Data visualization (pie charts)
- **Lucide React** — Icon library
- **Day.js** — Date formatting and manipulation

### Analytics (Optional)
- **Python Service** — External analytics microservice with fallback function 

## 📁 Project Structure

```
Expense Tracker/
├── Backend/
│   ├── index.js                  # Express server entry point, all API routes
│   ├── middleware.js             # JWT authentication middleware
│   ├── analyticservice.js        # Python analytics service client with JS fallback
│   ├── package.json
│   ├── .env                      # Environment variables (MongoDB URI, JWT secret, etc.)
│   └── modules/
│       ├── Db.js                 # MongoDB connection handler
│       ├── user.js               # User model (username, balance, password)
│       ├── category.js           # Category model (title, colour, budgeted, userId)
│       └── Transaction.js        # Transaction model (title, type, amount, category, desc, createdAt, userId)
│
├── Frontend /
│   ├── index.html
│   ├── vite.config.js
│   ├── eslint.config.js
│   ├── .env.local                # Environment variables (API URL, demo credentials)
│   ├── package.json
│   ├── src/
│   │   ├── main.jsx              # React entry point
│   │   ├── App.jsx               # Root component with route definitions
│   │   └── index.css             # Global styles + Tailwind imports
│   ├── pages/
│   │   ├── Loginpage.jsx         # Login screen with recruiter demo mode
│   │   ├── Homepage.jsx          # Main dashboard layout
│   │   └── ViewAllTRansactions.jsx # Full transaction list with search/filter
│   ├── components/
│   │   ├── Leftsidebar.jsx       # Fixed sidebar navigation with action buttons
│   │   ├── User.jsx              # User profile display
│   │   ├── BalanceSection.jsx    # Balance overview card
│   │   ├── Graph.jsx             # Expense distribution chart with legend
│   │   ├── Piechat.jsx           # Recharts pie chart component
│   │   ├── TooltipContent.jsx    # Custom tooltip for pie chart
│   │   ├── Category.jsx          # Category cards grid
│   │   ├── Card.jsx              # Individual category card with budget info
│   │   ├── Progressbar.jsx       # Budget utilization progress bar
│   │   ├── Recent.jsx            # Recent transactions list
│   │   ├── SearchBar.jsx         # Search input with filter panel (type + date range)
│   │   ├── AddForm.jsx           # Modal form for adding new transactions
│   │   ├── SettingsForm.jsx      # Modal form for updating username and category budgets
│   │   └── TooltipContent.jsx    # Pie chart hover tooltip
│   ├── context/
│   │   └── ContextProvider.jsx   # React Context for global state (categories, transactions, user, filters)
│   └── utils/
│       ├── apiClient.js          # Configured Axios instance with baseURL and credentials
│       ├── Addhandler.js         # Transaction creation logic with state updates
│       ├── SettingsHandler.js    # Settings update logic (backend API + mock mode)
│       ├── SearchHandler.js      # Client-side transaction search/filter logic
│       ├── remainingdays.js      # Utility for calculating remaining days in billing cycle
│       └── mockInitialData.js    # Mock data generator for demo/recruiter mode
│
└── analysic-service/             #  Python analytics microservice
```

## 🌐 API Endpoints

All endpoints require authentication via JWT cookie except `/api/login`.

| Method | Endpoint         | Description |
|--------|------------------|-------------|
| POST   | `/api/login`     | Authenticate user. Accepts `username` + `password`. Returns JWT cookie. Supports demo credentials. |
| GET    | `/api/initaldata`| Fetch user profile, categories, and all transactions. Computes analytics via Python service (with JS fallback). |
| POST   | `/api/transaction`| Create a new transaction. . Auto-scoped to authenticated user. |
| POST   | `/api/update`    | Update username and category budgets. Body: `{ username, updatedCategories }`. |

## 📊 Data Models

### User
```javascript
{
  username: String,      // User display name
  balance: Number,       // Current account balance
  password: String       // Plaintext password (note: should be hashed in production)
}
```

### Category
```javascript
{
  title: String,         // Category name (e.g., "Food", "Transport")
  colour: String,        // Hex color code for UI display
  budgeted: Number,      // Planned budget amount
  userId: ObjectId       // Reference to User
}
```

### Transaction
```javascript
{
  title: String,         // Transaction label (required)
  type: String,          // "income" or "expense" (required)
  amount: Number,        // Transaction amount (required)
  category: String,      // Associated category name
  desc: String,          // Optional description/notes
  createdAt: String,     // Formatted date string (DD-MM-YYYY HH:mm:ss)
  userId: ObjectId       // Reference to User
}
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** v18+ (ESM modules required)
- **pnpm** v10+ (package manager)
- **MongoDB** instance (local or Atlas cloud)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "Expense Tracker"
   ```

2. **Setup Backend**
   ```bash
   cd Backend
   pnpm install
   ```

   Create a `.env` file:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/expense-tracker
   CLIENT_URL=http://localhost:5173
   JWT_SECRET=your-super-secret-key
   DEMO_USERNAME=demo
   DEMO_PASSWORD=demo123
   PYTHON_SERVICE_URL=http://127.0.0.1:8000
   NODE_ENV=development
   ```

3. **Setup Frontend**
   ```bash
   cd "Frontend "
   pnpm install
   ```

   Create a `.env.local` file:
   ```env
   VITE_API=http://localhost:5000/api
   VITE_DEMO_USERNAME=demo
   VITE_DEMO_PASSWORD=demo123
   ```

### Running the Application

**Terminal 1 — Backend**
```bash
cd Backend
pnpm dev
```
Backend runs on `http://localhost:5000`

**Terminal 2 — Frontend**
```bash
cd "Frontend "
pnpm dev
```
Frontend runs on `http://localhost:5173`

### Demo / Recruiter Mode

On the login page, check the **"Recruiter Login"** checkbox to auto-fill demo credentials. This mode:
- Bypasses the database entirely
- Loads pre-populated mock data (categories, transactions, user)
- All UI features work (add transactions, edit budgets, search, filter)
- Settings updates apply to local state without API calls

## 🏗️ Architecture

### Authentication Flow
1. User submits credentials on `Loginpage.jsx`
2. Backend verifies against DB or demo credentials, issues JWT in HTTP-only cookie
3. Frontend calls `loginAndFetch()` which triggers `getInitialData()`
4. `ContextProvider` populates global state with categories, transactions, and user

### State Management
- **React Context** (`ContextProvider.jsx`) holds all global state: `categories`, `Transaction`, `user`, `filter`, date range, `usingMockData` flag
- State updates flow through handler utilities (`Addhandler.js`, `SettingsHandler.js`) which call the API and update context

### Analytics Pipeline
- On `GET /api/initaldata`, backend attempts to call the Python analytics service (`POST /analyze`) with transactions + categories
- If the Python service times out  or fails, a native JS `fallbackAnalytics()` function computes balance, category totals, and utilization percentages
- Python service is degined to handle powerfull analytics ,future prediction etc..The future prediction will be launched in the future version

### Mock Data Fallback
- If the backend is unreachable during `getInitialData()`, the frontend catches the error and loads mock data from `mockInitialData.js`
- The `usingMockData` flag is set to `true`, which:
  - Shows a banner: "Recruiter mode — viewing demo data"
  - Skips API calls in `SettingsHandler.js` and applies changes locally

## 📦 Build & Deploy

### Production Build
```bash
# Frontend
cd "Frontend "
pnpm build
# Output in dist/

# Backend
cd Backend
pnpm build  # (if applicable, otherwise index.js is production-ready)
```

### Linting
```bash
cd "Frontend "
pnpm lint
```

### Environment Notes
- `VITE_API` — Full backend URL with `/api` suffix (e.g., `https://your-backend.onrender.com/api`)
- `VITE_DEMO_USERNAME` / `VITE_DEMO_PASSWORD` — Must match backend `DEMO_USERNAME` / `DEMO_PASSWORD`
- Backend `CLIENT_URL` must match your frontend origin for CORS
- Set `NODE_ENV=production` and `secure: true` cookies in production

## 📝 Notes

- Package manager: **pnpm v10.26.0** (specified in `packageManager` field)
- MongoDB must be running before starting the backend
- Transaction dates are stored as formatted strings (`DD-MM-YYYY HH:mm:ss`) — date filtering parses these client-side
- The Python analytics service at `analysicservice.js` has a 2-second timeout with graceful JS fallback
- Categories in mock mode use string IDs (e.g., `mock-cat-food`) while real categories use MongoDB ObjectIds
- Currency displayed in Indian Rupees (₹)
