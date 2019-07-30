import React, {Component} from 'react';
import LoggedHeader from './logged_header/LoggedHeader';
import LoggedFooter from './logged_footer/LoggedFooter';
import LoggedSection from './logged_section/Logged_section';

class LoggedPage extends Component {
  render() {
    return (
        <>
          <LoggedHeader />
          <LoggedSection />
          <LoggedFooter /> 
        </>
    )
  }
}

export default LoggedPage;