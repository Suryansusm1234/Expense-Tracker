import axios from 'axios'
import dayjs from 'dayjs';
export async function addhandler({title, amount, desc, type , category}) {
  const req = {
      "title": title,
      "amount": amount,
      "desc": desc,
      "type": type,
      "createdAt": dayjs().format("YYYY-MM-DD HH:mm:ss")
    }
    if(type==="expense"){
      req.category= category
    }
    const res = await axios.post("/api/data",req )
    console.log(res.data);
    
  }