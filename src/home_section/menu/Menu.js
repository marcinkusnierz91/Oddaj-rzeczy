import React, { Component } from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';
import Foundation from './Organization';
import Items from './Items';
import FoundationsMenu from './Foundations_menu';
import NonGovMenu from './NonGov_menu';
import LocalCollectionMenu from './LocalCollection_menu';


class Menu extends Component {
    state = {
        page: 1,
    }
   

    handleFoundation = () => {
        this.setState({
            page:1,
        })
    }

    handleOrganization = () => {
        this.setState({
            page:2,
        })
    }

    handleCollection = () => {
        this.setState({
            page:3,
        })
    }

    render() {
        const activeStyle = {
            border: '1px solid $darkerMain'
          };

        let page;
        if(this.state.page == 1) {
            page = <FoundationsMenu />
        } else if( this.state.page == 2) {
            page = <NonGovMenu />
        } else if( this.state.page == 3) {
            page = <LocalCollectionMenu />
        }
        return (
            
                <section name='Menu' className="grid-container menu-container" id='menu'>
                    <div className="row">
                        <div className="col-21 menu-title">
                            <h2>Komu pomagamy?</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-21 menu-decoration">
                            <img src={require('../../images/decoration-1.svg')} alt="decoration" className='decoration'/>
                        </div>
                    </div>
                    <nav className='menu-nav'>
                    <div className="row">
                        <div className="col-21  menu-types">
                                <div className="col-4"><div className="col-2" onClick={this.handleFoundation}><span className='menu-button'>Fundacjom</span></div></div>
                                <div className="col-4"><div className="col-2" onClick={this.handleOrganization}><span className='menu-button'>Organizacjom pozarządowym</span></div></div>
                                <div className="col-4"><div className="col-2" onClick={this.handleCollection}><span className='menu-button'>Lokalnym zbiórkom</span></div></div>
                            </div>
                        </div>
                        
                            
                        {page}
                            
                        
                    </nav>    

                    <div className="row">
                        <div className="col-21 menu-pages">
                            <div className="col-1"><Link to='/' className='pageNum' activeClassName="active">1</Link></div>
                            <div className="col-1"><Link exact to='/nongov' className='pageNum' activeClassName="active">2</Link></div>
                            <div className="col-1"><Link exact to='/collections' className='pageNum' activeClassName="active">3</Link></div>
                        </div>
                    </div>
                </section>
            
        )
    }
}

export default Menu;