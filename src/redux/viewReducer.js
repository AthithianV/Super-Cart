import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navView: "Horizontal",
  catalogView: "Carousal",
  cardView: "Standard",
};

export const viewSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setViews: (state, action) => {
      const { nav, catalog, card } = action.payload;
      state.navView = nav;
      state.catalogView = catalog;
      state.cardView = card;
    },
  },
});

export const viewReducer = viewSlice.reducer;
export const viewActions = viewSlice.actions;
export const viewSelector = (state) => state.viewReducer;
