import Card from "./Card"
import { House ,Apple,User,Pill,BookOpen,BusFront,HandCoins, ReceiptText } from 'lucide-react';
import { useUniversal } from "../context/ContextProvider";
const Category = () => {
  const { categories } = useUniversal();
  const icons = [House ,Apple,User,Pill,BookOpen,BusFront,HandCoins, ReceiptText ];
  return (
    <div className="w-full ">
        <h2 className='text-xl font-bold'>Category wise Expense</h2>
        <div className="grid  grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-4">
            {categories && categories.map((category, index) => (
                <Card title={category.title}  key={category.id} Icon={icons[index]} budgeted = {category.budgeted} actual= {category.actual} />
            ))}
        </div>
    </div>
  )
}

export default Category