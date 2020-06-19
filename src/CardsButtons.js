import React, {useState, useEffect} from 'react';
import { TickerContext } from './context/tickerInfo.js';

import './css/cardsButtons.css';
import './css/cardsButtons400.css';
import './css/cardsButtons700.css';

function CardsButtons(props){     
    //const [ticker, getTicker] = useState(props.ticker);
    
    //console.log(props.ticker);
    
    return(
        <TickerContext.Consumer>{context => {

            return(
                <div className="cardsButtonsContainer">
                    <button className="cardsButtons">BUTTON 1</button>
                    <button className="cardsButtons">BUTTON 2</button>
                    <button className="cardsButtons" onClick={()=>context.removeCard(props.ticker)}>REMOVE</button>
                </div>
                )
            }}
        </TickerContext.Consumer>
    )
}



export default CardsButtons;
