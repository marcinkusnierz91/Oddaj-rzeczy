import React, { Component } from 'react';


class LoggedNotification extends Component {
    render() {
        return (
            // <section className="grid-container notification">
                <div className="row notification">
                    <div className="col-3"></div>
                    <div className="col-15 notification-info">
                        <h2>Ważne!</h2>
                        <h3>{this.props.text}</h3>
                    </div>
                </div>
            // </section>
        )
    }
}

export default LoggedNotification;