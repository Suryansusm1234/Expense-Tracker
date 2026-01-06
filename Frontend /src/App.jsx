import User from '../components/User'
import BalanceSection from '../components/BalanceSection'
import Graph from '../components/Graph'
import Category from '../components/Category'
import Recent from '../components/Recent'
import Leftsidebar from '../components/Leftsidebar'
import { Routes, Route } from 'react-router-dom'
import ViewAll from '../pages/ViewAllTRansactions'
import Homepage from '../pages/Homepage'



const App = () => {

  return (
    <>
     <Leftsidebar />
    <Routes>
      <Route path='/dashboard' element={<Homepage/>} />
      <Route path='/viewall' element={<ViewAll />} />
    </Routes>
    </>
  )
}

export default App