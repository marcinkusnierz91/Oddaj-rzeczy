import React, { Component } from 'react';



class SpecialColumn extends Component {
    render() {
        return (
            <div className="col-2 special-column">
                <img src={this.props.image} alt="hands"/>
                <h2>{this.props.specialsText}</h2>
                <div className='underline'></div>
                <h2>{this.props.specialsItems}</h2>
            </div>
        )
    }
}



export default SpecialColumn