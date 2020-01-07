import React from 'react'
import './WeatherDay.css';

export default class WeatherDay extends React.Component{
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className='WeatherDay'>  
        <div> {this.props.dayOfWeek} </div>
        <div> {this.props.temperature}° C  </div>
      </div>
    )
  } 
}
