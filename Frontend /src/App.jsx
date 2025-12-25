import { useState } from 'react'
import User from '../components/User'
import BalanceSection from '../components/BalanceSection'
import Graph from '../components/Graph'
import Category from '../components/Category'
import Recent from '../components/Recent'
import Leftsidebar from '../components/Leftsidebar'
import AddForm from '../components/AddForm'



const App = () => {

  const IncomePercent = 20
  return (
    <div className=' flex justify-center flex-col  '>
      <AddForm/>

      <Leftsidebar />


      <div className='lg:grid-cols-3 sm:grid-cols-1 grid gap-4 ml-4 mr-2 mb-5 pl-5  mt-3 relative' >

        <User />
        <BalanceSection IncomePercent={IncomePercent} ExpensePercent={80} />
        <Graph />
      </div>
      <div className='flex flex-col lg:flex-row gap-4  pl-5 pr-5 '>

        <div className="flex-1 ">
          <Category />
        </div>

        <div className="lg:w-1/3">
          <Recent />
        </div>
      </div>
    </div>
  )
}

export default App