import React, { Component } from 'react';
import WeatherLocation from './Components/WheatherLocation'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Aplicacion del Clima</p>
        <WeatherLocation></WeatherLocation>
      </div>
    );
  }
}

export default App;
