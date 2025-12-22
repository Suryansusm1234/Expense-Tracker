import { House,Plus,ArrowLeftRight , ClipboardClock,Settings } from 'lucide-react';
const Leftsidebar = () => {
  return (
    <div className='absolute  top-3  bg-white shadow-lg z-10  flex flex-col justify-center gap-6 pr-1 pb-4 pt-4 rounded-r-lg border-r-blue-600 border-2 border-b-blue-600 border-t-blue-600 border-l-0 '>
        <House className='hover:bg-slate-400 rounded-2xl '  />
        <Plus className='hover:bg-slate-400 rounded-2xl ' />
        <ArrowLeftRight className='hover:bg-slate-400 rounded-2xl '/>
        <ClipboardClock className='hover:bg-slate-400 rounded-2xl '/>
        <Settings className='hover:bg-slate-400 rounded-2xl '/>
    </div>
  )
}

export default Leftsidebar