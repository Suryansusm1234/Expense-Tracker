import { createContext, useContext,useState,useEffect } from 'react'
const CategoryContext = createContext()
import axios from 'axios'
const CategoryProvider = ({children}) => {
   const [categories, setcategories] = useState([])
  async function getCategories() {
    try {
      const res = await axios.get("/api/categories")
    return res.data
    } catch (error) {
      console.error("Error fetching categories:", error);
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
  
  return (
    <CategoryContext.Provider value={{ categories }}>
      {children}
    </CategoryContext.Provider>
  )
}
export const useCategory = () => useContext(CategoryContext)
export default CategoryProvider