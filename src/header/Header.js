import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import HeaderButton from '../header/Header_button';
import LogList from '../header/Log_list';
import NavList from '../header/Nav_list';
import Start_img from '../header/Start_img';


class Header extends Component {
    render() {
        return (
        <header name='Header'>
            <div className='grid-container'>
                <div className="row">
                    <Link to='/'>
                        <div className="col-10">
                            <Start_img />
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
                        <div className="row">
                            <div className="col-10 title">
                                <h2>Zacznij pomagać!</h2>
                                <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-10 decoration">
                                <img src={require('../images/decoration-1.svg')} alt="decoration"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-10 header-buttons">
                                <HeaderButton text='ODDAJ RZECZY'/>
                                <HeaderButton text='ZOORGANIZUJ ZBIÓRKĘ'/>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
        )
    }
}

export default Header;