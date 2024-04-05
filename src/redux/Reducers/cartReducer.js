import { createSlice } from "@reduxjs/toolkit";

// Initial state of cart state
const initialState = {
  cart: [],
  showCart: false,
};

// Slice for cart
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Reducer to add item to cart, accept prodcut as paylaod
    addTocart: (state, action) => {
      const product = action.payload;
      const findProduct = state.cart.find((p) => p.id === product.id);
      if (!findProduct) {
        state.cart.push(action.payload);
        alert("Item added to cart");
      } else {
        alert("Item already exists in cart");
      }
    },

    // Reducer to delete item from cart, accept index in cart array as paylaod
    deleteFromCart: (state, action) => {
      state.cart.splice(action.payload, 1);
      alert("Item Deleted from Cart");
    },

    // Set showCart to display cart.
    displayCart: (state, action) => {
      state.showCart = true;
    },

    // reset showCart to hide cart
    hideCart: (state, action) => {
      state.showCart = false;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
export const cartSelector = (state) => state.cartReducer;
