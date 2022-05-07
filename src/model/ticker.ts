export type Ticker = {
  symbol: string,
  priceChange: string,
  priceChangePercent: string,
  prevClosePrice: string,
  lastPrice: string,
  volume: string,
};
  
export type Response = Ticker[];
