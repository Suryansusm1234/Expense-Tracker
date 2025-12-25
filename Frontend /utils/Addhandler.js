import axios from 'axios'
export async function addhandler() {
    const res = await axios.get("/api/hello")
    console.log(res.data);
    
  }