import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import {DISHES} from './shared/dishes';

class App extends Component
{

  constructor(props)
  {
    super(props);

    this.state={
      dishes:DISHES
    }
  }
  render(){
    return (

      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
      {/* from here the dish state is available to the mun child components
        that is th MenuComponent.js file  */}
        <Menu dishes={this.state.dishes}/>
      </div>
    )
  }
}

export default App;
