import React, { Component } from 'react';



class DecorLine extends Component {
    render() {
        return(
            <div className="row">
                <div className="col-3"></div>
                <div className="col-4 decorLine"></div>
            </div>
        )
    }
}




class FourthStep extends Component {
 
    state = {
        page: 4,
    
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
            <form className='logged-form__fourth_page'>
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-10 logged-form_tip">
                        <h3>Wybierz organizację, której chcesz pomóc:</h3>
                    </div>
                </div>
                <div className="form-group row">
                    <DecorLine/>
                    <div className="row">
                    <div className="col-3"></div>
                        <div className="col-8 logged-form_check">
                            <input type="checkbox" id="check1" name='check1' />
                            <label htmlFor="check1" >
                            Fundacja "Dbam o zdrowie" 
                            </label>
                            <small className='firstSmall'>Cel i misja: Pomoc osobom znajdującym sie w trudnej sytuacji życiowej.</small>
                        </div>
                    </div>
                    <DecorLine/>
                    <div className="row">
                    <div className="col-3"></div>
                        <div className="col-8 logged-form_check">
                            <input type="checkbox" id="check2" name='check2' />
                            <label htmlFor="check2" >
                            Fundacja "Bez domu" 
                            </label>
                            <small className='secondSmall'>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</small>
                        </div>
                    </div>
                    <DecorLine/>
                    
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

export default FourthStep