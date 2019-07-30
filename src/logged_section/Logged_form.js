import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';

import LoggedNotification from './Logged_notification'

class LoggedFormItems extends Component {
    state = {
        checked: false,
        page: 1,
    }
    
    handleItem = (event) => {
        this.setState({
            [event.target.name] : event.target.value 
        })
    }

    // handleChange = () => {
    //     this.setState({
            
    //     })
    // }

    // handleSubmit = event => {
    //     // event.preventDefault();
    //     this.setState({
    //         page: 2
    //     })
    // }

    // handleItems = (event) => {
    //     let items;

        
    //     this.setState({
            
    //     })
    // }

    handleNextPage = () => {
        this.setState({
            page: 2
        })
    }

    render() {
        console.log(this.state)
        return (
            <section className="grid-container logged-form">
                <LoggedNotification />
                <div className="row">
                    <div className="col-21">
                        <div className="col-13">
                            {/* <form onSubmit={this.handleSubmit}> */}
                            <form>
                                <div className="row">
                                    <div className="col-3"></div>
                                    <div className="col-6 logged-form_page">
                                        <span>Krok {this.state.page}/4</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3"></div>
                                    <div className="col-6 logged-form_tip">
                                        <h3>Zaznacz co chcesz oddać</h3>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    
                                    <div className="row">
                                    <div className="col-3"></div>
                                        <div className="col-8 logged-form_check">
                                            <input type="checkbox" id="check1" name='check1' value='ubrania, które nadają się do ponownego użycia'/>
                                            <label htmlFor="check1" >
                                            ubrania, które nadają się do ponownego użycia
                                            </label>
                                        </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-3"></div>
                                        <div className="col-8 logged-form_check">
                                            <input type="checkbox" id="check2" value='ubrania do wyrzucenia'/>
                                            <label htmlFor="check2">
                                            ubrania do wyrzucenia
                                            </label>
                                        </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-3"></div>
                                        <div className="col-8 logged-form_check">
                                            <input type="checkbox" id="check3"/>
                                            <label htmlFor="check3">
                                            zabawki
                                            </label>
                                        </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-3"></div>
                                        <div className="col-8 logged-form_check">
                                            <input type="checkbox" id="check4"/>
                                            <label htmlFor="check4">
                                            książki
                                            </label>
                                        </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-3"></div>
                                        <div className="col-8 logged-form_check">
                                            <input type="checkbox" id="check5"/>
                                            <label htmlFor="check5">
                                            inne
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                    <div className="row">
                                        <div className="col-3"></div>
                                        <div className="col-8">
                                            <div className="form-check">
                                                <input onClick={this.handleNextPage} className="logged-form_button" type="submit" id="form-submit_button" value='Delej'/>
                                                {/* <label class="form-check-label" for="check5">
                                                Ubrania, które nadają się do ponownego użycia
                                                </label> */}
                                            </div>
                                        </div>
                                    </div>
                            </form>
                        </div>

                        
                    </div>
                </div>
            </section>
        )
    }
}

export default LoggedFormItems;