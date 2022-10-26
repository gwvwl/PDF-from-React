import React from 'react';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

const BarChartPDF = ({ data }) => {
    return (
        <BarChart
            width={600}
            height={200}
            data={data}
            margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 20,
            }}>
            <XAxis dataKey='name' tickMargin={15} />
            <YAxis yAxisId='left' orientation='right' stroke='#6D6F81' />
            <YAxis yAxisId='right' orientation='left' stroke='#6D6F81' />
            <Bar yAxisId='right' isAnimationActive={false} dataKey='All conv.' fill='#FF3966' />
            <Bar yAxisId='left' isAnimationActive={false} dataKey='Cost / all conv.' fill='#2F3CAF' />
        </BarChart>
    );
};
export default BarChartPDF;
