import { stockMarket } from './data/stocks.js';
import searchStock from './utils/searchStock.js';
import filterStocksByPrice from './utils/filterStockByPrice.js';
import OperateOnStock from './logicApp/OperateOnStock.js';
import analyzeMarketTrends from './utils/analyzeMarketTrends.js';
import input from 'analiza-sync';

function app() {
  let appliction = true;
  while (appliction) {
    console.log(`STOCKS MARKET APP
    
    MENU:
    press 1-4
    1 for  Search for a stock by name or id
    2 for Show all stocks above or below a given price
    3 for Buy or sell a stock
    4 for Exit
`);
    let choice;
    while (true) {
      choice = input('choich: ');
      if (
        choice === '1' ||
        choice === '2' ||
        choice === '3' ||
        choice === '4'
      ) {
        break;
      } else {
        console.log('Press only 1 or 2 or 3 or 4');
      }
    }
    if (choice === '1') {
      const idOrName = input('Enter id or name stock');
      const stock = searchStock(idOrName);
      console.log(stock);
    } else if (choice === '2') {
      let price;
      while (true) {
        price = Number(input('Enter price'));
        if (!isNaN(price)) {
          break;
        } else {
          console.log('Enter numbers only');
        }
      }
      let above;
      while (true) {
        above = Number(
          input('press 1 for above the price or 2 for below the price')
        );
        if (!isNaN(above) && (above === 1 || above === 2)) {
          break;
        } else {
          console.log('press only 1 or 2');
        }
      }
      const stock = filterStocksByPrice(price, above);
      console.log(stock);
    } else if (choice === '3') {
      let choice;
      while (true) {
        choice = input('press 1 for buy or press 2 for sell');
        if (choice === '1') {
          choice = 'buy';
          break;
        } else if (choice === '2') {
          choice = 'sell';
          break;
        } else {
          console.log('press only 1 or 2 ');
        }
      }
      let amount;
      while (true) {
        amount = Number(input('Enter ampount'));
        if (isNaN(amount)) {
          break;
        } else {
          console.log('Enter numbers only');
        }
      }
    }
  }
}
