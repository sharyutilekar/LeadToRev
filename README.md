# COVID-19 and Population Dashboard

A responsive React.js dashboard that visualizes COVID-19 statistics (Total Cases, Recoveries, Deaths) using line and pie charts. The app integrates live REST APIs for historical COVID-19 data and global country data.

## 🌐 Live APIs Used
- **COVID-19 Historical Data:** https://disease.sh/v3/covid-19/historical/{country}?lastdays=1500
- **Country List:** https://restcountries.com/v3.1/all

## 🚀 Features
- Country-wise data selection via dropdown
- Total cases, recoveries, and deaths displayed as cards
- Interactive line chart for historical COVID cases
- Pie chart comparing stats to total population
- Responsive and mobile-friendly layout
- Error handling for all API calls

---
## 📸 Dashboard Preview

![COVID-19 Dashboard Screenshot](./assets/Covid19Dashboard.png)

## 📦 Installation

```bash
git clone https://github.com/your-username/LeadToRev.git
cd covid19-dashboard-react
npm install
use the below command for executing the project:
set NODE_OPTIONS=--openssl-legacy-provider && npm start
```

---

## 📁 Folder Structure
```
covid19-dashboard-react/
├── src/
│   ├── App.js
│   ├── App.css
│   ├── components/
│   │   ├── CountrySelector.js
│   │   ├── CountrySelector.css
│   │   ├── StatCard.js
│   │   ├── StatCard.css
│   │   ├── LineChartComponent.js
│   │   ├── LineChartComponent.css
│   │   ├── PieChartComponent.js
│   │   ├── PieChartComponent.css
```

---

## 📦 Dependencies
Install these libraries:
```bash
npm install axios recharts
```

## 🧩 Libraries Used
- [React](https://reactjs.org/)
- [Axios](https://github.com/axios/axios) — HTTP client
- [Recharts](https://recharts.org/en-US/) — Chart library for React


use the below command for executing the project:



set NODE_OPTIONS=--openssl-legacy-provider && npm start






---


