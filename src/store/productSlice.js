import { createSlice } from "@reduxjs/toolkit";


const initialState = [];



const product = createSlice({
  initialState: initialState,
  name: "products",
  reducers: {

    getProduct: (state, action) => {

      action.payload.map((item) => {
        state.push(item)
      })




    },
    addProduct: (state, action) => {

      state.push(action.payload)
    }


  }




})


export const { getProduct, addProduct } = product.actions;
export default product.reducer;