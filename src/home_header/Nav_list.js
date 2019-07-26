import React, {Component} from 'react';
import {Link, Events} from 'react-scroll';
// import { NavHashLink as Link } from 'react-router-hash-link';



class NavList extends Component {
    
    componentDidMount() {
        Events.scrollEvent.register('begin', function () {
            console.log("start", arguments);
        });

        Events.scrollEvent.register('end', function () {
            console.log("end", arguments);
        });
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('start');
        Events.scrollEvent.remove('end');
    }
    
    render() {
        return (
        <ul className='nav-list'>
            <li><Link to='Header' className='header-navlink' spy={true} smooth={true} duration={500}>Start</Link></li>
            <li><Link to='Specials' className='header-navlink' spy={true} smooth={true} duration={500}>O co chodzi?</Link></li>
            <li><Link to='About' className='header-navlink' spy={true} smooth={true} duration={500}>O nas</Link></li>
            <li><Link to='Menu' className='header-navlink' spy={true} smooth={true} duration={500}>Fundacje i organizacje</Link></li>
            <li><Link to='Form' className='header-navlink' spy={true} smooth={true} duration={500}>Kontakt</Link></li>
        </ul>
        )
    }
}


export default NavList