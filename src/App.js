import React from 'react';
import TickerInput from './TickerInput.js';
import TickerContextProvider from './context/tickerInfo.js';
import Prices from './Prices.js';
import Risks from './Risks.js';
import CardsButtons from './CardsButtons.js';
import CardsContainer from './CardsContainer.js';
import './css/index.css';
import './css/index400.css';
import './css/index700.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }
  getNewTicker=()=>{
    
  }
  render(){
  
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div className="mainTitleDiv">
          <p className="mainTitle">Risk Ranges</p>               
        </div>
        <TickerContextProvider>
        <div className="tickerDiv">
          <TickerInput getNewTicker={this.getNewTicker}></TickerInput>
        </div>
        <div className="cardsDiv">
          
          <CardsContainer></CardsContainer>
          
          
        </div>
        </TickerContextProvider>
        
        
      </div>
    );
  }
}

export default App;
