import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import HeaderButton from '../header/Header_button';
import LogList from '../home_header/Log_list';
import NavList from '../home_header/Nav_list';
import StartImage from '../home_header/Start_img';
// import SignIn from '../home_header/SignIn';
import GiveStaff from'./Give_stuff';



class Header extends Component {
    render() {
        return (
        
            <header name='Header'>
                <div className='grid-container'>
                    <div className="row">
                        <Link to='/'>
                            <div className="col-10">
                                <StartImage />
                            </div>
                        </Link>
                        <nav className='col-11 navigation-container'>
                            <div className='row'>
                                <div className='col-9'>
                                    <LogList />
                                </div>
                            </div>
                            
                            <div className="row">
                                <div className="col-10">
                                    <NavList />  
                                </div>
                            </div>
                            <GiveStaff/>
                            
                            
                            
                        </nav>
                    </div>
                </div>
            </header>
        
        )
    }
}

export default Header;