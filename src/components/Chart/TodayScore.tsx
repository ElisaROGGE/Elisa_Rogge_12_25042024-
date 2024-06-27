import React from 'react';
import { PieChart, Pie, Cell, Text } from 'recharts';
import './index.css';

const TodayScore = ({ dataChart }) => {

    const COLORS = ['#FF0000', '#d7d7d7'];

    const data = [
        { name: 'Achieved', value: dataChart },
        { name: 'Remaining', value: 1 - dataChart }
    ];

    const percentage = dataChart * 100;

    return (
        <PieChart width={500} height={500} title='Score'>
            <Pie
                data={data}
                cx={150}
                cy={150}
                innerRadius={100}
                outerRadius={120}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                labelLine={false}
                cornerRadius={10}
                label={({ cx, cy }) => (
                    <>
                        <Text
                            x={cx}
                            y={cy - 10}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontSize={24}
                            fontWeight="bold"
                            fill="black"
                        >
                            {`${percentage}%`}
                        </Text>
                        <Text
                            x={cx}
                            y={cy + 10}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontSize={16}
                            fill="grey"
                        >
                            de votre objectif
                        </Text>
                    </>
                )}
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
        </PieChart>
    );
};

export default TodayScore;
