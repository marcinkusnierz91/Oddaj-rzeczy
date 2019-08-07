import React, { Component } from 'react';
import LoggedNotification from './Logged_notification'
import FirstStep from './Logged_form_first_step';
import SecondStep from './Logged_form_second_step';
import ThirdStep from './Logged_form_third_step';
import FourthStep from './Logged_form_fourth_step';
import FifthStep from './Logged_form_fifth_step';
import FormSummary from './Logged_form_summary';
import FormThanks from './Logged_form_thanks';

class LoggedForm extends Component {
    state = {
        checked: false,
        page: 1,
        street: '',
        city: '',
        postCode: '',
        phone: '',
        date: '',
        time: '',
        courierInfo: '',
    }


    nextPage = () => {
        this.setState({
            page: this.state.page + 1
        })
        
    }

    prevPage = () => {
        this.setState({
            page: this.state.page - 1
        })
        
    }
    
    render() {
        console.log(this.state)
        let page;
        let notification;
        if (this.state.page == 1) {
            page = <FirstStep nextPage={this.nextPage}/>;
            notification = <LoggedNotification text='Uzupełnij szczegóły dotyczące twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.'/>;
        } else if (this.state.page == 2){
            // let alias = <a htmlFor='#'>TUTAJ</a>
            page = <SecondStep nextPage={this.nextPage} prevPage={this.prevPage}/>;
            notification = <LoggedNotification text='Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.' />;
        } else if (this.state.page == 3) {
            page = <ThirdStep nextPage={this.nextPage} prevPage={this.prevPage}/>
            notification = <LoggedNotification text='Jeśli wiesz komu chcesz pomóc możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować oragnizacje po ich likalizacji bądź celu ich pomocy.' />;
        } else if (this.state.page == 4) {
            page = <FourthStep nextPage={this.nextPage} prevPage={this.prevPage} />
            notification = <LoggedNotification text='Na podstawie Twoich kryteriów oraz rzeczy, które masz do oddania wybraliśmy organizacje, którym możesz pomóc. Wybierz jedną, do której trafi Twoja przesyłka.' />
        } else if (this.state.page == 5) { 
            page = <FifthStep nextPage={this.nextPage} prevPage={this.prevPage}/>;
            notification = <LoggedNotification text='Podaj adres oraz termin odbioru rzeczy.' />
        } else if (this.state.page == 6) {
            page = <FormSummary nextPage={this.nextPage} prevPage={this.prevPage} callbackFromParent/>
        } else if (this.state.page == 7) {
            page = <FormThanks />
        } else {
            return null
        }
        return (
            <section className="grid-container logged-form">
                {notification}
                <div className="row">
                    <div className="col-21">
                        <div className="col-13">
                            
                            {page}
                        </div>

                        
                    </div>
                </div>
            </section>
        )
    }
}

export default LoggedForm;