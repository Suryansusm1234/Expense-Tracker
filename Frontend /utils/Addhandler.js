import axios from 'axios'
export async function addhandler({title, amount, desc, type}) {
  console.log({title ,amount,desc, type});
  
    const res = await axios.get("/api/hello")
    console.log(res.data);
  }