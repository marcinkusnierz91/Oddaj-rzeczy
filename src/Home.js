import React, {Component} from 'react';
import Header from './home_header/Header'
import MainSection from './home_section/Main_section';
import Footer from './home_footer/Footer';


class Home extends Component {
  render() {
    return (
        <>
          <Header />
          <MainSection />
          <Footer />
        </>
    )
  }
}

export default Home;