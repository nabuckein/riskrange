import React, {useState, useEffect} from 'react';
import { TickerContext } from './context/tickerInfo.js';
import Prices from './Prices.js';
import './css/risks.css';
import './css/risks400.css';
import './css/risks700.css';


function Risks(props)  {
        return(
            <TickerContext.Consumer>{context=>{
            var plusTen = props.lastPrice * 1.1;
            var plusFive = props.lastPrice * 1.05;
            var minusFive = props.lastPrice * .95;
            var minusTen = props.lastPrice * .90;
            
            return(
            <div className="risksMainDiv">
                <div className="risksTableQuotesDiv">
                    <table className="risksTableQuotes">
                        <thead>
                            <tr className="risksStatsRowTitle">
                                <td className="risksQuotesTitle" colSpan="2">RISK RANGES</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="risksTableRow">
                                <td className="risksRowLabels">+10%</td>
                                <td className="risksRowPrices" id="plusTen">{plusTen.toFixed(2)}</td>
                            </tr>
                            <tr className="risksTableRow">
                                <td className="risksRowLabels">+5%</td>
                                <td className="risksRowPrices" id="plusFive">{plusFive.toFixed(2)}</td>
                            </tr>
                            <tr className="risksTableRow">
                                <td className="risksRowLabels">-5%</td>
                                <td className="risksRowPrices" id="minusFive">{minusFive.toFixed(2)}</td>
                            </tr>
                            <tr className="risksTableRow">
                                <td className="risksRowLabels">-10%</td>
                                <td className="risksRowPrices" id="minusTen">{minusTen.toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            )}
            }
            </TickerContext.Consumer>
        );
    
}

export default Risks;
