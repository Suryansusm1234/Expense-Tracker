import { createContext, useContext,useState,useEffect } from 'react'
const UniversalContext = createContext()
import axios from 'axios'
const CategoryProvider = ({children}) => {
   const [categories, setcategories] = useState([])
   const [Transaction, setTransaction] = useState()
   const [user, setuser] = useState()
   const [loading, setloading] = useState(true)
   // Fetch categories and transactions from the backend API
  async function getInitialData() {
    try {
      const res = await axios.get("/api/initaldata")
    return res.data
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
    
  }
  useEffect(() => {
  const fetchInitialData = async () => {
    try {
      const data = await getInitialData();
      console.log(data);
      
      setcategories(data.categories);
      setTransaction(data.transactions);
      setuser(data.user);
    } catch (error) {
      console.error("Failed to fetch inittal data:", error);
    }finally{
      setloading(false)
    }
  };

 fetchInitialData();
  
}, []);

  
  return (
    <UniversalContext.Provider value={{ categories, Transaction, setTransaction , user , setuser,setcategories }}>
      {loading?<div>Loading App Data...</div>: children}
     
    </UniversalContext.Provider>
  )
}
export const useUniversal = () => useContext(UniversalContext)
export default CategoryProvider