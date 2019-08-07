import React, { Component } from 'react';
import HeaderButton from './Header_button';

class GiveStaff extends Component {
    render() {
        return (
            <>
            <div className="row">
                <div className="col-11 title">
                    <h2>Zacznij pomagać!</h2>
                    <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-11 decoration">
                    <img src={require('../images/decoration-1.svg')} alt="decoration"/>
                </div>
            </div>
            <div className="row">
                <div className="col-11 header-buttons">
                    <HeaderButton text='ODDAJ RZECZY'/>
                    <HeaderButton text='ZOORGANIZUJ ZBIÓRKĘ'/>
                </div>
            </div>
        </>
        )
    }
}

export default GiveStaff;