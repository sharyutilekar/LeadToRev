// components/StatCard.js
import React from 'react';
import '../style/StatCard.css';

const StatCard = ({ title, value, color }) => {
  return (
    <div className={`stat-card ${color}`}>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
};

export default StatCard;
