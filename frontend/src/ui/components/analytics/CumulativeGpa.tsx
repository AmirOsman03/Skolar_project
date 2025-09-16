import {PieChart, Pie, Cell, Tooltip, Legend} from 'recharts';
import React from "react";

interface CumulativeGPAProps {
    avgGrade: number;
    maxGrade?: number;
}

const CumulativeGpa: React.FC<CumulativeGPAProps> = ({avgGrade, maxGrade = 10}) => {
    const data = [
        {name: 'Во моментот', value: avgGrade},
        {name: 'Останато', value: maxGrade - avgGrade},
    ];

    const COLORS = ['#F28C28', '#C0C0C0'];

    return (
        <PieChart width={400} height={400}>
            <Pie
                data={data}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={120}
                outerRadius={150}
                startAngle={90}
                endAngle={-270}
                label
                labelLine={false}
            >
                {data.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                ))}
            </Pie>
            <Tooltip/>
            <Legend />
        </PieChart>
    );
};

export default CumulativeGpa;
