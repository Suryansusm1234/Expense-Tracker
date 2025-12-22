import { PieChart, Pie, Tooltip } from 'recharts';
import TooltipContent from './TooltipContent';
const Piechat = () => {
  const data = [{ name: 'Bills and Utility', value: 15 , fill: '#0088FE'  }, { name: 'Food', value: 20, fill: '#00C49F'  }, { name: 'Personal', value: 30, fill: '#FFBB28' }, { name: 'HealthCare', value: 40, fill: '#FF8042' }, { name: 'Education', value: 50, fill: '#8884D8' }, { name: 'Transport', value: 60, fill: '#FF6B6B' }, { name: 'Investment', value: 70, fill: '#4ECDC4' }, { name: 'Other', value: 80, fill: '#92D1E3' }]
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