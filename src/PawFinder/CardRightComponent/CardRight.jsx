import React, { Component } from 'react';
import './CardRight.css';
import CountryAPI from './CountryAPI';

export default class CardRight extends Component {
    render() {
        return (
            <>
                <form className="pay--form">
                    <div className="pay--panel">
                        <img src="assets/apple-pay.png" alt="" />
                    </div>
                    <div className="option">
                        <span></span>
                            <h4>Or pay with card</h4>
                        <span></span>
                    </div>
                    <div className="input">
                        <label><p className='label'>Email</p></label>
                        <input type="email" value={this.props.email} onChange={this.props.emailChange} required />
                    </div>
                    <div className="input">
                        <label><p className='label'>Card Type and Details</p></label>
                        <div className="region">
                            <div className="card--details">
                                <input type="number" placeholder="1234 1234 1234 1234" value={this.props.cardSerial} onChange={this.props.cardNumber} required />
                                <div className="card--logo">
                                    <img src="assets/visa.png" alt="" />
                                    <img src="assets/mastercard.png" alt="" />
                                    <img src="assets/express.png" alt="" />
                                    <img src="assets/discover (2).png" alt="" />
                                </div>
                            </div>
                            <div className="card--details">
                            <div className="card--details--bottom">
                            <div className="card--month">
                                <input type="date" placeholder="MM / YY" value={this.props.date} onChange={this.props.dateChange}/>
                            </div>
                            <div className="card--cvc">
                                <input type="number" placeholder="CVC" value={this.props.cvc} onChange={this.props.cvcChange} required/>                                    
                            <div className="cvc--img">
                                <img src="assets/atm.png" alt="" />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                                
                </div>
                    <div className="input">
                        <label><p className='label'>Name on Card</p></label>
                            <input type="text" value={this.props.nameUser} name="email" onChange={this.props.nameChange} required />
                        </div>

                            {/* country or region */}

                <div className="input">
                    <label><p className='label'>Country or Region</p></label>
                    <div className="region">
                        <div className="card--details">
                            <select name="select" value={this.props.country} onChange={this.props.countryChange}>
                                {CountryAPI.map((i)=>(
                                                <option key="index" value={i}>{i}</option>
                                            ))}
                            </select>
                        </div>
                    <div className="card--details">
                        <div className="card--details--bottom">
                            <div className="card--zip">
                                <input type="number" placeholder="ZIP" value={this.props.zipCountry} onChange={this.props.zipChange} required />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="input">
                    <input type="submit" value={`Pay ${this.props.dollar} ${this.props.cost}.00`} className="submit" />
                </div>
                </form>   
            </>
        )
    }
}
