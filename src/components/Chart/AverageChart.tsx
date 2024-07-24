import React from "react";
import { AreaChart, CartesianGrid, XAxis, Area, Tooltip, Rectangle } from 'recharts';
import './index.css'
import { IAverageSession, IUserSessions } from "../../services/user.service";

interface CustomTooltipProps {
  active?: boolean;
  payload?: { name: string, value: number }[];
}

interface AverageChartProps {
  dataChart: IUserSessions
}

const AverageChart: React.FC<AverageChartProps> = ({ dataChart }) => {

  const dayMapping = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  const transformedData = dataChart.sessions.map((session: IAverageSession, index: number) => ({
    ...session,
    day: dayMapping[session.day - 1],
    isLast: index === dataChart.sessions.length - 1
  }));
  transformedData.push({ ...transformedData[transformedData.length - 1] });
  transformedData.unshift({ ...transformedData[0] });

  const CustomCursor = (props) => {
    const { points, width, height } = props;
    const { x } = points[0];
    return (
      <Rectangle
        fill="#0003"
        stroke="red"
        x={x}
        width={width}
        height={height * 3}
      />
    );
  };

  const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
    if (active && payload && payload.length && payload[0].value !== null) {
      return (
        <div className="custom-tooltip" style={{ backgroundColor: '#fff', border: '1px solid #ccc', padding: '10px' }}>
          <p className="font-bold">{`${payload[0].value} min`}</p>
        </div>
      );
    }
    return null;
  };

  const tickFormatter = (tick, index) => {
    const currentItem = transformedData[index];
    if (currentItem && currentItem.isLast) {
      return '';
    }
    return tick;
  };

  return (
    <div style={{ backgroundColor: "#FF0000", width: '90%', height: '100%', borderWidth: 2, borderRadius: 8, overflow: "hidden" }}>
      <p className="text-white opacity-70 text-center pt-5 absolute ml-12">Durée moyenne des sessions</p>
      <AreaChart
        width={350}
        height={300}
        data={transformedData}
        title="Durée moyenne des sessions"
        className="average z-10"
        margin={{
          top: 50,
          right: 20,
          left: 0,
          bottom: 20,
        }}
      >
        <XAxis
          dataKey="day"
          tick={{ fill: 'white' }}
          axisLine={false}
          tickLine={false}
          tickFormatter={tickFormatter}
        />
        <Tooltip cursor={<CustomCursor />} content={<CustomTooltip />} />
        <Area
          type="monotone"
          dataKey="sessionLength"
          stroke="#ffffff"
          fill="transparent"
        />
      </AreaChart>
    </div>
  );
};

export default AverageChart;
