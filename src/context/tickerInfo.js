import React, { createContext, Component } from 'react';

export const TickerContext = createContext();

class TickerContextProvider extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentTicker: 'N/A', //Keep track of currently entered ticker in TickerInput (non-submitted from TickerInput yet), note it is cleared when the user hits the SUBMIT button
            cards:[], //the newly added cards will be added to this array when they're submitted from the TickerInput component
            socket: new WebSocket('wss://ws.finnhub.io?token=bqpbv77rh5rced4gn3n0') // Need only one socket? (setup in a main component) I can request info from different components?
       
        }

    }
    componentDidMount=()=>{
        var so = this.state.socket;
        so.addEventListener('open', function (event) {
            console.log(event)
        });
    }
    socketAction=(tickerToUpdate)=>{
        var so = this.state.socket;
        so.send(JSON.stringify({'type':'subscribe', 'symbol': tickerToUpdate}));
        
        so.onmessage=(event)=>{
            //console.log(event.type);
            //console.log(event.data);
            //console.log(JSON.parse(event.data));
            var dataObj = JSON.parse(event.data);

            var cards = this.state.cards; //current cards state

            if(typeof dataObj.data !== 'undefined'){
                var symbol = dataObj.data[0].s;
                var price = dataObj.data[0].p;
                //console.log(symbol);
                //console.log(price);
                var cardsArr = [];
                for (var x in cards){
                    if(cards[x].ticker === symbol){
                        cards[x].lastPrice = price;
                    }
                    cardsArr.push(cards[x]);
                }
                this.setState({cards:cardsArr});

            }
            
            
        }
    }
    setCurrentTicker=()=>{
        var inp = document.getElementById('tickerInput');
        this.setState({currentTicker:inp.value.toUpperCase()});
    }
    removeCard(tickerToRemove){        
        var cardsArr = this.state.cards;
        cardsArr.forEach(card=>{
            if(card.ticker===tickerToRemove){
                cardsArr.splice(cardsArr.indexOf(card),1);
                this.setState({cards:cardsArr});
            }
        })
    }

    getTickerInfo=()=>{
        var cardsArr = this.state.cards;
       
        var tikUpp = this.state.currentTicker.toUpperCase();
        fetch('http://localhost:5000/' + tikUpp)
            .then(res => res.json())
                .then((data)=>{
                        var tempTicker = {
                            ticker: tikUpp,
                            lastPrice:data.lastPrice,
                            openPrice:data.openPrice,
                            highPrice:data.highPrice,
                            lowPrice:data.lowPrice
                        }
                        cardsArr.push(tempTicker);
                        this.setState({cards:cardsArr, currentTicker:""});
        });
    }
    updateTickerInfo(tickerToUpdate){

    }
    render() { 
        //console.log(this.state.cards);
        if(this.state.cards.length>0){
            var lastEl = this.state.cards.length;
            console.log(this.state.cards[lastEl-1].ticker);
        }
        return (
            <TickerContext.Provider value={{...this.state, socketAction:(tickerToUpdate)=>this.socketAction(tickerToUpdate), getTickerInfo:this.getTickerInfo, removeCard:(tickerToRemove)=>this.removeCard(tickerToRemove), setCurrentTicker:this.setCurrentTicker}}>
                {this.props.children}
            </TickerContext.Provider>
          );
    }
}
 
export default TickerContextProvider;