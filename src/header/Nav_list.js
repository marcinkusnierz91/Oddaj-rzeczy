import React, {Component} from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';



class NavList extends Component {
    render() {
        return (
        <ul className='nav-list'>
            <li><a href="#three_columns">Start</a></li>
            <li><a href="#specials">O co chodzi?</a></li>
            <li><a href="#about">O nas</a></li>
            <li><a href="#menu">Fundacje i organizacje</a></li>
            <li><a href="#form">Kontakt</a></li>
        </ul>
        )
    }
}


export default NavList