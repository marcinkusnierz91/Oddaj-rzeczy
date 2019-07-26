import React, { Component } from 'react';
import SpecialColumn from './Special_column';
import SpecialsButton from  './Specials_button'

class Specials extends Component {
    render() {
        return (
            <section name='Specials' className="grid-container" id='specials'>
                <div className="row">
                    <div className="col-21 specials-title">
                        <h2>Wystarczą 4 proste kroki</h2>                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-21 specials-decoration">
                        <img src={require('../../images/decoration-1.svg')} alt="decoration"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-21 specials-container">
                        <div className="col-13 specials-columns">
                            <SpecialColumn 
                            image={require('../../images/28.svg')} 
                            specialsText='Wybierz rzeczy' 
                            specialsItems='ubrania, zabawki,sprzęt i inne'
                            />
                            <SpecialColumn 
                            image={require('../../images/016.svg')} 
                            specialsText='Spakuj je' 
                            specialsItems='skorzystaj z worków na śmieci'
                            />
                            <SpecialColumn 
                            image={require('../../images/039.svg')} 
                            specialsText='Zdecyduj komu chesz pomóc' 
                            specialsItems='wybierz zaufane miejsce'
                            />
                            <SpecialColumn 
                            image={require('../../images/58.svg')} 
                            specialsText='Zamów kuriera' 
                            specialsItems='kurier przyjedzie w dogodnym terminie'
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-21 specials-button">
                        <SpecialsButton text='ZAŁÓŻ KONTO'/>
                    </div>
                </div>
            </section>
        )
    }
}



export default Specials;