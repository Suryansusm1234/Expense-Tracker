import dayjs from 'dayjs';
import { api } from './apiClient.js';
export async function addhandler({title, amount, desc, type , category , setTransaction,user,setuser,categories,setcategories}) {
   const amountNumber = parseInt(amount)
   const currentCategories = Array.isArray(categories) ? categories : []
  const req = {
      "title": title,
      "amount": amountNumber,
      "desc": desc,
      "type": type,
      "createdAt": dayjs().format("DD-MM-YYYY HH:mm:ss"),
      "updatedAt": dayjs().format("DD-MM-YYYY HH:mm:ss"),
    }
    let nextCategories = currentCategories
    if(type==="expense"){
      req.category= category
      nextCategories = currentCategories.map((cat) => {
        if (cat.title !== category) return cat
        const nextActual = (cat.actual || 0) + amountNumber
        const nextUtilization =
          cat.budgeted > 0 ? Math.floor((nextActual / cat.budgeted) * 100) : 0
        return { ...cat, actual: nextActual, utilization: nextUtilization }
      })
    }

    try {
      const res = await api.post(`/transaction`,req )
      const saved = res?.data ?? req

      if (type === "expense") {
        setcategories(nextCategories)
      }
      setTransaction(prev =>[saved,...(prev || [])])

      const currentBalance = user?.balance || 0
      const nextBalance = type === "income" ? currentBalance + amountNumber : currentBalance - amountNumber
      setuser({ ...(user || {}), balance: nextBalance })
    } catch (error) {
      console.error("Failed to add transaction:", error);
      throw error
    }
  }