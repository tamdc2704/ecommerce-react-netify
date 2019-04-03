import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'


import './App.css';
import Narbar from './components/Narbar';
import Detail from './components/Detail';
import Cart from './components/Cart';
import Default from './components/Default';
import ProductsList from './components/ProductsList';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Narbar />
        <Switch>
          <Route exact path='/' component={ProductsList} />
          <Route path='/detail' component={Detail} />
          <Route path='/cart' component={Cart} />
          <Route component={Default} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
