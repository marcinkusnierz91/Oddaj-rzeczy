import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class SignInLink extends Component {
    render() {
        return (
        <Link to='/signin' className='link'>
            <span >Logowanie</span>
        </Link>
        )
    }
}


export default SignInLink