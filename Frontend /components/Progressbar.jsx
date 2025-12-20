import React from 'react'

const Progressbar = ({percentage}) => {
  return (
    <div className='rounded '>
      <div className='progressbar rounded relative overflow-hidden '>
        <div className='strips leading-none h-full rounded-xs' style={{width: `${percentage}%`}}></div>
        <div className='absolute top-0 left-2 flex flex-col justify-center '>
          <p className='font-semibold'>{percentage}%</p>
          <p className='font-light text-sm top-4 absolute'>Completed</p>
        </div>
      </div>
    </div>
  )
}

export default Progressbar