import React, {Component} from 'react';
import './App.scss';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import Home from './Home'
// import FoundationsMenu from './home_section/menu/Foundations_menu';
// import SignIn from './header/SignIn';
import LoggedPage from './LoggedPage'
import SignIn from './SignIn';
import SignUp from './SignUp';




class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App ">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/logged/' component={LoggedPage} />
          </Switch>
          
          
        </div>
       
      </BrowserRouter>
    )
  }
}

export default App;
