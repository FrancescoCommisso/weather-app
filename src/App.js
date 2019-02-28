import React, { Component } from 'react'
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import './App.css';

// API KEY
const API_KEY = "365965329e04dae84ad862086074cc19";

export default class App extends Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    code: undefined,
    error: undefined
  }

  // Async Await used to make HTTP call as it makes web requests easy.
  getWeather = async (e) => {

    // Prevent the default event from firing (Realoading the web page)
    e.preventDefault();

    // Declare City & Country variables
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);

    //Convert response to JSON Format
    const data = await api_call.json();
    
    // Log Data
    console.log(data);

    // If city & country exist, run setState code
    if (city && country){
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        code: data.weather[0].id,
        error: undefined
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        code: undefined,
        error: "Please enter your city & country."
      });
    }

  }

  render() {
    return (
      <div>
        <div className="wrapper">
            <div className="container">
              <div className="row">
                <div className="col-12 title-container text-center">
                  <Titles />
                </div>
                <div className="col-12 form-container text-center">
                  <Form getWeather={this.getWeather} />
                <div className="col-12 results-container text-center" id="text">
                  <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    code={this.state.code}
                    error={this.state.error}
                  />  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
