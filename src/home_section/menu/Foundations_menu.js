import React, { Component } from 'react';
import Organization from './Organization';
import Items from './Items';


class FoundationsMenu extends Component {
    render() {
        return (
            <>
                
                <div className="row">
                    <div className="col-21 menu-description">
                        <h3 className='col-9'>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-21 menu-info_container">
                        <div className="col-17 menu-info">
                            <div className="col-8 menu-info_foundation">
                                <Organization organization='Fundacja' title='"Dbam o zdrowie"' description='Pomoc osobom znajdującym się w trudnej sytuacji życiowej.'/>
                                <Organization organization='Fundacja' title='"Dla dzieci"' description='Pomoc dzieciom z ubogich rodzin.'/>
                                <Organization organization='Fundacja' title='"Bez domu"' description='Pomoc dla osób nie posiadających miejsca zamieszkania.'/>
                            </div>
                            <div className="col-7 menu-info_items">
                                <Items items='ubrania, jedzenie, sprzęt AGD, meble, zabawki'/>
                                <Items items='ubrania, meble, zabawki'/>
                                <Items items='ubrania, jedzenie, ciepłe koce'/>
                            </div>
                        </div>
                    </div>
                </div>

        </> 
        )
    }
}

export default FoundationsMenu;