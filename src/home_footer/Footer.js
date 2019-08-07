import React, { Component } from 'react';
import Form from '../home_footer/Form'

class Footer extends Component {
    
    
    render() {
        return (
            <footer className="grid-container footer " >
                <div className="row">
                    <div className="col-18 footer-title">
                        <div className="col-5">
                            <h2>Skontaktuj sie z nami</h2>
                        </div>
                    </div>
                <div/>
                <div className="row">
                    <div className="col-18 footer-decoration">
                        <div className="col-5">
                            <img src={require('../images/decoration-1.svg')} alt="decoration"/>
                        </div>
                    </div>
                </div>
                <Form />  
            </div>
            <div className="row">
                <div className="col-21 footer-end">
                    <div className="col-12">
                        <h3>Copyright 2015 © by Anna Dadej</h3>
                    </div>
                    <div className="col-7">
                        <div className="col-1">
                            <a className='facebook' href="https://www.facebook.com/"><img src={require('../images/fb.svg')} alt="facebook"/></a>
                        </div>
                        <div className="col-1">
                            <a className='instagram' href="https://www.instagram.com/?hl=pl"><img src={require('../images/ig.svg')} alt="instagram"/></a>
                        </div>
                    </div>
                </div>
            </div>
            </footer>
        )
    }
}

export default Footer;