import { useState } from "react";

const AddForm = () => {
    const [green, setgreen] = useState(false)
    const [red, setred] = useState(false)
  return (
    <>
    <div className='fixed inset-0 bg-black/30 backdrop-blur-xs z-20'></div>
    <div className='bg-white shadow-lg rounded-lg p-4  fixed  z-20 top-[30%] left-[40%]'>
        <form action="">
            <h2 className='text-2xl font-bold mb-4'>Add New Transaction</h2>
            <div className='flex items-center gap-4'>
            <input type="button" value="Income" className={`${green?"bg-green-700":"bg-green-500"} rounded-2xl pl-2 pr-2  cursor-pointer hover:bg-green-600`}  onClick={()=>{
                setgreen(true);
                setred(false);
            }} />
            <input type="button" value="Expense" className={`${red?"bg-red-700":"bg-red-500"} rounded-2xl pl-2 pr-2  cursor-pointer hover:bg-red-600`}  onClick={()=>{
                setred(true);
                setgreen(false);
            }} />
            </div>
            
        </form>
    </div>
    </>
  )
}

export default AddForm