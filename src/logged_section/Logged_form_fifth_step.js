import React, { Component } from 'react';

class FifthStep extends Component {
 
    state = {
        page: 5,
        street: '',
        city: '',
        postCode: '',
        phone: '',
        date: '',
        time: '',
        courierInfo: '',
    
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClick1 = (event) => {
        if(typeof this.props.nextPage == 'function') {
            this.props.nextPage(this.state)
        } else {
            console.log('To nie funkcja ')
        }
        event.preventDefault();
        // this.props.nextPage(this.state)
    }
    
    handleClick2 = (event) => {
        if(typeof this.props.prevPage == 'function') {
            this.props.prevPage(this.state)
            
        } else {
            console.log('To nie funkcja')
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
            <form className='logged-form__fifth_page col-21'>
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-10 logged-form_tip">
                        <h3>Podaj adres oraz termin odbioru rzeczy przez kuriera</h3>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-5">
                            <div className="row">
                                <h4>Adres odbioru</h4>
                            </div>
                            <div className="row">
                                <label>Ulica</label>
                                <input type="text" value={this.state.street} name='street' onChange={this.handleChange}/>
                            </div>
                            <div className="row">
                                <label>Miasto</label>
                                <input type="text" value={this.state.city} name='city' onChange={this.handleChange}/>
                            </div>
                            <div className="row">
                                <label>Kod pocztowy</label>
                                <input type="text" value={this.state.postCode} name='postCode'onChange={this.handleChange}/>
                            </div>
                            <div className="row">
                                <label>Numer telefonu</label>
                                <input  type="text" value={this.state.phone} name='phone' onChange={this.handleChange}/>
                            </div>
                        
                        </div>
                        <div className="col-5">
                            <div className="row">
                                <h4>Termin odbioru</h4>
                            </div>
                            <div className="row">
                                <label>Data</label>
                                <input type="text" value={this.state.date} name='date'onChange={this.handleChange}/>
                            </div>
                            <div className="row">
                                <label>Godzina</label>
                                <input type="text" value={this.state.time} name='time' onChange={this.handleChange}/>
                            </div>
                            <div className="row">
                                <label className='courieeLabel'>Uwagi dla kuriera</label>
                                <textarea className='courierInfo' type="text" value={this.state.courierInfo} name='courierInfo'onChange={this.handleChange}/>
                            </div>
                        
                        </div>
                    </div>
                    
                </div>
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-3">
                            <div className="form-check">
                                <input onClick={this.handleClick2} className="logged-form_button second-page" type="submit" id="form-submit_button" value='Wstecz'/>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="form-check">
                                <input onClick={this.handleClick1} className="logged-form_button second-page" type="submit" id="form-submit_button" value='Delej'/>
                            </div>
                        </div>
                    </div>
            </form>
            </>
        )
    }
}

export default FifthStep