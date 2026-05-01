import { api } from "./apiClient.js";
export async function settingsHandler({ username,updatedCategories,setuser,setcategories ,user,usingMockData}) {    
    if (usingMockData) {
        const newcaategories = updatedCategories.map(cat => {
            const budgeted  = cat.budgeted
            const actual = cat.actual
            cat.utilization = budgeted === 0 ? 0 : (actual / budgeted) * 100;
            return cat;
        })
        
        setcategories(newcaategories);
        const newuser = {username: username, balance : user.balance }
        setuser(newuser)
        return
    }

    const req = {
        username,updatedCategories
    }
    
    const res = await api.post(`/update`,req)
    if (res.data.success) {
        const newcaategories = updatedCategories.map(cat => {
            const budgeted  = cat.budgeted
            const actual = cat.actual
            cat.utilization = budgeted === 0 ? 0 : (actual / budgeted) * 100;
            return cat;
        })
        
        setcategories(newcaategories);
        const newuser = {username: username, balance : user.balance }
        setuser(newuser)
    }
}