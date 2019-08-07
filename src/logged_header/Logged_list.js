import React, {Component} from 'react';
// import SignInLink from './Sign_in_link';
// import SignUpLink from './Sign_up_link';
// import SideBar from "./sidebar";
// import SelectBox from '../../node_modules/'





class LoggedList extends Component {
    
    logout = e => {
        console.log('Logging out')
    }
    
    render() {
        return (
        
            <ul className='log-list'>
                <li><div>Witaj Marcin</div></li>
                <li className='dropdown'>
                    hamburgier
                </li>
            </ul>
            
        )
    }
}

export default LoggedList;