 import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'; // cartSlice से reducer आयात करें
import favreducer from './favSlice'

const store = configureStore({
  reducer: {
    cart: cartReducer, // cartSlice.reducer को जोड़ें
    favitem : favreducer,
  },
});

export default store;
