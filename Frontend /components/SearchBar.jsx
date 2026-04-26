import { Search, FunnelPlus, ArrowUpCircle, ArrowDownCircle, X, SearchX } from "lucide-react"
import { useState, useEffect } from "react"
import { search } from "../utils/SearchHandler"

const SearchBar = ({ setfilter, start, setstart, end, setend, Transactions }) => {

    const [Input, setInput] = useState()
    const [show, setshow] = useState(false)
    const [showbox, setshowbox] = useState(false)
    const [Filter, setFilter] = useState([])
    useEffect(() => {

        search({ Transactions, Input, setFilter })
        console.log(Filter);


    }, [Input])

    return (

        <div className=' flex justify-center items-center mt-2 gap-2 ' >
            {showbox ? <div className="fixed inset-0 bg-black/20 backdrop-blur-xs z-10"></div> : ""}

            <div className=" pl-2 flex bg-white border-2 border-transparent rounded-2xl w-2xs z-30  h-8 items-center gap-2 focus-within:border-blue-500" >

                <Search />
                <input type="text" value={Input} className=' w-full outline-0' placeholder="Search Transaction" onChange={async (e) => {
                    setInput(e.target.value)
                    { e.target.value === "" ? setshowbox(false) : setshowbox(true) }



                }} />
                {showbox ? <div className="absolute top-20 lg:w-100 sm:w-50 left-[35%]  p-2 rounded bg-white h-100  overflow-y-auto ">
                    <ul className="">
                        {Filter && Filter.length === 0 ? <div className=" z-50 flex flex-col items-center justify-center py-12 px-4 text-center">
                            <div className="bg-slate-50 p-4 rounded-full mb-4">
                                <SearchX size={32} className="text-slate-300" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-slate-900 font-bold text-lg">No matches found</h3>
                            <p className="text-slate-500 text-sm max-w-50 mt-1">
                                We couldn't find any transactions matching your search.
                            </p>
                        </div> :
                            Filter.map((tran) => {
                                return (
                                    <li className="flex items-center justify-between gap-4 bg-white hover:bg-slate-50 border border-slate-100 p-3 rounded-xl transition-all shadow-sm group">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-slate-100 rounded-lg text-slate-400 group-hover:text-slate-600 transition-colors">
                                                <Search size={16} />
                                            </div>

                                            <div>
                                                <p className="font-bold text-slate-800 capitalize leading-tight">
                                                    {tran.title}
                                                </p>

                                            </div>

                                        </div>

                                        <div className={`p-2 rounded-full ${tran.type === "income" ? "bg-green-50" : "bg-red-50"}`}>
                                            {tran.type === "income" ? (
                                                <ArrowUpCircle size={20} className="text-[rgb(17,196,17)]" />
                                            ) : (
                                                <ArrowDownCircle size={20} className="text-[rgb(226,5,5)]" />
                                            )}
                                        </div>
                                    </li>
                                )
                            })}

                    </ul>
                </div> : ""}
            </div>
            <button className=" cursor-pointer hover:bg-cyan-400 rounded-full" onClick={() => setshow(!show)}>
                <FunnelPlus color="black" />
            </button>
            {show ? <div className="absolute right-[20%] top-10 max-sm:right-0"><div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 shadow-inner mt-2 animate-in fade-in slide-in-from-top-2">
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">


                    <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">
                            Transaction Type
                        </label>
                        <div className="flex gap-2">
                            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-semibold hover:border-[rgb(240,240,240)] hover:text-[rgb(226,5,5)] transition-all group" onClick={() => setfilter("all")}>
                                <X size={18} />
                                All
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-semibold hover:border-[rgb(17,196,17)] hover:text-[rgb(17,196,17)] transition-all group" onClick={() => setfilter("income")}>
                                <ArrowUpCircle size={18} className="text-[rgb(17,196,17)]" />
                                Income
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-semibold hover:border-[rgb(226,5,5)] hover:text-[rgb(226,5,5)] transition-all group" onClick={() => setfilter("expense")}>
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
                                value={start} onChange={(e) => setstart(e.target.value)}
                            />
                            <span className="text-gray-300 mx-1">—</span>
                            <input
                                type="date"
                                placeholder="End"
                                className="text-sm outline-none bg-transparent"
                                value={end} onChange={(e) => setend(e.target.value)}
                            />
                        </div>
                    </div>


                    <div className="flex items-end h-full mt-auto md:mt-6">
                        <button className="text-xs font-bold text-gray-400 hover:text-red-500 flex items-center gap-1 transition-colors" onClick={() => {
                            setfilter("all")
                            setstart("")
                            setend("")
                            setshow(false)
                        }}>
                            <X size={14} /> Reset Filters
                        </button>
                    </div>
                </div>
            </div></div> : ""}
        </div>
    )
}

export default SearchBar