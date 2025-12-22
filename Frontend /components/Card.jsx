import React from 'react'
const Card = ({Icon}) => {
  return (
    <div className='bg-white flex flex-col gap-3 p-3 sm:p-4 rounded-2xl shadow-sm border border-gray-100 h-full'>
     
      <button className='rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-cyan-100 text-cyan-600'>
      <Icon size={18 } />
      </button>
      
      {/* Using text-base or text-sm for mobile to prevent overflow */}
      <p className='text-sm sm:text-lg font-semibold text-slate-800 leading-tight'>
        Bills & Utilities
      </p>
      
      <div className="w-full mt-auto">
        <p className='italic text-[10px] sm:text-xs text-gray-500 mb-1'>$200 of $500</p>
        <div className='w-full h-1.5 bg-gray-100 rounded-full overflow-hidden'>
          <div className='h-full bg-cyan-400 rounded-full w-1/2'></div>
        </div>
      </div>
    </div>
  )
}

export default Card