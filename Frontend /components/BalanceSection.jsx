import { useState } from "react";
import { useUniversal } from "../context/ContextProvider"
import { useEffect } from "react";
import dayjs from "dayjs";

const BalanceSection = () => {
    const [IncomePercent, setIncomePercent] = useState()
    const { user,Transaction } =  useUniversal();
    const [burn, setburn] = useState()
    useEffect(() => {
        const {$D,$M , $y} = dayjs()
        
      let month = $M +1
      let year = $y        
       let totalincome = 0
       let totalexpese = 0
       let sum = 0
    Transaction.forEach(tran => {
        if (tran.type === "income") {
            totalincome = totalincome+ parseInt(tran.amount)
        }else{
           const dateParts = tran.createdAt.split(" ")[0].split("-");
            const transmonth = parseInt(dateParts[1]); 
            const transyear = parseInt(dateParts[2]);
         if (transmonth === month && transyear===year) {
            sum = sum + tran.amount
         }
            
            totalexpese = totalexpese + parseInt(tran.amount)
        }
    });
    setburn(Math.round(sum /$D))
    setIncomePercent(Math.round((totalexpese/totalincome)*100))
    }, [Transaction])
   
    
    return (
        <div className='bg-white rounded-lg shadow-md p-3'>
            <div className='lg:flex flex-col gap-5'>
                <p className='text-2xl font-bold'>Bank Balance</p>
                <p className='text-2xl font-medium italic text-cyan-600'>${user?.balance}</p>
                <div >
                    <div className=' rounded w-70 ' style={{backgroundImage: `linear-gradient(90deg,rgb(17, 196, 17) ${100- IncomePercent}% , rgb(226, 5, 5) ${100-IncomePercent}% )` , height: '1.5rem'}} ></div>
                    <div className='flex justify-between items-center w-70 '>
                        <p className='text-sm text-green-600'>Income</p>
                        <p className='text-sm text-red-600'>Expense</p>
                    </div>
                </div>
                <div>
                    {IncomePercent>=100? <p className='text-sm italic text-red-500'>You are spending from your saving</p>: <p className='text-sm italic text-gray-500'>{`${IncomePercent}% of income spent`}</p>}
                   
                    <p className='font-medium text-slate-400'>{`Avg burn rate : $${burn}/day`} </p>
                </div>
            </div>
        </div>
    )
}

export default BalanceSection