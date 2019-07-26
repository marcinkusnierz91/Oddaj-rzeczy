import React, { Component } from 'react';

class Organization extends Component {
    render() {
        return (
            <>
                <h2> {this.props.organization} {this.props.title}</h2>
                <h3>Cel i misja: {this.props.description}</h3>
                <div className='line'></div>
            </>
        )
    }
}

export default Organization