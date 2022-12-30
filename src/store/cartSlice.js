import { createSlice } from "@reduxjs/toolkit"
const initialState = {
  cart: [],
  cartTotal: 0,
  cartQuantity: 0


}


export const cart = createSlice({
  name: 'userCart',
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => {
      if (state.cart.length === 0) {
        state.cart.push(action.payload);

      }
      else {
        const found = state.cart.findIndex(element => element.id === action.payload.id)

        if (found > -1) {

          state.cart[found].quantity += action.payload.quantity;
        }
        else {
          state.cart.push(action.payload);
        }
      }
      state.cartTotal += action.payload.price * action.payload.quantity;
      state.cartQuantity += action.payload.quantity;


    },
    removeProduct: (state, action) => {
      if (state.cart.length === 0) {
        return state;
      }
      else {
        const found = state.cart.findIndex(element => element.id === action.payload.id)

        if (found > -1) {

          state.cart[found].quantity -= action.payload.quantity;
          if (state.cart[found].quantity === 0) {
            state.cart = state.cart.filter((item) => item.id !== state.cart[found].id)
          }


        }

      }
      state.cartTotal -= action.payload.price * action.payload.quantity;
      state.cartQuantity -= action.payload.quantity;

    },

    getNoOfProduct: (state, action) => {

      const val = state.cart.reduce((prev, curr) => {
        return prev.quantity + curr.quantity


      })
      return val;


    }







  }

})


export const { addProduct, removeProduct, getNoOfProduct } = cart.actions;
export default cart.reducer;