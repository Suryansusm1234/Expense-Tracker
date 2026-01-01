import axios from "axios";
import Card from "./Card"
import { House ,Apple,User,Pill,BookOpen,BusFront,HandCoins, ReceiptText } from 'lucide-react';
import { useEffect,useState } from "react";
const Category = () => {
  const [categories, setcategories] = useState([])
  async function getCategories() {
    try {
      const res = await axios.get("/api/categories")
    return res.data
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
    
  }
  useEffect(() => {
  const fetchCategories = async () => {
    try {
      const data = await getCategories();
      setcategories(data);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  };

  fetchCategories();
  
}, []);
  
  
 
  
  const icons = [House ,Apple,User,Pill,BookOpen,BusFront,HandCoins, ReceiptText ];
  return (
    <div className="w-full ">
        <h2 className='text-xl font-bold'>Category wise Expense</h2>
        <div className="grid  grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-4">
            {categories && categories.map((category, index) => (
                <Card title={category.title}  key={category.id} Icon={icons[index]} />
            ))}
        </div>
    </div>
  )
}

export default Category