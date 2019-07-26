import React, {Component} from 'react';
import LoggedHeader from './logged_header/LoggedHeader';
import Footer from './home_footer/Footer';
import LoggedSection from './logged_section/Logged_section';

class LoggedPage extends Component {
  render() {
    return (
        <>
          <LoggedHeader />
          <LoggedSection />
          <Footer /> 
        </>
    )
  }
}

export default LoggedPage;