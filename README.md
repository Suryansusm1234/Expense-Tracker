# 💰 Expense Tracker [lIVE URL](https://expense-tracker-peach-kappa-52.vercel.app/)

A full-stack expense tracking application that helps users manage their finances, track spending by category, set budgets, and visualize their financial data.

## Deployement
- Frontend -> Vercel
- Backend ->Render


## 📋 Features

- **User Dashboard**: View overall balance and financial summary
- **Transaction Management**: Add, view, and categorize income and expenses
- **Budget Planning**: Set budgets for different spending categories
- **Budget Utilization Tracking**: Monitor actual spending vs budgeted amounts with percentage utilization
- **Data Visualization**: 
  - Interactive graphs for expense trends
  - Pie charts for category breakdown
  - Progress bars for budget utilization
- **Category Management**: Organize transactions by custom categories with color coding
- **Search Functionality**: Find transactions easily with search filters
- **Responsive Design**: Works seamlessly on different screen sizes
- **User Authentication**: Simple login functionality

## 🛠️ Tech Stack

### Backend
- **Node.js** with Express.js - REST API server
- **MongoDB** with Mongoose - NoSQL database
- **CORS** - Cross-origin resource sharing
- **Dotenv** - Environment variable management
- **Nodemon** - Development auto-reload

### Frontend
- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client
- **Tailwind CSS** - Utility-first CSS framework
- **Recharts** - Data visualization library
- **Lucide React** - Icon library
- **Day.js** - Date manipulation library

## 📁 Project Structure

```
Expense Tracker/
├── Backend/
│   ├── index.js              # Express server entry point
│   ├── package.json
│   ├── .env                  # Environment variables
│   └── modules/
│       ├── Db.js            # MongoDB connection
│       ├── user.js          # User model
│       ├── category.js      # Category model
│       └── Transaction.js   # Transaction model
│
└── Frontend/
    ├── src/
    │   ├── App.jsx          # Main app component with routing
    │   ├── main.jsx         # Entry point
    │   └── index.css        # Global styles
    ├── components/          # Reusable React components
    │   ├── AddForm.jsx
    │   ├── BalanceSection.jsx
    │   ├── Card.jsx
    │   ├── Category.jsx
    │   ├── Graph.jsx
    │   ├── Leftsidebar.jsx
    │   ├── Piechat.jsx
    │   ├── Progressbar.jsx
    │   ├── Recent.jsx
    │   ├── SearchBar.jsx
    │   ├── SettingsForm.jsx
    │   ├── User.jsx
    │   └── TooltipContent.jsx
    ├── pages/               # Page components
    │   ├── Homepage.jsx
    │   ├── Loginpage.jsx
    │   └── ViewAllTRansactions.jsx
    ├── context/             # React context for state management
    │   └── ContextProvider.jsx
    ├── utils/               # Utility functions
    │   ├── Addhandler.js
    │   ├── SearchHandler.js
    │   ├── SettingsHandler.js
    │   └── remainingdays.js
    ├── index.html
    ├── package.json
    └── vite.config.js
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- pnpm (recommended) or npm
- MongoDB instance (local or cloud)

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

   Create a `.env` file in the Backend directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/expense-tracker
   CLIENT_URL=http://localhost:5173
   ```

3. **Setup Frontend**
   ```bash
   cd "../Frontend "
   pnpm install
   ```

   Create a `.env.local` file in the Frontend directory:
   ```env
   VITE_API_URL=http://localhost:5000
   ```

### Running the Application

**Terminal 1 - Start Backend Server**
```bash
cd Backend
pnpm dev
```
The backend will run on `http://localhost:5000`

**Terminal 2 - Start Frontend Dev Server**
```bash
cd "Frontend "
pnpm dev
```
The frontend will run on `http://localhost:5173`

## 📊 API Endpoints

### Get Initial Data
- **GET** `/api/initaldata`
- Returns all categories, user data, and transactions

### Create Transaction
- **POST** `/api/transaction`
- Body: `{ title, type, amount, category, desc, createdAt }`
- Automatically updates user balance and category utilization

### Get Categories
- **GET** `/api/categories`

### Get Transactions
- **GET** `/api/transactions`

### Update Category Budget
- **PUT** `/api/category/:id`

## 💾 Data Models

### User
```javascript
{
  username: String,
  balance: Number
}
```

### Category
```javascript
{
  title: String,
  colour: String,
  budgeted: Number,
  actual: Number,
  utilization: Number
}
```

### Transaction
```javascript
{
  title: String (required),
  type: String (required), // 'expense' or 'income'
  amount: Number (required),
  category: String,
  desc: String,
  createdAt: String,
  updatedAt: String
}
```

## 🎯 Key Features Explained

### Budget Tracking
- Set a budget for each category
- Automatic calculation of utilization percentage
- Visual progress indicators to track spending

### Transaction Types
- **Expense**: Deducts from user balance and adds to category actual spending
- **Income**: Adds to user balance

### Visualization
- Graphs showing expense trends over time
- Pie charts for category distribution
- Progress bars for budget utilization

## 📦 Build for Production

**Backend**
```bash
cd Backend
pnpm build
```

**Frontend**
```bash
cd "Frontend "
pnpm build
```
The frontend build files will be in the `dist/` directory.

## 🧪 Linting

```bash
cd "Frontend "
pnpm lint
```

## 📝 Notes

- The application uses pnpm as the package manager (version 10.26.0)
- MongoDB should be running before starting the backend
- The frontend uses Vite for fast development and optimized builds
- Tailwind CSS is configured for responsive design
- React Router handles client-side navigation


