import { House,Plus,ArrowLeftRight , ClipboardClock,Settings } from 'lucide-react';
import AddForm from '../components/AddForm'
import { useState } from 'react';


const Leftsidebar = () => {
  const [show, setshow] = useState(false)
  
  return (
    <div className='absolute  top-3  bg-white shadow-lg z-10  flex flex-col justify-center gap-6 pr-1 pb-4 pt-4 rounded-r-lg border-r-cyan-600 border-2 border-b-cyan-600 border-t-cyan-600 border-l-0 '>
      {show?<AddForm show= {show} setshow ={setshow} />
      :""}
        <House className='hover:bg-slate-400 rounded-2xl cursor-pointer '  />
        <Plus className='hover:bg-slate-400 rounded-2xl  cursor-pointer' onClick={()=>{
          setshow(true)
        }} />
        <ArrowLeftRight className='hover:bg-slate-400 rounded-2xl  cursor-pointer'/>
        <ClipboardClock className='hover:bg-slate-400 rounded-2xl  cursor-pointer'/>
        <Settings className='hover:bg-slate-400 rounded-2xl cursor-pointer '/>
    </div>
  )
}

export default Leftsidebar