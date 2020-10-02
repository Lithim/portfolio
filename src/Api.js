import React, { Component } from 'react';


function isSearched(searchTerm) {
  return function (item) {
    return !searchTerm ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase());
  }
}

// API KEY: APPID=f8384513fad5f91ea04d07a2cbf916ec
const API = "http://api.openweathermap.org/data/2.5/weather?q=stockholm,se&APPID=f8384513fad5f91ea04d07a2cbf916ec&units=metric";



class Api extends Component {
  constructor(props) {
    super(props);
    this.state = {

      weather: ''
    };

  }
  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ weather: data.main.feels_like }));
  }


  render() {
    const { weather } = this.state;
    return (
      <div className="App" >
        The temperature right now feels like {weather || '?'}

      </div>
    );
  }
}

export default Api;