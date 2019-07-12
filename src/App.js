import React, {Component} from 'react';
import './App.scss';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import Header from './header/Header'
import MainSection from './section/Main_section';
import Footer from './footer/Footer';
import FoundationsMenu from './section/Foundations_menu';





class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <MainSection />
          <Footer />
        </div>
       
      </BrowserRouter>
    )
  }
}

export default App;
