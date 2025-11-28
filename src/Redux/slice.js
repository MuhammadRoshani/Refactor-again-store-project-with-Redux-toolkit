import { createSlice } from "@reduxjs/toolkit";

// the slice method help us collect actionType , actionCreators and reducer all together and we can manage all things in one file not for every thing make another files.

// initial value of state :
const initialState = { addedToCart: 0, addedProducts: [] };

const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // actionCreators :
    // note : in redux toolkit give us some good feature that , is not needed anymore our state change by immutable or not in vanilla redux we must use deep copy to change our state but in redux tool kit it is not necessary to use deep copy or shallow one and se can use main state and also we not need return in our actions redux tool kit handle that one and last things in tool kit We don't have anymore data instead of we use "payload".

    addToCart: (state, action) => {
      const { id, price } = action.payload;
      // we check the addedProduct was inside of that have any product or not if have not add new one other wise if product exist on that add count plus one and update totalPrice section.
      // if exist : true
      if (state.addedProducts.some((product) => product.id === id)) {
        state.map((product) => {
          if (product.id === id) {
            product.count += 1;
            product.totalPrice = product.count * product.price;
          }
        });
      } else {
        // exist : false
        // mange products that show in the cart page section.
        state.addedProducts.push({
          ...action.payload,
          count: 1,
          totalPrice: price,
        });
        // manage number of cart change that show in navbar.
        state.addedToCart += 1;
      }
    },
    increaseInCart: (state, action) => {
      state.addedProducts.map((product) => {
        if (product.id === action.payload) {
          product.count += 1;
          product.totalPrice = product.count * product.price;
        }
      });
    },
    decreaseInCart: (state, action) => {
      state.addedProducts.map((product) => {
        if (product.id === action.payload) {
          product.count -= 1;
          product.totalPrice = product.count * product.price;
        }
      });
    },
    removeFromCart: (state, action) => {
      const updateAddedProducts = state.addedProducts.filter(
        (product) => product.id !== action.payload
      );
      state.addedProducts = updateAddedProducts;
      state.addedToCart -= 1;
    },
  },
});

export const { addToCart, increaseInCart, decreaseInCart, removeFromCart } =
  slice.actions;

export default slice.reducer;
