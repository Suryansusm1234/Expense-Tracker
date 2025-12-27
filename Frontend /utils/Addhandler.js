import axios from 'axios'
import dayjs from 'dayjs';
export async function addhandler({title, amount, desc, type}) {
  console.log({title ,amount,desc, type});
    const res = await axios.post("/api/data", {
      "title": title,
      "amount": amount,
      "desc": desc,
      "type": type,
      "createdAt": dayjs().format("YYYY-MM-DD HH:mm:ss")
    })
  }