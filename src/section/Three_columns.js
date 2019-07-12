import React, { Component } from 'react';
import InfoColumn from './Info_column';

class ThreeColumns extends Component {
    render() {
        return (
            <section className="grid-container" name='Three_columns' id='three_columns'>
                <div className="row">
                    <div className="col-21 info">
                        <InfoColumn infoNumber={10} infoText='ODDANYCH WORKÓW'/>
                        <InfoColumn infoNumber={5} infoText='WSPARTYCH ORGANIZACJI'/>
                        <InfoColumn infoNumber={7} infoText='ZOORGANIZOWANYCH ZBIÓREK'/>
                    </div>
                </div>
            </section>
        )
    }
}



export default ThreeColumns