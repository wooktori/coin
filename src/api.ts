const BASE_URL = "https://api.coinpaprika.com/v1";

export const fetchCoins = async () => {
  const res = await fetch(`${BASE_URL}/coins`);
  return await res.json();
};

export const fetchCoinInfo = async (coinId: string) => {
  const res = await fetch(`${BASE_URL}/coins/${coinId}`);
  return await res.json();
};

export const fetchCoinTickers = async (coinId: string) => {
  const res = await fetch(`${BASE_URL}/tickers/${coinId}`);
  return await res.json();
};

export function fetchCoinHistory(coinId: string) {
  return fetch(
    `https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`
  ).then((response) => response.json());
}
