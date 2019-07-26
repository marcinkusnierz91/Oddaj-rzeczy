import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class HeaderButton extends Component {
    render() {
        return (
        <NavLink to='/signin' className='link'>
            <span>{this.props.text}</span>
        </NavLink>
        )
    }
}


export default HeaderButton