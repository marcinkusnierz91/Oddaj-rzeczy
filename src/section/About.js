import React, { Component } from 'react';
import AboutImage from './About_img';


class About extends Component {
    render() {
        return (
            <section name='About' className="grid-container" id='about'>
                <div className="row">
                    <div className="col-21 about-container">
                        <div className="col-10 about-first_col">
                            <div className="col-7 about-info">
                                <h3>O nas</h3>
                                <img src={require('../images/decoration-1.svg')} alt="decoration" className='decoration'/>
                                <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                                <img src={require('../images/Signature.svg')} alt="signature" className='signature' />
                            </div>
                        </div>
                        <div className="col-11 '">
                            <AboutImage />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About