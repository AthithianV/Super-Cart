import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nav: "Vertical",
  catalog: "ViewAll",
  card: "Premium",
};

export const viewSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // to set views for the site.
    setViews: (state, action) => {
      const { nav, catalog, card } = action.payload;
      state.nav = nav;
      state.catalog = catalog;
      state.card = card;
    },
  },
});

export const viewReducer = viewSlice.reducer;
export const viewActions = viewSlice.actions;
export const viewSelector = (state) => state.viewReducer;
