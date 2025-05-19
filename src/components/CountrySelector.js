// components/CountrySelector.js
import React from 'react';
import '../style/CountrySelector.css';


const CountrySelector = ({ countries, selected, onChange }) => {
  return (
    <select className="country-select" value={selected} onChange={(e) => onChange(e.target.value)}>
      {countries.map((country) => (
        <option key={country.code} value={country.code}>{country.name}</option>
      ))}
    </select>
  );
};

export default CountrySelector;
