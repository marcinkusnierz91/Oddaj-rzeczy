import React, { Component } from 'react';



class ThirdStep extends Component {
    
    

    state = {
        page: 3,
        city: '',
        clicked: false,
        orgName: '',
    }

    handleChange = (event) => {
        this.setState({
            city: event.target.value
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
            console.log('To nie funkcja kierwa')
        }
        event.preventDefault();
        // this.props.nextPage(this.state)
    }

    handleStyle = (event) => {
        this.setState({
            clicked: !this.state.clicked
        })
        
    }

    handleOrgName = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
        })
    }

    render() {
        let spanStyle = {
            backgroundColor: (this.state.clicked?'#f8d113':'#eeede9')
        }
        return (
            <>
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6 logged-form_page">
                    <span>Krok {this.state.page}/5</span>
                </div>
            </div>
            <form className='logged-form__third_page'>
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-10 logged-form_tip third-page">
                        <h2>Lokalizacja:</h2>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="row">
                            <div className="col-3"></div>
                            <div className="col-7 ">
                                <select
                                value={this.state.city}
                                onChange={this.handleChange} className='logged-form_select'>
                                    <option >&nbsp;-&nbsp;wybierz&nbsp;-&nbsp;</option>
                                    <option value='Wrocław'>Wrocław</option>
                                    <option value='Bielsko-Biała'>Bielsko-Biała</option>
                                    <option value='Jawor'>Jawor</option>
                                    <option value='Warszawa'>Warszawa</option>
                                    <option value='Katowice'>Katowice</option>
                                    <option value='Kraków'>Kraków</option>
                                    <option value='Wadowice'>Wadowice</option>
                                </select>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3"></div>
                            <div className="col-7 third-page">
                                <h3>Komu chcesz pomóc?</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3"></div>
                            <div className="col-7 third-page__checkbox">
                                <span id={1} style={spanStyle} onClick={this.handleStyle} className='who_we-help'>dzieciom</span>
                                <span id={2} style={spanStyle} onClick={this.handleStyle} className='who_we-help'>samotnym matkom</span>
                                <span style={spanStyle} onClick={this.handleStyle} className='who_we-help'>bezdomnym</span>
                                <span style={spanStyle} onClick={this.handleStyle} className='who_we-help'>niepełnosprawnym</span>
                                <span style={spanStyle} onClick={this.handleStyle} className='who_we-help'>osobom starszym</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3"></div>
                            <div className="col-7 third-page">
                                <h3>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3"></div>
                            <div className="col-7">
                                <input className='third-step__org_name' onChange={this.handleOrgName} type="text" value={this.state.orgName} id='orgName'/>
                            </div>
                        </div>
                        


                    
                </div>
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-3">
                            <div className="form-check">
                                <input onClick={this.handleClick2} className="logged-form_button " type="submit" id="form-submit_button" value='Wstecz'/>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="form-check">
                                <input onClick={this.handleClick1} className="logged-form_button " type="submit" id="form-submit_button" value='Delej'/>
                            </div>
                        </div>
                    </div>
            </form>
            </>
        )
    }
}

export default ThirdStep