import { createSlice } from "@reduxjs/toolkit";


const themeSlice = createSlice({
  
     name: "theme",
     initialState:{
        darkmode: false,
     },

     reducers:{
       toggletheme:(state)=>{
        state.darkmode= !state.darkmode;
       },

     },

});

export const {toggletheme} = themeSlice.actions;
export default themeSlice.reducer;