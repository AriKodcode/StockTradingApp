import { stockMarket } from '../stocks/stocks.js';
export default function searchStock(identifier) {
  for (let i = 0; i < stockMarket['stocks'].length; i++) {
    if (stockMarket['stocks'][i]['name'] === identifier) {
      return stockMarket['stocks'][i];
    }
  }
  for (let i = 0; i < stockMarket['stocks'].length; i++) {
    if (stockMarket['stocks'][i]['id'] === identifier) {
      return stockMarket['stocks'][i];
    }
  }
  console.log('stock not found');
}
