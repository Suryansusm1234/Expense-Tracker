import React from 'react'

const BalanceSection = ({IncomePercent , ExpensePercent}) => {
    return (
        <div className='bg-white rounded-lg shadow-md p-3'>
            <div className='lg:flex flex-col gap-5'>
                <p className='text-2xl font-bold'>Bank Balance</p>
                <p className='text-2xl font-medium italic text-cyan-600'>$15000</p>
                <div >
                    <div className=' rounded ' style={{backgroundImage: `linear-gradient(90deg,rgb(17, 196, 17) ${IncomePercent}% , rgb(226, 5, 5) ${IncomePercent}% )` , height: '1.5rem'}} ></div>
                    <div className='flex justify-between items-center '>
                        <p className='text-sm text-green-600'>Income</p>
                        <p className='text-sm text-red-600'>Expense</p>
                    </div>
                </div>
                <div>
                    <p className='text-sm italic text-gray-500'>40% of income spent</p>
                    <p className='font-medium text-slate-400'>Avg burn rate : $100/day </p>
                </div>
            </div>
        </div>
    )
}

export default BalanceSection