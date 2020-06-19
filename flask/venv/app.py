from flask import Flask, render_template, request
from flask_cors import CORS
import requests
import time
app = Flask(__name__)
CORS(app)

if __name__ == '__main__':
    app.run(debug=True)

@app.route('/<ticker>')
def ticker(ticker):
    quote = requests.get('https://finnhub.io/api/v1/quote?symbol=' + ticker + '&token=bqpbv77rh5rced4gn3n0')        
    quoteResponse = quote.json()
    lastPrice = round(quoteResponse['c'],2)
    openPrice = round(quoteResponse['o'],2)
    highPrice = round(quoteResponse['h'],2)
    lowPrice = round(quoteResponse['l'],2)
    posTenPercent = round(lastPrice*1.1,2)
    negTenPercent = round(lastPrice*0.9,2)
    posFivePercent = round(lastPrice*1.05,2)
    negFivePercent = round(lastPrice*0.95,2)
    return {
        'lastPrice':lastPrice,
        'openPrice':openPrice,
        'highPrice':highPrice,
        'lowPrice':lowPrice,
        'posTenPercent':posTenPercent, 
        'negTenPercent':negTenPercent, 
        'negFivePercent':negFivePercent, 
        'posFivePercent':posFivePercent, 
        }
    
        
    