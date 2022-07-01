import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./CategorySlice";
import ProductsSlice from "./ProductsSlice";

export default configureStore({
  reducer : {
    products : ProductsSlice,
    category : CategorySlice
  }
})