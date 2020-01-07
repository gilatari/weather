import React from 'react'
import './Home.css';
import Autocomplete from '../Autocomplete/Autocomplete';
import axios from 'axios';

export default class NavBar extends React.Component{
  constructor(props) {
    super(props);
    this.ApiKey = 's1501FHB0B7WamEnzbjC3cLSRugkTyKx';
    this.weatherForecastUrl = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/';
    this.daysOfWeek = ['Sun','Mon','Tue','Wed','Thu'];
    this.state = {weeklyWeather:[], cityName:'', headline: '',location:{}};
  }

  handleAccuweather = (e, location) => {
      var self = this;
            axios.get(self.weatherForecastUrl + location.Key + 
                      '?apikey=' + self.ApiKey + '&details=false&metric=true')
               .then(function (response) {
                 // handle success
                 self.setState({location: location});
                 self.setState({cityName : location.LocalizedName});
                 self.setState({weeklyWeather : response.data.DailyForecasts});
                 self.setState({headline : response.data.Headline.Text});
               })      
  }

  addToFavorites = ()=> {
    localStorage.setItem(this.state.location.LocalizedName, this.state.location.Key);
  }

  render() {
    return (
      <div className='home'>
        <div className='home-autocomplete'>
          <Autocomplete onSelectCity={this.handleAccuweather}/>
        </div>
        <div className="accuweatherWeekly">
              { (this.state.weeklyWeather.length>0) ?
              <div className='weekly-weather'>
              <div className="selected-city-box">
                <div className="city-header left">
                  <div className='inner-box'> 
                    <div className="selected-city-button">☒</div>
                    <div className='selected-city'> 
                      <h4>{this.state.cityName}</h4>
                      <h4>{this.state.weeklyWeather[0].Temperature.Minimum.Value}°c</h4>
                    </div>
                   </div>
                  </div>
                  <div className="city-header right">
                    <div className='inner-box'> 
                      <span>♡</span> 
                      <span onClick={this.addToFavorites}>Add to Favorites</span>
                    </div>
                  </div>
              </div>
                 <h2>{this.state.headline}</h2>
                  {this.state.weeklyWeather.map((item, id) => (
                    <div className="daily-weather" key={id} >
                        <h3>{ this.daysOfWeek[id]}</h3>   
                          Minimum:{item.Temperature.Minimum.Value}°c    
                          Maximum:{item.Temperature.Maximum.Value}°c
                  </div>
                ))}
              </div>:null
            }
          </div>
      </div>
    )
  } 
}
