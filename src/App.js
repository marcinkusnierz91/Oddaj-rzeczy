import React, {Component} from 'react';
import './App.scss';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import Home from './Home'
import FoundationsMenu from './section/Foundations_menu';





class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Home />
          {/* <Route path='/' component={Home}/> */}
        </div>
       
      </BrowserRouter>
    )
  }
}

export default App;
