import React, { Component } from 'react';

class FormThanks extends Component {
 
    state = {
        page: 7,    
    }


    render() {
        return (
            
            <div className='logged-form__thanks_page col-21'>
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-7">
                        <h3>Dziękujemy za przesłanie formularza. <br/>Na maila prześlemy wszelkie <br/> informacje o odbiorze.</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-7">
                        <img src={require('../images/decoration-1.svg')} alt="decoration"/>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default FormThanks