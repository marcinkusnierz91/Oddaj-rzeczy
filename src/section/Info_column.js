import React, { Component } from 'react';


class InfoColumn extends Component {
    render() {
        return (
            <div className='row'>
                <div className="col-5 info-column">
                    <h2>{this.props.infoNumber}</h2>
                    <h3>{this.props.infoText}</h3>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipisc 
                        Pellentesque vel enim a elit viverra elementuma.
                        Aliquam erat volutpat.
                    </h4>
                </div>
            </div>
        )
    }
}



export default InfoColumn