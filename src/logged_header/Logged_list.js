import React, {Component} from 'react';
// import SignInLink from './Sign_in_link';
// import SignUpLink from './Sign_up_link';


class LoggedList extends Component {
    render() {
        return (
        
            <ul className='log-list'>
                {/* <li><SignInLink/></li>
                <li><SignUpLink/></li> */}
                <li><div>Witaj imię</div></li>
                <li>tu bedzie 'hamburgier'</li>
            </ul>
            
        )
    }
}

export default LoggedList;