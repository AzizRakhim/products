import { createSlice } from "@reduxjs/toolkit";

const CategorySlice = createSlice({
  name : "category",
  initialState : [10,11],
  reducers : {
    displayCategory : (state, action) => {
      return action.payload.data;
    }
  }
});

export const {displayCategory} = CategorySlice.actions;
export default CategorySlice.reducer;