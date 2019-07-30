import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import LoggedImg from './Logged_img';
import LoggedList from './Logged_list';
import NavList from '../home_header/Nav_list';
import LoggedInfo from '../logged_header/Logged_info';

class LoggedHeader extends Component {
    render() {
        return(
            
            <header name='Header'>
                <div className='grid-container'>
                    <div className="row">
                        <Link to='/logged/'>
                            <div className="col-10">
                                <LoggedImg />
                            </div>
                        </Link>
                        <nav className='col-11 navigation-container'>
                            <div className='row'>
                                <div className='col-9'>
                                    <LoggedList />
                                </div>
                            </div>
                            
                            <div className="row">
                                <div className="col-10">
                                    <NavList />  
                                </div>
                            </div>
                            <LoggedInfo/>
                            {/* <Switch>
                                <Route path='/' component={GiveStaff} />
                                <Route exact path='/signin' component={SignIn}/>
                            </Switch> */}
                            
                            
                        </nav>
                    </div>
                </div>
            </header>
        
        )
    }
}

export default LoggedHeader;