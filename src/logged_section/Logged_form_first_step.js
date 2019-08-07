import React, { Component } from 'react';


class FirstStep extends Component {
    
    state = {
        page: 1
    }

    handleClick = (event) => {
        if(typeof this.props.nextPage == 'function') {
            this.props.nextPage(this.state)
        } else {
            console.log('To nie funkcja ')
        }
        event.preventDefault();
        // this.props.nextPage(this.state)
    }
    
    render() {
        return (
            <>
            <div className="row">
                                <div className="col-3"></div>
                                <div className="col-6 logged-form_page">
                                    <span>Krok {this.state.page}/5</span>
                                </div>
                            </div>
            <form>
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
                            <input type="checkbox" id="check1" name='check1' />
                            <label htmlFor="check1" >
                            ubrania, które nadają się do ponownego użycia
                            </label>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-3"></div>
                        <div className="col-8 logged-form_check">
                            <input type="checkbox" id="check2" />
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
                        <div className="col-3">
                            <div className="form-check">
                                <input onClick={this.handleClick} className="logged-form_button" type="submit" id="form-submit_button" value='Delej' name={1}/>
                                {/* <label class="form-check-label" for="check5">
                                Ubrania, które nadają się do ponownego użycia
                                </label> */}
                            </div>
                        </div>
                    </div>
            </form>
            </>
        )
    }
}

export default FirstStep