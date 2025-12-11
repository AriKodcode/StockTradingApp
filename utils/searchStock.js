import { stockMarket } from '../data/stocks.js';
export default function searchStock(identifier) {
  for (let i = 0; i < stockMarket['stocks'].length; i++) {
    if (
      stockMarket['stocks'][i]['name'] === identifier ||
      stockMarket['stocks'][i]['id'] === identifier
    ) {
      return stockMarket['stocks'][i];
    }
  }
  return 'stock not found';
}
