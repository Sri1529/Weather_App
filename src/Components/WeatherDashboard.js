import React, { useState } from 'react';
import CitySearch from './CitySearch';
import WeatherDisplay from './WeatherDisplay';
import axios from 'axios';
import '../styles.css';

const API_KEY = 'd781f3341a9651a7d203e731a40dd103';

function WeatherDashboard({ onHideBackground }) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCitySearch = async (city) => {
    if (!city || city.trim() === '') {
      setError('Please enter a valid city name.');
      return;
    }

    try {
      setLoading(true); 
      setError(''); 
      const response = await axios.get(
        'https://api.openweathermap.org/data/2.5/weather',
        {
          params: {
            q: city,
            appid: API_KEY,
            units: 'metric',
          },
        }
      );
      setWeather(response.data);
      onHideBackground(); 
    } catch (e) {
      setError('Failed to fetch weather data.');
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div>
      <h1>Weather Forecast</h1>
      <CitySearch onSearch={handleCitySearch} onEnter={onHideBackground} /> 
      {loading && <p>Loading...</p>} 
      {error && <p style={{ color: 'red' }}>{error}</p>} 
      {weather && <WeatherDisplay weather={weather} />} 
    </div>
  );
}

export default WeatherDashboard; 