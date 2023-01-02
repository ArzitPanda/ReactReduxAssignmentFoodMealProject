import { configureStore } from '@reduxjs/toolkit';
import UserCartReducer from './cartSlice';
import ProductReducer from "./productSlice"

const store = configureStore({
  reducer: {
    cart: UserCartReducer,
    products: ProductReducer

  }
})

export default store;