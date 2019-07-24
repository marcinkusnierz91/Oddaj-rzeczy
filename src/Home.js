import React, {Component} from 'react';
import Header from './header/Header'
import MainSection from './section/Main_section';
import Footer from './footer/Footer';


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