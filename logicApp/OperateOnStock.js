import { stockMarket } from '../data/stocks.js';
import input from 'analiza-sync';

export default function OperateOnStock(operation, identifier) {
  let found = false;
  if (operation === 'buy' || operation === 'sell') {
    for (let i = 0; i < stockMarket['stocks'].length; i++) {
      if (
        stockMarket['stocks'][i]['name'] === identifier ||
        stockMarket['stocks'][i]['id'] === identifier
      ) {
        found = true;
        let chice;
        while (true) {
          chice = input(`How many units do you want to ${operation}?`);
          if (typeof Number(chice) === 'number') {
            chice = Number(chice);
            break;
          } else {
            console.log('Enter numbers only!');
          }
        }
        if (operation === 'buy') {
          if (stockMarket['stocks'][i]['availableStocks'] >= chice) {
            stockMarket['stocks'][i]['availableStocks'] -= chice;
            stockMarket['stocks'][i]['previousPrices'].push(
              stockMarket['stocks'][i]['currentPrice']
            );
            stockMarket['stocks'][i]['currentPrice'] *= 1.05;
            for (let j = 0; j < stockMarket['stocks'].length; j++) {
              if (
                stockMarket['stocks'][j]['category'] ===
                  stockMarket['stocks'][i]['category'] &&
                stockMarket['stocks'][j]['name'] !==
                  stockMarket['stocks'][i]['name']
              ) {
                stockMarket['stocks'][j]['previousPrices'].push(
                  stockMarket['stocks'][j]['currentPrice']
                );
                stockMarket['stocks'][j]['currentPrice'] *= 1.01;
              }
            }
            const time = new Date().toLocaleString().replace(',', '');
            stockMarket['lastUpdated'] = time;
            console.log('The purchase was successful.');
          }
        } else {
          console.log('\nNot enough stock available!');
        }
        if (operation === 'sell') {
          stockMarket['stocks'][i]['availableStocks'] += chice;
          stockMarket['stocks'][i]['previousPrices'].push(
            stockMarket['stocks'][i]['currentPrice']
          );
          stockMarket['stocks'][i]['currentPrice'] *= 0.95;
          for (let j = 0; j < stockMarket['stocks'].length; j++) {
            if (
              stockMarket['stocks'][j]['category'] ===
                stockMarket['stocks'][i]['category'] &&
              stockMarket['stocks'][j]['name'] !==
                stockMarket['stocks'][i]['name']
            ) {
              stockMarket['stocks'][j]['previousPrices'].push(
                stockMarket['stocks'][j]['currentPrice']
              );
              stockMarket['stocks'][j]['currentPrice'] *= 0.99;
            }
          }
          const time = new Date().toLocaleString().replace(',', '');
          stockMarket['lastUpdated'] = time;
          console.log('The purchase was successful.');
        }
      }
    }
  }
  if (!found) {
    console.log('stock not found');
  }
}
