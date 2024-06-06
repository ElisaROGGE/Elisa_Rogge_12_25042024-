import { getDate, parseISO } from "date-fns";
import React from "react";
import { BarChart, Bar, Rectangle, XAxis, CartesianGrid, Tooltip, Legend, YAxis } from 'recharts';

interface ChartProps {
    dataChart: { day: string; calories: number; kilogram: number; }[]
}
type TooltipProps = {
  active?: boolean;
  payload?: {
    name: string;
    value: number;
    unit?: string;
  }[];
};

const Chart: React.FC<ChartProps> = ({ dataChart }) => {

  const updatedDataChart = dataChart.map(data => {
    const date = parseISO(data.day);
    const dayOfMonth = getDate(date);
    return { ...data, dayOfMonth };
  });

  const CustomTooltip: React.FC<TooltipProps> = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{ backgroundColor: 'red', padding: '20px', color: 'white' }}>
          <p>{`${payload[1].value}kg`}</p>
          <p>{`${payload[0].value}Kcal`}</p>
        </div>
      );
    }

    return null;
  };

  const minKilogram = Math.min(...updatedDataChart.map(data => data.kilogram));
  const maxKilogram = Math.max(...updatedDataChart.map(data => data.kilogram));

  return (
    <div>
        <BarChart
            width={800}
            height={400}
            data={updatedDataChart}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="dayOfMonth" />
            <YAxis domain={[69, 'auto']} orientation="right" />
            <Legend verticalAlign="top" align="right" />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="kilogram" name="Poids (kg)" fill="#E60000" radius={[20, 20, 0, 0]} activeBar={<Rectangle />} />
            <Bar dataKey="calories" name="Calories brûlées (kCal)" fill="#282D30" radius={[20, 20, 0, 0]} activeBar={<Rectangle />} />
        </BarChart>
    </div>
  );
};

export default Chart;
