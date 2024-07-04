import { PieChart, Pie, Cell, Text } from 'recharts';
import './index.css';

const TodayScore = ({ dataChart }) => {

    const COLORS = ['#FF0000', '#FBFBFB'];


    const data = [
        { name: 'Achieved', value: dataChart },
        { name: 'Remaining', value: 1 - dataChart }
    ];

    const percentage = dataChart * 100;

    return (
        <div className='slate relative' style={{ backgroundColor: "#FBFBFB", width: '90%', height: 300, borderRadius: 8 }}>
            <span className='font-bold absolute top-4 left-4'>Score</span>
            <PieChart width={500} height={500} title='Score'>
            <circle cx="150" cy="150" r="105" fill="#ffffff" />
                <Pie
                    data={data}
                    cx={150}
                    cy={150}
                    innerRadius={105}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                    labelLine={false}
                    paddingAngle={0}
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
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke='none' />
                    ))}
                </Pie>
            </PieChart>
        </div>
    );
};

export default TodayScore;
