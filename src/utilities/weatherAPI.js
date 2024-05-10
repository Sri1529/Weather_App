import axios from 'axios';

export const fetchWeatherData = async (city) => {
  const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
  const response = await axios.get(
    'https://api.openweathermap.org/data/2.5/weather',
    {
      params: {
        q: city,
        appid: apiKey,
        units: 'metric',
      },
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch weather data.');
  }

  return response.data;
};
