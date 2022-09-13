import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GMap from './GMap';
import WeatherComponent from "./assets/WeatherInfoComponent";
import History from "./assets/History";

function App() {
  const [data, setData] = useState('');
  const [location, setLocation] = useState('');
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const key = 'a9cd5e73b6811a88e665fd367db238ff';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`
  const [pos, setPos] = useState('');
  const [hist, setHist] = useState('');

  
  const handleLocation = () => {
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
      setLat(response.data.coord.lat)
      setLon(response.data.coord.lon)
      setHist(response.data.name)  
    })
    // eslint-disable-next-line
    setLocation = ''
  }

    


  const handleKeypress = (event) => {
    if (event.key === 'Enter') {
      handleLocation();
    }
  }

  const url_loc = `https://api.openweathermap.org/data/2.5/weather?lat=${pos.lat}&lon=${pos.lng}&appid=${key}`

  useEffect(() => {
    console.log('Fetching location data')
    axios.get(url_loc).then((response) => {
      setData(response.data)
      setLat(response.data.coord.lat)
      setLon(response.data.coord.lon)
    })
  }, [url_loc]);
  
  return (
    <div className="App">
      <div className="Container">
        <div className="Search">
          <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={handleKeypress}
          placeholder='Enter Loc'
          type="text"/>
          <button onClick={handleLocation}>Search</button>
        </div>
    
        <div className='Weather'>
          {data ? (
            <WeatherComponent weather={data} />
          ) : (
            <p>Hello</p>
          )}
          
        </div>

        <div className='Map'>
          <GMap
          lat = {lat}
          lon = {lon}
          setPos = {setPos}
          />
        </div>
        
        <div className='History'>  
            <History
            hist = {hist}
            />
        </div>
      </div>
    </div>
  );
}

export default App;
