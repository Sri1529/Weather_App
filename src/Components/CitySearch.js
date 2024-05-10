import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import '../citysearch.css';

function CitySearch({ onSearch,onEnter  }) {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city.trim() !== '') {
      onSearch(city);
      onEnter(); 
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') { 
      handleSearch(); 
      onEnter(); 
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="search-box"
        onKeyPress={handleKeyPress} 
      />
      
      <FaSearch
        className="search-icon"
        onClick={handleSearch} 
      />
      
    </div>
  );
}

export default CitySearch;
