const BASE_URL = "https://api.coinpaprika.com/v1/";

export const getCoinAll = async () => {
    return await (await fetch(BASE_URL + `coins`)).json();
};

export const getCoin = async (coinId: string) => {
    return await (await fetch(BASE_URL + `coins/${coinId}`)).json();
};

export const getPrice = async (coinId: string) => {
    return await (await fetch(BASE_URL + `tickers/${coinId}`)).json();
};

export const getPriceHistory = async (coinId: string) => {
    return await (await fetch(`https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`)).json();
};
