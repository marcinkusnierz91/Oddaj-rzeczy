import React, { Component } from 'react';
import LoggedNotification from './Logged_notification'
import LoggedFormItems from './Logged_form_items';

class LoggedSection extends Component {
    render() {
        return (
            <>
                <LoggedNotification />
                <LoggedFormItems/>
            </>
        )
    }
}

export default LoggedSection;