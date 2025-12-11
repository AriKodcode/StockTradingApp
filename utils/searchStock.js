import { stocks } from '../stocks/stocks.js';
export default function searchStock(identifier) {
  const list = stocks;
  for (let i = 0; i < list.length; i++) {
    if (list[i]['name'] === identifier) {
      return list[i];
    }
  }
  for (let i = 0; i < list.length; i++) {
    if (list[i]['id'] === identifier) {
      return list[i];
    }
  }
  console.log('stock not found');
}
