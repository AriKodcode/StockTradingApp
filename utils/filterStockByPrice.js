import { stockMarket } from '../stocks/stocks.js';
export default function filterStocksByPrice(givenPrice, above) {
  let newlist = [];
  if (above) {
    for (let i = 0; i < stockMarket['stocks'].length; i++) {
      if (stockMarket['stocks'][i]['currentPrice'] < givenPrice) {
        newlist.push(list['stocks'][i]);
      }
    }
  }
  if (!above) {
    for (let i = 0; i < stockMarket['stocks'].length; i++) {
      if (stockMarket['stocks'][i]['currentPrice'] > givenPrice) {
        newlist.push(list['stocks'][i]);
      }
    }
  }
  if (newlist.length > 0) {
    return newlist;
  } else {
    console.log('stocks not found!');
    return newlist;
  }
}
