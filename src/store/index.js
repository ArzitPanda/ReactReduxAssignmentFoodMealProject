import {configureStore} from '@reduxjs/toolkit';
import UserCartReducer from './cartSlice';


const store = configureStore({
  reducer:{
     cart: UserCartReducer,
    
  }
})

export default store;