import { PieChart, Pie, Tooltip } from 'recharts';
import TooltipContent from './TooltipContent';
const Piechat = ({categories}) => {
  const data = categories.map((category)=>{
    const res = {
      name : category.title,
      value : category.actual,
      fill : category.colour
    }
    return res
  })
  return (
    
    <div className="w-64 h-64">
      <PieChart width={250} height={250}>
        <Pie data={data} dataKey="value"  innerRadius= "60%"  />
       
        <Tooltip content={<TooltipContent />} isAnimationActive={false} />
      </PieChart>
    </div>
  )
}

export default Piechat