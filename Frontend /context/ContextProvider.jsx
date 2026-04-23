import { createContext, useContext, useState, useEffect } from 'react'
const UniversalContext = createContext()
import axios from 'axios'
import { getMockInitialData } from '../utils/mockInitialData.js'
const CategoryProvider = ({children}) => {
   const [categories, setcategories] = useState([])
   const [Transaction, setTransaction] = useState()
   const [user, setuser] = useState()
   const [loading, setloading] = useState(true)
   const [usingMockData, setUsingMockData] = useState(false)
   const [filter, setfilter] = useState("all")
   const [start, setstart] = useState()
    const [end, setend] = useState()

   // Fetch categories and transactions from the backend API
  async function getInitialData() {
    try {
      setUsingMockData(false)
      const res = await axios.get(`${import.meta.env.VITE_API}/initaldata`, {
        timeout: 4500,
      })
      const data = res?.data
      if (!data || !Array.isArray(data.categories) || !Array.isArray(data.transactions) || !data.user) {
        throw new Error('Invalid initial data payload')
      }
      return data
    } catch (error) {
      console.error("Error fetching categories:", error);
      setUsingMockData(true)
      return getMockInitialData()
    }
    
  }
  useEffect(() => {
  const fetchInitialData = async () => {
    try {
      const data = await getInitialData();
      
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
    <UniversalContext.Provider value={{ categories, Transaction, setTransaction , user , setuser,setcategories, filter, setfilter,start,setstart,end,setend, usingMockData }}>
      {loading ? (
        <div>Loading App Data...</div>
      ) : (
        <>
          {usingMockData ? (
            <div className="px-3 py-2 text-sm bg-amber-50 text-amber-900 border-b border-amber-200">
              Backend is slow/unavailable — showing mock data.
            </div>
          ) : null}
          {children}
        </>
      )}
     
    </UniversalContext.Provider>
  )
}
export const useUniversal = () => useContext(UniversalContext)
export default CategoryProvider