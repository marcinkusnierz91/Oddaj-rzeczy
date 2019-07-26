import React, {Component} from 'react';

class StartImage extends Component {
    render() {
        return (
            <div className='start_img'>
                <img src={require('../images/header_start_img.jpg')} alt="start_img"/>
            </div>
        )
    }
}

export default StartImage;