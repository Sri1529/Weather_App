import React, { useState } from 'react';
import WeatherDashboard from './Components/WeatherDashboard';
import './styles.css';

function App() {
  const [backgroundVisible, setBackgroundVisible] = useState(true); // Background visibility state
  const [backgroundType, setBackgroundType] = useState('default'); // New state for managing the background type

  const hideBackground = () => {
    setBackgroundVisible(false); // Hide the current background
    setBackgroundType('newBackground'); // Set to the new background
  };

  // Determine which background class to apply
  const backgroundClass = backgroundVisible ? 'background-image' : (backgroundType === 'newBackground' ? 'new-background-image' : ''); 

  return (
    <div className={`App ${backgroundClass}`}> 
      <WeatherDashboard onHideBackground={hideBackground} /> 
    </div>
  );
}

export default App;
