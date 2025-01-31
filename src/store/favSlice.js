import { createSlice } from "@reduxjs/toolkit";

const FavSlice = createSlice({
    name:"favitem",
    initialState:[],
    reducers:{
        addfavitem(state, action) {
            state.push(action.payload);
          },
          removeFav(state,action){
            return state.filter(item => item.id !== action.payload);
          },
       
        },
      });
      
      export const { addfavitem,removeFav } = FavSlice.actions;
      export default FavSlice.reducer;