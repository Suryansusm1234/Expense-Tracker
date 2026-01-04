import { createContext, useContext,useState,useEffect } from 'react'
const UniversalContext = createContext()
import axios from 'axios'
const CategoryProvider = ({children}) => {
   const [categories, setcategories] = useState([])
   const [Transaction, setTransaction] = useState()
   // Fetch categories from the backend API
  async function getCategories() {
    try {
      const res = await axios.get("/api/categories")
    return res.data
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
    
  }
  async function getTransaction() {
    try {
      const res = await axios.get("/api/transaction")
    return res.data
    } catch (error) {
      console.error("Error fetching Transaction:", error);
    }
  }
  useEffect(() => {
  const fetchCategories = async () => {
    try {
      const data = await getCategories();
      setcategories(data);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  };

  fetchCategories();
  
}, []);

useEffect(()=>{
  const fetchTransaction = async () => {
    try {
      const data = await getTransaction();
      setTransaction(data);
    } catch (error) {
      console.error("Failed to fetch Transaction:", error);
    }
  };

  fetchTransaction();
},[])
  
  return (
    <UniversalContext.Provider value={{ categories, Transaction, setTransaction }}>
      {children}
    </UniversalContext.Provider>
  )
}
export const useUniversal = () => useContext(UniversalContext)
export default CategoryProvider