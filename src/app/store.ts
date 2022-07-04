import { configureStore, ThunkAction, Action, applyMiddleware } from '@reduxjs/toolkit'
import logger from 'redux-logger';

import counterReducer from '../features/counter/counterSlice'
import productsReducer from './slice/productsSlice'
import cartReducer from './slice/cartSlice'

export function makeStore() {
  return configureStore({
    reducer: { counter: counterReducer,
      product: productsReducer,
      cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export default store
