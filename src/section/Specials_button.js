import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class SpecialsButton extends Component {
    render() {
        return (
        <NavLink to='/signup' className='link'>
            <span>{this.props.text}</span>
        </NavLink>
        )
    }
}


export default SpecialsButton