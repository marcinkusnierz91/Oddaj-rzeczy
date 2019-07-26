import React, {Component} from 'react';
import './App.scss';
import {HashRouter,BrowserRouter,Switch, Route} from 'react-router-dom';
import Home from './Home'
// import FoundationsMenu from './home_section/menu/Foundations_menu';
// import SignIn from './header/SignIn';
import LoggedPage from './LoggedPage'
import SignIn from './SignIn';




class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          {/* <Home/> */}
          {/* <SignIn/> */}
          {/* <LoggedPage /> */}
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/signin' component={SignIn} />
            <Route path='/logged/' component={LoggedPage} />
          </Switch>
          
          
        </div>
       
      </HashRouter>
    )
  }
}

export default App;
