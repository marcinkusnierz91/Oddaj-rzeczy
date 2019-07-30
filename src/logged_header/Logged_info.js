import React, { Component } from 'react';


class LoggedInfo extends Component {
    render() {
        return (
            <>
            <div className="row">
                <div className="col-10 logged-title">
                    <h2>Oddaj rzeczy których już nie chcesz <br/> POTRZEBUJĄCYM</h2>
                    
                </div>
            </div>
            <div className="row">
                <div className="col-10 decoration">
                    <img src={require('../images/decoration-1.svg')} alt="decoration"/>
                </div>
            </div>
            <div className="row">
                <div className="col-10 logged-title">
                    <h2>Wystarczą 4 proste kroki</h2>
                    
                </div>
            </div>
            <div className="row">
                <div className="col-10 logged_header-info">
                    <div className='rectangle'><span>1 <br/></span>Wybierz <br/> &nbsp;&nbsp;rzeczy</div>
                    <div className='rectangle'><span>2 <br/></span>Spakuj je<br/>&nbsp;w worki</div>
                    <div className='rectangle'><span>3 <br/></span>Wybierz <br/>fundację</div>
                    <div className='rectangle'><span>4 <br/></span>Zamów <br/>kuriera</div>
                </div>
            </div>
        </>
        )
    }
}

export default LoggedInfo;