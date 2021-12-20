import React from 'react';
import CardLeft from './CardLeftComponent/CardLeft';
import CardRight from './CardRightComponent/CardRight';
import './PawFinderComp.css';
// import Link from 'react-router-dom';

class CardContent extends React.Component {
    constructor(props){
        super();
        this.state = {
            itemName: 'Back Powdur',
            cost: 65.00,
            symbol: '$',
            email: ``,
            cardSerial: ``,
            date: ``,
            cvc: ``,
            nameUser: ``,
            country: ['United States', 'Nigeria'],
            zipCountry: ``
        }

        this.emailInput = this.emailInput.bind(this);
    }

    emailInput(e){
        this.setState({
            email: e.target.value
        })
    }

    cardNumber = (e) => {
        this.setState({
            cardSerial: e.target.value
        })
    }

    dateChange = (e) => {
        this.setState({
            date: e.target.value
        })
    };

    cvcChange = (e) => {
        this.setState({
            cvc: e.target.cvc
        })
    };

    nameChange = (e) => {
        this.setState({
            nameUser: e.target.value
        })
    };

    countryChange = (e) => {
        this.setState({
            country: e.target.value
        })
    };

    zipChange = (e) => {
        this.setState({
            zipCountry: e.target.value
        })
    };

    render(){
        const {date, cvc, nameUser, country, zipCountry, email} = this.state;
        return(
            <>
                <main id="wrapper">
                    <section className='left--card'>
                        <CardLeft
                            cost={this.state.cost} 
                            itemName={this.state.itemName} 
                            symbol={this.state.symbol} 
                        />
                    </section>

                    {/* RIGHT CARD SECTION */}

                    <section className='right--card'>
                        <CardRight 
                            email={email} 
                            emailChange={this.emailInput}
                            cardSerial={this.state.cardSerial}
                            cardNumber={this.cardNumber}
                            date={date}
                            dateChange={this.dateChange}
                            cvc={cvc}
                            cvcChange={this.cvcChange}
                            nameUser={nameUser}
                            nameChange={this.nameChange}
                            country={country}
                            countryChange={this.countryChange}
                            zipCountry={zipCountry}
                            zipChange={this.zipChange}
                            cost={this.state.cost}
                            dollar={this.state.symbol} />
                    </section>
                </main>
            </>
        )
    }
}

export default CardContent;