import { Search, FunnelPlus, ArrowUpCircle, ArrowDownCircle, X } from "lucide-react"
import { useState } from "react"

const SearchBar = ({ setfilter,start,setstart,end,setend}) => {
    const [Input, setInput] = useState()
    const [show, setshow] = useState(false)
    const [showbox, setshowbox] = useState(false)
  return (
    
    <div className='relative flex justify-center items-center mt-2 gap-2'> 
     {showbox?<div className="fixed inset-0 bg-black/20 backdrop-blur-xs z-10"></div>:""}
     
        <div className="relative pl-2 flex bg-white border-2 border-transparent rounded-2xl w-2xs z-30  h-8 items-center gap-2 focus-within:border-blue-500" >
            
           <Search/>
        <input type="text" value={Input} className=' w-full outline-0' placeholder="Search Transaction" onChange={(e)=>{
            setInput(e.target.value)
           {e.target.value === ""?setshowbox(false):setshowbox(true)}
        }} />
        {showbox?<div className="absolute top-10 ">I am happy</div>:""}
        </div>
        <button className=" cursor-pointer hover:bg-cyan-400 rounded-full"onClick={()=> setshow(!show)}>
            <FunnelPlus color="black"  />
        </button>
          {show?<div className="absolute right-[20%] top-10 max-sm:right-0"><div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 shadow-inner mt-2 animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                
               
                <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">
                        Transaction Type
                    </label>
                    <div className="flex gap-2">
                         <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-semibold hover:border-[rgb(240,240,240)] hover:text-[rgb(226,5,5)] transition-all group" onClick={()=>setfilter("all")}>
                            <X size={18}  />
                            All
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-semibold hover:border-[rgb(17,196,17)] hover:text-[rgb(17,196,17)] transition-all group"onClick={()=>setfilter("income")}>
                            <ArrowUpCircle size={18} className="text-[rgb(17,196,17)]" />
                            Income
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-semibold hover:border-[rgb(226,5,5)] hover:text-[rgb(226,5,5)] transition-all group" onClick={()=>setfilter("expense")}>
                            <ArrowDownCircle size={18} className="text-[rgb(226,5,5)]" />
                            Expense
                        </button>
                       
                    </div>
                </div>

               
                <div className="flex flex-col gap-2 w-full md:w-auto sm:w-xs">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">
                        Date Range
                    </label>
                    <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl p-1  shadow-sm focus-within:border-black transition-all">
                     
                        <input 
                            type="date" 
                            placeholder="Start" 
                            className="text-sm outline-none bg-transparent"
                            value={start} onChange={(e)=>setstart(e.target.value)}
                        />
                        <span className="text-gray-300 mx-1">—</span>
                        <input 
                            type="date" 
                            placeholder="End" 
                            className="text-sm outline-none bg-transparent"
                            value={end} onChange={(e)=>setend(e.target.value)}
                        />
                    </div>
                </div>

                
                <div className="flex items-end h-full mt-auto md:mt-6">
                    <button className="text-xs font-bold text-gray-400 hover:text-red-500 flex items-center gap-1 transition-colors" onClick={()=>{
                        setfilter("all")
                        setstart("")
                        setend("")
                    }}>
                        <X size={14} /> Reset Filters
                    </button>
                </div>
            </div>
        </div></div>:""}
    </div>
  )
}

export default SearchBar