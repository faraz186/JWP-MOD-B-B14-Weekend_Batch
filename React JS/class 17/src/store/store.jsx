import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import productReducer from "./slices/ProductSlice";
import addToCartReducer from "./slices/addToCartSlice";

export const AppStore = configureStore({
  reducer: {
    counterReducer,
    productReducer,
    addToCartReducer,
  },
});
