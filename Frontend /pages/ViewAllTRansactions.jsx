import SearchBar from "../components/SearchBar"
import { useUniversal } from "../context/ContextProvider"
import { TrendingDown, TrendingUp } from "lucide-react"
import Leftsidebar from '../components/Leftsidebar'

  
const ViewAllTRansactions = () => {
  const { Transaction, filter, setfilter,start,setstart,end,setend } = useUniversal()
  const filteredTransactions = Transaction.filter((tran) => {
  const matchesType = filter === "all" || tran.type === filter;
  let datematch = true;
  if (start || end) {
    const [datePart] = tran.createdAt.split(' ');
        const [day, month, year] = datePart.split('-').map(Number);
        const tranDate = new Date(year, month - 1, day); 
        tranDate.setHours(0, 0, 0, 0);
        const startDate = start ? new Date(start) : null;
        startDate.setHours(0, 0, 0, 0);
        const endDate = end? new Date(end) : null;
        endDate.setHours(0, 0, 0, 0);
        if (startDate && tranDate < startDate) datematch = false;
        if (endDate && tranDate > endDate) datematch = false;
  }
  return matchesType && datematch
});


  return (
    <div>
           <Leftsidebar />

      <SearchBar filter={filter} setfilter={setfilter} start ={start} setstart={setstart} end = {end} setend={setend} Transactions= {Transaction}/>
      <div className="flex justify-center flex-col items-center overflow-hidden mt-3 overflow-x-hidden overflow-y-auto ">
        <h2 className="font-bold text-2xl mb-2">All Transactions</h2>
        <ul className="lg:w-3xl  pl-3 pr-3 rounded-2xl sm:w-2xs ">
          {filteredTransactions.map((tran) => {
            return (
              <li key={tran._id} className="flex items-center justify-between p-5 bg-white rounded-3xl shadow-sm hover:shadow-md  transition-all cursor-pointer border border-transparent active:scale-95 mt-2 mb-2">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${tran.type === 'income' ? 'bg-green-50 text-[rgb(17,196,17)]' : 'bg-red-50 text-[rgb(226,5,5)]'}`}>
                    {tran.type === 'income' ? <TrendingUp size={24} /> : <TrendingDown size={24} />}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-800 text-lg leading-tight">{tran.title}</h4>
                    <p className="text-sm text-slate-400 font-medium">{tran.createdAt.split(' ')[0]}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className={`text-xl font-black ${tran.type === 'income' ? 'text-[rgb(17,196,17)]' : 'text-[rgb(226,5,5)]'}`}>
                      {tran.type === 'income' ? '+' : '-'} ₹{tran.amount}
                    </p>

                  </div>

                </div>

              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default ViewAllTRansactions