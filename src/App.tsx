import React, { useState } from 'react';
import Search from './components/Search';
import ForecastDay from './components/ForecastDay';
import './App.scss';

function App() {
  const [city, setCity] = useState('');

  const onSearch = (value: string) => {
    console.log('executeddddd: ' + value);
    setCity(value);
  }

  const days = [];
  for (let i = 0; i < 10; i++) {
    days.push(<ForecastDay />);
  }

  return (
    <div className="App">
      <div className="search">
        <h1>Weather App</h1>
        <Search onChange={onSearch} />
      </div>

      { city ? <div className="container">

        <h2 className="cityName">{city}</h2>
        <h3>Forecast</h3>

        <div className="days-container">
          {days}
        </div>


      </div> : null}
    </div>
  );
}

export default App;
