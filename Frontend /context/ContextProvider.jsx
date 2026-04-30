import { createContext, useContext, useState } from 'react'
const UniversalContext = createContext()
import { getMockInitialData } from '../utils/mockInitialData.js'
import { api } from '../utils/apiClient.js'
const CategoryProvider = ({children}) => {
   const [categories, setcategories] = useState([])
   const [Transaction, setTransaction] = useState([])
   const [user, setuser] = useState(null)
   const [loading, setloading] = useState(false)
   const [usingMockData, setUsingMockData] = useState(false)
   const [backendSlow, setBackendSlow] = useState(false)
   const [filter, setfilter] = useState("all")
   const [start, setstart] = useState()
    const [end, setend] = useState()
   const [isAuthenticated, setIsAuthenticated] = useState(false)

   // Fetch categories and transactions from the backend API
  async function getInitialData() {
    
    let slowTimer;
    try {
      setloading(true)
      setUsingMockData(false)
      setBackendSlow(false)
      slowTimer = setTimeout(() => setBackendSlow(true), 1800)
      const res = await api.get(`/initaldata`)
      
      const data = res?.data
      if (!data || !Array.isArray(data.updatedCategories) || !Array.isArray(data.transactions) || !data.user) {
        throw new Error('Invalid initial data payload')
      }
      
      setcategories(data.updatedCategories);
      setTransaction(data.transactions);
      setuser(data.user);
    } catch (error) {
      console.error("Error fetching categories:", error);
      setUsingMockData(true)
      const mockData = getMockInitialData()
      setcategories(mockData.categories);
      setTransaction(mockData.transactions);
      setuser(mockData.user);
    } finally {
      clearTimeout(slowTimer)
      setloading(false)
    }
  }

  // Call this after successful login
  async function loginAndFetch() {
    
    try {
      await getInitialData()
      setIsAuthenticated(true)
    } catch (error) {
      console.error("Failed to fetch initial data after login:", error);
    }
  }

  
 

  return (
    <UniversalContext.Provider value={{ categories, Transaction, setTransaction , user , setuser,setcategories, filter, setfilter,start,setstart,end,setend, usingMockData, loginAndFetch, isAuthenticated }}>
      {loading ? (
        <div>
          Loading App Data...
          {backendSlow ? (
            <div className="mt-2 text-sm text-amber-800">
              Backend is taking longer than usual…
            </div>
          ) : null}
        </div>
      ) : (
        <>
          {usingMockData ? (
            <div className="px-3 py-2 text-sm bg-amber-50 text-amber-900 border-b border-amber-200">
             👋 Recruiter mode — viewing demo data. All features fully functional.
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