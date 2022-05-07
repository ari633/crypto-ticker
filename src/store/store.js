import { configureStore } from '@reduxjs/toolkit'
import { apiTicker } from '../services/ticker'

export const store = configureStore({
  reducer: {
    [apiTicker.reducerPath]: apiTicker.reducer,
  },
  // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    apiTicker.middleware
  )
})

