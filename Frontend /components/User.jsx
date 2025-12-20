import React from 'react'
import { CircleUserRound } from 'lucide-react';
import Progressbar from './Progressbar';
import dayjs from 'dayjs';
const User = () => {
  return (
    <div className='flex items-center bg-white p-4 rounded-lg shadow-md' >
      <CircleUserRound size="100" strokeWidth="1" stroke='blue' />
      <div>
        <h2 className='text-xl font-semibold'>Hello</h2>
        <p className='font-medium'>Suryansu</p>
        <p className='font-light text-gray-400 text-sm'>{dayjs().format("DD MMMM, dddd")}</p>
        <p><Progressbar percentage={50} /></p>
        <p>Remaining Days:</p>
        <div className="grid grid-cols-[20px_30px_1fr] items-center gap-y-1">
          <span className="w-3 h-3 rounded-full bg-cyan-400"></span>
          <span className="font-bold tabular-nums">05</span>
          <span className="text-gray-600">Weekdays</span>

          <span className="w-3 h-3 rounded-full bg-green-500"></span>
          <span className="font-bold tabular-nums">04</span>
          <span className="text-gray-600">Weekends</span>
        </div>
      </div>
    </div>
  )
}

export default User