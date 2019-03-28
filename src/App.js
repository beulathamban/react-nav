import React, { Component } from 'react';
import {BrowserRouter as Router,
        Route
        } from  'react-router-dom';

import './App.css';
import Header from './components/header/Header';

import Footer from './components/footer/Footer';
import Homepage from './components/Homepage';
import Products from './components/Products';


class App extends Component {
  
  render() {
    return (
      <Router>
      <div className="App">
        <Header/>
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/Products' component={Products}/>
        <Footer/>
      </div>
      </Router>
    );
  }
}






export default App;
