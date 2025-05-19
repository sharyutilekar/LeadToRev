// App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CountrySelector from './components/CountrySelector';
import StatCard from './components/StatCard';
import LineChartComponent from './components/LineChartComponent';
import PieChartComponent from './components/PieChartComponent';
import './style/App.css';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('USA');
  const [covidData, setCovidData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(res => {
        const formatted = res.data.map(c => ({
          name: c.name.common,
          code: c.cca2.toLowerCase(),
        })).sort((a, b) => a.name.localeCompare(b.name));
        setCountries(formatted);
      })
      .catch(err => setError('Failed to fetch country list.'));
  }, []);

  useEffect(() => {
    axios.get(`https://disease.sh/v3/covid-19/historical/${selectedCountry}?lastdays=1500`)
      .then(res => setCovidData(res.data))
      .catch(err => setError('Failed to fetch COVID data.'));
  }, [selectedCountry]);

  return (
    <div className="app">
      <h1>COVID-19 and Population Dashboard</h1>
      <div className="controls">
        <CountrySelector 
          countries={countries} 
          selected={selectedCountry} 
          onChange={setSelectedCountry} 
        />
        {/* Add date filter UI here if implementing */}
      </div>
      {error && <p className="error">{error}</p>}
      {covidData && (
        <>
          <div className="stats">
            <StatCard title="Total Cases" value="5M" color="blue" />
            <StatCard title="Recoveries" value="4.2M" color="green" />
            <StatCard title="Deaths" value="0.2M" color="red" />
          </div>
          <div className="charts">
            <LineChartComponent data={covidData} />
            <PieChartComponent data={covidData} />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
