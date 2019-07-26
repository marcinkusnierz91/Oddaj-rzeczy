import React, {Component} from 'react';

class LoggedImg extends Component {
    render() {
        return (
            <div className='start_img'>
                <img src={require('../images/header_logged_img.jpg')} alt="logged_img"/>
            </div>
        )
    }
}

export default LoggedImg;