import { stockMarket } from '../data/stocks.js';
export default function filterStocksByPrice(givenPrice, above) {
  let newlist = [];
  if (above) {
    for (let i = 0; i < stockMarket['stocks'].length; i++) {
      if (stockMarket['stocks'][i]['currentPrice'] > givenPrice) {
        newlist.push(stockMarket['stocks'][i]);
      }
    }
  }
  if (!above) {
    for (let i = 0; i < stockMarket['stocks'].length; i++) {
      if (stockMarket['stocks'][i]['currentPrice'] < givenPrice) {
        newlist.push(stockMarket['stocks'][i]);
      }
    }
  }
  if (newlist.length > 0) {
    return newlist;
  } else {
    return 'stocks not found!';
  }
}
