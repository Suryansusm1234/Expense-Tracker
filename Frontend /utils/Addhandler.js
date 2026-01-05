import axios from 'axios'
import dayjs from 'dayjs';
export async function addhandler({title, amount, desc, type , category , setTransaction,user}) {
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
    }
    await axios.post("/api/transaction",req )
     setTransaction(prev =>[req,...prev])
    const balanceUpdate = user
    if(type ==="income"){
      balanceUpdate.balance = balanceUpdate.balance + parseInt(amount)
    }else{
      balanceUpdate.balance = balanceUpdate.balance - parseInt(amount)
    }
   setuser(balanceUpdate)
    
  }