import { PieChart, Pie, Tooltip } from 'recharts';
import TooltipContent from './TooltipContent';
const Piechat = () => {
  const data = [{ name: 'Bills and Utility', value: 15 , fill: '#06b6d4'  }, { name: 'Food', value: 20, fill: '#67e8f9'  }, { name: 'Personal', value: 30, fill: '#fef08a' }, { name: 'HealthCare', value: 40, fill: '#facc15' }, { name: 'Education', value: 50, fill: '#22c55e' }, { name: 'Transport', value: 60, fill: '#a5f3fc' }, { name: 'Investment', value: 70, fill: '#f9a8d4' }, { name: 'Other', value: 80, fill: '#ef4444' }]
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