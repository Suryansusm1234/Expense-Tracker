import React from 'react'
import { CircleUserRound } from 'lucide-react';
import Progressbar from './Progressbar';
import dayjs from 'dayjs';
const User = () => {
  return (
    <div className=' bg-white p-4 rounded-lg shadow-md' >
      <div>
        <p className='text-xl font-semibold'>Hello,</p>
        <p className='font-medium text-2xl'>Suryansu</p>
        <p className='font-light text-gray-400 text-sm'>{dayjs().format("DD MMMM, dddd")}</p>
        <Progressbar percentage={70} />
        <p>Remaining Days:</p>
        <div className="grid grid-cols-[20px_25px_1fr] items-center gap-y-1">
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