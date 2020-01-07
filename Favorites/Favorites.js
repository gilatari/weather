import React from 'react'
import './Favorites.css';
import axios from 'axios';

export default class Favorites extends React.Component{
  constructor(props) {
    super(props);
    this.state = {favoritesCities:[[]], citiesToShow:[]};
    this.ApiKey = 's1501FHB0B7WamEnzbjC3cLSRugkTyKx';
    this.weatherForecastUrl = 'http://dataservice.accuweather.com/currentconditions/v1/';

  }

   allStorage() {
    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }
    return values;
  }

   componentDidMount(){
    this.setState({'favoritesCities': Object.entries(localStorage)});
    var self = this;
    var favoritesCitiesKey = this.allStorage();
    favoritesCitiesKey.forEach(city => {
      axios.get(self.weatherForecastUrl + city+'?apikey=' + self.ApiKey)
          .then(function (response) {
            // var cities = self.state('citiesToShow');
            var locationData = self.state.citiesToShow;
            locationData.push(response.data[0])    
            self.setState({citiesToShow: locationData});

          }) 
    });
  }

  render() {
    return (
        <div className='favorites'>  
                {this.state.citiesToShow.map((city, id) => (
                    <div className="daily-weather" key={id} >
                        <h3>{this.state.favoritesCities[id][0]}</h3>   
                         <div> {city.WeatherText} </div>    
                         <div> {city.Temperature.Metric.Value}°c</div>   
                  </div>
                ))}
        </div>
    )
  } 
}
