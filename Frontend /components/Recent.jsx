import React from 'react'

const Recent = () => {
  return (
    <div className="w-full">
      <h2 className='text-xl font-bold'>Recent Transactions</h2>
      <ul className='flex flex-col gap-3 mt-4'>
        <li className='flex bg-white justify-between items-center p-4 rounded-2xl shadow-sm border border-gray-50 w-full'>
          <div className="flex flex-col">
            <p className="text-xs text-gray-400">20 August</p>
            <p className='font-bold text-slate-800'>Food</p>
          </div>
          <p className='font-semibold text-red-500'>-$150.00</p>
        </li>
        <li className='flex bg-white justify-between items-center p-4 rounded-2xl shadow-sm border border-gray-50 w-full'>
          <div className="flex flex-col">
            <p className="text-xs text-gray-400">21 August</p>
            <p className='font-bold text-slate-800'>College Fess</p>
          </div>
          <p className='font-semibold text-red-500'>-$350.00</p>
        </li>
        <li className='flex bg-white justify-between items-center p-4 rounded-2xl shadow-sm border border-gray-50 w-full'>
          <div className="flex flex-col">
            <p className="text-xs text-gray-400">25 August</p>
            <p className='font-bold text-slate-800'>Salary</p>
          </div>
          <p className='font-semibold text-green-500'>+$300.00</p>
        </li>
      
      </ul>
    </div>
  )
}

export default Recent