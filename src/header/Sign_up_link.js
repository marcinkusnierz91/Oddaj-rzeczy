import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class SignUpLink extends Component {
    render() {
        return (
        <NavLink to='/signup' className='link'>
            <span>Załóż konto</span>
        </NavLink> 
        )
    }
}


export default SignUpLink