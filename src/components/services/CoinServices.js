import axios from 'axios';
export const getAPIStatus = async () => {
    let response = await axios.get('https://api.coingecko.com/api/v3/ping')
    if(response.ok){
        return true
    } else {
        return false
    }
}
export const getCoinList = async () => {
    let response = await axios.get('https://api.coingecko.com/api/v3/coins/list')
    return response.data
}
export const getCoinMarkets = async () => {
    let response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d')
    return response.data
}
export const getCoinTickers = async (id) => {
    let response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/tickers`)
    return response.tickers
}
export const getTrendingCoins = async () => {
    let response = await axios.get('https://api.coingecko.com/api/v3/search/trending')
    return response.data
}
export const getHistoricalMarketData = async (id) => {
    let response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart/range?vs_currency=usd&from=1609421587&to=1640957587`)
    return response.data
}