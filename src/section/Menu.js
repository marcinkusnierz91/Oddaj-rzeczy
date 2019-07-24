import React, { Component } from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';
import Foundation from './Organization';
import Items from '../section/Items';
import FoundationsMenu from './Foundations_menu';
import NonGovMenu from './NonGov_menu';
import MenuNav from './Menu_nav';
import LocalCollectionMenu from './LocalCollection_menu';


class Menu extends Component {

   

    render() {
        const activeStyle = {
            border: '1px solid $darkerMain'
          };

        return (
            <BrowserRouter>
                <section name='Menu' className="grid-container menu-container" id='menu'>
                    <div className="row">
                        <div className="col-21 menu-title">
                            <h2>Komu pomagamy?</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-21 menu-decoration">
                            <img src={require('../images/decoration-1.svg')} alt="decoration" className='decoration'/>
                        </div>
                    </div>
                    <nav className='menu-nav'>
                        <MenuNav/>
                        <Switch >
                            <Route path='/foundations' component={FoundationsMenu} />
                            <Route path='/nongov' component={NonGovMenu}/>
                            <Route path='/collections' component={LocalCollectionMenu}/>
                        </Switch>
                    </nav>    

                    <div className="row">
                        <div className="col-21 menu-pages">
                            <div className="col-1"><Link exact to='/foundations' className='pageNum' activeClassName="active">1</Link></div>
                            <div className="col-1"><Link exact to='/nongov' className='pageNum' activeClassName="active">2</Link></div>
                            <div className="col-1"><Link exact to='/collections' className='pageNum' activeClassName="active">3</Link></div>
                        </div>
                    </div>
                </section>
            </BrowserRouter>
        )
    }
}

export default Menu;