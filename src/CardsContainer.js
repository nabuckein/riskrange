import React, {useState, useEffect} from 'react';
import { TickerContext } from './context/tickerInfo.js';
import Card from './Card.js';
import Prices from './Prices.js';
import Risks from './Risks.js';
import CardsButtons from './CardsButtons.js';
import './css/cardsContainer.css';
import './css/cardsContainer400.css';
import './css/cardsContainer700.css';

class CardsContainer extends React.Component{    
    constructor(props) {
    super(props);
    this.state = {
      //socket: new WebSocket('wss://ws.finnhub.io?token=bqpbv77rh5rced4gn3n0') // Need only one socket? (setup in a main component) I can request info from different components?
      
    };
  }

    updateInfo=(tickerToUpdate)=>{
        /*setInterval(() => {
            console.log("TESTING UPDATE INFO: ");
            fetch('http://localhost:5000/' + tickerToUpdate)
                .then(res => res.json())
                    .then((data)=>{
                            var tempTicker = {
                                ticker: tickerToUpdate,
                                lastPrice:data.lastPrice,
                                openPrice:data.openPrice,
                                highPrice:data.highPrice,
                                lowPrice:data.lowPrice
                            }
                            console.log(tempTicker);
            })
        }, 2000); */

        
    }
    /*componentDidMount=()=>{
        var so = this.state.socket;
        so.addEventListener('open', function (event) {
            console.log(event)
        });
    }
    socketAction=(tickerToUpdate)=>{
        var so = this.state.socket;
        so.send(JSON.stringify({'type':'subscribe', 'symbol': tickerToUpdate}));
        
        so.onmessage=(event)=>{
            console.log(event.type);
            console.log(event.data);
        }
    }
*/
    render(){
    
    
    return(
        <TickerContext.Consumer>{context => {
            var cardsArr = [];
            
            
            for(var x in context.cards){
                
                var ticker = context.cards[x].ticker;
                context.socketAction(ticker);
                //var sock = context.socket;
                cardsArr.push(
                    <div key={"card" + x} className="cards">
                        <div className="cardsContainerDiv">
                            <div className="cardsTitleDiv">
                                <p className="cardsTitleText">{context.cards[x].ticker}</p>
                            </div>
                            {/* eslint-disable-next-line no-loop-func*/}
                            <Prices updateInfo={(tickerToUpdate)=>this.updateInfo(ticker)} lastPrice={context.cards[x].lastPrice} highPrice={context.cards[x].highPrice} lowPrice={context.cards[x].lowPrice} openPrice={context.cards[x].openPrice}></Prices>
                            <Risks lastPrice={context.cards[x].lastPrice} highPrice={context.cards[x].highPrice} lowPrice={context.cards[x].lowPrice} openPrice={context.cards[x].openPrice}></Risks>
                            <CardsButtons ticker={context.cards[x].ticker}></CardsButtons>
                        </div>
                    </div>
                );
            }
                    if(context.cards.length>0){
                        return cardsArr;
                    }
                    else return (
                        <div className="noCardsMessageDiv">
                            <p className="noCardsMessage"> Please enter a ticker in the input bar.</p>
                        </div>
                    )
                                
                

            
            
        }}
        </TickerContext.Consumer>

    
        )
    }
}

export default CardsContainer;
