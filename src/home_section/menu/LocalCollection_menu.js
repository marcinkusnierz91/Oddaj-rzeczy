import React, { Component } from 'react';
import Items from './Items';
import Organization from './Organization';


class LocalCollectionMenu extends Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-21 menu-description">
                        <h3 className='col-9'>W naszej bazie znajdziesz listę zweryfikowanych lokalnych zbiórek, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-21 menu-info_container">
                        <div className="col-17 menu-info">
                            <div className="col-8 menu-info_foundation">
                                <Organization organization='Lokalna zbiórka' title='"Lorem Ipsum"' description='Lorem ipsum dolor sit amet consectetur.'/> 
                                <Organization organization='Lokalna zbiórka' title='"Lorem Ipsum"' description='Lorem ipsum dolor sit amet consectetur.'/>
                                <Organization organization='Lokalna zbiórka' title='"Lorem Ipsum"' description='Lorem ipsum dolor sit amet consectetur.'/>
                            </div>
                            <div className="col-7 menu-info_items">
                                <Items items='Lorem ipsum dolor sit amet consectetur.'/>
                                <Items items='Lorem ipsum dolor sit amet consectetur.'/>
                                <Items items='Lorem ipsum dolor sit amet consectetur.'/>
                            </div>
                        </div>
                    </div>
                </div>
                
            </> 
        )
    }
}

export default LocalCollectionMenu;