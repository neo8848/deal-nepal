import React, { Component } from 'react';
import HomePage from './pages/homepage/hompage.component';
import './App.css';
import {Switch, Route} from 'react-router-dom';




const HatsPage=()=>(
  <div>
  <h1>
  HATSPAGE
  </h1>
  </div>
);

class App extends Component {
  render() {
    return (
    <div>
    <switch>
    <Route exact path='/' component={HomePage}/>
    <HomePage/>
    </switch>
   
     
    </div>
    );
  }
}

export default App;
