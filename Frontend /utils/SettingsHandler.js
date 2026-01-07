import axios from "axios";
export async function settingsHandler({ username,bankBalance,updatedCategories,setuser,setcategories}) {
    console.log(username);
    
    const req = {
        username,bankBalance,updatedCategories
    }
    console.log(req);
    
    const res = await axios.post("/api/update",req)
    if (res.data.success) {
        setcategories(res.data.categories)
        const newuser = {username: username, balance : bankBalance }
        setuser(newuser)
    }
}