import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Response as TickerResponse, Ticker } from '../model/ticker'
import { Response as AssetResponse, Asset } from '../model/asset'

const BASE_URL = 'https://api.binance.com/'


export const apiTicker = createApi({
  baseQuery: fetchBaseQuery({ 
    baseUrl: BASE_URL 
  }),
  tagTypes: ['Ticker24'],
  endpoints: (build) => ({
    getTicker: build.query<TickerResponse, string>({
      query: (params) => {
        return `api/v3/ticker/24hr?${params}`
      },
      transformResponse: (result: TickerResponse): TickerResponse  => {   
        return result.map((item: Ticker) => {
          return { 
            symbol: item.symbol,
            priceChange: item.priceChange,
            priceChangePercent: item.priceChangePercent,
            prevClosePrice: item.prevClosePrice,
            lastPrice: item.lastPrice,
            volume: item.volume,
          }
        })
      },      
    }), 
  })
})


const apiAsset = apiTicker.injectEndpoints({
  overrideExisting: false,
  endpoints: (build) => ({
    getAsset: build.query<AssetResponse, string>({
      query: (params) => {
        return `https://www.binance.com/bapi/asset/v2/public/asset/asset/get-all-asset?${params}`
      },
      transformResponse: (response: AssetResponse): AssetResponse  => { 
        const asset: Asset[] = response?.data.map((item: Asset) => {
          return { 
            id: item.id,
            assetCode: item.assetCode,
            assetName: item.assetName,
            logoUrl: item.logoUrl,
            fullLogoUrl: item.fullLogoUrl,
            tags: item.tags
          }
        })
        return {
          code: response.code,
          message: response.message,
          messageDetail: response.messageDetail,
          data: asset
        }
      },      
    })
  })
})


export const { useGetTickerQuery } = apiTicker
export const { useGetAssetQuery } = apiAsset