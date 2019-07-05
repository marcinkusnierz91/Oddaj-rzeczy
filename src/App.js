import React, {Component} from 'react';
import './App.scss';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import Header from './header/Header'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
