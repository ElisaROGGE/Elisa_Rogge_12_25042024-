import React from "react";
import { BarChart, Bar, Rectangle, XAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


interface ChartProps {
    dataChart: []
}

const Chart: React.FC<ChartProps> = ({dataChart}) => {

  return (
    <div>
        <BarChart
            width={800}
            height={400}
            data={dataChart}
            margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <Tooltip />
            <Legend />
            <Bar dataKey="calories" fill="#282D30" activeBar={<Rectangle fill="pink" stroke="blue" />} />
            <Bar dataKey="kilogram" fill="#E60000" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
    </div>
  );
};

export default Chart;
