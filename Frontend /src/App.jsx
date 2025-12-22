import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import User from '../components/User'
import BalanceSection from '../components/BalanceSection'
import Graph from '../components/Graph'
import Category from '../components/Category'



const App = () => {
  const IncomePercent = 20  
  return (
    <>
    <div className='lg:grid-cols-3 sm:grid-cols-1 grid gap-4 ml-4 mr-4 mt-4 mb-4 pl-4 pr-4'>
   <User />
   <BalanceSection IncomePercent={IncomePercent} ExpensePercent={80} />
   <Graph />
   </div>
  <Category />
  </>
  )
}

export default App