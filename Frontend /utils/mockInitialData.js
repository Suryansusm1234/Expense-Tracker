function isoNowMinusDays(days) {
  const d = new Date();
  d.setDate(d.getDate() - days);
  return d.toISOString();
}

export function getMockInitialData() {
  const categories = [
    {
      _id: "mock-cat-food",
      title: "Food",
      colour: "#EF4444",
      budgeted: 8000,
      actual: 2650,
      utilization: 33,
    },
    {
      _id: "mock-cat-transport",
      title: "Transport",
      colour: "#F59E0B",
      budgeted: 3000,
      actual: 940,
      utilization: 31,
    },
    {
      _id: "mock-cat-bills",
      title: "Bills",
      colour: "#3B82F6",
      budgeted: 6000,
      actual: 4100,
      utilization: 68,
    },
    {
      _id: "mock-cat-entertainment",
      title: "Entertainment",
      colour: "#A855F7",
      budgeted: 2500,
      actual: 1200,
      utilization: 48,
    },
    {
      _id: "mock-cat-savings",
      title: "Savings",
      colour: "#10B981",
      budgeted: 5000,
      actual: 1500,
      utilization: 30,
    },
  ];

  const user = {
    _id: "mock-user",
    username: "Demo User",
    balance: 24500,
  };

  const transactions = [
    {
      _id: "mock-tx-1",
      title: "Salary",
      type: "income",
      amount: 32000,
      category: "Income",
      desc: "Monthly salary (mock)",
      createdAt: isoNowMinusDays(3),
      updatedAt: isoNowMinusDays(3),
    },
    {
      _id: "mock-tx-2",
      title: "Groceries",
      type: "expense",
      amount: 1250,
      category: "Food",
      desc: "Supermarket (mock)",
      createdAt: isoNowMinusDays(2),
      updatedAt: isoNowMinusDays(2),
    },
    {
      _id: "mock-tx-3",
      title: "Electricity bill",
      type: "expense",
      amount: 1600,
      category: "Bills",
      desc: "Utility payment (mock)",
      createdAt: isoNowMinusDays(1),
      updatedAt: isoNowMinusDays(1),
    },
    {
      _id: "mock-tx-4",
      title: "Metro card recharge",
      type: "expense",
      amount: 240,
      category: "Transport",
      desc: "Commute (mock)",
      createdAt: isoNowMinusDays(0),
      updatedAt: isoNowMinusDays(0),
    },
  ];

  return { categories, user, transactions };
}

