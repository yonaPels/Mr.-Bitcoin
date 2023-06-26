import axios from 'axios'

import { utilService } from '../services/util.service'
// import storageService from './async-storage.service.js'

const CACHE_TIME = 1000 * 10 * 60 * 24 //24 hours
const BITCOIN_DATA = 'BITCOIN_DATA'

let gBitcoinData = utilService.loadFromStorage(BITCOIN_DATA) || {}

const rateUrl = 'https://blockchain.info/tobtc?currency=USD&value=1'
const marketPriceHistoryUrl = 'https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true'
const avgBlockSizeUrl = 'https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true'

export const bitcoinService = {
    getRate,
    getMarketPriceHistory,
    getAvgBlockSize,
}

async function getRate(){
    const exchangeRate = gBitcoinData.exchangeRate
    const lastRequest = gBitcoinData?.exchangeRate?.reqTimeStamp
    if (exchangeRate && Date.now() - lastRequest < CACHE_TIME) {
        return exchangeRate.data
    } else {
        try {
            const res = await axios.get(rateUrl)  
            gBitcoinData.exchangeRate = {
                data: res.data,
                reqTimeStamp: Date.now(),
            }
            utilService.saveToStorage(BITCOIN_DATA, gBitcoinData)
            return res.data
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }    
    }
}

async function getMarketPriceHistory(){
    const priceHistory = gBitcoinData.priceHistory
    const lastRequest = gBitcoinData?.priceHistory?.reqTimeStamp
    if (priceHistory && Date.now() - lastRequest < CACHE_TIME) {    
        return priceHistory.data
    } else {
        try {
            const res = await axios.get(marketPriceHistoryUrl)
            gBitcoinData.priceHistory = {
                data: res.data,
                reqTimeStamp: Date.now(),
            }
            utilService.saveToStorage(BITCOIN_DATA, gBitcoinData)
            return res.data
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
}

async function getAvgBlockSize() {
    const avgBlockSize = gBitcoinData.avgBlockSize
    const lastRequest = gBitcoinData?.avgBlockSize?.reqTimeStamp
  
    if (avgBlockSize && Date.now() - lastRequest < CACHE_TIME) {
      return avgBlockSize.data
    } else {
        try {
            const res = await axios.get(avgBlockSizeUrl)
            gBitcoinData.avgBlockSize = {
                data: res.data,
                reqTimeStamp: Date.now(),
            }
            utilService.saveToStorage(BITCOIN_DATA, gBitcoinData)
            return res.data       
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
}
