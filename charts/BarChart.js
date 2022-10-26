// import React from 'react';
// import { BarChart, Bar, XAxis, YAxis } from 'recharts';

// const CustomBarChart = ({ data }) => {

//     return (
//         <BarChart width={500} height={200} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
//             <XAxis dataKey='name' />
//             <YAxis />
//             <Bar isAnimationActive={false} dataKey='pv' fill='#8884d8' />
//             <Bar isAnimationActive={false} dataKey='uv' fill='#82ca9d' />
//         </BarChart>
//     );
// };

// export default CustomBarChart;

import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { wrapper_chart, wrapper_chart__container, wrapper_chart__title } from 'src/styles/TableReport.module.scss';
const CustomBarChart = ({ data, title }) => {
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
export default CustomBarChart;
