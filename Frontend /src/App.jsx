import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import User from '../components/User'
import BalanceSection from '../components/BalanceSection'
import Graph from '../components/Graph'



const App = () => {
  const IncomePercent = 20  
  return (
    <div className='lg:grid-cols-3 grid gap-4 ml-4 mr-4'>
   <User />
   <BalanceSection IncomePercent={IncomePercent} ExpensePercent={80} />
   <Graph />
   </div>
  
  )
}

export default App