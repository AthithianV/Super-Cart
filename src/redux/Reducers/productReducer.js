import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  items_per_page: 4,
  page: 0,
};

export const getProducts = createAsyncThunk("product/get", async (items) => {
  const products = await fetch(
    // Currently fakestroeapi does not support offset because of which we
    // end up making calls to get all product each time page is changed,
    // but this can be change if they support offset, we can make calls that get only required products.
    `${"https://fakestoreapi.com/products?limit="}${items}`
  );
  return products.json();
});

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // to setItemsPerpage this set how many card are at screen.
    setItemsPerPage: (state, action) => {
      state.items_per_page = action.payload;
    },
    // To increment page, helpful in loading more products
    incrementPage: (state, action) => {
      if (state.items_per_page * (state.page + 1) < 20) {
        state.page = state.page + 1;
      }
    },
    // Decremtn page to more to previous page
    decrementPage: (state, action) => {
      if (state.page > 0) {
        state.page = state.page - 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loader = false;
      })
      .addCase(getProducts.pending, (state, action) => {
        state.loader = true;
      });
  },
});

export const productReducer = productSlice.reducer;
export const productActions = productSlice.actions;
export const productSelector = (state) => state.productReducer;
