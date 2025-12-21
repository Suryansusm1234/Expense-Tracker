import { PieChart, Pie } from 'recharts';
const Piechat = () => {
  return (
    <div className="w-64 h-64">
      <PieChart width={250} height={250}>
        <Pie data={[{ name: 'Bills and Utility', value: 10 , fill: '#0088FE' , innerRadius : "60%" }, { name: 'Food', value: 20, fill: '#00C49F'  }, { name: 'Personal', value: 30, fill: '#FFBB28' }, { name: 'HealthCare', value: 40, fill: '#FF8042' }, { name: 'Education', value: 50, fill: '#8884D8' }, { name: 'Transport', value: 60, fill: '#FF6B6B' }, { name: 'Investment', value: 70, fill: '#4ECDC4' }, { name: 'Other', value: 80, fill: '#92D1E3' }]} dataKey="value"  innerRadius= "60%" label />
      </PieChart>
    </div>
  )
}

export default Piechat