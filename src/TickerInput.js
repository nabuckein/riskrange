import React, {useState, useEffect} from 'react';
import { TickerContext } from './context/tickerInfo.js';
import './css/tickerInput.css';
import './css/tickerInput400.css';
import './css/tickerInput700.css';

class TickerInput extends React.Component{  
    constructor(props) {
        super(props);
        this.state = {
          value: 0,
        };
      }   
    
    
    render(){
        return(
            <TickerContext.Consumer>{context=>{
                const { currentTicker, lastPrice, openPrice, highPrice, lowPrice } = context;
                return(
            <div className="mainDiv">
                <div className="labelDiv">
                    <p className="labelText">TICKER:</p>
                </div>
                <div className="inputDiv">
                    <input id="tickerInput" className="inputField" placeholder="Enter a ticker" onChange={context.setCurrentTicker}></input>
                </div>
                <div className="buttonsDiv">
                    <div className="submitButton">
                        <button className="submitButton" onClick={context.getTickerInfo}>SUBMIT</button>
                    </div>
                    <div className="clearButton">
                        <button className="clearButton">CLEAR</button>
                    </div>
                </div>
            </div>)
            }}</TickerContext.Consumer>
        );        
    }
} 

export default TickerInput;

