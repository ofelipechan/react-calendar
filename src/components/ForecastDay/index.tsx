import React from 'react';
import './styles.scss';

export default function ForecastDay() {
    return (
        <div className="forecast-day">
            <p>Nov, 08</p>
            <p>18:00</p>
            <img src="https://openweathermap.org/img/w/01d.png" className="img-weather" />
            <h4>29°</h4>
        </div>
    )
}
