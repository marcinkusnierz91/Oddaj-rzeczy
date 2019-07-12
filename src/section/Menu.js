import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Foundation from '../section/Foundation';
import Items from '../section/Items';
import FoundationsMenu from './Foundations_menu';



class Menu extends Component {
    render() {
        return (
            <section className="grid-container menu-container" id='menu'>
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
                <div className="row">
                    <div className="col-21  menu-types">
                        <div className="col-4"><div className="col-2">Fundacjom</div></div>
                        <div className="col-4"><div className="col-2">Organizacjom pozarządowym</div></div>
                        <div className="col-4"><div className="col-2">Lokalnym zbiórkom</div></div>
                    </div>
                </div>
    
                <FoundationsMenu />
                    

                <div className="row">
                    <div className="col-21 menu-pages">
                        <div className="col-1">1</div>
                        <div className="col-1">2</div>
                        <div className="col-1">3</div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Menu;