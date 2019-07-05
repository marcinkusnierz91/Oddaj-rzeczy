import React, {Component} from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';



class NavList extends Component {
    render() {
        return (
        <ul className='nav-list'>
            <li>Start</li>
            <li>O co chodzi?</li>
            <li>O nas</li>
            <li>Fundacje i organizacje</li>
            <li>Kontakt</li>
        </ul>
        )
    }
}


export default NavList