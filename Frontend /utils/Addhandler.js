import axios from 'axios'
import dayjs from 'dayjs';
export async function addhandler({title, amount, desc, type , category , setTransaction,user,setuser,categories,setcategories}) {
   const newCategories = categories
  const req = {
      "title": title,
      "amount": amount,
      "desc": desc,
      "type": type,
      "createdAt": dayjs().format("DD-MM-YYYY HH:mm:ss"),
      "updatedAt": dayjs().format("DD-MM-YYYY HH:mm:ss"),
    }
    if(type==="expense"){
      req.category= category
      const categoryIndex = newCategories.findIndex((cat)=> cat.title === category)
      if(categoryIndex !== -1){
        newCategories[categoryIndex].actual = newCategories[categoryIndex].actual + parseInt(amount)
        newCategories[categoryIndex].utilization = Math.floor((newCategories[categoryIndex].actual/newCategories[categoryIndex].budgeted)*100)
      }
      setcategories(newCategories)
    }
    await axios.post(`${import.meta.env.VITE_API}/transaction`,req )
     setTransaction(prev =>[req,...prev])
    const balanceUpdate = user
    if(type ==="income"){
      balanceUpdate.balance = balanceUpdate.balance + parseInt(amount)
    }else{
      balanceUpdate.balance = balanceUpdate.balance - parseInt(amount)
    }
   setuser(balanceUpdate)
  }