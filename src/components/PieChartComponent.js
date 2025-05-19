// components/PieChartComponent.js
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import '../style/PieChartComponent.css';

const PieChartComponent = ({ data }) => {
  const total = data.timeline.cases[Object.keys(data.timeline.cases).pop()];
  const deaths = data.timeline.deaths[Object.keys(data.timeline.deaths).pop()];
  const recovered = data.timeline.recovered[Object.keys(data.timeline.recovered).pop()];
  const active = total - deaths - recovered;

  const chartData = [
    { name: 'Recovered', value: recovered },
    { name: 'Deaths', value: deaths },
    { name: 'Active', value: active },
    { name: 'Total Population', value: 1400000000 }, // hardcoded for illustration
  ];

  const COLORS = ['#82ca9d', '#ff4d4f', '#8884d8', '#f0e68c'];

  return (
    <div className="pie-chart">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;
