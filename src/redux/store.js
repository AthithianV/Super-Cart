import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./Reducers/productReducer";
import { viewReducer } from "./Reducers/viewReducer";
import { cartReducer } from "./Reducers/cartReducer";

const store = configureStore({
  reducer: { productReducer, viewReducer, cartReducer },
});
export default store;
