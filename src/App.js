import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">colum number one</div>
          <div className="col-6"><span className="fas fa-home"></span></div>
        </div>
        <div className="row"></div>        
      </div>
    );
  }
}

export default App;
