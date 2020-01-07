import React from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import Home from './Home/Home'
import Favorites from './Favorites/Favorites'

export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {componentToRender: 'Home'}
  }

  onSwitchComponent = (value)=>{
    this.setState({componentToRender:value});
  }

  render() {

    return (
      <div className="app">
        <header className="app-header">
          <NavBar switchComponent={this.onSwitchComponent}/>
        </header>
        <div className="app-body">
         {(this.state.componentToRender === 'Home')?
            <Home /> : 
            <Favorites />
         } 
        </div>
      
      </div>
    );
  } 
}
