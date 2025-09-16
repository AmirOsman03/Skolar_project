import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import React from "react";

interface StudentProgressChartProps {
    earnedCredits: number | null;
    studyYears: number | null;
}

const StudentProgressChart: React.FC<StudentProgressChartProps> = ({ earnedCredits, studyYears }) => {
    const totalCredits = (studyYears ?? 0) * 60;
    const remainingCredits = totalCredits - (earnedCredits ?? 0);

    const data = [
        { name: 'Добиени кредити', value: earnedCredits ?? 0 },
        { name: 'Останати кредити', value: remainingCredits },
    ];

    const COLORS = ['#228B22', '#C0C0C0'];

    return (
        <PieChart width={400} height={400}>
            <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={120}
                outerRadius={150}
                labelLine={false}
                label
            >
                {data.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip />
            <Legend />
        </PieChart>
    );
};

export default StudentProgressChart;
