import React, {useState} from "react";
import { AreaChart, CartesianGrid, XAxis, YAxis, Area, Tooltip } from 'recharts';
import './index.css'

const AverageChart = ({ dataChart }) => {

    const dayMapping = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    const transformedData = dataChart.sessions.map((session) => ({
      ...session,
      day: dayMapping[session.day - 1]
    }));
  
    console.log(transformedData)
 

  return (
    <div style={{ backgroundColor: "#FF0000", width: '90%', borderWidth: 2, borderRadius: 8 }}>
      <AreaChart
          width={250}
          height={300}
          data={transformedData}
          title="Durée moyenne des sessions"
          margin={{
            top: 10,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} vertical={false}  />
          <XAxis 
                dataKey="day" 
                tickFormatter={transformedData}
                tick={{ fill: 'white' }}
                axisLine={false}
                tickLine={false}
            />
          <Tooltip />
          <Area type="monotone" dataKey="sessionLength" stroke="#ffffff" fill="transparent" />
        </AreaChart>
    </div>
  );
};

export default AverageChart;
