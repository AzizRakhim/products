import { createSlice } from "@reduxjs/toolkit";

const ProductsSlice = createSlice({
  name : "products",
  initialState : [10,11],
  reducers : {
    displayData : (state, action) => {
      return action.payload.data;
    },
    search : (state, action) => {
      return action.payload.data;
    },
    filter : (state, action) => {
      return action.payload.data;
    }
  }
});

export const {displayData, search, filter} = ProductsSlice.actions;
export default ProductsSlice.reducer;
