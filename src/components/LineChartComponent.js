// components/LineChartComponent.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import '../style/LineChartComponent.css';

const LineChartComponent = ({ data }) => {
  const timeline = data.timeline;
  const labels = Object.keys(timeline.cases);
  const chartData = labels.map((label) => ({
    date: label,
    cases: timeline.cases[label],
    deaths: timeline.deaths[label],
    recovered: timeline.recovered[label],
  }));

  return (
    <div className="line-chart">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="cases" stroke="#8884d8" strokeWidth={2} />
          <Line type="monotone" dataKey="recovered" stroke="#82ca9d" strokeWidth={2} />
          <Line type="monotone" dataKey="deaths" stroke="#ff4d4f" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;
