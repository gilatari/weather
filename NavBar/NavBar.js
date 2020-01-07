import React from 'react'
import './NavBar.css';
 
export default class NavBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {componentName:'Home'};
  }

  componentToShow = (e, value)=>{
    this.setState({componentName:value});
    this.props.switchComponent(value);
  }

  render() {
    return (
        <div className='navBar'>
          <div className="title"> Herolo Weather Task </div>
          <div className="nav-buttons">
            <div className="link" onClick={(e) =>  this.componentToShow(e, 'Home')}>Home</div>
            <div className="link" onClick={(e) => this.componentToShow(e, 'Favorites')}>Favorites</div>
          </div>
        </div>
    )
  } 
}
