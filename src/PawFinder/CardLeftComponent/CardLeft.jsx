import React, { Component } from 'react';
import './CardLeft.css';

export default class CardLeft extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
                 <>
                    <header>
                        <div className="img--text">
                            <img src="assets/logo.png" alt="logo" />
                            <a href="paw.com"><i className="fas fa-arrow-left"></i></a>
                            <h2 className="back--powdur">{this.props.itemName}</h2>
                        </div>
                        <div className="pure--set">
                            <h2 className="pure">Pure Set</h2>
                                <h2 className="cost"><span className="money--sign">{this.props.symbol}</span>{this.props.cost}.00</h2>
                            </div>
                    </header>
                    <div className="product--image">
                        <figure className="img">
                            <img src="assets/powdur.png" alt="powdur" className="powdur--img" />
                        </figure>
                    </div>
                    <footer>
                        <article>
                            <p>Powered by <span>Stripe</span></p>
                        </article>
                        <article className="footer--links">
                                <a href="google.com" target="_blank">Terms</a>
                                <a href="google.com" target="_blank">Privacy</a>
                        </article>
                    </footer>
            </>
        )
    }
}
