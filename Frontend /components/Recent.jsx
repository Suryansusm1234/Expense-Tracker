import { useUniversal } from "../context/ContextProvider"
const Recent = () => {
  const { Transaction } = useUniversal();
  
  return (
    <div className="w-full">
      <h2 className='text-xl font-bold'>Recent Transactions</h2>
      <ul className='flex flex-col gap-3 mt-4'>
        {Transaction && Transaction.slice(0, 3).map((transaction)=>{
          return (
             <li className='flex bg-white justify-between items-center p-4 rounded-2xl shadow-sm border border-gray-50 w-full'>
          <div className="flex flex-col">
            <p className="text-xs text-gray-400">{transaction.createdAt}</p>
            <p className='font-bold text-slate-800'>{transaction.title}</p>
          </div>
          {transaction.type === "income" ?
          <p className='font-semibold text-green-500'>+${transaction.amount}</p>
          :
          <p className='font-semibold text-red-500'>-${transaction.amount}</p>
        }
        </li>
          )
        })}
      
      </ul>
    </div>
  )
}

export default Recent