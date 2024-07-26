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
          <p>{`${payload[0].value}kg`}</p>
          <p>{`${payload[1].value}Kcal`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="main-chart">
        <BarChart
            width={1200}
            height={300}
            data={updatedDataChart}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={true} />
            <XAxis dataKey="dayOfMonth" axisLine={false} tickLine={false} />
            <YAxis domain={[69, 'auto']} axisLine={false} tickLine={false} orientation="right" />
            <Legend verticalAlign="top" align="right" />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="kilogram" name="Poids (kg)" fill="#282D30" radius={[20, 20, 0, 0]} barSize={10} activeBar={<Rectangle />} />
            <Bar dataKey="calories" name="Calories brûlées (kCal)" fill="#E60000" radius={[20, 20, 0, 0]} barSize={10} activeBar={<Rectangle />} />
        </BarChart>
    </div>
  );
};

export default Chart;
