import React, { Component } from 'react';
import ThreeColumns from '../section/Three_columns';
import Specials from '../section/Specials';
import About from '../section/About';
import Menu from '../section/Menu'


class MainSection extends Component {
    render() {
        return (
            <section className="grid-container"> 
                <ThreeColumns />
                <Specials />
                <About/>
                <Menu />
            </section>
        )
    }
}



export default MainSection