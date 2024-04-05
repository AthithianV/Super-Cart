import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  items_per_page: 4,
  page: 0,
};

export const getProducts = createAsyncThunk("product/get", async (items) => {
  console.log(items);
  const products = await fetch(
    "https://fakestoreapi.com/products?limit=" + `${items}`
  );
  return products.json();
});

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setItemsPerPage: (state, action) => {
      state.items_per_page = action.payload;
    },
    incrementPage: (state, action) => {
      if (state.items_per_page * (state.page + 1) < 20) {
        state.page = state.page + 1;
      }
    },
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
