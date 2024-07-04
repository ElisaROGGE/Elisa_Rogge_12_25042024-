import React from "react";
import { AreaChart, CartesianGrid, XAxis, Area, Tooltip, Rectangle, Legend } from 'recharts';
import './index.css'

interface CustomTooltipProps {
  active?: boolean;
  payload?: { name: string, value: number }[];
}

const AverageChart = ({ dataChart }) => {

    const dayMapping = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    const transformedData = dataChart.sessions.map((session) => ({
      ...session,
      day: dayMapping[session.day - 1]
    }));
    
    const CustomCursor = (props) => {
      const { points, width } = props;
      const { x, y } = points[0];
      console.log(props);
      return (
        <Rectangle
          fill="#E30000"
          stroke="red"
          x={x}
          y={y}
          width={250}
          height={350}
        />
      );
    };

    const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
      if (active && payload && payload.length) {
        return (
          <div className="custom-tooltip" style={{ backgroundColor: '#fff', border: '1px solid #ccc', padding: '10px' }}>
            <p className="font-bold">{`${payload[0].value} min`}</p>
          </div>
        );
      }
      return null;
    };

    return (
      <div style={{ backgroundColor: "#FF0000", width: '90%', height: '100%', borderWidth: 2, borderRadius: 8 }}>
        <p className="text-white opacity-70 text-center pt-5">Durée moyenne des sessions</p>
        <AreaChart
          width={350}
          height={250}
          data={transformedData}
          title="Durée moyenne des sessions"
          className="average z-10"
          margin={{
            top: 10,
            right: 20,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} vertical={false} />
          <XAxis 
            dataKey="day" 
            tick={{ fill: 'white' }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip cursor={<CustomCursor />} content={<CustomTooltip />} />
          <Area type="monotone" dataKey="sessionLength" stroke="#ffffff" fill="transparent" />
        </AreaChart>
      </div>
    );
};

export default AverageChart;
