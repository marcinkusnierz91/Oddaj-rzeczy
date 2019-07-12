
import React, {Component} from 'react';

class AboutImage extends Component {
    render() {
        return (
            <div className='about_img'>
                <img src={require('../images/about_image.svg')} alt="about_img"/>
            </div>
        )
    }
}

export default AboutImage;