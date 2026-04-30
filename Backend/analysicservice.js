import axios from 'axios'
const PYTHON_URL = process.env.PYTHON_SERVICE_URL || "http://127.0.0.1:8000";

export async function analyzeWithPython(transactions, categories) {
  
  
  try {
    const response = await axios.post(
      `${PYTHON_URL}/analyze`,
      { transactions, categories },
      {
        timeout: 2000, 
      }
    );

    return response.data;

  } catch (error) {
    console.error("Python service error:", error.message);
    return fallbackAnalytics(transactions, categories);
  }
}
 function fallbackAnalytics(transactions, categories) {
  let income = 0;
  let expense = 0;

  const categoryMap = {};

  // init categories
  categories.forEach(cat => {
    categoryMap[cat.title] = {
      category: cat.title,
      budgeted: cat.budgeted,
      actual: 0,
      utilization: 0
    };
  });

  // process transactions
  transactions.forEach(t => {
    if (t.type === "income") {
      income += t.amount;
    } else {
      expense += t.amount;

      if (categoryMap[t.category]) {
        categoryMap[t.category].actual += t.amount;
      }
    }
  });

  // utilization
  Object.values(categoryMap).forEach(cat => {
    if (cat.budgeted > 0) {
      cat.utilization = Math.floor(
        (cat.actual / cat.budgeted) * 100
      );
    }
  });

  return {
    balance: income - expense,
    income,
    expense,
    categoryBreakdown: Object.values(categoryMap),
  };
}