import React, { Component } from 'react';



class SecondStep extends Component {
    
    

    state = {
        page: 2,
        quantity: '',
    }

    handleChange = (event) => {
        this.setState({
            quantity: event.target.value
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

    render() {
        return (
            <>
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6 logged-form_page">
                    <span>Krok {this.state.page}/5</span>
                </div>
            </div>
            <form className='logged-form__second_page'>
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-10 logged-form_tip">
                        <h3>Podaj liczbę 60l worków w które spakowałeś/aś rzeczy:</h3>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-7 ">
                            <span>Liczba 60 l worków:</span>
                            <select
                            value={this.state.item}
                            onChange={this.handleTitleChange} className='logged-form_select'>
                                <option >&nbsp;-&nbsp;wybierz&nbsp;-&nbsp;</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={4}>5</option>
                                <option value={4}>6</option>
                                <option value={4}>7</option>
                                <option value={4}>8</option>
                                <option value={4}>9</option>
                                <option value={4}>10</option>
                            </select>

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

export default SecondStep