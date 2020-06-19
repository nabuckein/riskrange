import React, {useState, useEffect} from 'react';
import { TickerContext } from './context/tickerInfo.js';
import './css/prices.css';
import './css/prices400.css';
import './css/prices700.css';

function Prices(props)  {
    //props.updateInfo();
    //props.socketAction();
    return(
        <div className="pricesTickerMainDiv"> 
            <div className="tickerTableQuotesDiv">
                <table className="tickerTableQuotes">
                    <thead>
                        <tr className="tickerStatsRowTitle">
                            <td className="tickerQuotesTitle" colSpan="2">QUOTES</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="tickerTableRow">
                            <td className="tickerRowLabels">LAST PRICE:</td>
                            <td className="tickerRowPrices" id="lastPriceTd">{props.lastPrice.toFixed(2)}</td>
                        </tr>
                        <tr className="tickerTableRow">
                            <td className="tickerRowLabels">OPEN PRICE:</td>
                            <td className="tickerRowPrices" id="openPriceTd">{props.openPrice.toFixed(2)}</td>
                        </tr>
                        <tr className="tickerTableRow">
                            <td className="tickerRowLabels">HIGH PRICE:</td>
                            <td className="tickerRowPrices" id="highPriceTd">{props.highPrice.toFixed(2)}</td>
                        </tr>
                        <tr className="tickerTableRow">
                            <td className="tickerRowLabels">LOW PRICE:</td>
                            <td className="tickerRowPrices" id="lowPriceTd">{props.lowPrice.toFixed(2)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>         
        </div>
    );
}

export default Prices;
