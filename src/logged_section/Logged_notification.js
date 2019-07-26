import React, { Component } from 'react';


class LoggedNotification extends Component {
    render() {
        return (
            <section className="grid-container notification">
                <div className="row">
                    <div className="col-21 notification-info">
                        <h2>Ważne!</h2>
                        <h3>Uzupełnij szczegóły dotyczące twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</h3>
                    </div>
                </div>
            </section>
        )
    }
}

export default LoggedNotification;