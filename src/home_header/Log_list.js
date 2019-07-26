import React, {Component} from 'react';
import SignInLink from './Sign_in_link';
import SignUpLink from './Sign_up_link';


class LogList extends Component {
    render() {
        return (
        
            <ul className='log-list'>
                <li><SignInLink/></li>
                <li><SignUpLink/></li>
            </ul>
            
        )
    }
}

export default LogList;