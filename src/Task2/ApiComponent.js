// WeatherComponent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiComponent = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
        
const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
    params: {q: '53.1,-0.13'},
    headers: {
      'X-RapidAPI-Key': '3d6fc07048msh0a97bbfb98ddc1ep167048jsn5ce735657c26',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };
  
  try {
      const response = await axios.request(options);
      console.log(response.data);
      setWeatherData(response.data);
        setLoading(false);
  } catch (error) {
      console.error(error);
      setError(true);
        setLoading(false);
  }
     
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data</div>;
  }

  return (
    <div>
      {weatherData && (
        <div>
<h2>Hey this component calls a weather API and show data for now Static location is Boston you can change from Code</h2>
<br />
<br />
<div>
          <h2 >Location : {weatherData.location.name}</h2>
          <p>Temperature : {weatherData.current.temp_c}°C</p>
          </div>
]        </div>
      )}
    </div>
  );
};

export default ApiComponent;
