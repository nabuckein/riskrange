import React, {useState, useEffect} from 'react';
import { TickerContext } from './context/tickerInfo.js';
import Prices from './Prices.js';
import Risks from './Risks.js';
import CardsButtons from './CardsButtons.js';



function Card(){
    return(
    <TickerContext.Consumer>{context => {
        return(
            <div className="cardsContainerDiv">
                <div className="cardsTitleDiv">
                    <p className="cardsTitleText">Test</p>
                </div>
                <Prices></Prices>
                <Risks></Risks>
                <CardsButtons></CardsButtons>
            </div>
            )
        }}
        </TickerContext.Consumer>
    )
    
    
}

export default Card;