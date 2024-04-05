import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./productReducer";
import { viewReducer } from "./viewReducer";

const store = configureStore({ reducer: { productReducer, viewReducer } });
export default store;
