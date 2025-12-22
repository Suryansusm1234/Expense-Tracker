import Card from "./Card"
import { House ,Apple,User,Pill,BookOpen,BusFront,HandCoins, ReceiptText } from 'lucide-react';
const Category = () => {
  return (
    <div className="w-full ">
        <h2 className='text-xl font-bold'>Category wise Expense</h2>
        <div className="grid  grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-4">
            <Card Icon={House} />
             <Card Icon={Apple}/>
              <Card Icon={User}/>
               <Card Icon={Pill}/>
                <Card Icon={BookOpen}/>
                 <Card Icon={BusFront}/>
                  <Card Icon={HandCoins}/>
                   <Card Icon={ReceiptText}/>
        </div>
    </div>
  )
}

export default Category