import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from'./pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
 import {auth} from './firebase/firebase.utils';



const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

class  App extends React.Component 
{
    constructor(){
      super();
      this.state={
        currentUser:null
      }
    }

    unSubscribeFromAuth=null;


    componentDidMount(){
      auth.onAuthStateChanged(user=>{
        this.setState({currentUser: user});
        console.log(user);
      });
    }

    componentWillUnmount(){
      this.unSubscribeFromAuth();

    }

    render() {
    return (
      <div>
      <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
}
}

export default App;
