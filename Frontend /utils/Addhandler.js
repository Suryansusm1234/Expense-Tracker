import axios from 'axios'
import dayjs from 'dayjs';
export async function addhandler({title, amount, desc, type , category , setTransaction}) {
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
    const res = await axios.post("/api/data",req )
    setTransaction(prev =>[res,...prev])
   
    
  }