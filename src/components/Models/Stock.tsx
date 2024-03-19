interface Stock {
    code: string;
    stockExchange: string;
    topStocks: { code: string; stockName: string; price: number }[];
}

export default Stock;