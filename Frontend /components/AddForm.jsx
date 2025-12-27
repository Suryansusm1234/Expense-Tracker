import { useState } from "react";
import { CircleX } from "lucide-react";
import { addhandler } from "../utils/Addhandler";
const AddForm = ({show, setshow}) => {    
    const [green, setgreen] = useState(false)
    const [red, setred] = useState(false)
    const [title, settitle] = useState()
    const [amount, setamount] = useState("0.00")
    const [desc, setdesc] = useState("")    
  return (
    <>
    {show?<>
    <div className='fixed inset-0 bg-black/30 backdrop-blur-xs z-20'></div>
    <div className='bg-white shadow-lg rounded-lg p-4  fixed  z-20 top-[20%] left-[40%]'>
           <div className="flex justify-end">
            <CircleX className="hover:bg-red-300 rounded-full cursor-pointer" color="red" onClick={()=>{
                setshow(false)
            }}/> 
            </div>   
        <form action=""onSubmit={(e)=>{
            e.preventDefault();
            addhandler({title, amount, desc, type: green ? "income" : "expense"});
            setshow(false);
        }}>
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
            <div className='flex flex-col gap-4 mt-4'>
                <input type="text" placeholder='Enter Title' value={title} className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500' onChange={(e)=>{
                    settitle(e.target.value)
                }}/>
                <input type="number" placeholder='Enter Amount' value={amount} className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500' onChange={(e)=>{
                    setamount(e.target.value)
                }} onFocus={()=>{
                    setamount("")
                }} />
                <textarea name="description" id="description" placeholder="Add some remarks" value={desc} className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" onChange={(e)=>{
                    setdesc(e.target.value)
                }}></textarea>
            </div>
            <button type="submit" className='bg-blue-500 text-white rounded-md p-2 mt-4 w-full hover:bg-blue-700 cursor-pointer'>Add Transaction</button>
            
        </form>
    </div>
    </>:""}
    
    </>
  )
}

export default AddForm