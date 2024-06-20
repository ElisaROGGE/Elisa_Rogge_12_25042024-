import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import './index.css'

const StatChart = ({ dataChart }) => {
  const translations = {
    cardio: "Cardio",
    energy: "Énergie",
    endurance: "Endurance",
    strength: "Force",
    speed: "Vitesse",
    intensity: "Intensité"
  };
 
  const performanceData = dataChart.data.map((perf) => ({
    kind: translations[dataChart.kind[perf.kind]] || dataChart.kind[perf.kind],
    value: perf.value,
  }));

  const chartWidth = 250;
  const chartHeight = 300;

  return (
    <div className="stat" style={{ backgroundColor: "#282D30", width: '90%', height: chartHeight, borderWidth: 2, borderRadius: 8 }}>
      <RadarChart cx={chartWidth / 2} cy={chartHeight / 2} outerRadius="80%" width={chartWidth} height={chartHeight} data={performanceData}>
        <PolarGrid radialLines={false} />
        <PolarAngleAxis dataKey="kind" axisLine={false} />
        <PolarRadiusAxis tick={false} />
        <Radar name="Mike" dataKey="value" stroke="#FF0101B2" fill="#FF0101B2" fillOpacity={0.6} />
      </RadarChart>
    </div>
  );
};

export default StatChart;
