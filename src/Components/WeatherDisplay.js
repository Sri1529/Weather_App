import React from 'react';
import '../WeatherDisplay.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind, faDroplet, faEye } from '@fortawesome/free-solid-svg-icons';


function getTemperatureType(temp) {
  if (temp < 0) {
    return "Cold";
  } else if (temp >= 0 && temp < 15) {
    return "Cool";
  } else if (temp >= 15 && temp < 25) {
    return "Moderate";
  } else if (temp >= 25 && temp < 30) {
    return "Warm";
  } else {
    return "Hot";
  }
}


function getBackgroundImage(temp) {
  if (temp < 0) {
    return require('../Images/cool.jpg'); 
  } else if (temp >= 0 && temp < 15) {
    return require('../Images/cool.jpg'); 
  } else if (temp >= 15 && temp < 25) {
    return require('../Images/moderate.jpg'); 
  } else if (temp >= 25 && temp < 30) {
    return require('../Images/warm.jpg'); 
  } else {
    return require('../Images/hot.jpg'); 
  }
}


function WeatherDisplay({ weather }) {
  if (!weather) {
    return <p>No weather data available.</p>;
  }

  const { main, wind, visibility } = weather; 
  const temperatureType = getTemperatureType(main.temp); 
  const backgroundImage = getBackgroundImage(main.temp); 

  return (
    <div
      className={`weather-container ${temperatureType}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="temperature-wrapper">
      <div className={`temperature-box ${temperatureType}`}>
          <p className='temp'>{main.temp}°</p>
          <p className="temperature-type">{temperatureType}</p> 
        </div>
      </div>
      
      <div className="additional-info-container">
      <div className={`info-box ${temperatureType}`}>
          <p>
            <FontAwesomeIcon icon={faDroplet} />
            <br />
            <b>{main.humidity}%</b>
            <br />
           <p className='climate'>Humidity</p> 
          </p>
        </div>
        
        <div className={`info-box ${temperatureType}`}> 
          <p>
            <FontAwesomeIcon icon={faWind} /> 
            <br />
            <b>{wind.speed} Km/h</b>
            <br />
            <p className='climate'>Wind</p>
          </p>
        </div>
        
        <div className={`info-box ${temperatureType}`}> 
          <p>
            <FontAwesomeIcon icon={faEye} />
            <br />
            <b>{visibility} m</b>
            <br />
            <p className='climate'>Visibility</p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default WeatherDisplay; 
