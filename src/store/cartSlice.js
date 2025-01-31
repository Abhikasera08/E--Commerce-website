import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    removeCart(state,action){
      return state.filter(item => item.id !== action.payload);
    },
 
  },
});

export const { add,removeCart } = cartSlice.actions;
export default cartSlice.reducer;
