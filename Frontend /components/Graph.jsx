import React from 'react'
import Piechat from './Piechat'

const Graph = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
        <div>
        <p className='text-2xl font-bold'>Expense Distribution</p>
        <p className='text-sm italic text-gray-500'>From 1-22 August</p>
        <ul>
            <li className='flex gap-2'>
                <p className=' w-4 h-4 rounded-full bg-cyan-500'></p>
                <span className='text-sm'>Bills and Utility</span>
            </li>
             <li className='flex gap-2'>
                <p className=' w-4 h-4 rounded-full bg-cyan-300'></p>
                <span className='text-sm'>Food</span>
            </li>
             <li className='flex gap-2'>
                <p className=' w-4 h-4 rounded-full bg-yellow-200'></p>
                <span className='text-sm'>Personal</span>
            </li>
             <li className='flex gap-2'>
                <p className=' w-4 h-4 rounded-full bg-yellow-400'></p>
                <span className='text-sm'>HealthCare</span>
            </li>
             <li className='flex gap-2'>
                <p className=' w-4 h-4 rounded-full bg-green-500'></p>
                <span className='text-sm'>Education</span>
            </li>
             <li className='flex gap-2'>
                <p className=' w-4 h-4 rounded-full bg-cyan-200'></p>
                <span className='text-sm'>Transport</span>
            </li>
             <li className='flex gap-2'>
                <p className=' w-4 h-4 rounded-full bg-pink-300'></p>
                <span className='text-sm'>Investment</span>
            </li>
             <li className='flex gap-2'>
                <p className=' w-4 h-4 rounded-full bg-red-500'></p>
                <span className='text-sm'>Other</span>
            </li>
        </ul>
        </div>
        <Piechat />
    </div>

  )
}

export default Graph