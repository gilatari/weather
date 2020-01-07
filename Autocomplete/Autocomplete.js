import React from 'react'
import './Autocomplete.css';
import axios from 'axios';

export default class Autocomplete extends React.Component{

  constructor(props) {
    super(props);
    this.suggestion = this.suggestion.bind(this);
    this.ApiKey = 's1501FHB0B7WamEnzbjC3cLSRugkTyKx';
    this.locationsUrl = 'http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=' + this.ApiKey + '&q';  
    this.state = {currentCity : [], weeklyWeather:[], showing: true};
  }

   suggestion(e){
          var self = this;
          axios.get(this.locationsUrl + '='+ e.target.value)
              .then(function (response) {
                if(response !== undefined && response.data[0] !== undefined){
                self.setState({currentCity : response.data});
                self.setState({ showing: true });
                }
              })
              .catch(function (error) {
                // handle error
                console.log(error);
              })
              .finally(function () {
                // always executed
              })      
  }

  onSelected(e, Key){
    this.setState({ showing: !this.state.showing });
    this.props.onSelectCity(e, Key);
  }
  

  render() {

    return (
        <div className='autocomplete'>  
        <div className="magnifying-glass"><span role="img">🔍</span></div>
           <input placeholder='City' onKeyUpCapture={this.suggestion.bind(this)}   />
           <div className="cities">

          { (this.state.showing) ? 
          <div>
            {this.state.currentCity.map(item => (
              <div className="city-name" key={item.Key} 
                onClick={ (e) =>  this.onSelected(e, item)}
              >
                {item.LocalizedName}
              </div>
            ))}
          </div>
            : null
          }
        </div>
      </div>
    )
  } 
}
