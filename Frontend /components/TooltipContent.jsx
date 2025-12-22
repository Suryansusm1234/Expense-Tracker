import React from 'react'

const TooltipContent = ({ active, payload }) => {
    console.log(active , payload);
    
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 shadow-lg rounded-xl border border-gray-100">
        <p className="font-bold text-slate-800">{payload[0].name}</p>
        <p className="text-blue-600 font-semibold">${payload[0].value}</p>
      </div>
    );
  }
  return null;
}
export default TooltipContent