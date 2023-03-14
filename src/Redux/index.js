import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "./card/popupReducer.js";
import cartReducer from "./card/reducer.js";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    popup: popupReducer,
  },
});
