import React from "react";
import { AreaChart, CartesianGrid, XAxis, YAxis, Area, Tooltip } from 'recharts';
import './index.css'

const AverageChart = ({ dataChart }) => {

    console.log(dataChart)

    const dayMapping = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
 

  return (
    <div style={{ backgroundColor: "#FF0000", width: '90%', borderWidth: 2, borderRadius: 8 }}>
      <AreaChart
          width={250}
          height={300}
          data={dataChart.sessions}
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
                tickFormatter={(tick) => dayMapping[tick - 1]}
            />
          <Tooltip />
          <Area type="monotone" dataKey="sessionLength" stroke="#ffffff" fill="transparent" />
        </AreaChart>
    </div>
  );
};

export default AverageChart;
