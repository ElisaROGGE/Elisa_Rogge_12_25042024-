import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const StatChart = ({ dataChart }) => {
 
  const performanceData = dataChart.data.map((perf) => ({
    kind: dataChart.kind[perf.kind],
    value: perf.value,
  }));

  const chartWidth = 250;
  const chartHeight = 300;

  return (
    <div style={{ backgroundColor: "#282D30", width: chartWidth, height: chartHeight }}>
      <RadarChart cx={chartWidth / 2} cy={chartHeight / 2} outerRadius="80%" width={chartWidth} height={chartHeight} data={performanceData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" />
        <PolarRadiusAxis />
        <Radar name="Mike" dataKey="value" stroke="#FF0101B2" fill="#FF0101B2" fillOpacity={0.6} />
      </RadarChart>
    </div>
  );
};

export default StatChart;
