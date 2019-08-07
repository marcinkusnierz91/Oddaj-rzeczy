import React, { Component } from 'react';
import ThreeColumns from './three_columns/Three_columns';
import Specials from './specials/Specials';
import About from './about/About';
import Menu from './menu/Menu'


class MainSection extends Component {
    render() {
        return (
            <section className="grid-container " > 
                <ThreeColumns />
                <Specials />
                <About/>
                <Menu />
            </section>
        )
    }
}



export default MainSection