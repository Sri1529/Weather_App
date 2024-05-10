import React, { useState } from 'react';
import WeatherDashboard from './Components/WeatherDashboard';
import './styles.css';

function App() {
  const [backgroundVisible, setBackgroundVisible] = useState(true); 

  const hideBackground = () => {
    setBackgroundVisible(false); 
  };

  const backgroundClass = backgroundVisible ? 'background-image' : ''; 

  return (
    <div className={`App ${backgroundClass}`}> 
      <WeatherDashboard onHideBackground={hideBackground} /> 
    </div>
  );
}

export default App;
